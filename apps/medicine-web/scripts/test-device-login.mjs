import assert from "node:assert/strict";
import test from "node:test";
import { createDeviceLoginHandler, randomLoginCode } from "../../../supabase/functions/device-login/handler.ts";

const USER_ID = "11111111-1111-4111-8111-111111111111";
const OTHER_ID = "22222222-2222-4222-8222-222222222222";
const GOOGLE_SESSION_ID = "33333333-3333-4333-8333-333333333333";
const DEVICE_SESSION_ID = "44444444-4444-4444-8444-444444444444";
const jwt = (userId, sessionId, method) => `${Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url")}.${Buffer.from(JSON.stringify({ sub: userId, session_id: sessionId, amr: [{ method }], exp: Math.floor(Date.now() / 1000) + 3600, role: "authenticated" })).toString("base64url")}.test-signature`;
const GOOGLE_TOKEN = jwt(USER_ID, GOOGLE_SESSION_ID, "oauth");
const DEVICE_TOKEN = jwt(USER_ID, DEVICE_SESSION_ID, "magiclink");
const userFixture = () => ({ id: USER_ID, email: "device-test@example.invalid", email_confirmed_at: "2026-01-01T00:00:00Z", app_metadata: { providers: ["google"] }, factors: [] });

function fixture(overrides = {}, settings = {}) {
  const user = { ...userFixture(), ...overrides };
  const codes = new Map();
  const sessions = new Map();
  const attempts = new Map();
  const calls = [];
  let nextId = 1;
  let linkUserId = USER_ID;
  let failing = false;
  let notificationFailure = false;
  const json = (body, status = 200) => new Response(JSON.stringify(body), { status });
  const fetcher = async (url, init = {}) => {
    const path = new URL(url).pathname;
    const body = init.body ? JSON.parse(init.body) : {};
    calls.push({ path, body, authorization: init.headers?.Authorization });
    if (failing) return json({ error: "private backend details" }, 500);
    if (path === "/auth/v1/user") return [GOOGLE_TOKEN, DEVICE_TOKEN].includes(init.headers.Authorization?.replace(/^Bearer /, "")) ? json(user) : json({}, 401);
    if (path.endsWith("/sendMessage")) return notificationFailure ? json({ ok: false }, 500) : json({ ok: true });
    if (path === "/auth/v1/verify") {
      assert.deepEqual(body, { token_hash: "one-time-auth-hash", type: "email" });
      return json({ access_token: DEVICE_TOKEN, refresh_token: "device-refresh", user });
    }
    if (path === "/auth/v1/logout") return json({});
    assert.equal(init.headers.Authorization, "Bearer server-test-secret");
    if (path.endsWith("/device_login_rate_limit")) {
      const hits = (attempts.get(body.p_bucket) ?? 0) + 1;
      attempts.set(body.p_bucket, hits);
      return json(hits <= body.p_limit ? 0 : body.p_window_seconds);
    }
    if (path.endsWith("/device_login_telegram_credentials")) return json({ botToken: "fake-bot-token", chatId: "12345" });
    if (path.endsWith("/device_login_issue")) {
      const id = `aaaaaaaa-aaaa-4aaa-8aaa-${String(nextId++).padStart(12, "0")}`;
      const value = { id, hash: body.p_code_hash, expiresAt: new Date(Date.now() + 10_000).toISOString() };
      codes.set(body.p_user_id, value);
      return json({ id, expiresAt: value.expiresAt });
    }
    if (path.endsWith("/device_login_redeem")) {
      for (const [id, value] of codes) {
        if (value.hash === body.p_code_hash && Date.parse(value.expiresAt) > Date.now()) { codes.delete(id); return json(id); }
      }
      return json(null);
    }
    if (path.endsWith("/device_login_revoke")) {
      if (codes.get(body.p_user_id)?.id === body.p_id) codes.delete(body.p_user_id);
      return json(null);
    }
    if (path.endsWith("/device_login_session_exists")) return json(body.p_session_id === GOOGLE_SESSION_ID);
    if (path.endsWith("/device_login_register_session")) {
      if (body.p_user_id !== USER_ID || body.p_session_id !== DEVICE_SESSION_ID) return json(false);
      sessions.set(DEVICE_SESSION_ID, USER_ID);
      return json(true);
    }
    if (path.endsWith("/device_login_session_active")) return json(sessions.get(body.p_session_id) === body.p_user_id);
    if (path.endsWith("/device_login_revoke_session")) { sessions.delete(body.p_session_id); return json(null); }
    if (path.endsWith("/device_login_revoke_sessions")) {
      codes.delete(body.p_user_id);
      const count = sessions.size;
      sessions.clear();
      return json(count);
    }
    if (path === `/auth/v1/admin/users/${USER_ID}`) return json(user);
    if (path === "/auth/v1/admin/generate_link") {
      assert.deepEqual(body, { type: "magiclink", email: user.email });
      return json({ ...user, id: linkUserId, hashed_token: "one-time-auth-hash", verification_type: "magiclink" });
    }
    throw new Error(`Unexpected request ${path}`);
  };
  const handler = createDeviceLoginHandler({ supabaseUrl: "https://project.test", anonKey: "public-test-key", serviceKey: "server-test-secret", ...(settings.vault ? {} : { telegramBotToken: "fake-bot-token", telegramChatId: "12345" }), fetcher });
  const call = (input, token, headers = {}) => handler(new Request("https://project.test/functions/v1/device-login", {
    method: "POST", headers: { Origin: "https://moonflute.github.io", "Content-Type": "application/json", "cf-connecting-ip": "192.0.2.1", ...(token ? { Authorization: `Bearer ${token === "phone-session" ? GOOGLE_TOKEN : token === "temporary-session" ? DEVICE_TOKEN : token}` } : {}), ...headers }, body: JSON.stringify(input),
  }));
  const issue = async (extra = {}) => {
    const response = await call({ action: "issue", ...extra }, "phone-session");
    assert.equal(response.status, 200);
    return response.json();
  };
  return { call, issue, handler, codes, sessions, calls, setLinkUser: (id) => { linkUserId = id; }, fail: () => { failing = true; }, failNotification: () => { notificationFailure = true; } };
}

