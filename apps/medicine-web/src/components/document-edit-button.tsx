"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import { EDITOR_USER_ID, isPilotPath } from "@/lib/document-edit-core";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const EditorDialog = dynamic(() => import("./document-editor-dialog"), { ssr: false });

export function DocumentEditButton({ sourcePath, title }: { sourcePath: string; title: string }) {
  const [owner, setOwner] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!isPilotPath(sourcePath)) return;
    const client = getSupabaseBrowserClient();
    if (!client) return;
    let active = true;
    void client.auth.getUser().then(({ data }) => { if (active) setOwner(data.user?.id === EDITOR_USER_ID); });
    const { data } = client.auth.onAuthStateChange((_event, session) => {
      setOwner(session?.user.id === EDITOR_USER_ID);
    });
    return () => { active = false; data.subscription.unsubscribe(); };
  }, [sourcePath]);
  if (!owner || !isPilotPath(sourcePath)) return null;
  return <>
    <button type="button" onClick={() => setOpen(true)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-teal-300 bg-teal-50 text-teal-800 hover:bg-teal-100" title="GitHub 원본 편집" aria-label={`${title} 편집`}><Pencil size={18} /></button>
    {open && <EditorDialog path={sourcePath} title={title} onClose={() => setOpen(false)} />}
  </>;
}
