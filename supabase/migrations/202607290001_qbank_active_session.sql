-- The Medicine: resume the in-progress Q-bank set on another signed-in device.
alter table public.user_preferences
  add column if not exists qbank_active_session jsonb;