test("codes are eight cryptographic decimal digits including leading zeros", () => {
  for (let index = 0; index < 50; index++) assert.match(randomLoginCode(), /^\d{8}$/);
});

test("only Auth-verified existing Google accounts can issue a code", async () => {
  const f = fixture();
  assert.equal((await f.call({ action: "issue" })).status, 401);
  assert.equal((await f.call({ action: "issue" }, "forged-token")).status, 401);
  const code = await f.issue({ userId: OTHER_ID, email: "attacker@example.invalid" });
  assert.match(code.code, /^\d{8}$/);
  assert.ok(code.remainingMs > 9_000 && code.remainingMs <= 10_000);
  assert.ok(f.codes.has(USER_ID));
  assert.ok(!f.codes.has(OTHER_ID));
  assert.match(f.codes.get(USER_ID).hash, /^[a-f0-9]{64}$/);
  assert.ok(!JSON.stringify(f.codes.get(USER_ID)).includes(code.code));
  assert.ok(!("tokenHash" in code));
  assert.ok(!("email" in code));
});

test("anonymous, unconfirmed, MFA, and client-editable provider claims are rejected", async () => {
  for (const overrides of [
    { is_anonymous: true }, { email_confirmed_at: null }, { factors: [{ status: "verified" }] },
    { app_metadata: {}, user_metadata: { providers: ["google"] } },
    { banned_until: new Date(Date.now() + 60_000).toISOString() },
  ]) {
    const f = fixture(overrides);
    assert.equal((await f.call({ action: "issue" }, "phone-session")).status, 401);
    assert.equal(f.codes.size, 0);
  }
});

