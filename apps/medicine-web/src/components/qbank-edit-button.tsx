"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import type { QbankQuestion } from "@/lib/types";
import { EDITOR_USER_ID, isEditablePath } from "@/lib/document-edit-core";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { DocumentEditButton } from "./document-edit-button";

const PrivateQbankEditorDialog = dynamic(() => import("./private-qbank-editor-dialog"), { ssr: false });

export function QbankEditButton({ question, onSaved }: { question: QbankQuestion; onSaved: (payload: QbankQuestion) => void }) {
  const [owner, setOwner] = useState(false);
  const [open, setOpen] = useState(false);
  const sourcePath = typeof question.sourcePath === "string" ? question.sourcePath : "";
  const privateQuestion = question.questionBank === "practice" && /^QB-[A-Za-z0-9-]+$/.test(question.id);

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    let active = true;
    void client.auth.getUser().then(({ data }) => { if (active) setOwner(data.user?.id === EDITOR_USER_ID); });
    const { data } = client.auth.onAuthStateChange((_event, session) => setOwner(session?.user.id === EDITOR_USER_ID));
    return () => { active = false; data.subscription.unsubscribe(); };
  }, []);

  if (isEditablePath(sourcePath)) return <DocumentEditButton sourcePath={sourcePath} title={`Q-bank · ${question.id}`} />;
  if (!owner || !privateQuestion) return null;
  return <>
    <button type="button" onClick={() => setOpen(true)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-teal-300 bg-teal-50 text-teal-800 hover:bg-teal-100" title="비공개 실전문제 편집" aria-label={`${question.id} 편집`}><Pencil size={18} /></button>
    {open && <PrivateQbankEditorDialog question={question} onSaved={onSaved} onClose={() => setOpen(false)} />}
  </>;
}
