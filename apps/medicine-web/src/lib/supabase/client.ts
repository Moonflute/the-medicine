import { createClient, type Session, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && supabasePublishableKey);
}

let client: SupabaseClient | null = null;
let clientIsTemporary = false;
const DEVICE_SESSION_MARKER = "medicine.device-login.session.v1";
const DEVICE_PERSISTENT_MARKER = "medicine.device-login.persistent-session.v1";
const DEVICE_STORAGE_PREFIX = "medicine-device-auth-";

function temporaryStorageKey() {
  if (typeof window === "undefined") return null;
  try {
    const key = window.sessionStorage.getItem(DEVICE_SESSION_MARKER);
    if (key?.startsWith(DEVICE_STORAGE_PREFIX) && window.sessionStorage.getItem(key)) return key;
    window.sessionStorage.removeItem(DEVICE_SESSION_MARKER);
  } catch { /* Normal Google login still works if sessionStorage is unavailable. */ }
  return null;
}

export function usesTemporaryDeviceLogin() {
  return clientIsTemporary;
}

function sessionClaims(session: Session | null): { session_id?: unknown; amr?: { method?: string }[] } {
  if (!session?.access_token) return {};
  try {
    const encoded = session.access_token.split(".")[1];
    return JSON.parse(atob(encoded.replace(/-/g, "+").replace(/_/g, "/"))) as { session_id?: unknown; amr?: { method?: string }[] };
  } catch { return {}; }
}

function sessionAuthMethods(session: Session | null): string[] {
  const claims = sessionClaims(session);
  return Array.isArray(claims.amr) ? claims.amr.map((entry) => entry.method).filter((method): method is string => typeof method === "string") : [];
}

export function sessionUsesGoogleOAuth(session: Session | null) {
  return sessionAuthMethods(session).includes("oauth");
}

export function sessionUsesDeviceCode(session: Session | null) {
  const methods = sessionAuthMethods(session);
  if (methods.includes("magiclink") || methods.includes("otp")) return true;
  if (typeof window === "undefined" || !session) return false;
  const sessionId = sessionClaims(session).session_id;
  try { return typeof sessionId === "string" && window.localStorage.getItem(DEVICE_PERSISTENT_MARKER) === sessionId; }
  catch { return false; }
}

export function clearTemporaryDeviceLogin() {
  if (typeof window === "undefined") return;
  try {
    const key = window.sessionStorage.getItem(DEVICE_SESSION_MARKER);
    if (key?.startsWith(DEVICE_STORAGE_PREFIX)) {
      for (const suffix of ["", "-user", "-code-verifier"]) window.sessionStorage.removeItem(`${key}${suffix}`);
    }
    window.sessionStorage.removeItem(DEVICE_SESSION_MARKER);
  } catch { /* No persistent Google session is removed here. */ }
  try { window.localStorage.removeItem(DEVICE_PERSISTENT_MARKER); }
  catch { /* Login still works when localStorage is unavailable. */ }
}

export function assertDeviceLoginStorage(remember: boolean) {
  if (typeof window === "undefined") throw new Error("브라우저에서 로그인해 주세요.");
  const probe = "medicine.device-login.storage-check";
  try {
    const storage = remember ? window.localStorage : window.sessionStorage;
    storage.setItem(probe, "1");
    storage.removeItem(probe);
  } catch { throw new Error("브라우저 저장소가 차단되어 있습니다. 저장소 사용을 허용한 뒤 다시 시도해 주세요."); }
}

export function getSupabaseBrowserClient() {
  if (!isSupabaseConfigured()) return null;
  if (!client) {
    const temporaryKey = temporaryStorageKey();
    clientIsTemporary = Boolean(temporaryKey);
    client = createClient(supabaseUrl!, supabasePublishableKey!, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: !temporaryKey,
        ...(temporaryKey ? { storageKey: temporaryKey, storage: window.sessionStorage } : {}),
      },
    });
  }
  return client;
}

export async function establishDeviceLogin(accessToken: string, refreshToken: string, expectedUserId: string, remember: boolean) {
  assertDeviceLoginStorage(remember);
  const primary = getSupabaseBrowserClient();
  if (!primary) throw new Error("로그인 연결을 확인해 주세요.");
  // Temporary logins use a separate, per-tab storage key and BroadcastChannel.
  // They cannot leak into localStorage or replace another tab's Google session.
  const key = `${DEVICE_STORAGE_PREFIX}${crypto.randomUUID()}`;
  const authClient = remember && !clientIsTemporary ? primary : createClient(supabaseUrl!, supabasePublishableKey!, {
    auth: {
      persistSession: true, autoRefreshToken: false, detectSessionInUrl: false,
      ...(!remember ? { storageKey: key, storage: window.sessionStorage } : {}),
    },
  });
  let receivedSession = false;
  try {
    const { data, error } = await authClient.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });
    receivedSession = Boolean(data.session);
    if (error || !data.session || data.user?.id !== expectedUserId) {
      throw new Error("로그인을 완료하지 못했습니다. 폰에서 새 번호를 만들어 다시 시도해 주세요.");
    }
    if (remember) {
      clearTemporaryDeviceLogin();
      const sessionId = sessionClaims(data.session).session_id;
      if (typeof sessionId !== "string") throw new Error("로그인 세션을 확인하지 못했습니다.");
      window.localStorage.setItem(DEVICE_PERSISTENT_MARKER, sessionId);
    } else {
      window.localStorage.removeItem(DEVICE_PERSISTENT_MARKER);
      window.sessionStorage.setItem(DEVICE_SESSION_MARKER, key);
    }
  } catch (error) {
    if (receivedSession) {
      try { await authClient.auth.signOut({ scope: "local" }); } catch { /* Best effort; never revoke the phone's session. */ }
    }
    throw error;
  } finally {
    if (authClient !== primary) authClient.auth.dispose();
  }
  // Recreate all record-sync subscribers against the selected session storage.
  window.location.reload();
}

export function getAppBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH ?? "";
}