test("receiver gets a registered new session only after its Telegram alert", async () => {
  const f = fixture();
  const code = await f.issue();
  const response = await f.call({ action: "redeem", code: code.code, email: "attacker@example.invalid" });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { accessToken: DEVICE_TOKEN, refreshToken: "device-refresh", userId: USER_ID });
  assert.equal(response.headers.get("Cache-Control"), "no-store, private");
  assert.equal(f.codes.size, 0);
  assert.equal(f.sessions.get(DEVICE_SESSION_ID), USER_ID);
  const alert = f.calls.find((call) => call.path.endsWith("/sendMessage"));
  assert.match(alert.body.text, /^\[임시번호 로그인\]\n시각: .+ KST\n접속 IP: 192\.0\.2\.1\n기기: /);
  assert.ok(!alert.body.text.includes(code.code));
  assert.ok(!alert.body.text.includes("device-refresh"));
  assert.ok(!f.calls.some((call) => call.path.endsWith("/logout")));
  const repeated = await f.call({ action: "redeem", code: code.code });
  assert.equal(repeated.status, 400);
  assert.ok(!JSON.stringify(await repeated.json()).includes("accessToken"));
});

test("Telegram credentials can come from the service-role-only Vault RPC", async () => {
  const f = fixture({}, { vault: true });
  const code = await f.issue();
  assert.equal((await f.call({ action: "redeem", code: code.code })).status, 200);
  assert.equal(f.calls.filter((call) => call.path.endsWith("/device_login_telegram_credentials")).length, 1);
  assert.equal(f.calls.filter((call) => call.path.endsWith("/sendMessage")).length, 1);
});

test("a temporary session cannot issue codes or revoke sessions, while Google can revoke only temporary sessions", async () => {
  const f = fixture();
  const code = await f.issue();
  assert.equal((await f.call({ action: "redeem", code: code.code })).status, 200);
  assert.equal((await f.call({ action: "issue" }, "temporary-session")).status, 403);
  assert.equal((await f.call({ action: "revoke-sessions" }, "temporary-session")).status, 403);
  const result = await f.call({ action: "revoke-sessions" }, "phone-session");
  assert.deepEqual(await result.json(), { revoked: 1 });
  assert.equal(f.sessions.size, 0);
  assert.equal((await f.call({ action: "session-status" }, "temporary-session")).status, 200);
  assert.deepEqual(await (await f.call({ action: "session-status" }, "temporary-session")).json(), { active: false });
  assert.equal((await f.call({ action: "issue" }, "phone-session")).status, 200);
});

test("failed Telegram delivery revokes the just-created session and withholds credentials", async () => {
  const f = fixture();
  const code = await f.issue();
  f.failNotification();
  const response = await f.call({ action: "redeem", code: code.code });
  assert.equal(response.status, 503);
  assert.equal(f.sessions.size, 0);
  assert.ok(!JSON.stringify(await response.json()).includes("device-refresh"));
  assert.equal((await f.call({ action: "redeem", code: code.code })).status, 400);
});

test("regeneration invalidates the old code, and old revocation cannot cancel the new code", async () => {
  const f = fixture();
  const old = await f.issue();
  const current = await f.issue();
  assert.notEqual(old.id, current.id);
  assert.equal((await f.call({ action: "redeem", code: old.code })).status, 400);
  assert.equal((await f.call({ action: "revoke", id: old.id }, "phone-session")).status, 200);
  assert.equal(f.codes.get(USER_ID).id, current.id);
  assert.equal((await f.call({ action: "revoke", id: current.id }, "phone-session")).status, 200);
  assert.equal((await f.call({ action: "redeem", code: current.code })).status, 400);
});

