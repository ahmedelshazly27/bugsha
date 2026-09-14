-- Partner code requests
-- A kitchen asks for a partner code on the website (or in the partner app's
-- "Request a partner code" screen). Ops reviews the request in the ops console
-- and issues a single-use invite code; that code is the only way a partner
-- account can be opened (see supabase/platform/ for the platform-side gate).
--
-- Field set mirrors app.submit_application on the platform so a request can be
-- turned into an application without re-typing anything.
--
-- Access model: same as public.waitlist — RLS on, no policies; the
-- `partner-request` edge function writes with the service role.

create extension if not exists citext;
create extension if not exists pgcrypto;

create table if not exists public.partner_request (
  id                    uuid        primary key default gen_random_uuid(),
  market                text        not null,
  legal_name            text        not null,
  trading_name          text        not null,
  categories            text[]      not null default '{}',
  contact_name          text        not null,
  contact_phone         text        not null,
  contact_email         citext      not null,
  city                  text,
  branch_count          integer     not null default 1,
  est_daily_surplus     text,
  referral_source       text,
  source                text,
  locale                text,
  referrer              text,
  user_agent            text,
  status                text        not null default 'new',
  decline_reason        text,
  invite_code           text,
  code_issued_at        timestamptz,
  code_issued_by        text,
  notes                 text,
  confirmation_sent_at  timestamptz,
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now(),

  constraint partner_request_market_check       check (market in ('KW', 'EG')),
  constraint partner_request_status_check       check (status in ('new', 'contacted', 'code_issued', 'declined')),
  constraint partner_request_branch_count_check check (branch_count between 1 and 500),
  constraint partner_request_email_shape_check  check (contact_email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'),
  constraint partner_request_no_alcohol_check   check (not ('alcohol' = any (categories)))
);

comment on table  public.partner_request is 'Kitchens asking for a Bugsha partner code. Reviewed by ops; a code is issued from the ops console.';
comment on column public.partner_request.status is 'new | contacted | code_issued | declined';
comment on column public.partner_request.invite_code is 'The BG-XXXX-XXXX code issued against this request, once issued.';

create index if not exists partner_request_created_at_idx on public.partner_request (created_at desc);
create index if not exists partner_request_status_idx     on public.partner_request (status);
create index if not exists partner_request_market_idx     on public.partner_request (market);
create index if not exists partner_request_email_idx      on public.partner_request (contact_email);

-- public.set_updated_at() is created by the waitlist migration.
drop trigger if exists partner_request_set_updated_at on public.partner_request;
create trigger partner_request_set_updated_at
  before update on public.partner_request
  for each row execute function public.set_updated_at();

alter table public.partner_request enable row level security;
-- Deliberately no policies: deny-by-default for anon + authenticated.
revoke all on public.partner_request from anon, authenticated;
grant all on public.partner_request to service_role;
