import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { createGoogleLoginNotificationHandler } from "../../../supabase/functions/google-login-notify/handler.ts";
import { notifyGoogleLogin } from "../src/lib/google-login-notification.ts";

const USER = "11111111-1111-4111-8111-111111111111";
const SESSION = "22222222-2222-4222-8222-222222222222";
const OTHER = "33333333-3333-4333-8333-333333333333";
const CLAIM = "44444444-4444-4444-8444-444444444444";
const NOW = Date.parse("2026-11-19T06:00:00Z");
const SIGNED_IN = NOW / 1000 - 60;
const jwt = (changes = {}) => `header.${Buffer.from(JSON.stringify({ sub: USER, session_id: SESSION, role: "authenticated", amr: [{ method: "oauth", timestamp: SIGNED_IN }], ...changes })).toString("base64url")}.signature`;

function fixture(options = {}) {
  const calls = [];
  const alerts = new Map();
  let telegramFailure = false;
  const token = options.token ?? jwt();
  const json = (body, status = 200) => new Response(JSON.stringify(body), { status });
  const fetcher = async (url, init) => {
    const path = new URL(url).pathname;
    const body = init.body ? JSON.parse(init.body) : {};
    calls.push({ path, body });
    if (path === "/auth/v1/user") {
      if (options.authFailure || init.headers.Authorization !== `Bearer ${token}`) return json({}, 401);
      return json({ id: USER, email: "login@example.invalid", email_confirmed_at: "2026-01-01T00:00:00Z",
        app_metadata: { providers: ["google"] }, user_metadata: { full_name: "Test User" }, ...options.user });
    }
    if (path.endsWith("/sendMessage")) return telegramFailure ? json({ ok: false }, 503) : json({ ok: true });
    assert.equal(init.headers.Authorization, "Bearer server-only-secret");
    if (path.endsWith("/device_login_session_exists")) {
      assert.equal(body.p_user_id, USER);
      return json(options.revoked ? false : body.p_session_id === SESSION);
    }
    if (path.endsWith("/device_login_telegram_credentials")) return json(options.noCredentials ? {} : { botToken: "test-bot", chatId: "private-chat" });
    if (path.endsWith("/google_login_notification_claim")) {
      const current = alerts.get(body.p_session_id);
      if (current?.sent) return json({ status: "already_notified" });
      if (current?.leased) return json({ status: "processing" });
      if (current?.attempts >= 3) return json({ status: "exhausted" });
      alerts.set(body.p_session_id, { attempts: (current?.attempts ?? 0) + 1, leased: true, sent: false });
      return json({ status: "claimed", claimId: CLAIM });
    }
    if (path.endsWith("/google_login_notification_finish")) {
      assert.equal(body.p_claim_id, CLAIM);
      if (options.ackFailure && body.p_sent) return json({}, 503);
      const alert = alerts.get(body.p_session_id);
      alert.sent = body.p_sent;
      alert.leased = false;
      return json(null);
    }
    throw new Error(`Unexpected path: ${path}`);
  };
  const handler = createGoogleLoginNotificationHandler({
    supabaseUrl: "https://project.invalid", anonKey: "public-key", serviceKey: "server-only-secret", fetcher, now: () => NOW,
  });
  const call = (body = {}, bearer = token, origin = "https://moonflute.github.io") => handler(new Request("https://project.invalid/functions/v1/google-login-notify", {
    method: "POST", headers: { Origin: origin, "Content-Type": "application/json", ...(bearer ? { Authorization: `Bearer ${bearer}` } : {}) }, body: JSON.stringify(body),
  }));
  return { calls, alerts, call, failTelegram: value => { telegramFailure = value; }, messages: () => calls.filter(c => c.path.endsWith("/sendMessage")) };
}

test("sends only Auth identity and original OAuth time in Korea to the configured chat", async () => {
  const f = fixture();
  const response = await f.call({ userId: OTHER, email: "spoof@example.invalid", name: "Spoof", chat_id: "attacker", timestamp: 0 });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: "sent" });
  assert.deepEqual(f.messages()[0].body, {
    chat_id: "private-chat",
    text: "[The Medicine 구글 로그인]\n이름: Test User\n이메일: login@example.invalid\n시각: 2026-11-19 14:59:00 (한국시간)",
  });
  assert.ok(!JSON.stringify(f.messages()).includes(SESSION));
  assert.ok(!JSON.stringify(f.messages()).includes("signature"));
});

test("sequential and concurrent callback requests send one notification per session", async () => {
  const f = fixture();
  await Promise.all([f.call(), f.call(), f.call()]);
  await f.call();
  assert.equal(f.messages().length, 1);
  assert.equal(f.alerts.get(SESSION).sent, true);
});

