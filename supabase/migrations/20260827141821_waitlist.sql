-- Bugsha launch waitlist
-- Stores pre-launch signups captured by the landing page waitlist form.
--
-- Access model: RLS is enabled with NO policies, so anon/authenticated roles
-- cannot read or write this table at all. Every write goes through the
-- `waitlist-signup` edge function using the service role key, which keeps the
-- subscriber list (personal data) off the public PostgREST surface.

create extension if not exists citext;
create extension if not exists pgcrypto;

create table if not exists public.waitlist (
  id                    uuid        primary key default gen_random_uuid(),
  email                 citext      not null unique,
  city                  text,
  locale                text,
  source                text,
  referrer              text,
  user_agent            text,
  status                text        not null default 'subscribed',
  unsubscribe_token     uuid        not null default gen_random_uuid(),
  welcome_email_sent_at timestamptz,
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now(),

  constraint waitlist_status_check
    check (status in ('subscribed', 'unsubscribed', 'bounced')),
  constraint waitlist_email_shape_check
    check (email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'),
  constraint waitlist_unsubscribe_token_key
    unique (unsubscribe_token)
);

comment on table  public.waitlist is 'Pre-launch waitlist signups from the Bugsha landing page.';
comment on column public.waitlist.source   is 'Where the signup came from, e.g. hero-form, footer-form.';
comment on column public.waitlist.city     is 'Optional city/area picked in the form, used for launch sequencing.';
comment on column public.waitlist.status   is 'subscribed | unsubscribed | bounced';

create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);
create index if not exists waitlist_status_idx     on public.waitlist (status);
create index if not exists waitlist_city_idx       on public.waitlist (city) where city is not null;

-- keep updated_at honest
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists waitlist_set_updated_at on public.waitlist;
create trigger waitlist_set_updated_at
  before update on public.waitlist
  for each row execute function public.set_updated_at();

alter table public.waitlist enable row level security;
-- Deliberately no policies: deny-by-default for anon + authenticated.
-- The service role bypasses RLS and is only used server-side in edge functions.

revoke all on public.waitlist from anon, authenticated;
grant all on public.waitlist to service_role;

-- Signup position ("you're #128 in line"), counted over live subscribers only.
create or replace function public.waitlist_position(p_email citext)
returns integer
language sql
stable
security definer
set search_path = public
as $$
  select count(*)::int
  from public.waitlist w
  where w.status = 'subscribed'
    and w.created_at <= (
      select w2.created_at from public.waitlist w2 where w2.email = p_email
    );
$$;

revoke all on function public.waitlist_position(citext) from public, anon, authenticated;
grant execute on function public.waitlist_position(citext) to service_role;
