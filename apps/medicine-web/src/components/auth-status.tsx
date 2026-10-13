"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { User } from "@supabase/supabase-js";
import { KeyRound, LogIn, LogOut } from "lucide-react";
import { clearTemporaryDeviceLogin, getAppBasePath, getSupabaseBrowserClient, isSupabaseConfigured, usesTemporaryDeviceLogin } from "@/lib/supabase/client";

import { LearningSyncStatus } from "./learning-sync-status";

const DeviceLoginDialog = dynamic(() => import("./device-login-dialog").then((module) => module.DeviceLoginDialog), { ssr: false });

function displayName(user: User) {
  const metadataName = user.user_metadata?.full_name ?? user.user_metadata?.name;
  return typeof metadataName === "string" && metadataName.trim() ? metadataName.trim() : user.email ?? "Account";
}

export function AuthStatus() {
  const [user, setUser] = useState<User | null>(null);
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const [dialog, setDialog] = useState<"sign-in" | "issue" | null>(null);

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;

    void supabase.auth.getSession().then(({ data }) => { setUser(data.session?.user ?? null); setReady(true); });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => { setUser(session?.user ?? null); setReady(true); });
    return () => listener.subscription.unsubscribe();
  }, []);

  if (!isSupabaseConfigured()) return null;

  const signIn = async () => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase || typeof window === "undefined") return;
    clearTemporaryDeviceLogin();
    const redirectTo = `${window.location.origin}${getAppBasePath()}/auth/callback/`;
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo } });
    if (error) {
      throw new Error("Google 로그인을 연결하지 못했습니다. 다시 시도해 주세요.");
    }
  };

  const signOut = async () => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;
    setBusy(true);
    const wasTemporary = usesTemporaryDeviceLogin();
    try {
      const { error } = await supabase.auth.signOut({ scope: "local" });
      if (error) throw error;
      clearTemporaryDeviceLogin();
      if (wasTemporary) window.location.reload();
    } catch { window.alert("로그아웃하지 못했습니다. 연결을 확인하고 다시 시도해 주세요."); }
    finally { setBusy(false); }
  };

  return <>
    <div className="flex min-w-0 shrink-0 items-center gap-2">
      <LearningSyncStatus />
      {user ? <>
        <span className="hidden max-w-36 truncate text-xs font-medium text-slate-600 sm:inline" title={user.email ?? undefined}>{displayName(user)}</span>
        <button type="button" onClick={() => setDialog("issue")} disabled={busy} className="secondary-action shrink-0 px-2.5" title="다른 기기 로그인 번호" aria-label="다른 기기 로그인 번호"><KeyRound className="h-4 w-4" /></button>
        <button type="button" onClick={() => void signOut()} disabled={busy} className="secondary-action shrink-0 px-2.5" title="Sign out"><LogOut className="h-4 w-4" /><span className="hidden sm:inline">Sign out</span></button>
      </> : <button type="button" onClick={() => setDialog("sign-in")} disabled={busy || !ready} className="secondary-action whitespace-nowrap disabled:opacity-50" title="Google 또는 임시 번호로 로그인"><LogIn className="h-4 w-4" />Sign in</button>}
    </div>
    {dialog ? <DeviceLoginDialog mode={dialog} onClose={() => setDialog(null)} onGoogleSignIn={signIn} /> : null}
  </>;
}
