-- Rollback for 20260914094502_partner_invite_codes.sql: restores the code-less
-- app.submit_application exactly as it was on bugsha-dev before the port
-- (captured 2026-09-14 with pg_get_functiondef), drops the gate and the ops
-- actions, and returns partner_request to the website-only shape.

drop function if exists app.submit_application(text, public.market, text, text, text[], text, text, text, uuid, integer, text, bigint);
drop function if exists app.check_partner_code(text);
drop function if exists app.ops_issue_partner_code(uuid, integer, text);
drop function if exists app.ops_revoke_partner_code(text, text);
drop function if exists app.ops_decline_partner_request(uuid, text, text);
drop function if exists app.ops_partner_requests(text, public.market);
drop function if exists app.ops_partner_codes(public.market);

alter table public.partner_request drop constraint if exists partner_request_invite_code_fkey;
alter table public.partner_request drop column if exists owner_ops_user;
alter table public.partner_request alter column market type text using market::text;
alter table public.partner_request add constraint partner_request_market_check check (market in ('KW', 'EG'));
drop table if exists public.partner_invite_code;
delete from public.reason_code where domain = 'partner_request';

CREATE OR REPLACE FUNCTION app.submit_application(p_market market, p_legal_name text, p_trading_name text, p_categories text[], p_contact_name text, p_contact_phone text, p_contact_email text, p_city_id uuid, p_branch_count integer DEFAULT 1, p_referral_source text DEFAULT NULL::text, p_est_daily_surplus_minor bigint DEFAULT NULL::bigint)
 RETURNS partner
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare v_row public.partner; v_uid uuid := auth.uid();
begin
  if v_uid is null then raise exception 'sign in to apply' using errcode = 'BG100'; end if;
  if not app.valid_phone(p_market, p_contact_phone) then
    raise exception 'contact phone does not belong to market %', p_market using errcode = 'BG102';
  end if;
  if 'alcohol' = any(coalesce(p_categories, '{}')) then
    raise exception 'alcohol is never listed' using errcode = 'BG105';
  end if;
  insert into public.partner (market, legal_name, trading_name, categories, onboarding_status,
    branch_count, contact_name, contact_role, contact_phone, contact_email, city_id,
    referral_source, est_daily_surplus_minor)
  values (p_market, p_legal_name, p_trading_name, coalesce(p_categories,'{}'), 'applied',
    p_branch_count, p_contact_name, 'owner', p_contact_phone, p_contact_email, p_city_id,
    p_referral_source, p_est_daily_surplus_minor)
  returning * into v_row;

  insert into public.partner_user (user_id, full_name, phone)
  values (v_uid, p_contact_name, p_contact_phone) on conflict (user_id) do nothing;
  insert into public.staff_assignment (user_id, partner_id, store_id, role, partner_wide, claimed_at)
  values (v_uid, v_row.partner_id, null, 'owner', true, now());
  insert into public.partner_status_history (partner_id, from_status, to_status, actor)
  values (v_row.partner_id, 'lead', 'applied', v_uid);
  return v_row;
end $function$;
