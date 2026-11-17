-- Related topics are part of the owner-scoped card and share its content revision.
alter table public.review_cards
  add column relations jsonb not null default '{"specialties":[],"documents":[]}'::jsonb,
  add constraint review_cards_relations_check check (
    case
      when jsonb_typeof(relations) = 'object'
        and jsonb_typeof(relations -> 'specialties') = 'array'
        and jsonb_typeof(relations -> 'documents') = 'array'
      then jsonb_array_length(relations -> 'specialties') <= 12
        and jsonb_array_length(relations -> 'documents') <= 12
        and octet_length(relations::text) <= 65536
      else false
    end
  );

grant insert (relations), update (relations) on table public.review_cards to authenticated;