test("expired codes fail and simultaneous redemptions succeed only once", async () => {
  const f = fixture();
  const expired = await f.issue();
  f.codes.get(USER_ID).expiresAt = new Date(Date.now() - 1000).toISOString();
  assert.equal((await f.call({ action: "redeem", code: expired.code })).status, 400);
  const current = await f.issue();
  const results = await Promise.all([f.call({ action: "redeem", code: current.code }), f.call({ action: "redeem", code: current.code })]);
  assert.deepEqual(results.map((result) => result.status).sort(), [200, 400]);
  assert.equal(f.calls.filter((call) => call.path.endsWith("/admin/generate_link")).length, 1);
});

test("repeated attempts are capped even when every caller spoofs a different IP", async () => {
  const f = fixture();
  for (let index = 0; index < 10; index++) assert.equal((await f.call({ action: "redeem", code: "00000000" })).status, 400);
  const limited = await f.call({ action: "redeem", code: "00000000" });
  assert.equal(limited.status, 429);
  assert.equal(limited.headers.get("Retry-After"), "600");
  const global = fixture();
  for (let index = 0; index < 80; index++) await global.call({ action: "redeem", code: "00000000" }, null, { "cf-connecting-ip": `192.0.2.${index}` });
  assert.equal((await global.call({ action: "redeem", code: "00000000" }, null, { "cf-connecting-ip": "192.0.2.200" })).status, 429);
});

test("account issuance has its own rate limit", async () => {
  const f = fixture();
  for (let index = 0; index < 5; index++) await f.issue();
  assert.equal((await f.call({ action: "issue" }, "phone-session")).status, 429);
});

test("a mismatched admin link cannot log into a different account", async () => {
  const f = fixture();
  const code = await f.issue();
  f.setLinkUser(OTHER_ID);
  const response = await f.call({ action: "redeem", code: code.code });
  assert.equal(response.status, 503);
  assert.ok(!JSON.stringify(await response.json()).includes("one-time-auth-hash"));
  assert.equal((await f.call({ action: "redeem", code: code.code })).status, 400);
});

test("malformed, oversized, cross-origin, and unsupported requests fail safely", async () => {
  const f = fixture();
  const endpoint = "https://project.test/functions/v1/device-login";
  assert.equal((await f.handler(new Request(endpoint, { method: "POST", body: "[" }))).status, 400);
  assert.equal((await f.handler(new Request(endpoint, { method: "POST", body: "x".repeat(4097) }))).status, 413);
  assert.equal((await f.call({ action: "issue" }, "phone-session", { Origin: "https://untrusted.example" })).status, 403);
  assert.equal((await f.handler(new Request(endpoint))).status, 405);
  assert.equal((await f.call({ action: "unexpected" })).status, 400);
  const options = await f.handler(new Request(endpoint, { method: "OPTIONS", headers: { Origin: "https://moonflute.github.io" } }));
  assert.equal(options.status, 204);
  assert.equal(options.headers.get("Access-Control-Allow-Origin"), "https://moonflute.github.io");
  assert.equal(f.calls.length, 0);
});

test("backend failures never expose private credentials or provider errors", async () => {
  const f = fixture();
  f.fail();
  const response = await f.call({ action: "issue" }, "phone-session");
  assert.equal(response.status, 503);
  const body = JSON.stringify(await response.json());
  assert.ok(!body.includes("server-test-secret"));
  assert.ok(!body.includes("private backend details"));
});

