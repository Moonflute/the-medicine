import { createDeviceLoginHandler } from "./handler.ts";

// Custom authentication: Google-only management validates a live Auth session;
// redemption validates a short-lived one-time code and registers its session.
Deno.serve(createDeviceLoginHandler({
  supabaseUrl: Deno.env.get("SUPABASE_URL") ?? "",
  anonKey: Deno.env.get("SUPABASE_ANON_KEY") ?? "",
  serviceKey: Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  telegramBotToken: Deno.env.get("TELEGRAM_BOT_TOKEN") ?? "",
  telegramChatId: Deno.env.get("TELEGRAM_CHAT_ID") ?? "",
}));
