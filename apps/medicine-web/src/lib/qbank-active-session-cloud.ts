import { activeSessionFrom, activeSessionsFrom, type QbankActiveSession } from "./qbank-active-session";
import { getSupabaseBrowserClient } from "./supabase/client";

type SupabaseClient = NonNullable<ReturnType<typeof getSupabaseBrowserClient>>;

export type CloudActiveQbankSessionState = {
  sessions: QbankActiveSession[];
  endedSessionIds: string[];
};

function isMissingActiveSessionsTable(error: { code?: string } | null): boolean {
  return error?.code === "42P01" || error?.code === "PGRST205";
}

async function loadLegacySession(client: SupabaseClient, userId: string): Promise<QbankActiveSession[]> {
  const { data, error } = await client.from("user_preferences").select("qbank_active_session").eq("user_id", userId).maybeSingle();
  if (error) throw error;
  return activeSessionsFrom(data?.qbank_active_session);
}

export async function loadCloudActiveQbankSessionState(client: SupabaseClient, userId: string): Promise<CloudActiveQbankSessionState> {
  const { data, error } = await client.from("qbank_active_sessions").select("session_id,payload,ended_at").eq("user_id", userId).order("updated_at", { ascending: false });
  if (isMissingActiveSessionsTable(error)) return { sessions: await loadLegacySession(client, userId), endedSessionIds: [] };
  if (error) throw error;
  const rows = data ?? [];
  return {
    sessions: activeSessionsFrom(rows.filter((row) => !row.ended_at).map((row) => row.payload)),
    endedSessionIds: rows.filter((row) => Boolean(row.ended_at)).map((row) => row.session_id),
  };
}

export async function saveCloudActiveQbankSession(client: SupabaseClient, userId: string, session: QbankActiveSession, latestKnownAt?: string): Promise<void> {
  const parsed = activeSessionFrom(session);
  if (!parsed) return;
  const { data: inserted, error } = await client.from("qbank_active_sessions").upsert({
    user_id: userId,
    session_id: parsed.sessionId,
    payload: parsed,
    updated_at: parsed.updatedAt,
  }, { onConflict: "user_id,session_id", ignoreDuplicates: true }).select("session_id");
  if (!isMissingActiveSessionsTable(error)) {
    if (error) throw error;
    if (inserted?.length) return;
    // A different device may have a newer snapshot or an end tombstone.
    // Never overwrite either with an older local copy.
    const update = client.from("qbank_active_sessions")
      .update({ payload: parsed, updated_at: parsed.updatedAt })
      .eq("user_id", userId).eq("session_id", parsed.sessionId)
      .is("ended_at", null).lt("updated_at", parsed.updatedAt);
    const { error: updateError } = await (latestKnownAt ? update.lte("updated_at", latestKnownAt) : update);
    if (updateError) throw updateError;
    return;
  }
  const { error: legacyError } = await client.from("user_preferences").upsert({ user_id: userId, qbank_active_session: parsed }, { onConflict: "user_id" });
  if (legacyError) throw legacyError;
}

/** The normal SDK save can await auth and an upsert response. At pagehide, dispatch the guarded write immediately. */
export function saveCloudActiveQbankSessionOnPageExit(
  auth: { userId: string; accessToken: string },
  session: QbankActiveSession,
  alreadyInCloud: boolean,
  latestKnownAt?: string,
): Promise<void> | undefined {
  const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const parsed = activeSessionFrom(session);
  if (!apiUrl || !key || !auth.accessToken || !parsed) return;

  const endpoint = new URL(`${apiUrl.replace(/\/+$/, "")}/rest/v1/qbank_active_sessions`);
  const updateUrl = new URL(endpoint);
  updateUrl.searchParams.set("user_id", `eq.${auth.userId}`);
  updateUrl.searchParams.set("session_id", `eq.${parsed.sessionId}`);
  updateUrl.searchParams.set("ended_at", "is.null");
  updateUrl.searchParams.set("updated_at", latestKnownAt ? `lte.${latestKnownAt}` : `lt.${parsed.updatedAt}`);
  const insertUrl = new URL(endpoint);
  insertUrl.searchParams.set("on_conflict", "user_id,session_id");

  const row = { payload: parsed, updated_at: parsed.updatedAt };
  const updateBody = JSON.stringify(row);
  const insertBody = alreadyInCloud ? undefined : JSON.stringify({ ...row, user_id: auth.userId, session_id: parsed.sessionId });
  // Browsers cap the total pending keepalive body size. Current timed rounds are much smaller than this.
  const encoder = new TextEncoder();
  const updateSize = encoder.encode(updateBody).byteLength;
  const insertSize = insertBody ? encoder.encode(insertBody).byteLength : 0;
  if (updateSize > 64 * 1024) return;
  const headers = { apikey: key, Authorization: `Bearer ${auth.accessToken}`, "Content-Type": "application/json" };
  const requests = [fetch(updateUrl, { method: "PATCH", body: updateBody, keepalive: true, headers: { ...headers, Prefer: "return=minimal" } })];
  if (insertBody && updateSize + insertSize <= 64 * 1024) {
    // In case the user left before the first save: insert only if the row is still absent.
    requests.push(fetch(insertUrl, { method: "POST", body: insertBody, keepalive: true, headers: { ...headers, Prefer: "resolution=ignore-duplicates,return=minimal" } }));
  }
  return Promise.all(requests).then(responses => {
    const failed = responses.find(response => !response.ok);
    if (failed) throw new Error(`Active session exit sync returned ${failed.status}`);
  });
}

export async function removeCloudActiveQbankSession(client: SupabaseClient, userId: string, sessionId: string, localSession?: QbankActiveSession | null): Promise<void> {
  // Keep an account-wide tombstone. A delayed debounced upsert from another
  // open tab can update the payload, but cannot make this row active again.
  const endedAt = new Date().toISOString();
  const { data: updated, error } = await client.from("qbank_active_sessions").update({ ended_at: endedAt, updated_at: endedAt }).eq("user_id", userId).eq("session_id", sessionId).is("ended_at", null).select("session_id");
  if (!isMissingActiveSessionsTable(error)) {
    if (error) throw error;
    if (!updated?.length && localSession) {
      const parsed = activeSessionFrom(localSession);
      if (parsed?.sessionId === sessionId) {
        // A locally created set may be ended before its first successful upload.
        const { error: insertError } = await client.from("qbank_active_sessions").upsert({
          user_id: userId, session_id: sessionId, payload: parsed, updated_at: endedAt, ended_at: endedAt,
        }, { onConflict: "user_id,session_id", ignoreDuplicates: true });
        if (insertError) throw insertError;
        const { error: retryError } = await client.from("qbank_active_sessions").update({ ended_at: endedAt, updated_at: endedAt }).eq("user_id", userId).eq("session_id", sessionId).is("ended_at", null);
        if (retryError) throw retryError;
      }
    }
    return;
  }
  const legacy = await loadLegacySession(client, userId);
  if (!legacy.some((session) => session.sessionId === sessionId)) return;
  const { error: legacyError } = await client.from("user_preferences").upsert({ user_id: userId, qbank_active_session: null }, { onConflict: "user_id" });
  if (legacyError) throw legacyError;
}
