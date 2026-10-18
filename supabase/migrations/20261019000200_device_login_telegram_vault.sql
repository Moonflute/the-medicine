-- Telegram credentials are encrypted in Supabase Vault, never in the app or Git.
-- Only the device-login Edge Function's service role may read this narrow RPC.
create function public.device_login_telegram_credentials()
returns jsonb language sql stable security definer set search_path = '' as $$
  select jsonb_build_object(
    'botToken', (
      select decrypted_secret from vault.decrypted_secrets
      where name = 'medicine_device_login_telegram_bot_token' limit 1
    ),
    'chatId', (
      select decrypted_secret from vault.decrypted_secrets
      where name = 'medicine_device_login_telegram_chat_id' limit 1
    )
  );
$$;

revoke all on function public.device_login_telegram_credentials()
  from public, anon, authenticated;
grant execute on function public.device_login_telegram_credentials()
  to service_role;
