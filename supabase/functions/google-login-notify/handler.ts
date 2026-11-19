type Config = {
  supabaseUrl: string; anonKey: string; serviceKey: string;
  telegramBotToken?: string; telegramChatId?: string;
  fetcher?: typeof fetch; now?: () => number;
};
type RecordValue = Record<string, unknown>;
const ORIGINS = new Set(["https://moonflute.github.io", "http://localhost:3000", "http://localhost:3017"]);
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function record(value: unknown): RecordValue {
  return value && typeof value === "object" && !Array.isArray(value) ? value as RecordValue : {};
}

function claims(token: string): RecordValue {
  try {
    return record(JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))));
  } catch { return {}; }
}

function singleLine(value: unknown, limit: number, fallback: string) {
  return typeof value === "string"
    ? value.replace(/[\u0000-\u001f\u007f\u202a-\u202e\u2066-\u2069]/g, " ").trim().slice(0, limit) || fallback
    : fallback;
}

export function createGoogleLoginNotificationHandler(config: Config) {
  const request = config.fetcher ?? fetch;
  const now = config.now ?? Date.now;
  const url = config.supabaseUrl.replace(/\/$/, "");
  const rpc = async (name: string, body: object) => {
    const response = await request(`${url}/rest/v1/rpc/${name}`, {
      method: "POST", headers: { apikey: config.serviceKey, Authorization: `Bearer ${config.serviceKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(body), signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error("notification-storage-unavailable");
    return response.json() as Promise<unknown>;
  };

  return async (req: Request): Promise<Response> => {
    const origin = req.headers.get("origin") ?? "";
    const headers = {
      "Content-Type": "application/json", "Cache-Control": "no-store, private", "Vary": "Origin",
      ...(ORIGINS.has(origin) ? { "Access-Control-Allow-Origin": origin, "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info", "Access-Control-Allow-Methods": "POST, OPTIONS" } : {}),
    };
    const reply = (body: object, status = 200) => new Response(JSON.stringify(body), { status, headers });
    if (origin && !ORIGINS.has(origin)) return reply({ error: "Forbidden" }, 403);
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers });
    if (req.method !== "POST") return reply({ error: "Method not allowed" }, 405);
    const bearer = req.headers.get("authorization")?.match(/^Bearer (.+)$/i)?.[1];
    if (!bearer || bearer.length > 16_384) return reply({ error: "Unauthorized" }, 401);
    if (!url || !config.anonKey || !config.serviceKey) return reply({ error: "Notification unavailable" }, 503);

    let sessionId: string | undefined;
    let claimId: string | undefined;
    let delivered = false;
    try {
      const authenticated = await request(`${url}/auth/v1/user`, {
        headers: { apikey: config.anonKey, Authorization: `Bearer ${bearer}` }, signal: AbortSignal.timeout(10_000),
      });
      if (!authenticated.ok) return reply({ error: "Authentication unavailable" }, [401, 403].includes(authenticated.status) ? 401 : 503);
      const user = record(await authenticated.json());
      // Claims are decoded only after Auth has verified this exact bearer.
      const jwt = claims(bearer);
      const oauth = Array.isArray(jwt.amr) ? jwt.amr.map(record).find(entry => entry.method === "oauth") : undefined;
      const providers = record(user.app_metadata).providers;
      const timestamp = oauth?.timestamp;
      if (typeof user.id !== "string" || !UUID.test(user.id) || jwt.sub !== user.id ||
          typeof jwt.session_id !== "string" || !UUID.test(jwt.session_id) || jwt.role !== "authenticated" ||
          !Array.isArray(providers) || !providers.includes("google") || !user.email_confirmed_at || user.is_anonymous ||
          typeof user.email !== "string" || !user.email || typeof timestamp !== "number" || !Number.isSafeInteger(timestamp) ||
          (typeof user.banned_until === "string" && Date.parse(user.banned_until) > now())) {
        return reply({ error: "Google login required" }, 403);
      }
      const signedInMs = timestamp * 1000;
      // Refreshed tokens retain the original OAuth timestamp, not the refresh time.
      if (signedInMs < now() - 10 * 60_000 || signedInMs > now() + 60_000) return reply({ status: "ignored" });
      sessionId = jwt.session_id;
      if (await rpc("device_login_session_exists", { p_user_id: user.id, p_session_id: sessionId }) !== true) {
        return reply({ error: "Session expired" }, 401);
      }
      const credentials = config.telegramBotToken && config.telegramChatId
        ? { botToken: config.telegramBotToken, chatId: config.telegramChatId }
        : record(await rpc("device_login_telegram_credentials", {}));
      if (typeof credentials.botToken !== "string" || !credentials.botToken || typeof credentials.chatId !== "string" || !credentials.chatId) {
        throw new Error("notification-not-configured");
      }
      const claim = record(await rpc("google_login_notification_claim", {
        p_user_id: user.id, p_session_id: sessionId, p_signed_in_at: new Date(signedInMs).toISOString(),
      }));
      if (["already_notified", "processing", "ignored"].includes(String(claim.status))) return reply({ status: claim.status });
      if (claim.status !== "claimed" || typeof claim.claimId !== "string" || !UUID.test(claim.claimId)) throw new Error("notification-not-claimed");
      claimId = claim.claimId;
      const metadata = record(user.user_metadata);
      const time = new Intl.DateTimeFormat("sv-SE", {
        timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23",
      }).format(new Date(signedInMs));
      const message = [
        "[The Medicine 구글 로그인]",
        `이름: ${singleLine(metadata.full_name ?? metadata.name, 80, "이름 없음")}`,
        `이메일: ${singleLine(user.email, 254, "확인 불가")}`,
        `시각: ${time} (한국시간)`,
      ].join("\n");
      const response = await request(`https://api.telegram.org/bot${credentials.botToken}/sendMessage`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: credentials.chatId, text: message }), signal: AbortSignal.timeout(5_000),
      });
      if (!response.ok || record(await response.json().catch(() => null)).ok !== true) throw new Error("notification-send-failed");
      delivered = true;
      await rpc("google_login_notification_finish", { p_session_id: sessionId, p_claim_id: claimId, p_sent: true });
      return reply({ status: "sent" });
    } catch {
      if (claimId && !delivered) {
        try { await rpc("google_login_notification_finish", { p_session_id: sessionId, p_claim_id: claimId, p_sent: false }); }
        catch { /* Keep the lease when storage is unavailable; never overlap senders. */ }
      }
      // Retry only the acknowledgement, never a message Telegram accepted.
      if (delivered) {
        try { await rpc("google_login_notification_finish", { p_session_id: sessionId, p_claim_id: claimId, p_sent: true }); }
        catch { /* The existing lease still prevents immediate duplicate sends. */ }
        return reply({ status: "sent" });
      }
      return reply({ error: "Notification unavailable" }, 503);
    }
  };
}
