import { assertEditor, EDITOR_USER_ID } from "../document-editor/document-edit-core.ts";

type Config = { supabaseUrl: string; anonKey: string; serviceKey: string; fetcher?: typeof fetch };
type AuthUser = {
  id: string;
  email?: string;
  email_confirmed_at?: string;
  created_at?: string;
  last_sign_in_at?: string;
  is_anonymous?: boolean;
  banned_until?: string;
  deleted_at?: string;
  app_metadata?: { providers?: string[] };
  user_metadata?: { full_name?: unknown; name?: unknown };
};
const ORIGINS = new Set(["https://moonflute.github.io", "http://localhost:3000", "http://localhost:3017"]);
const UUID = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
const PAGE_SIZE = 25;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isUser(value: unknown): value is AuthUser {
  return isRecord(value) && typeof value.id === "string" && UUID.test(value.id);
}

function canApprove(user: AuthUser) {
  return Boolean(user.email && user.email_confirmed_at && !user.is_anonymous && !user.deleted_at
    && !(user.banned_until && Date.parse(user.banned_until) > Date.now())
    && Array.isArray(user.app_metadata?.providers) && user.app_metadata.providers.includes("google"));
}

function accountPermissions(user: AuthUser, enabled: boolean) {
  let canEditShared = false;
  try { assertEditor(user); canEditShared = true; }
  catch { /* Shared editing remains restricted to the existing fixed owner. */ }
  return {
    accessLevel: user.id === EDITOR_USER_ID ? "master" : enabled ? "approved" : "basic",
    canEditShared,
    canManageAccess: canEditShared && canApprove(user),
  };
}

function timestamp(value: unknown): string | null {
  return typeof value === "string" && Number.isFinite(Date.parse(value)) ? new Date(value).toISOString() : null;
}

