"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { Session, User } from "@supabase/supabase-js";
import { KeyRound, LogIn, LogOut, ShieldCheck } from "lucide-react";
import { clearTemporaryDeviceLogin, getAppBasePath, getSupabaseBrowserClient, isSupabaseConfigured, sessionUsesDeviceCode, sessionUsesGoogleOAuth, usesTemporaryDeviceLogin } from "@/lib/supabase/client";
import { deviceLoginSessionIsActive } from "@/lib/device-login";
import { EDITOR_USER_ID } from "@/lib/document-edit-core";

import { LearningSyncStatus } from "./learning-sync-status";

const DeviceLoginDialog = dynamic(() => import("./device-login-dialog").then((module) => module.DeviceLoginDialog), { ssr: false });
const QbankAccessDialog = dynamic(() => import("./qbank-access-dialog").then((module) => module.QbankAccessDialog), { ssr: false });

function displayName(user: User) {
  const metadataName = user.user_metadata?.full_name ?? user.user_metadata?.name;
  return typeof metadataName === "string" && metadataName.trim() ? metadataName.trim() : user.email ?? "Account";
}

export function AuthStatus({ compact = false }: { compact?: boolean }) {
  const accountMenu = useRef<HTMLDetailsElement>(null);
  const [session, setSession] = useState<Session | null>(null);
  const user = session?.user ?? null;
  const canIssue = sessionUsesGoogleOAuth(session);
  const canManageQbank = user?.id === EDITOR_USER_ID && Array.isArray(user.app_metadata?.providers) && user.app_metadata.providers.includes("google");
  const deviceCodeSession = sessionUsesDeviceCode(session) || Boolean(session && usesTemporaryDeviceLogin());
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const [dialog, setDialog] = useState<"sign-in" | "issue" | "qbank-access" | null>(null);

  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      const menu = accountMenu.current;
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
    };
    const escape = (event: KeyboardEvent) => {
      const menu = accountMenu.current;
      if (event.key !== "Escape" || !menu?.open) return;
      menu.open = false;
      menu.querySelector("summary")?.focus();
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", dismiss); document.removeEventListener("keydown", escape); };
  }, []);

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;

    void supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setReady(true);
      if (nextSession?.user.id !== EDITOR_USER_ID) setDialog(current => current === "qbank-access" ? null : current);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!deviceCodeSession) return;
    let mounted = true;
    let checking = false;
    const check = async () => {
      if (checking || !mounted) return;
      checking = true;
      try {
        if (await deviceLoginSessionIsActive() || !mounted) return;
        const supabase = getSupabaseBrowserClient();
        await supabase?.auth.signOut({ scope: "local" });
        clearTemporaryDeviceLogin();
        window.location.reload();
      } catch { /* A transient network error must not sign out a valid session. */ }
      finally { checking = false; }
    };
    void check();
    const timer = window.setInterval(() => void check(), 20_000);
    const onFocus = () => void check();
    window.addEventListener("focus", onFocus);
    return () => { mounted = false; window.clearInterval(timer); window.removeEventListener("focus", onFocus); };
  }, [deviceCodeSession]);

  if (!isSupabaseConfigured()) return null;

  const openAccountDialog = (next: "issue" | "qbank-access") => {
    const menu = accountMenu.current;
    if (menu) {
      menu.open = false;
      menu.querySelector("summary")?.focus();
    }
    setDialog(next);
  };

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
    const wasTemporary = deviceCodeSession;
    try {
      const { error } = await supabase.auth.signOut({ scope: "local" });
      if (error) throw error;
      clearTemporaryDeviceLogin();
      if (wasTemporary) window.location.reload();
    } catch { window.alert("로그아웃하지 못했습니다. 연결을 확인하고 다시 시도해 주세요."); }
    finally { setBusy(false); }
  };

  return <>
    <div className="flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2">
      <LearningSyncStatus compact={compact} />
      {user ? <>
        <span className="hidden max-w-36 truncate text-xs font-medium text-slate-600 lg:inline" title={user.email ?? undefined}>{displayName(user)}</span>
        {canIssue || canManageQbank ? <details ref={accountMenu} className="relative shrink-0" onBlur={event => {
          if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
        }}>
          <summary className="secondary-action h-9 w-9 cursor-pointer list-none px-0 py-1.5 [&::-webkit-details-marker]:hidden" title="로그인 및 계정 관리" aria-label="로그인 및 계정 관리" aria-disabled={busy} onClick={event => { if (busy) event.preventDefault(); }}>
            <KeyRound className="h-4 w-4" />
          </summary>
          <div className="absolute left-1/2 z-50 mt-2 w-56 max-w-[calc(100vw_-_2rem)] -translate-x-1/2 rounded-lg border border-slate-200 bg-white p-1.5 text-slate-700 shadow-lg">
            <p className="truncate border-b border-slate-100 px-2.5 py-2 text-xs text-slate-500" title={user.email ?? undefined}>{user.email ?? displayName(user)}</p>
            {canIssue ? <button type="button" onClick={() => openAccountDialog("issue")} disabled={busy} className="flex min-h-10 w-full items-center gap-2 rounded px-2.5 py-2 text-left text-sm hover:bg-slate-100 focus-visible:bg-slate-100 disabled:opacity-50"><KeyRound className="h-4 w-4 shrink-0" />다른 기기 로그인</button> : null}
            {canManageQbank ? <button type="button" onClick={() => openAccountDialog("qbank-access")} disabled={busy} className="flex min-h-10 w-full items-center gap-2 rounded px-2.5 py-2 text-left text-sm hover:bg-slate-100 focus-visible:bg-slate-100 disabled:opacity-50"><ShieldCheck className="h-4 w-4 shrink-0" />계정 및 권한 관리</button> : null}
          </div>
        </details> : null}
        <button type="button" onClick={() => void signOut()} disabled={busy} className="secondary-action h-9 shrink-0 px-2 py-1.5 sm:px-2.5" title="Sign out"><LogOut className="h-4 w-4" /><span className="hidden sm:inline">Sign out</span></button>
      </> : <button type="button" onClick={() => setDialog("sign-in")} disabled={busy || !ready} className="secondary-action h-9 whitespace-nowrap px-2.5 py-1.5 disabled:opacity-50" title="Google 또는 임시 번호로 로그인"><LogIn className="h-4 w-4" />Sign in</button>}
    </div>
    {dialog === "sign-in" || dialog === "issue" ? <DeviceLoginDialog mode={dialog} onClose={() => setDialog(null)} onGoogleSignIn={signIn} /> : null}
    {dialog === "qbank-access" && canManageQbank ? <QbankAccessDialog onClose={() => setDialog(null)} /> : null}
  </>;
}
