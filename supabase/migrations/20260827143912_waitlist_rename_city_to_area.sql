-- The landing page's "Where" select is country-level (Kuwait / Egypt), not a
-- city, and Bugsha is launching across both markets. `area` is the honest name
-- and still fits city-level values when launch sequencing gets finer.

alter table public.waitlist rename column city to area;
alter index waitlist_city_idx rename to waitlist_area_idx;

comment on column public.waitlist.area is 'Optional "Where" value from the form (Kuwait / Egypt), used for launch sequencing.';