export function createQbankAccessHandler(config: Config) {
  const fetcher = config.fetcher ?? fetch;
  const baseUrl = config.supabaseUrl.replace(/\/$/, "");
  return async (req: Request): Promise<Response> => {
    const origin = req.headers.get("origin") ?? "";
    const headers = {
      "Content-Type": "application/json", "Cache-Control": "no-store", "Vary": "Origin",
      ...(ORIGINS.has(origin) ? {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      } : {}),
    };
    const reply = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers });
    if (origin && !ORIGINS.has(origin)) return reply({ error: "허용되지 않은 요청입니다." }, 403);
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers });
    if (req.method !== "POST") return reply({ error: "POST만 허용됩니다." }, 405);
    const bearer = req.headers.get("authorization")?.match(/^Bearer (\S+)$/i)?.[1];
    if (!bearer) return reply({ error: "로그인이 필요합니다." }, 401);
    if (!baseUrl || !config.anonKey || !config.serviceKey) return reply({ error: "권한관리 서버 설정을 확인해 주세요." }, 503);

    try {
      // Authenticate with Auth before making any service-role request.
      const authenticated = await fetcher(`${baseUrl}/auth/v1/user`, {
        headers: { Authorization: `Bearer ${bearer}`, apikey: config.anonKey },
        signal: AbortSignal.timeout(10_000),
      });
      if (authenticated.status === 401 || authenticated.status === 403) return reply({ error: "다시 로그인해 주세요." }, 401);
      if (!authenticated.ok) return reply({ error: "로그인 상태를 확인하지 못했습니다." }, 502);
      const caller: unknown = await authenticated.json();
      if (!isUser(caller) || !canApprove(caller)) return reply({ error: "마스터 계정만 권한을 관리할 수 있습니다." }, 403);
      try { assertEditor(caller); }
      catch { return reply({ error: "마스터 계정만 권한을 관리할 수 있습니다." }, 403); }

      const raw = await req.text();
      if (new TextEncoder().encode(raw).length > 4_096) return reply({ error: "요청이 너무 큽니다." }, 413);
      let input: unknown;
      try { input = JSON.parse(raw); }
      catch { return reply({ error: "요청 형식을 확인해 주세요." }, 400); }
      if (!isRecord(input)) return reply({ error: "요청 형식을 확인해 주세요." }, 400);

      const admin = async (path: string, init: RequestInit = {}) => {
        const response = await fetcher(`${baseUrl}${path}`, {
          ...init,
          headers: { Authorization: `Bearer ${config.serviceKey}`, apikey: config.serviceKey, "Content-Type": "application/json", ...init.headers },
          signal: AbortSignal.timeout(15_000),
        });
        const data: unknown = await response.json().catch(() => null);
        return { response, data };
      };

      if (input.action === "list") {
        const page = input.page ?? 1;
        const search = input.search ?? "";
        if (typeof page !== "number" || !Number.isSafeInteger(page) || page < 1 || page > 100_000
          || typeof search !== "string" || search.length > 200) return reply({ error: "검색 조건을 확인해 주세요." }, 400);
        const params = new URLSearchParams({ page: String(page), per_page: String(PAGE_SIZE) });
        if (search.trim()) params.set("filter", search.trim().toLowerCase().replace(/[\\%_]/g, "\\$&"));
        const listed = await admin(`/auth/v1/admin/users?${params}`);
        if (!listed.response.ok || !isRecord(listed.data) || !Array.isArray(listed.data.users)
          || !listed.data.users.every(isUser)) return reply({ error: "계정 목록을 불러오지 못했습니다." }, 502);
        const users: AuthUser[] = listed.data.users;
        const enabledIds = new Set<string>();
        if (users.length) {
          const query = new URLSearchParams({ select: "user_id,enabled", user_id: `in.(${users.map(user => user.id).join(",")})` });
          const access = await admin(`/rest/v1/private_qbank_access?${query}`);
          if (!access.response.ok || !Array.isArray(access.data)
            || !access.data.every(row => isRecord(row) && typeof row.user_id === "string" && typeof row.enabled === "boolean")) {
            return reply({ error: "접근 권한을 확인하지 못했습니다." }, 502);
          }
          for (const row of access.data) if (row.enabled) enabledIds.add(row.user_id);
        }
        const rawTotal = listed.response.headers.get("x-total-count");
        const total = rawTotal !== null && /^\d+$/.test(rawTotal) ? Number(rawTotal) : null;
        return reply({
          users: users.map(user => {
            const name = user.user_metadata?.full_name ?? user.user_metadata?.name;
            return {
              id: user.id, email: user.email ?? "", name: typeof name === "string" ? name.trim().slice(0, 160) : "",
              enabled: enabledIds.has(user.id), isOwner: user.id === EDITOR_USER_ID, canApprove: canApprove(user),
              ...accountPermissions(user, enabledIds.has(user.id)),
              createdAt: timestamp(user.created_at), lastSignInAt: timestamp(user.last_sign_in_at),
            };
          }),
          page, pageSize: PAGE_SIZE, total,
          hasMore: total !== null ? page * PAGE_SIZE < total : (listed.response.headers.get("link")?.includes('rel="next"') ?? users.length === PAGE_SIZE),
        });
      }

      if (input.action === "set-access") {
        if (typeof input.userId !== "string" || !UUID.test(input.userId) || typeof input.enabled !== "boolean") {
          return reply({ error: "계정과 승인 상태를 확인해 주세요." }, 400);
        }
        const userId = input.userId.toLowerCase();
        if (userId === EDITOR_USER_ID && !input.enabled) return reply({ error: "마스터 계정의 접근 권한은 해제할 수 없습니다." }, 400);
        const target = await admin(`/auth/v1/admin/users/${userId}`);
        if (target.response.status === 404) return reply({ error: "계정이 없습니다. 목록을 새로고침해 주세요." }, 404);
        if (!target.response.ok || !isUser(target.data) || target.data.id !== userId) return reply({ error: "대상 계정을 확인하지 못했습니다." }, 502);
        if (input.enabled && !canApprove(target.data)) return reply({ error: "Google 로그인과 이메일 확인을 완료한 계정만 승인할 수 있습니다." }, 400);
        const saved = await admin("/rest/v1/private_qbank_access?on_conflict=user_id&select=user_id,enabled", {
          method: "POST",
          headers: { Prefer: "resolution=merge-duplicates,return=representation" },
          body: JSON.stringify({ user_id: userId, enabled: input.enabled }),
        });
        if (!saved.response.ok || !Array.isArray(saved.data) || saved.data.length !== 1
          || saved.data[0]?.user_id !== userId || saved.data[0]?.enabled !== input.enabled) {
          return reply({ error: "저장 결과를 확인하지 못했습니다. 목록을 새로고침해 주세요." }, 502);
        }
        return reply({ userId, enabled: input.enabled, ...accountPermissions(target.data, input.enabled) });
      }
      return reply({ error: "지원하지 않는 작업입니다." }, 400);
    } catch {
      // A write may have completed before a timeout; never retry it automatically.
      return reply({ error: "처리 결과를 확인하지 못했습니다. 목록을 새로고침해 주세요." }, 502);
    }
  };
}
