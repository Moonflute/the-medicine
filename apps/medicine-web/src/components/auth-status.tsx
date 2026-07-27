"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { Cloud, LogIn, LogOut } from "lucide-react";
import { getAppBasePath, getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/client";

function displayName(user: User) {
  const metadataName = user.user_metadata?.full_name ?? user.user_metadata?.name;
  return typeof metadataName === "string" && metadataName.trim() ? metadataName.trim() : user.email ?? "Account";
}

export function AuthStatus() {
  const [user, setUser] = useState<User | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;

    void supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => setUser(session?.user ?? null));
    return () => listener.subscription.unsubscribe();
  }, []);

  if (!isSupabaseConfigured()) return null;

  const signIn = async () => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase || typeof window === "undefined") return;
    setBusy(true);
    const redirectTo = `${window.location.origin}${getAppBasePath()}/auth/callback/`;
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo } });
    if (error) {
      setBusy(false);
      window.alert(`Google sign-in failed: ${error.message}`);
    }
  };

  const signOut = async () => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;
    setBusy(true);
    const { error } = await supabase.auth.signOut();
    setBusy(false);
    if (error) window.alert(`Sign-out failed: ${error.message}`);
  };

  if (!user) {
    return <button type="button" onClick={() => void signIn()} disabled={busy} className="secondary-action whitespace-nowrap" title="Sync learning records with a Google account"><LogIn className="h-4 w-4" />{busy ? "Connecting" : "Sign in"}</button>;
  }

  return <div className="flex min-w-0 items-center gap-2"><span className="hidden max-w-36 truncate text-xs font-medium text-slate-600 sm:inline" title={user.email ?? undefined}><Cloud className="mr-1 inline h-3.5 w-3.5 text-teal-700" />{displayName(user)}</span><button type="button" onClick={() => void signOut()} disabled={busy} className="secondary-action px-2.5" title="Sign out"><LogOut className="h-4 w-4" /><span className="hidden sm:inline">Sign out</span></button></div>;
}