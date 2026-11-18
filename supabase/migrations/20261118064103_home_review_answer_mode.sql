alter table public.user_preferences
  add column home_review_answer_mode text not null default 'flip'
    constraint user_preferences_home_review_answer_mode_check
    check (home_review_answer_mode in ('flip', 'expand'));
