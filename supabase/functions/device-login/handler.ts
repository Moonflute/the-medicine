type Config = { supabaseUrl: string; anonKey: string; serviceKey: string; fetcher?: typeof fetch };
type RecordValue = Record<string, unknown>;
const ORIGINS = new Set(["https://moonflute.github.io", "http://localhost:3000", "http://localhost:3017"]);
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const encoder = new TextEncoder();
const INVALID_CODE = "번호가 올바르지 않거나 만료되었습니다. 새 번호를 발급해 주세요.";

function record(value: unknown): RecordValue {
  return value && typeof value === "object" && !Array.isArray(value) ? value as RecordValue : {};
}

function eligibleUser(value: unknown): RecordValue | null {
  const user = record(record(value).user ?? value);
  const providers = record(user.app_metadata).providers;
  const factors = Array.isArray(user.factors) ? user.factors : [];
  const bannedUntil = typeof user.banned_until === "string" ? Date.parse(user.banned_until) : 0;
  if (typeof user.id !== "string" || !UUID.test(user.id) || typeof user.email !== "string" || !user.email_confirmed_at ||
      user.is_anonymous || bannedUntil > Date.now() || !Array.isArray(providers) || !providers.includes("google") ||
      factors.some((factor) => record(factor).status === "verified")) return null;
  return user;
}

export function randomLoginCode(): string {
  // Rejection sampling avoids modulo bias and preserves leading zeroes.
  const ceiling = Math.floor(0x1_0000_0000 / 100_000_000) * 100_000_000;
  let number: number;
  do { number = crypto.getRandomValues(new Uint32Array(1))[0]; } while (number >= ceiling);
  return String(number % 100_000_000).padStart(8, "0");
}

async function readInput(req: Request): Promise<RecordValue> {
  if (!req.body) return {};
  const reader = req.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 4096) { await reader.cancel(); throw new Error("request-size"); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return record(JSON.parse(new TextDecoder().decode(bytes)));
}