test("missing or invalid bearers and untrusted origins never access server secrets", async () => {
  for (const [token, origin, status] of [[null, "https://moonflute.github.io", 401], ["forged", "https://moonflute.github.io", 401], [jwt(), "https://attacker.invalid", 403]]) {
    const f = fixture();
    assert.equal((await f.call({}, token, origin)).status, status);
    assert.equal(f.messages().length, 0);
    assert.ok(f.calls.every(c => c.path === "/auth/v1/user"));
  }
});

test("temporary-code logins, other users' session claims, non-Google accounts, and revoked sessions are rejected", async () => {
  for (const options of [
    { token: jwt({ amr: [{ method: "otp", timestamp: SIGNED_IN }] }) },
    { token: jwt({ sub: OTHER }) }, { token: jwt({ session_id: OTHER }) },
    { user: { app_metadata: { providers: ["email"] } } }, { revoked: true },
  ]) {
    const f = fixture(options);
    assert.ok([401, 403].includes((await f.call()).status));
    assert.equal(f.messages().length, 0);
  }
});

test("old refreshed sessions and future OAuth times do not produce login alerts", async () => {
  for (const timestamp of [NOW / 1000 - 3600, NOW / 1000 + 120]) {
    const f = fixture({ token: jwt({ amr: [{ method: "oauth", timestamp }, { method: "token_refresh", timestamp: NOW / 1000 }] }) });
    assert.deepEqual(await (await f.call()).json(), { status: "ignored" });
    assert.equal(f.messages().length, 0);
  }
});

test("profile text cannot inject lines or formatting into the plain text alert", async () => {
  const f = fixture({ user: { user_metadata: { full_name: "Name\n시각: forged\u202e" } } });
  await f.call();
  assert.equal(f.messages()[0].body.text.split("\n").length, 4);
  assert.ok(!f.messages()[0].body.text.includes("\u202e"));
  assert.equal(f.messages()[0].body.parse_mode, undefined);
});

test("failed delivery releases the lease for a bounded retry without signing out", async () => {
  const f = fixture();
  f.failTelegram(true);
  assert.equal((await f.call()).status, 503);
  f.failTelegram(false);
  assert.equal((await f.call()).status, 200);
  assert.equal(f.alerts.get(SESSION).attempts, 2);
  assert.ok(!f.calls.some(c => c.path.includes("logout")));
  const exhausted = fixture();
  exhausted.failTelegram(true);
  for (let i = 0; i < 5; i++) await exhausted.call();
  assert.equal(exhausted.messages().length, 3);
});

test("missing bot settings never send, and an acknowledgement failure does not retry an accepted message", async () => {
  const missing = fixture({ noCredentials: true });
  assert.equal((await missing.call()).status, 503);
  assert.equal(missing.messages().length, 0);
  const accepted = fixture({ ackFailure: true });
  assert.equal((await accepted.call()).status, 200);
  await accepted.call();
  assert.equal(accepted.messages().length, 1);
});

test("browser retries temporary failures only and always resolves without affecting login", async () => {
  let attempts = 0;
  const delays = [];
  const client = { functions: { invoke: async (name, options) => {
    assert.equal(name, "google-login-notify");
    assert.equal(options.headers.Authorization, "Bearer auth-token");
    assert.deepEqual(options.body, {});
    return ++attempts < 3 ? { error: { context: { status: 503 } } } : { data: { status: "sent" }, error: null };
  } } };
  await notifyGoogleLogin(client, "auth-token", async ms => { delays.push(ms); });
  assert.equal(attempts, 3);
  assert.deepEqual(delays, [1500, 4000]);
  for (const status of [401, 403]) {
    let count = 0;
    await notifyGoogleLogin({ functions: { invoke: async () => { count++; return { error: { context: { status } } }; } } }, "token", async () => {});
    assert.equal(count, 1);
  }
  await assert.doesNotReject(notifyGoogleLogin({ functions: { invoke: async () => { throw new Error("offline"); } } }, "token", async () => {}));
});

test("only the OAuth callback schedules alerts, without awaiting before navigation", () => {
  const callback = readFileSync(new URL("../src/app/auth/callback/page.tsx", import.meta.url), "utf8");
  assert.match(callback, /sessionUsesGoogleOAuth\(data\.session\)\) void notifyGoogleLogin/);
  assert.match(callback, /void notifyGoogleLogin[\s\S]*router\.replace/);
  const status = readFileSync(new URL("../src/components/auth-status.tsx", import.meta.url), "utf8");
  assert.ok(!status.includes("notifyGoogleLogin"));
});
