import { assertDeviceLoginStorage, establishDeviceLogin, getSupabaseBrowserClient } from "./supabase/client";

export type DeviceLoginCode = { id: string; code: string; expiresAt: string; expiresIn: number };

async function invoke<T>(input: object): Promise<T> {
  const client = getSupabaseBrowserClient();
  if (!client) throw new Error("로그인 연결을 확인해 주세요.");
  const { data, error } = await client.functions.invoke("device-login", { body: input });
  if (error) {
    let message = "인증 서버에 연결하지 못했습니다. 잠시 후 다시 시도해 주세요.";
    try {
      const body = await error.context?.json() as { error?: string } | undefined;
      if (typeof body?.error === "string") message = body.error;
    } catch { /* Do not show raw provider errors or credentials. */ }
    throw new Error(message);
  }
  if (!data || typeof data !== "object" || data.error) throw new Error("인증 응답을 확인하지 못했습니다.");
  return data as T;
}

export async function issueDeviceLoginCode() {
  const code = await invoke<DeviceLoginCode>({ action: "issue" });
  if (!/^\d{8}$/.test(code.code) || typeof code.id !== "string" || !Number.isFinite(code.expiresIn)) throw new Error("번호를 생성하지 못했습니다.");
  return code;
}

export async function revokeDeviceLoginCode(id: string) {
  await invoke({ action: "revoke", id });
}

export async function signInWithDeviceCode(code: string, remember: boolean) {
  assertDeviceLoginStorage(remember);
  const client = getSupabaseBrowserClient();
  if (!client) throw new Error("로그인 연결을 확인해 주세요.");
  const { data } = await client.auth.getSession();
  if (data.session) throw new Error("이미 로그인되어 있습니다. 계정을 바꾸려면 먼저 로그아웃해 주세요.");
  const result = await invoke<{ tokenHash: string; userId: string }>({ action: "redeem", code });
  if (typeof result.tokenHash !== "string" || typeof result.userId !== "string") throw new Error("번호를 확인하지 못했습니다.");
  await establishDeviceLogin(result.tokenHash, result.userId, remember);
}
