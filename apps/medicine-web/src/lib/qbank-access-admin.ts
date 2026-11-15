import { EDITOR_USER_ID } from "./document-edit-core";
import { getSupabaseBrowserClient } from "./supabase/client";

export type QbankAccessUser = {
  id: string;
  email: string;
  name: string;
  enabled: boolean;
  isOwner: boolean;
  canApprove: boolean;
  accessLevel: "master" | "approved" | "basic";
  canEditShared: boolean;
  canManageAccess: boolean;
  createdAt: string | null;
  lastSignInAt: string | null;
};
export type QbankAccessPage = { users: QbankAccessUser[]; page: number; pageSize: number; total: number | null; hasMore: boolean };
type QbankAccessUpdate = Pick<QbankAccessUser, "enabled" | "accessLevel" | "canEditShared" | "canManageAccess"> & { userId: string };

function hasPermissions(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;
  const permissions = value as Record<string, unknown>;
  return ["master", "approved", "basic"].includes(String(permissions.accessLevel))
    && typeof permissions.canEditShared === "boolean" && typeof permissions.canManageAccess === "boolean";
}

async function invoke<T>(body: object, signal?: AbortSignal): Promise<T> {
  const client = getSupabaseBrowserClient();
  if (!client) throw new Error("로그인 연결을 확인해 주세요.");
  const { data: before } = await client.auth.getSession();
  if (before.session?.user.id !== EDITOR_USER_ID) throw new Error("마스터 계정으로 로그인해 주세요.");
  const { data, error } = await client.functions.invoke("qbank-access-admin", { body, signal });
  const { data: after } = await client.auth.getSession();
  if (after.session?.user.id !== EDITOR_USER_ID) throw new Error("로그인 계정이 변경되었습니다.");
  if (error) {
    let message = "권한관리 서버에 연결하지 못했습니다. 목록을 새로고침해 주세요.";
    try {
      const response = await error.context?.json() as { error?: string } | undefined;
      if (typeof response?.error === "string") message = response.error;
    } catch { /* Do not expose raw provider errors or credentials. */ }
    throw new Error(message);
  }
  if (!data || typeof data !== "object" || data.error) throw new Error("권한관리 응답을 확인하지 못했습니다.");
  return data as T;
}

export async function listQbankAccess(page: number, search: string, signal?: AbortSignal) {
  const result = await invoke<QbankAccessPage>({ action: "list", page, search }, signal);
  if (!Array.isArray(result.users) || !result.users.every(hasPermissions)
    || result.page !== page || typeof result.hasMore !== "boolean") throw new Error("계정 목록을 확인하지 못했습니다. 목록을 새로고침해 주세요.");
  return result;
}

export async function setQbankAccess(userId: string, enabled: boolean) {
  const result = await invoke<QbankAccessUpdate>({ action: "set-access", userId, enabled });
  if (result.userId !== userId || result.enabled !== enabled || !hasPermissions(result)) throw new Error("저장 결과를 확인하지 못했습니다. 목록을 새로고침해 주세요.");
  return result;
}
