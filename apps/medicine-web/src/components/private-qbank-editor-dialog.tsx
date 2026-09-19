"use client";

import { useEffect, useRef, useState } from "react";
import type { QbankAnswer, QbankQuestion } from "@/lib/types";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type Payload = Record<string, unknown>;
type Fields = { question: string; options: Partial<Record<QbankAnswer, string>>; answer: QbankAnswer | ""; explanation: string };
type Draft = { version: 1; base: Payload; fields: Fields; savedAt: string };
const ANSWERS: QbankAnswer[] = ["A", "B", "C", "D", "E"];

async function invoke<T>(input: object): Promise<T> {
  const client = getSupabaseBrowserClient();
  if (!client) throw new Error("로그인 연결을 확인해주세요.");
  const { data, error } = await client.functions.invoke("document-editor", { body: input });
  if (error) {
    const message = error.message;
    try {
      const body = await error.context.json() as { error?: string; latest?: { payload?: Payload } };
      const failure = Object.assign(new Error(body.error ?? message), { latest: body.latest });
      throw failure;
    } catch (value) {
      if (value instanceof Error && "latest" in value) throw value;
    }
    throw new Error(message);
  }
  return data;
}

function fieldsFrom(payload: Payload): Fields {
  const sourceOptions = payload.options && typeof payload.options === "object" && !Array.isArray(payload.options) ? payload.options as Record<string, unknown> : {};
  return {
    question: typeof payload.question === "string" ? payload.question : "",
    options: Object.fromEntries(ANSWERS.map(key => [key, typeof sourceOptions[key] === "string" ? sourceOptions[key] : ""])) as Fields["options"],
    answer: ANSWERS.includes(payload.answer as QbankAnswer) ? payload.answer as QbankAnswer : "",
    explanation: typeof payload.explanation === "string" ? payload.explanation : "",
  };
}

