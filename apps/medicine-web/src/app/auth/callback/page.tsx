"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/client";

export default function AuthCallbackPage() {
  const router = useRouter();
  const [message, setMessage] = useState("Confirming the Google sign-in session.");
  const configured = isSupabaseConfigured();

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;
    void supabase.auth.getSession().then(({ data, error }) => {
      if (error || !data.session) {
        setMessage(error?.message ?? "The sign-in session could not be confirmed. Please try again.");
        return;
      }
      router.replace("/review");
    });
  }, [router]);

  return <section className="surface mx-auto max-w-lg p-6"><p className="text-sm text-slate-600">{configured ? message : "Supabase configuration is not available."}</p></section>;
}