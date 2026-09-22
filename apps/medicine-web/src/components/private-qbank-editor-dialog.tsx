"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Plus, Search, X } from "lucide-react";
import type { QbankAnswer, QbankQuestion, RelatedTheoryDocument } from "@/lib/types";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type Payload = Record<string, unknown>;
type Fields = { question: string; options: Partial<Record<QbankAnswer, string>>; answer: QbankAnswer | ""; explanation: string; relatedDocuments: RelatedTheoryDocument[] };
type Draft = { version: 2; base: Payload; fields: Fields; savedAt: string };
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

function documentKey(document: Pick<RelatedTheoryDocument, "type" | "slug">) {
  return `${document.type}:${document.slug}`;
}

function fieldsFrom(payload: Payload, catalog: RelatedTheoryDocument[]): Fields {
  const sourceOptions = payload.options && typeof payload.options === "object" && !Array.isArray(payload.options) ? payload.options as Record<string, unknown> : {};
  const catalogByKey = new Map(catalog.map((document) => [documentKey(document), document]));
  const relatedDocuments = new Map<string, RelatedTheoryDocument>();
  if (Array.isArray(payload.relatedDocuments)) {
    for (const value of payload.relatedDocuments) {
      if (!value || typeof value !== "object" || Array.isArray(value)) continue;
      const item = value as Record<string, unknown>;
      if ((item.type !== "disease" && item.type !== "cc") || typeof item.slug !== "string") continue;
      const known = catalogByKey.get(`${item.type}:${item.slug}`);
      if (known) relatedDocuments.set(documentKey(known), known);
    }
  }
  for (const [type, slugs] of [["disease", payload.relatedDiseaseSlugs], ["cc", payload.relatedCcSlugs]] as const) {
    if (!Array.isArray(slugs)) continue;
    for (const slug of slugs) {
      if (typeof slug !== "string") continue;
      const known = catalogByKey.get(`${type}:${slug}`);
      if (known) relatedDocuments.set(documentKey(known), known);
    }
  }
  return {
    question: typeof payload.question === "string" ? payload.question : "",
    options: Object.fromEntries(ANSWERS.map(key => [key, typeof sourceOptions[key] === "string" ? sourceOptions[key] : ""])) as Fields["options"],
    answer: ANSWERS.includes(payload.answer as QbankAnswer) ? payload.answer as QbankAnswer : "",
    explanation: typeof payload.explanation === "string" ? payload.explanation : "",
    relatedDocuments: [...relatedDocuments.values()],
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
  const [pickerOpen, setPickerOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [theoryDocuments, setTheoryDocuments] = useState<RelatedTheoryDocument[]>([]);
  const draftKey = `medicine:private-qbank-draft:v2:${question.id}`;
  const filteredDocuments = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("ko-KR");
    return theoryDocuments.filter((document) => !normalized || `${document.title} ${document.category ?? ""}`.toLocaleLowerCase("ko-KR").includes(normalized)).slice(0, 100);
  }, [query, theoryDocuments]);

  const read = async (restoreDraft = false) => {
    setError("");
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    const [result, catalogResponse] = await Promise.all([
      invoke<{ payload: Payload }>({ action: "read-private-qbank", id: question.id }),
      fetch(`${basePath}/generated/theory-documents.json`, { cache: "force-cache" }),
    ]);
    if (!catalogResponse.ok) throw new Error("이론 페이지 검색 목록을 불러오지 못했습니다.");
    const catalog = await catalogResponse.json() as RelatedTheoryDocument[];
    setTheoryDocuments(catalog);
    setBase(result.payload);
    const remoteFields = fieldsFrom(result.payload, catalog);
    if (restoreDraft) {
      try {
        const draft = JSON.parse(localStorage.getItem(draftKey) ?? "null") as Draft | null;
        if (draft?.version === 2 && draft.fields && JSON.stringify(draft.base) === JSON.stringify(result.payload)) {
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
    if (JSON.stringify(fields) === JSON.stringify(fieldsFrom(base, theoryDocuments))) {
      try { localStorage.removeItem(draftKey); } catch { /* no unsaved draft to preserve */ }
      return;
    }
    const timer = window.setTimeout(() => {
      try {
        localStorage.setItem(draftKey, JSON.stringify({ version: 2, base, fields, savedAt: new Date().toISOString() } satisfies Draft));
        setStatus("이 기기에 임시저장됨");
      } catch { setError("이 기기의 임시저장에 실패했습니다."); }
    }, 500);
    return () => window.clearTimeout(timer);
  }, [base, draftKey, fields, theoryDocuments]);

  const save = async () => {
    if (!base || !fields || busy || conflict) return;
    setBusy(true); setError("");
    try {
      const result = await invoke<{ payload: Payload }>({ action: "save-private-qbank", id: question.id, base, fields });
      setBase(result.payload); setFields(fieldsFrom(result.payload, theoryDocuments)); setStatus("비공개 Supabase 원본 저장 완료 · 이 문제에 바로 반영되었습니다.");
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
      <header className="flex items-start justify-between gap-4 border-b bg-white p-5"><div><p className="text-xs font-semibold text-teal-700">비공개 실전문제 편집</p><h2 className="mt-1 text-xl font-bold">{question.id}</h2><p className="mt-2 text-sm text-slate-600">문제·보기·정답·해설·관련 이론을 수정합니다. 실전문제 원본은 Supabase에 비공개로 유지됩니다.</p></div><button type="button" disabled={busy} onClick={onClose} className="shrink-0 rounded-lg border px-4 py-2 text-sm">닫기</button></header>
      <main className="flex-1 space-y-5 overflow-y-auto p-5 sm:p-8">
        {error && <p role="alert" className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">{error}</p>}
        {conflict && <section className="rounded-xl border border-amber-300 bg-amber-50 p-4"><h3 className="font-semibold">다른 기기에서 원본이 변경되었습니다.</h3><p className="mt-1 text-sm text-slate-700">내 입력은 이 기기에 남아 있습니다. 최신 원본을 다시 불러온 뒤 필요한 내용을 옮겨 저장하세요.</p><button type="button" onClick={() => { setConflict(null); void read(false).catch(value => setError((value as Error).message)); }} className="mt-3 rounded-lg border border-amber-400 bg-white px-3 py-2 text-sm">최신 원본 불러오기</button></section>}
        {!fields ? <p className="text-sm text-slate-600">불러오는 중…</p> : <>
          <label className="block text-sm font-semibold text-slate-800">문제<textarea value={fields.question} onChange={event => setFields({ ...fields, question: event.target.value })} disabled={busy || Boolean(conflict)} className="mt-2 min-h-40 w-full rounded-xl border border-slate-300 bg-white p-4 text-base font-normal leading-7 outline-none focus:border-teal-600" /></label>
          <section><h3 className="text-sm font-semibold text-slate-800">보기와 정답</h3><div className="mt-2 grid gap-3">{ANSWERS.map(key => <label key={key} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3"><span className="pt-2 font-semibold">{key}.</span><textarea value={fields.options[key] ?? ""} onChange={event => setFields({ ...fields, options: { ...fields.options, [key]: event.target.value } })} disabled={busy || Boolean(conflict)} placeholder={`${key} 보기`} className="min-h-12 flex-1 resize-y outline-none" /></label>)}</div><label className="mt-3 block text-sm font-medium">정답<select value={fields.answer} onChange={event => setFields({ ...fields, answer: event.target.value as QbankAnswer | "" })} disabled={busy || Boolean(conflict)} className="ml-3 rounded-lg border border-slate-300 bg-white px-3 py-2"><option value="">정답 미확인</option>{ANSWERS.filter(key => fields.options[key]?.trim()).map(key => <option key={key} value={key}>{key}</option>)}</select></label></section>
          <label className="block text-sm font-semibold text-slate-800">해설<textarea value={fields.explanation} onChange={event => setFields({ ...fields, explanation: event.target.value })} disabled={busy || Boolean(conflict)} className="mt-2 min-h-52 w-full rounded-xl border border-slate-300 bg-white p-4 text-base font-normal leading-7 outline-none focus:border-teal-600" /></label>
          <section className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between gap-3"><div><h3 className="text-sm font-semibold text-slate-800">관련 이론 페이지</h3><p className="mt-1 text-xs text-slate-500">질병·CC 페이지를 검색해 추가하거나 연결을 제거합니다.</p></div><button type="button" disabled={busy || Boolean(conflict)} onClick={() => setPickerOpen((open) => !open)} className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-teal-300 bg-teal-50 px-3 text-sm font-semibold text-teal-800"><Plus className="h-4 w-4" />추가</button></div>
            <div className="mt-3 flex flex-wrap gap-2">{fields.relatedDocuments.length ? fields.relatedDocuments.map((document) => <span key={documentKey(document)} className="inline-flex max-w-full items-center gap-1 rounded-full border border-teal-200 bg-teal-50 py-1 pl-3 pr-1.5 text-sm text-teal-900"><span className="truncate">{document.title}</span><span className="text-[10px] text-teal-700">{document.type === "disease" ? "질병" : "CC"}</span><button type="button" disabled={busy || Boolean(conflict)} onClick={() => setFields({ ...fields, relatedDocuments: fields.relatedDocuments.filter((item) => documentKey(item) !== documentKey(document)) })} className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full hover:bg-teal-100" aria-label={`${document.title} 연결 제거`}><X className="h-3.5 w-3.5" /></button></span>) : <span className="text-sm text-slate-500">연결된 이론 페이지가 없습니다.</span>}</div>
            {pickerOpen ? <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3"><label className="relative block"><Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="질병 또는 CC 이름 검색" className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-teal-500" /></label><div className="mt-2 max-h-64 overflow-y-auto rounded-lg border border-slate-200 bg-white p-1">{filteredDocuments.map((document) => {
              const checked = fields.relatedDocuments.some((item) => documentKey(item) === documentKey(document));
              return <label key={documentKey(document)} className="flex cursor-pointer items-center gap-3 rounded-md px-2.5 py-2 text-sm hover:bg-slate-50"><input type="checkbox" checked={checked} onChange={() => setFields({ ...fields, relatedDocuments: checked ? fields.relatedDocuments.filter((item) => documentKey(item) !== documentKey(document)) : [...fields.relatedDocuments, document] })} className="h-4 w-4 accent-teal-600" /><span className="min-w-0 flex-1"><span className="block truncate font-medium text-slate-800">{document.title}</span><span className="block truncate text-xs text-slate-500">{document.type === "disease" ? "질병" : "CC"} · {document.category}</span></span></label>;
            })}{filteredDocuments.length === 0 ? <p className="p-4 text-center text-sm text-slate-500">일치하는 페이지가 없습니다.</p> : null}</div>{filteredDocuments.length === 100 ? <p className="mt-2 text-xs text-slate-500">처음 100개만 표시됩니다. 검색어를 더 구체적으로 입력하세요.</p> : null}</div> : null}
          </section>
        </>}
      </main>
      <footer className="flex flex-wrap items-center justify-between gap-3 border-t bg-white p-4"><p role="status" className="text-sm text-slate-600">{status}</p><div className="flex gap-2"><button type="button" disabled={busy} onClick={() => void read(false).catch(value => setError((value as Error).message))} className="rounded-lg border px-3 py-2 text-sm">최신 원본 확인</button><button type="button" disabled={!fields || !base || busy || Boolean(conflict)} onClick={() => void save()} className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white disabled:opacity-40">{busy ? "저장 중…" : "변경사항 저장"}</button></div></footer>
    </div>
  </dialog>;
}
