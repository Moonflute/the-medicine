-- The Medicine: account-scoped learning state
-- Apply with the Supabase SQL Editor or Supabase CLI after creating the project.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.review_items (
  user_id uuid not null references auth.users(id) on delete cascade,
  domain text not null check (domain in ('disease', 'cc', 'drug', 'lab', 'skill')),
  content_id text not null,
  is_saved boolean not null default true,
  saved_at timestamptz not null default now(),
  last_reviewed_at timestamptz,
  confidence text check (confidence in ('again', 'hard', 'good')),
  review_count integer not null default 0 check (review_count >= 0),
  next_review_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, domain, content_id)
);

create table if not exists public.content_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  domain text not null check (domain in ('disease', 'cc', 'drug', 'lab', 'skill')),
  content_id text not null,
  first_viewed_at timestamptz not null,
  last_viewed_at timestamptz not null,
  view_count integer not null default 0 check (view_count >= 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, domain, content_id)
);

create table if not exists public.qbank_question_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id text not null,
  attempts integer not null default 0 check (attempts >= 0),
  correct_attempts integer not null default 0 check (correct_attempts >= 0 and correct_attempts <= attempts),
  consecutive_correct integer not null default 0 check (consecutive_correct >= 0),
  last_answer text,
  last_correct boolean,
  last_attempted_at timestamptz,
  mastered boolean not null default false,
  wrong_marked boolean not null default false,
  bookmarked boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, question_id)
);

create table if not exists public.qbank_sessions (
  user_id uuid not null references auth.users(id) on delete cascade,
  session_id text not null,
  started_at timestamptz not null,
  completed_at timestamptz not null,
  question_ids jsonb not null default '[]'::jsonb,
  correct integer not null default 0 check (correct >= 0),
  total integer not null default 0 check (total >= 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, session_id)
);

create table if not exists public.user_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  random_page_domains jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

-- An append-only device event log allows retry-safe writes and later rebuilding of aggregates.
create table if not exists public.learning_events (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  device_id text not null,
  event_type text not null check (event_type in ('content_view', 'review_save', 'review_unsave', 'review_rate', 'qbank_attempt', 'qbank_bookmark', 'qbank_wrong_remove', 'qbank_session', 'preference_update', 'local_migration')),
  domain text,
  content_id text,
  occurred_at timestamptz not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists review_items_user_updated_idx on public.review_items (user_id, updated_at desc);
create index if not exists content_progress_user_recent_idx on public.content_progress (user_id, last_viewed_at desc);
create index if not exists qbank_question_progress_user_updated_idx on public.qbank_question_progress (user_id, updated_at desc);
create index if not exists qbank_sessions_user_completed_idx on public.qbank_sessions (user_id, completed_at desc);
create index if not exists learning_events_user_occurred_idx on public.learning_events (user_id, occurred_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at before update on public.profiles for each row execute procedure public.set_updated_at();
drop trigger if exists review_items_set_updated_at on public.review_items;
create trigger review_items_set_updated_at before update on public.review_items for each row execute procedure public.set_updated_at();
drop trigger if exists content_progress_set_updated_at on public.content_progress;
create trigger content_progress_set_updated_at before update on public.content_progress for each row execute procedure public.set_updated_at();
drop trigger if exists qbank_question_progress_set_updated_at on public.qbank_question_progress;
create trigger qbank_question_progress_set_updated_at before update on public.qbank_question_progress for each row execute procedure public.set_updated_at();
drop trigger if exists qbank_sessions_set_updated_at on public.qbank_sessions;
create trigger qbank_sessions_set_updated_at before update on public.qbank_sessions for each row execute procedure public.set_updated_at();
drop trigger if exists user_preferences_set_updated_at on public.user_preferences;
create trigger user_preferences_set_updated_at before update on public.user_preferences for each row execute procedure public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.review_items enable row level security;
alter table public.content_progress enable row level security;
alter table public.qbank_question_progress enable row level security;
alter table public.qbank_sessions enable row level security;
alter table public.user_preferences enable row level security;
alter table public.learning_events enable row level security;

grant select, insert, update, delete on public.profiles, public.review_items, public.content_progress, public.qbank_question_progress, public.qbank_sessions, public.user_preferences, public.learning_events to authenticated;

create policy "profiles: own row" on public.profiles for all to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "review_items: own rows" on public.review_items for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "content_progress: own rows" on public.content_progress for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "qbank_question_progress: own rows" on public.qbank_question_progress for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "qbank_sessions: own rows" on public.qbank_sessions for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "user_preferences: own row" on public.user_preferences for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "learning_events: own rows" on public.learning_events for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- Keep the profile in sync with a new Auth account without exposing auth.users to the client.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', new.email),
    new.raw_user_meta_data ->> 'avatar_url'
  ) on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

-- Realtime refreshes another device only after a committed database write.
alter publication supabase_realtime add table public.review_items, public.content_progress, public.qbank_question_progress, public.qbank_sessions, public.user_preferences;