test("temporary sessions stay in the tab, retain user ID, and never replace Google storage", async () => {
  const memoryStorage = () => {
    const entries = new Map();
    return { entries, getItem: (key) => entries.get(key) ?? null, setItem: (key, value) => entries.set(key, value), removeItem: (key) => entries.delete(key) };
  };
  const local = memoryStorage();
  const tab = memoryStorage();
  const marker = "medicine.device-login.session.v1";
  const legacyKey = "sb-project-auth-token";
  const session = (id) => ({ access_token: jwt(id, DEVICE_SESSION_ID, "magiclink"), refresh_token: `test-refresh-${id}`, token_type: "bearer", expires_in: 3600, expires_at: Math.floor(Date.now() / 1000) + 3600, user: { ...userFixture(), id, aud: "authenticated", created_at: "2026-01-01T00:00:00Z", role: "authenticated" } });
  local.setItem(legacyKey, JSON.stringify(session(OTHER_ID)));
  const previous = new Map(["window", "document", "localStorage", "fetch"].map((key) => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  const originalUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const originalKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  let reloads = 0;
  let responseUser = USER_ID;
  const logoutScopes = [];
  globalThis.window = { sessionStorage: tab, localStorage: local, location: { href: "https://app.example/review/", hash: "", search: "", reload: () => { reloads++; } }, addEventListener() {}, removeEventListener() {} };
  globalThis.document = { visibilityState: "hidden", addEventListener() {}, removeEventListener() {} };
  globalThis.localStorage = local;
  globalThis.fetch = async (input, init) => {
    const url = new URL(String(input));
    if (url.pathname === "/auth/v1/user") return new Response(JSON.stringify({ user: session(responseUser).user }), { status: 200 });
    if (url.pathname === "/auth/v1/logout") {
      logoutScopes.push(url.searchParams.get("scope"));
      return new Response("{}", { status: 200 });
    }
    throw new Error(`Unexpected client request ${url.pathname}`);
  };
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://project.supabase.co";
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_test";
  let primary;
  try {
    const auth = await import("../src/lib/supabase/client.ts");
    primary = auth.getSupabaseBrowserClient();
    await primary.auth.getSession();
    await auth.establishDeviceLogin(jwt(USER_ID, DEVICE_SESSION_ID, "magiclink"), "test-refresh", USER_ID, false);
    assert.equal(reloads, 1);
    const temporaryKey = tab.getItem(marker);
    assert.match(temporaryKey, /^medicine-device-auth-/);
    assert.equal(JSON.parse(tab.getItem(temporaryKey)).user.id, USER_ID);
    assert.equal(JSON.parse(local.getItem(legacyKey)).user.id, OTHER_ID);
    assert.equal(local.entries.size, 1);
    auth.clearTemporaryDeviceLogin();
    assert.equal(tab.entries.size, 0);
    assert.equal(JSON.parse(local.getItem(legacyKey)).user.id, OTHER_ID);

    responseUser = OTHER_ID;
    await assert.rejects(() => auth.establishDeviceLogin(jwt(USER_ID, DEVICE_SESSION_ID, "magiclink"), "test-refresh", USER_ID, false));
    assert.deepEqual(logoutScopes, ["local"]);
    assert.equal(tab.entries.size, 0);
    assert.equal(reloads, 1);
    assert.equal(JSON.parse(local.getItem(legacyKey)).user.id, OTHER_ID);

    responseUser = USER_ID;
    await auth.establishDeviceLogin(jwt(USER_ID, DEVICE_SESSION_ID, "magiclink"), "test-refresh", USER_ID, true);
    assert.equal(JSON.parse(local.getItem(legacyKey)).user.id, USER_ID);
    assert.equal(local.getItem("medicine.device-login.persistent-session.v1"), DEVICE_SESSION_ID);
    assert.equal(auth.sessionUsesDeviceCode(JSON.parse(local.getItem(legacyKey))), true);
    assert.equal(tab.getItem(marker), null);
    assert.equal(reloads, 2);
    globalThis.window.sessionStorage = { setItem() { throw new Error("blocked"); } };
    assert.throws(() => auth.assertDeviceLoginStorage(false), /저장소/);
  } finally {
    primary?.auth.dispose();
    for (const [key, descriptor] of previous) { if (descriptor) Object.defineProperty(globalThis, key, descriptor); else delete globalThis[key]; }
    if (originalUrl === undefined) delete process.env.NEXT_PUBLIC_SUPABASE_URL; else process.env.NEXT_PUBLIC_SUPABASE_URL = originalUrl;
    if (originalKey === undefined) delete process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY; else process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = originalKey;
  }
});
