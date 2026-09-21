"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { EDITOR_USER_ID, replaceBlocks, splitSource, type Replacement } from "@/lib/document-edit-core";
import { Bold, CodeXml, ImagePlus, Italic, List, ListOrdered, Quote, Redo2, Undo2 } from "lucide-react";
import DocumentEditorBlock, { type UploadedDocumentImage } from "./document-editor-block";

type Snapshot = { source: string; sha: string };
type Draft = { version: 1; path: string; base: Snapshot; changes: Replacement[]; savedAt: string };
type SaveResult = Snapshot & { commit?: string; unchanged?: boolean; url?: string };
type UploadedImageResponse = { markdown: string; src: string; alt: string };
async function invoke<T>(input: object): Promise<T> {
  const client = getSupabaseBrowserClient();
  if (!client) throw new Error("로그인 연결을 확인해주세요.");
  const { data, error } = await client.functions.invoke("document-editor", { body: input });
  if (error) {
    let message = error.message;
    try { message = (await error.context.json()).error ?? message; } catch { /* network error */ }
    throw new Error(message);
  }
  return data;
}

export default function DocumentEditorDialog({ path, title, onClose }: { path: string; title: string; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const sourceTextarea = useRef<HTMLTextAreaElement>(null);
  const sourceImageInput = useRef<HTMLInputElement>(null);
  const [base, setBase] = useState<Snapshot | null>(null);
  const [changes, setChanges] = useState<Replacement[]>([]);
  const [sourceMode, setSourceMode] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [status, setStatus] = useState("GitHub 최신 원본을 불러오는 중…");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [drafts, setDrafts] = useState<Array<{ key: string; draft: Draft }>>([]);
  const [latest, setLatest] = useState<Snapshot | null>(null);
  const [commit, setCommit] = useState<string | null>(null);
  const [commitUrl, setCommitUrl] = useState("");
  const draftPrefix = `medicine:document-draft:v1:${EDITOR_USER_ID}:${path}:`;
  const [tabId] = useState(() => crypto.randomUUID());
  const draftKey = draftPrefix + tabId;
  const draftRef = useRef<Draft | null>(null);
  const restoredDraft = useRef<{ key: string; savedAt: string } | null>(null);
  const blocks = useMemo(() => base ? splitSource(base.source).blocks : [], [base]);
  const preview = useMemo(() => {
    if (!base) return "";
    try { return replaceBlocks(base.source, changes); }
    catch { return changes.map(change => change.markdown).join("\n\n"); }
  }, [base, changes]);

  const setSourceBody = (body: string) => {
    if (!base) return;
    const markdown = splitSource(base.source).prefix + body;
    setChanges(markdown === base.source ? [] : [{ index: -1, markdown }]);
  };
  const insertSource = (before: string, after = "", linePrefix = "") => {
    const textarea = sourceTextarea.current;
    if (!textarea || !base) return;
    const body = preview.slice(splitSource(base.source).prefix.length);
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = body.slice(start, end);
    const value = linePrefix ? selectedText.split("\n").map(line => `${linePrefix}${line}`).join("\n") : `${before}${selectedText || "텍스트"}${after}`;
    setSourceBody(`${body.slice(0, start)}${value}${body.slice(end)}`);
    queueMicrotask(() => { textarea.focus(); textarea.setSelectionRange(start + before.length, start + value.length - after.length); });
  };
  const uploadImages = async (files: File[]): Promise<UploadedDocumentImage[]> => {
    const selectedFiles = files.filter(file => ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(file.type));
    if (!selectedFiles.length) throw new Error("JPG, PNG, WebP 또는 GIF 파일만 첨부할 수 있습니다.");
    if (selectedFiles.some(file => file.size > 3 * 1024 * 1024)) throw new Error("이미지는 파일당 3MB까지 첨부할 수 있습니다.");
    setUploading(true); setError("");
    try {
      const uploaded = await Promise.all(selectedFiles.map(async file => {
        const bytes = new Uint8Array(await file.arrayBuffer());
        let binary = "";
        for (let offset = 0; offset < bytes.length; offset += 0x8000) binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
        return invoke<UploadedImageResponse>({ action: "upload-image", path, name: file.name, contentType: file.type, content: btoa(binary) });
      }));
      return uploaded.map(image => ({ src: image.src, alt: image.alt }));
    } finally { setUploading(false); }
  };
  const uploadSourceImages = async (files: File[]) => {
    try {
      const images = await uploadImages(files);
      const textarea = sourceTextarea.current;
      if (!textarea || !base) return;
      const body = preview.slice(splitSource(base.source).prefix.length);
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = images.map(image => `![${image.alt}](${image.src})`).join("\n") + "\n";
      setSourceBody(`${body.slice(0, start)}${value}${body.slice(end)}`);
      queueMicrotask(() => { textarea.focus(); textarea.setSelectionRange(start + value.length, start + value.length); });
    } catch (uploadError) { setError(uploadError instanceof Error ? uploadError.message : "이미지를 첨부하지 못했습니다."); }
  };

  useEffect(() => {
    dialog.current?.showModal();
    let active = true;
    void invoke<Snapshot>({ action: "read", path }).then(value => {
      if (!active) return;
      setBase(value); setStatus("GitHub 최신 원본 · 편집할 본문을 선택하세요.");
      try {
        const found: Array<{ key: string; draft: Draft }> = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i)!;
          if (!key.startsWith(draftPrefix)) continue;
          try {
            const draft = JSON.parse(localStorage.getItem(key)!);
            if (draft.version === 1 && draft.path === path && draft.changes?.length) {
              if (typeof draft.base?.source !== "string" || typeof draft.base?.sha !== "string" || !Array.isArray(draft.changes) || !draft.changes.every((c: Replacement) => Number.isInteger(c.index) && typeof c.markdown === "string")) continue;
              found.push({ key, draft });
            }
          } catch { /* invalid entries never replace editor data */ }
        }
        setDrafts(found.sort((a, b) => b.draft.savedAt.localeCompare(a.draft.savedAt)));
      } catch { setError("이 브라우저에서 임시저장 공간에 접근하지 못했습니다."); }
    }).catch(e => { if (active) setError(e.message); });
    return () => { active = false; };
  }, [path, draftPrefix]);

  useEffect(() => {
    draftRef.current = base && changes.length ? { version: 1, path, base, changes, savedAt: new Date().toISOString() } : null;
    const persist = () => {
      if (!draftRef.current) {
        try { localStorage.removeItem(draftKey); } catch { /* no new draft to lose */ }
        return;
      }
      try { localStorage.setItem(draftKey, JSON.stringify(draftRef.current)); setStatus(`이 기기에 임시저장됨 · ${new Date().toLocaleTimeString("ko-KR")}`); }
      catch { setError("임시저장에 실패했습니다. 창을 닫기 전에 변경 원문을 복사해주세요."); }
    };
    const timer = setTimeout(persist, 500);
    const interval = setInterval(persist, 5000);
    const beforeUnload = (event: BeforeUnloadEvent) => { if (draftRef.current) { persist(); event.preventDefault(); event.returnValue = ""; } };
    window.addEventListener("pagehide", persist);
    window.addEventListener("beforeunload", beforeUnload);
    return () => { clearTimeout(timer); clearInterval(interval); window.removeEventListener("pagehide", persist); window.removeEventListener("beforeunload", beforeUnload); persist(); };
  }, [base, changes, draftKey, path]);

  const refresh = async () => {
    setError("");
    try {
      const value = await invoke<Snapshot>({ action: "read", path });
      if (changes.length && value.sha !== base?.sha) { setLatest(value); setStatus("원본이 변경되었습니다. 아래에서 비교해주세요."); }
      else if (!changes.length) { setBase(value); setSelected(null); setStatus("GitHub 최신 원본을 확인했습니다."); }
      else setStatus("GitHub 원본 버전이 동일합니다.");
    } catch (e) { setError((e as Error).message); }
  };
  useEffect(() => {
    const check = () => { if (base && !busy) void invoke<Snapshot>({ action: "read", path }).then(value => { if (value.sha !== base.sha) setLatest(value); }).catch(() => {}); };
    window.addEventListener("focus", check); window.addEventListener("online", check);
    return () => { window.removeEventListener("focus", check); window.removeEventListener("online", check); };
  }, [base, busy, path]);

  const save = async () => {
    if (!base || busy || latest) return;
    setBusy(true); setError(""); setSelected(null);
    // Flush before the network request, even if the debounce hasn't fired yet.
    draftRef.current = { version: 1, path, base, changes, savedAt: new Date().toISOString() };
    try { localStorage.setItem(draftKey, JSON.stringify(draftRef.current)); }
    catch { setError("이 기기의 임시저장에 실패했습니다. GitHub 저장 결과를 확인해주세요."); }
    try {
      const result = await invoke<SaveResult>({ action: "save", path, sha: base.sha, requestId: crypto.randomUUID(), changes });
      draftRef.current = null;
      try { localStorage.removeItem(draftKey); } catch { /* acknowledged save remains authoritative */ }
      try {
        const restored = restoredDraft.current;
        if (restored && JSON.parse(localStorage.getItem(restored.key) ?? "null")?.savedAt === restored.savedAt) localStorage.removeItem(restored.key);
        restoredDraft.current = null;
      } catch { /* preserve other tabs' newer drafts */ }
      setChanges([]); setBase(result); setSourceMode(false);
      setCommit(result.commit ?? null); setCommitUrl(result.url ?? "");
      setStatus(result.unchanged ? "원본과 같아 새 커밋을 만들지 않았습니다." : "GitHub 원본 저장 완료 · 사이트 반영 대기 중");
    } catch (e) { await refresh(); setError((e as Error).message); }
    finally { setBusy(false); }
  };
  const checkDeployment = async () => {
    if (!commit) return;
    try {
      const result = await invoke<{ state: string }>({ action: "status", path, commit });
      setStatus(result.state === "deployed" ? "사이트 반영 완료 · 편집창을 닫고 페이지를 새로고침하세요." : result.state === "failed" ? "GitHub 원본 저장 완료 · 배포 실패. GitHub Actions를 확인해주세요." : "GitHub 원본 저장 완료 · 사이트 반영 대기 중");
    } catch (e) { setError((e as Error).message); }
  };
  return <dialog ref={dialog} onCancel={event => { event.preventDefault(); if (!busy) onClose(); }} className="fixed inset-0 m-auto h-[92dvh] max-h-none w-[min(1100px,96vw)] max-w-none rounded-2xl border border-slate-200 bg-slate-50 p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/60">
    <div className="flex h-full flex-col">
      <header className="flex items-start justify-between gap-4 border-b bg-white p-5"><div><p className="text-xs font-semibold text-teal-700">GITHUB 원본 편집</p><h2 className="mt-1 text-xl font-bold">{title}</h2><p className="mt-2 text-sm text-slate-600">본문을 선택해 편집하세요. 위키링크·표·제목 등은 원문 편집에서도 수정할 수 있습니다. 메타데이터는 보존됩니다.</p></div><button type="button" disabled={busy} onClick={onClose} className="shrink-0 whitespace-nowrap rounded-lg border px-4 py-2">닫기</button></header>
      <main className="flex-1 space-y-4 overflow-y-auto p-5 sm:p-8">
        {error && <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">{error}</p>}
        {drafts.map(({ key, draft }) => <div key={key} className="rounded-lg border border-amber-300 bg-amber-50 p-4"><p>{new Date(draft.savedAt).toLocaleString("ko-KR")} 임시저장본이 있습니다.</p><button type="button" className="mt-2 underline" onClick={() => { restoredDraft.current = { key, savedAt: draft.savedAt }; if (base && draft.base.sha !== base.sha) setLatest(base); setBase(draft.base); setChanges(draft.changes); setSourceMode(draft.changes.some((c: Replacement) => c.index === -1)); setSelected(null); setDrafts([]); }}>복구하기</button><button type="button" className="ml-5 underline" onClick={() => { try { localStorage.removeItem(key); setDrafts(list => list.filter(item => item.key !== key)); } catch { setError("초안 삭제에 실패했습니다."); } }}>이 초안 삭제</button></div>)}
        {latest && base && <section className="space-y-3 rounded-xl border border-amber-300 bg-amber-50 p-4"><h3 className="font-bold">GitHub 원본이 변경되어 저장을 멈췄습니다.</h3><p className="text-sm">내 변경 내용을 복사해 보관한 다음 최신 원본에서 다시 편집해주세요. 기존 초안도 이 기기에 남습니다.</p><div className="grid gap-3 sm:grid-cols-2"><label>내 수정 원문<textarea readOnly value={preview} className="mt-2 h-56 w-full rounded border bg-white p-3 text-sm" /></label><label>GitHub 최신 원문<textarea readOnly value={latest.source} className="mt-2 h-56 w-full rounded border bg-white p-3 text-sm" /></label></div><button type="button" className="rounded border bg-white px-4 py-2" onClick={() => { onClose(); }}>초안을 보존하고 닫기</button></section>}
        <div className="flex items-center gap-2"><button type="button" title="Markdown 원문 편집" aria-label="Markdown 원문 편집" disabled={busy || uploading || !base || Boolean(latest)} onClick={() => { setSelected(null); setSourceMode(true); }} className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 hover:bg-slate-50"><CodeXml size={18} />Markdown 원문 편집</button>{sourceMode && <span className="text-sm text-slate-600">원문 변경을 저장한 뒤 본문 편집으로 돌아갈 수 있습니다.</span>}</div>
        {sourceMode && base ? <section className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm"><div className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 p-2" role="toolbar" aria-label="Markdown 서식"><span className="mr-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Markdown</span><button type="button" title="굵게" aria-label="굵게" onClick={() => insertSource("**", "**")} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-white hover:text-teal-800"><Bold size={18} /></button><button type="button" title="기울임" aria-label="기울임" onClick={() => insertSource("*", "*")} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-white hover:text-teal-800"><Italic size={18} /></button><button type="button" title="글머리표 목록" aria-label="글머리표 목록" onClick={() => insertSource("", "", "- ")} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-white hover:text-teal-800"><List size={18} /></button><button type="button" title="번호 목록" aria-label="번호 목록" onClick={() => insertSource("", "", "1. ")} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-white hover:text-teal-800"><ListOrdered size={18} /></button><button type="button" title="인용" aria-label="인용" onClick={() => insertSource("", "", "> ")} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-white hover:text-teal-800"><Quote size={18} /></button><span className="mx-1 h-6 w-px bg-slate-200" /><button type="button" title="이미지 첨부" aria-label="이미지 첨부" disabled={uploading} onClick={() => sourceImageInput.current?.click()} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-white hover:text-teal-800 disabled:opacity-40"><ImagePlus size={18} /></button><span className="flex-1" /><button type="button" title="실행 취소" aria-label="실행 취소" onClick={() => { sourceTextarea.current?.focus(); document.execCommand("undo"); }} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-white hover:text-teal-800"><Undo2 size={18} /></button><button type="button" title="다시 실행" aria-label="다시 실행" onClick={() => { sourceTextarea.current?.focus(); document.execCommand("redo"); }} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-white hover:text-teal-800"><Redo2 size={18} /></button></div><label className="block"><span className="sr-only">전체 본문 원문</span><textarea ref={sourceTextarea} aria-label="전체 본문 원문" disabled={busy || uploading || Boolean(latest)} value={preview.slice(splitSource(base.source).prefix.length)} onPaste={event => { const files = Array.from(event.clipboardData.files); if (files.length) { event.preventDefault(); void uploadSourceImages(files); } }} onChange={event => setSourceBody(event.target.value)} spellCheck={false} className="min-h-[55vh] w-full resize-y p-5 font-mono text-base font-normal leading-7 outline-none" /></label><input ref={sourceImageInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple onChange={event => { const files = Array.from(event.currentTarget.files ?? []); event.currentTarget.value = ""; void uploadSourceImages(files); }} />{uploading && <p role="status" className="border-t border-slate-100 px-4 py-2 text-sm text-slate-600">이미지 첨부 중…</p>}</section> : blocks.map((block, index) => !block.raw.trim() ? null : selected === index && !busy ? <DocumentEditorBlock key={`${base?.sha}-${index}`} markdown={changes.find(c => c.index === index)?.markdown ?? block.raw} disabled={busy || uploading} onUploadImages={uploadImages} onChange={markdown => { setChanges(previous => [...previous.filter(c => c.index !== index), ...(markdown === block.raw ? [] : [{ index, markdown }])]); }} /> : <button type="button" key={index} disabled={!block.editable || busy || uploading || Boolean(latest)} onClick={() => setSelected(index)} className={`block w-full whitespace-pre-wrap rounded-xl p-4 text-left text-base leading-7 ${block.editable ? "border border-slate-200 bg-white hover:border-teal-500" : "text-slate-600"}`}><span className={/^#{1,6}\s/.test(block.raw) ? "text-lg font-semibold" : ""}>{changes.find(c => c.index === index)?.markdown ?? block.raw.replace(/^#{1,6}\s+/, "")}</span>{block.editable && <span className="mt-2 block text-xs font-medium text-teal-700">{changes.some(c => c.index === index) ? "수정됨 · 다시 편집" : "클릭하여 편집"}</span>}</button>)}
      </main>
      <footer className="flex flex-wrap items-center justify-between gap-3 border-t bg-white p-4"><p role="status" className="text-sm text-slate-600">{status}</p><div className="flex flex-wrap gap-2">{commitUrl && <a href={commitUrl} target="_blank" rel="noreferrer" className="rounded-lg border px-3 py-2 text-sm">저장 커밋</a>}{commit && <button type="button" onClick={() => void checkDeployment()} className="rounded-lg border px-3 py-2 text-sm">배포 확인</button>}<button type="button" disabled={busy || uploading} onClick={() => void refresh()} className="rounded-lg border px-3 py-2 text-sm">최신 원본 확인</button><button type="button" disabled={!base || !changes.length || busy || uploading || Boolean(latest)} onClick={() => void save()} className="rounded-lg bg-teal-700 px-4 py-2 font-semibold text-white disabled:opacity-40">{busy ? "GitHub 저장 중…" : "변경사항 저장"}</button></div></footer>
    </div>
  </dialog>;
}