export function createDeviceLoginHandler(config: Config) {
  const request = config.fetcher ?? fetch;
  const url = config.supabaseUrl.replace(/\/$/, "");
  // Built-in server secret stays inside Edge Functions; domain-separated HMACs
  // prevent an offline database dump from revealing eight-digit codes or IPs.
  const hmacKey = crypto.subtle.importKey("raw", encoder.encode(config.serviceKey || "unconfigured"), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const hash = async (domain: string, value: string) => {
    const bytes = new Uint8Array(await crypto.subtle.sign("HMAC", await hmacKey, encoder.encode(`the-medicine/device-login/v1/${domain}:${value}`)));
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  };
  const adminRequest = async (path: string, body?: object) => {
    const response = await request(`${url}${path}`, {
      method: body ? "POST" : "GET",
      headers: { apikey: config.serviceKey, Authorization: `Bearer ${config.serviceKey}`, "Content-Type": "application/json" },
      ...(body ? { body: JSON.stringify(body) } : {}), signal: AbortSignal.timeout(10_000),
    });
    const data: unknown = await response.json().catch(() => null);
    if (!response.ok) throw new Error(record(data).code === "23505" ? "code-collision" : "backend-unavailable");
    return data;
  };
  const rpc = (name: string, body: object) => adminRequest(`/rest/v1/rpc/${name}`, body);

  return async (req: Request): Promise<Response> => {
    const origin = req.headers.get("origin") ?? "";
    const headers: Record<string, string> = {
      "Content-Type": "application/json", "Cache-Control": "no-store, private", "Vary": "Origin", "X-Content-Type-Options": "nosniff",
      ...(ORIGINS.has(origin) ? { "Access-Control-Allow-Origin": origin, "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info", "Access-Control-Allow-Methods": "POST, OPTIONS" } : {}),
    };
    const reply = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers });
    if (origin && !ORIGINS.has(origin)) return reply({ error: "허용되지 않은 요청입니다." }, 403);
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers });
    if (req.method !== "POST") return reply({ error: "POST만 허용됩니다." }, 405);
    if (!url || !config.anonKey || !config.serviceKey) return reply({ error: "인증 서버 연결을 확인해 주세요." }, 503);
    let input: RecordValue;
    try { input = await readInput(req); }
    catch (error) { return reply({ error: "요청 내용을 확인해 주세요." }, error instanceof Error && error.message === "request-size" ? 413 : 400); }
    if (typeof input.action !== "string" || !["issue", "redeem", "revoke"].includes(input.action)) return reply({ error: "요청 내용을 확인해 주세요." }, 400);
    const bearer = req.headers.get("authorization")?.match(/^Bearer (.+)$/i)?.[1];
    if (input.action !== "redeem" && !bearer) return reply({ error: "로그인된 기기에서만 번호를 만들 수 있습니다." }, 401);
    try {
      const limit = async (bucket: string, count: number, seconds: number) => {
        const wait = await rpc("device_login_rate_limit", { p_bucket: bucket, p_limit: count, p_window_seconds: seconds });
        if (typeof wait !== "number" || !Number.isFinite(wait)) throw new Error("backend-unavailable");
        if (wait <= 0) return null;
        headers["Retry-After"] = String(wait);
        return reply({ error: "요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.", retryAfter: wait }, 429);
      };
      // The global budget also bounds guessing if a caller spoofs forwarding headers.
      const globalLimit = await limit(`global:${String(input.action)}`, input.action === "redeem" ? 80 : 120, 60);
      if (globalLimit) return globalLimit;
      const ip = req.headers.get("cf-connecting-ip") ?? req.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim() ?? "unknown";
      const ipLimit = await limit(`${String(input.action)}:ip:${await hash("ip", ip)}`, input.action === "redeem" ? 10 : 30, 600);
      if (ipLimit) return ipLimit;
      if (input.action === "redeem") {
        if (typeof input.code !== "string" || !/^\d{8}$/.test(input.code)) return reply({ error: INVALID_CODE }, 400);
        const userId = await rpc("device_login_redeem", { p_code_hash: await hash("code", input.code) });
        if (typeof userId !== "string" || !UUID.test(userId)) return reply({ error: INVALID_CODE }, 400);
        const user = eligibleUser(await adminRequest(`/auth/v1/admin/users/${userId}`));
        if (!user || user.id !== userId) return reply({ error: INVALID_CODE }, 400);
        // generateLink does not send email. Only an existing, verified Google user
        // from the atomically consumed code is used; clients cannot choose an email.
        const link = record(await adminRequest("/auth/v1/admin/generate_link", { type: "magiclink", email: user.email }));
        if (link.id !== userId || typeof link.hashed_token !== "string" || !link.hashed_token) throw new Error("account-mismatch");
        // This single-use hash creates a NEW Auth session on the receiving device.
        // The issuing phone's access/refresh tokens are never copied or returned.
        return reply({ tokenHash: link.hashed_token, userId });
      }

      const auth = await request(`${url}/auth/v1/user`, {
        headers: { apikey: config.anonKey, Authorization: `Bearer ${bearer}` }, signal: AbortSignal.timeout(10_000),
      });
      if (auth.status >= 500) throw new Error("auth-unavailable");
      const user = auth.ok ? eligibleUser(await auth.json()) : null;
      if (!user) return reply({ error: "Google로 로그인한 계정을 확인해 주세요. 추가 인증이 설정된 계정은 번호 로그인을 사용할 수 없습니다." }, 401);
      if (input.action === "revoke") {
        if (typeof input.id !== "string" || !UUID.test(input.id)) return reply({ error: "번호 정보를 확인해 주세요." }, 400);
        await rpc("device_login_revoke", { p_user_id: user.id, p_id: input.id });
        return reply({ ok: true });
      }
      const userLimit = await limit(`issue:user:${String(user.id)}`, 5, 600);
      if (userLimit) return userLimit;
      for (let attempt = 0; attempt < 3; attempt++) {
        const code = randomLoginCode();
        try {
          const issued = record(await rpc("device_login_issue", { p_user_id: user.id, p_code_hash: await hash("code", code) }));
          if (typeof issued.id !== "string" || typeof issued.expiresAt !== "string") throw new Error("backend-unavailable");
          return reply({ code, id: issued.id, expiresAt: issued.expiresAt, expiresIn: Math.max(0, Math.floor((Date.parse(issued.expiresAt) - Date.now()) / 1000)) });
        } catch (error) {
          if (!(error instanceof Error) || error.message !== "code-collision") throw error;
        }
      }
      throw new Error("code-collision");
    } catch {
      // Never log codes, OTP hashes, tokens, or provider response bodies.
      return reply({ error: "인증을 완료하지 못했습니다. 잠시 후 새 번호로 다시 시도해 주세요." }, 503);
    }
  };
}
