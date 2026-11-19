import type { SupabaseClient } from "@supabase/supabase-js";

export async function notifyGoogleLogin(
  client: SupabaseClient,
  accessToken: string,
  wait: (ms: number) => Promise<void> = ms => new Promise(resolve => setTimeout(resolve, ms)),
) {
  for (const delay of [0, 1500, 4000]) {
    try {
      if (delay) await wait(delay);
      const { data, error } = await client.functions.invoke("google-login-notify", {
        headers: { Authorization: `Bearer ${accessToken}` }, body: {}, signal: AbortSignal.timeout(20_000),
      });
      if (!error && ["sent", "already_notified", "processing", "ignored"].includes(data?.status)) return;
      const status = error?.context?.status;
      if (status === 401 || status === 403) return;
    } catch { /* Notification failure must never interrupt login or navigation. */ }
  }
}
