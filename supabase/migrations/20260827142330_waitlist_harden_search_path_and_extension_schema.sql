-- Address the Supabase security linter on the waitlist objects.
--
-- 1. citext was created without an explicit schema and landed in `public`,
--    where it can be shadowed. Move it to `extensions` alongside pgcrypto.
-- 2. Both functions get a pinned search_path so a caller's search_path cannot
--    redirect the names they resolve.
--
-- waitlist_position compares citext values, and the citext operators now live
-- in `extensions`, so that schema has to stay on its search_path.

alter extension citext set schema extensions;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.waitlist_position(p_email extensions.citext)
returns integer
language sql
stable
security definer
set search_path = public, extensions
as $$
  select count(*)::int
  from public.waitlist w
  where w.status = 'subscribed'
    and w.created_at <= (
      select w2.created_at from public.waitlist w2 where w2.email = p_email
    );
$$;

revoke all on function public.waitlist_position(extensions.citext) from public, anon, authenticated;
grant execute on function public.waitlist_position(extensions.citext) to service_role;
