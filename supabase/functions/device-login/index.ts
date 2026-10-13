import { createDeviceLoginHandler } from "./handler.ts";

// Custom authentication: issue/revoke validate the user's JWT with Auth;
// redeem authenticates a short-lived one-time code, with atomic rate limits.
Deno.serve(createDeviceLoginHandler({
  supabaseUrl: Deno.env.get("SUPABASE_URL") ?? "",
  anonKey: Deno.env.get("SUPABASE_ANON_KEY") ?? "",
  serviceKey: Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
}));
