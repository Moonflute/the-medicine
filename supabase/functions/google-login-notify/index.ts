import { createGoogleLoginNotificationHandler } from "./handler.ts";

// The handler verifies the bearer with Auth before reading claims or sending.
Deno.serve(createGoogleLoginNotificationHandler({
  supabaseUrl: Deno.env.get("SUPABASE_URL") ?? "",
  anonKey: Deno.env.get("SUPABASE_ANON_KEY") ?? "",
  serviceKey: Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  telegramBotToken: Deno.env.get("TELEGRAM_BOT_TOKEN") ?? "",
  telegramChatId: Deno.env.get("TELEGRAM_CHAT_ID") ?? "",
}));
