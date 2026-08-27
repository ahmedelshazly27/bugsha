-- Two signups committed in the same transaction share created_at (now() is the
-- transaction timestamp), which gave both the same position. Compare the
-- (created_at, id) tuple instead so the ordering is a strict total order.

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
    and (w.created_at, w.id) <= (
      select w2.created_at, w2.id from public.waitlist w2 where w2.email = p_email
    );
$$;
