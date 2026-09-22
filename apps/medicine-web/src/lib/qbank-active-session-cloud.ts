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

export async function saveCloudActiveQbankSession(client: SupabaseClient, userId: string, session: QbankActiveSession): Promise<void> {
  const parsed = activeSessionFrom(session);
  if (!parsed) return;
  const { error } = await client.from("qbank_active_sessions").upsert({
    user_id: userId,
    session_id: parsed.sessionId,
    payload: parsed,
    updated_at: parsed.updatedAt,
  }, { onConflict: "user_id,session_id" });
  if (!isMissingActiveSessionsTable(error)) {
    if (error) throw error;
    return;
  }
  const { error: legacyError } = await client.from("user_preferences").upsert({ user_id: userId, qbank_active_session: parsed }, { onConflict: "user_id" });
  if (legacyError) throw legacyError;
}

export async function removeCloudActiveQbankSession(client: SupabaseClient, userId: string, sessionId: string): Promise<void> {
  // Keep an account-wide tombstone. A delayed debounced upsert from another
  // open tab can update the payload, but cannot make this row active again.
  const endedAt = new Date().toISOString();
  const { error } = await client.from("qbank_active_sessions").update({ ended_at: endedAt, updated_at: endedAt }).eq("user_id", userId).eq("session_id", sessionId).is("ended_at", null);
  if (!isMissingActiveSessionsTable(error)) {
    if (error) throw error;
    return;
  }
  const legacy = await loadLegacySession(client, userId);
  if (!legacy.some((session) => session.sessionId === sessionId)) return;
  const { error: legacyError } = await client.from("user_preferences").upsert({ user_id: userId, qbank_active_session: null }, { onConflict: "user_id" });
  if (legacyError) throw legacyError;
}