export default function PrivateQbankEditorDialog({ question, onClose, onSaved }: { question: QbankQuestion; onClose: () => void; onSaved: (payload: QbankQuestion) => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [base, setBase] = useState<Payload | null>(null);
  const [fields, setFields] = useState<Fields | null>(null);
  const [status, setStatus] = useState("비공개 문제 최신 원본을 불러오는 중…");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [conflict, setConflict] = useState<Payload | null>(null);
  const draftKey = `medicine:private-qbank-draft:v1:${question.id}`;

  const read = async (restoreDraft = false) => {
    setError("");
    const result = await invoke<{ payload: Payload }>({ action: "read-private-qbank", id: question.id });
    setBase(result.payload);
    const remoteFields = fieldsFrom(result.payload);
    if (restoreDraft) {
      try {
        const draft = JSON.parse(localStorage.getItem(draftKey) ?? "null") as Draft | null;
        if (draft?.version === 1 && draft.fields && JSON.stringify(draft.base) === JSON.stringify(result.payload)) {
          setFields(draft.fields); setStatus(`이 기기 임시저장본 복구 · ${new Date(draft.savedAt).toLocaleTimeString("ko-KR")}`); return;
        }
      } catch { /* invalid draft never replaces the remote source */ }
    }
    setFields(remoteFields); setStatus("비공개 Supabase 원본 · 자동 임시저장 사용");
  };

  useEffect(() => {
    dialog.current?.showModal();
    const timer = window.setTimeout(() => { void read(true).catch(value => setError(value instanceof Error ? value.message : "문제를 불러오지 못했습니다.")); });
    return () => window.clearTimeout(timer);
  // The dialog is intentionally keyed by question id; a different problem gets a new source.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.id]);

  useEffect(() => {
    if (!base || !fields) return;
    const timer = window.setTimeout(() => {
      try {
        localStorage.setItem(draftKey, JSON.stringify({ version: 1, base, fields, savedAt: new Date().toISOString() } satisfies Draft));
        setStatus("이 기기에 임시저장됨");
      } catch { setError("이 기기의 임시저장에 실패했습니다."); }
    }, 500);
    return () => window.clearTimeout(timer);
  }, [base, draftKey, fields]);

  const save = async () => {
    if (!base || !fields || busy || conflict) return;
    setBusy(true); setError("");
    try {
      const result = await invoke<{ payload: Payload }>({ action: "save-private-qbank", id: question.id, base, fields });
      setBase(result.payload); setFields(fieldsFrom(result.payload)); setStatus("비공개 Supabase 원본 저장 완료 · 이 문제에 바로 반영되었습니다.");
      try { localStorage.removeItem(draftKey); } catch { /* the remote save is already authoritative */ }
      onSaved(result.payload as QbankQuestion);
    } catch (value) {
      const message = value instanceof Error ? value.message : "비공개 문제를 저장하지 못했습니다.";
      setError(message);
      const latest = (value as Error & { latest?: { payload?: Payload } }).latest?.payload;
      if (latest) setConflict(latest);
    } finally { setBusy(false); }
  };

  return <dialog ref={dialog} onCancel={event => { event.preventDefault(); if (!busy) onClose(); }} className="fixed inset-0 m-auto h-[92dvh] max-h-none w-[min(920px,96vw)] max-w-none rounded-2xl border border-slate-200 bg-slate-50 p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/60">
    <div className="flex h-full flex-col">
      <header className="flex items-start justify-between gap-4 border-b bg-white p-5"><div><p className="text-xs font-semibold text-teal-700">비공개 실전문제 편집</p><h2 className="mt-1 text-xl font-bold">{question.id}</h2><p className="mt-2 text-sm text-slate-600">문제·보기·정답·해설만 수정합니다. 실전문제 원본은 Supabase에 비공개로 유지됩니다.</p></div><button type="button" disabled={busy} onClick={onClose} className="shrink-0 rounded-lg border px-4 py-2 text-sm">닫기</button></header>
      <main className="flex-1 space-y-5 overflow-y-auto p-5 sm:p-8">
        {error && <p role="alert" className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">{error}</p>}
        {conflict && <section className="rounded-xl border border-amber-300 bg-amber-50 p-4"><h3 className="font-semibold">다른 기기에서 원본이 변경되었습니다.</h3><p className="mt-1 text-sm text-slate-700">내 입력은 이 기기에 남아 있습니다. 최신 원본을 다시 불러온 뒤 필요한 내용을 옮겨 저장하세요.</p><button type="button" onClick={() => { setConflict(null); void read(false).catch(value => setError((value as Error).message)); }} className="mt-3 rounded-lg border border-amber-400 bg-white px-3 py-2 text-sm">최신 원본 불러오기</button></section>}
        {!fields ? <p className="text-sm text-slate-600">불러오는 중…</p> : <>
          <label className="block text-sm font-semibold text-slate-800">문제<textarea value={fields.question} onChange={event => setFields({ ...fields, question: event.target.value })} disabled={busy || Boolean(conflict)} className="mt-2 min-h-40 w-full rounded-xl border border-slate-300 bg-white p-4 text-base font-normal leading-7 outline-none focus:border-teal-600" /></label>
          <section><h3 className="text-sm font-semibold text-slate-800">보기와 정답</h3><div className="mt-2 grid gap-3">{ANSWERS.map(key => <label key={key} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3"><span className="pt-2 font-semibold">{key}.</span><textarea value={fields.options[key] ?? ""} onChange={event => setFields({ ...fields, options: { ...fields.options, [key]: event.target.value } })} disabled={busy || Boolean(conflict)} placeholder={`${key} 보기`} className="min-h-12 flex-1 resize-y outline-none" /></label>)}</div><label className="mt-3 block text-sm font-medium">정답<select value={fields.answer} onChange={event => setFields({ ...fields, answer: event.target.value as QbankAnswer | "" })} disabled={busy || Boolean(conflict)} className="ml-3 rounded-lg border border-slate-300 bg-white px-3 py-2"><option value="">정답 미확인</option>{ANSWERS.filter(key => fields.options[key]?.trim()).map(key => <option key={key} value={key}>{key}</option>)}</select></label></section>
          <label className="block text-sm font-semibold text-slate-800">해설<textarea value={fields.explanation} onChange={event => setFields({ ...fields, explanation: event.target.value })} disabled={busy || Boolean(conflict)} className="mt-2 min-h-52 w-full rounded-xl border border-slate-300 bg-white p-4 text-base font-normal leading-7 outline-none focus:border-teal-600" /></label>
        </>}
      </main>
      <footer className="flex flex-wrap items-center justify-between gap-3 border-t bg-white p-4"><p role="status" className="text-sm text-slate-600">{status}</p><div className="flex gap-2"><button type="button" disabled={busy} onClick={() => void read(false).catch(value => setError((value as Error).message))} className="rounded-lg border px-3 py-2 text-sm">최신 원본 확인</button><button type="button" disabled={!fields || !base || busy || Boolean(conflict)} onClick={() => void save()} className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white disabled:opacity-40">{busy ? "저장 중…" : "변경사항 저장"}</button></div></footer>
    </div>
  </dialog>;
}
