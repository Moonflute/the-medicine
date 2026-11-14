-- Personal review cards stay with the signed-in account.
create table public.review_cards (
  user_id uuid not null references auth.users(id) on delete cascade,
  id uuid not null,
  front text not null check (char_length(front) between 1 and 2000 and front ~ '[^[:space:]]'),
  back text not null check (char_length(back) between 1 and 8000 and back ~ '[^[:space:]]'),
  home_hidden boolean not null default false,
  content_revision integer not null default 0 check (content_revision >= 0),
  review_count integer not null default 0 check (review_count >= 0),
  due_at timestamptz,
  created_at timestamptz not null default now(),
  primary key (user_id, id),
  constraint review_cards_schedule_check check ((review_count = 0) = (due_at is null))
);

alter table public.review_cards enable row level security;
revoke all on table public.review_cards from public, anon, authenticated;
grant select, delete on table public.review_cards to authenticated;
grant insert (user_id, id, front, back) on table public.review_cards to authenticated;
grant update (front, back, home_hidden, content_revision, review_count, due_at)
  on table public.review_cards to authenticated;

create policy "review_cards: own rows" on public.review_cards
  for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

alter table public.user_preferences
  add column home_review_display text not null default 'heart'
    check (home_review_display in ('heart', 'cards'));
