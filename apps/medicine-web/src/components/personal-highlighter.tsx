"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { Eraser, Highlighter, MousePointer2, Trash2, X } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { HighlightStore } from "@/lib/highlight-store";
import { HIGHLIGHT_COLORS, subtractInterval, type HighlightColor, type PersonalHighlight, type TextAnchor } from "@/lib/highlight-anchor";
import { anchorRange, makeDOMAnchor, resolveHighlight, selectionAnchors, textBlocks } from "@/lib/highlight-dom";

const COLORS: Record<HighlightColor, { name: string; swatch: string }> = {
  yellow: { name: "노랑", swatch: "#fde68a" }, green: { name: "초록", swatch: "#a7f3d0" },
  blue: { name: "파랑", swatch: "#bae6fd" }, pink: { name: "분홍", swatch: "#fbcfe8" },
  purple: { name: "보라", swatch: "#ddd6fe" }, orange: { name: "주황", swatch: "#fed7aa" },
};
type Scope = { key: string; root: HTMLElement };
type Mode = "read" | "pen" | "erase";
type HighlightApi = { registry: Map<string, unknown>; create: new (...ranges: Range[]) => unknown };
function highlightApi(): HighlightApi | null {
  const registry = (CSS as unknown as { highlights?: Map<string, unknown> }).highlights;
  const create = (window as unknown as { Highlight?: HighlightApi["create"] }).Highlight;
  return registry && create ? { registry, create } : null;
}
function clearPaint() {
  const api = highlightApi();
  HIGHLIGHT_COLORS.forEach(color => api?.registry.delete("medicine-" + color));
}

export function PersonalHighlighter() {
  const pathname = usePathname();
  const [user, setUser] = useState<string | null>(null);
  const [scope, setScope] = useState<Scope | null>(null);
  const [slot, setSlot] = useState<HTMLElement | null>(null);
  const [panelPosition, setPanelPosition] = useState({ top: 120, left: 12 });
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState<HighlightColor>("yellow");
  const [mode, setMode] = useState<Mode>("read");
  const [rows, setRows] = useState<PersonalHighlight[]>([]);
  const [detached, setDetached] = useState<PersonalHighlight[]>([]);
  const [status, setStatus] = useState("");
  const [confirmClear, setConfirmClear] = useState(false);
  const store = useRef<HighlightStore | null>(null);
  const selection = useRef<Range | null>(null);
  const tools = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    let active = true;
    void client.auth.getSession().then(({ data }) => { if (active) setUser(data.session?.user.id ?? null); });
    const { data } = client.auth.onAuthStateChange((_event, session) => setUser(session?.user.id ?? null));
    return () => { active = false; data.subscription.unsubscribe(); };
  }, []);

  useEffect(() => {
    const main = document.querySelector<HTMLElement>("[data-personal-highlight-root]");
    if (!main) return;
    const update = () => {
      const question = main.querySelector<HTMLElement>("[data-highlight-document]");
      const root = question ?? main;
      // Stable question IDs are shared by normal sessions and mock exams.
      const key = question?.dataset.highlightDocument ?? "page:" + pathname.replace(/\/$/, "");
      setScope(old => old?.key === key && old.root === root ? old : { key, root });
      const target = root.querySelector<HTMLElement>("[data-document-toolbar] [data-highlighter-slot]")
        ?? main.querySelector<HTMLElement>("[data-document-toolbar] [data-highlighter-slot]")
        ?? main.querySelector<HTMLElement>("[data-highlight-fallback] [data-highlighter-slot]");
      setSlot(old => old === target ? old : target);
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(main, { subtree: true, childList: true, attributes: true, attributeFilter: ["data-highlight-document"] });
    return () => { observer.disconnect(); selection.current = null; clearPaint(); };
  }, [pathname]);

  useEffect(() => {
    if (!scope || !user) { clearPaint(); return; }
    let active = true;
    const current = new HighlightStore(user, scope.key, (values, message) => {
      if (active) { setRows(values); setStatus(message); }
    });
    store.current = current;
    const sync = () => { void current.sync(); };
    const changed = (event: StorageEvent) => { if (event.key?.startsWith("medicine:highlights:v1:" + user + ":")) sync(); };
    sync();
    const timer = window.setInterval(sync, 30_000);
    window.addEventListener("focus", sync); window.addEventListener("online", sync); window.addEventListener("storage", changed);
    return () => {
      active = false; current.stop(); store.current = null; clearPaint(); selection.current = null;
      window.clearInterval(timer); window.removeEventListener("focus", sync); window.removeEventListener("online", sync); window.removeEventListener("storage", changed);
    };
  }, [scope, user]);

  useEffect(() => {
    if (!scope || !user) return;
    const paint = () => {
      const api = highlightApi();
      if (!api) { setStatus("이 브라우저는 형광펜 표시를 지원하지 않습니다. 최신 브라우저로 열어주세요."); return; }
      const blocks = textBlocks(scope.root);
      const ranges = new Map<HighlightColor, Range[]>(HIGHLIGHT_COLORS.map(value => [value, []]));
      const missing: PersonalHighlight[] = [];
      for (const row of rows) {
        if (row.deleted || row.document_key !== scope.key || row.user_id !== user) continue;
        const found = resolveHighlight(blocks, row.anchor);
        if (!found) { missing.push(row); continue; }
        const range = anchorRange(found.block, found.start, found.end);
        if (range) ranges.get(row.color)!.push(range);
      }
      for (const value of HIGHLIGHT_COLORS) api.registry.set("medicine-" + value, new api.create(...ranges.get(value)!));
      setDetached(missing);
    };
    paint();
    let timer = 0;
    const observer = new MutationObserver(() => { window.clearTimeout(timer); timer = window.setTimeout(paint, 100); });
    observer.observe(scope.root, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["open", "hidden", "class", "style"] });
    return () => { observer.disconnect(); window.clearTimeout(timer); clearPaint(); };
  }, [rows, scope, user]);

  const capture = useCallback(() => {
    const current = window.getSelection();
    if (!scope || !current?.rangeCount || current.isCollapsed) return;
    const range = current.getRangeAt(0);
    if (scope.root.contains(range.startContainer) && scope.root.contains(range.endContainer) &&
      !(range.startContainer.parentElement?.closest("[data-highlight-ignore],dialog,[contenteditable=true],input,textarea"))) selection.current = range.cloneRange();
  }, [scope]);

  const apply = useCallback((erase = false, chosenColor = color, reconnect?: PersonalHighlight) => {
    if (!user || !scope || !store.current || store.current.user !== user || store.current.document !== scope.key || !highlightApi()) return;
    capture();
    const range = selection.current;
    if (!range || !range.startContainer.isConnected || !scope.root.contains(range.startContainer)) { setStatus("본문에서 표시할 글자를 먼저 선택하세요."); return; }
    const blocks = textBlocks(scope.root);
    const anchors = selectionAnchors(blocks, range);
    if (!anchors.length) { setStatus("본문에서 표시할 글자를 먼저 선택하세요."); return; }
    const makeRow = (anchor: TextAnchor, chosen = chosenColor): PersonalHighlight => ({
      id: crypto.randomUUID(), user_id: user, document_key: scope.key, color: chosen, anchor, deleted: false,
    });
    const updates: PersonalHighlight[] = [];
    // Erase just the selected intersection, retaining the untouched parts.
    for (const row of rows) {
      if (row.deleted || row.user_id !== user || row.document_key !== scope.key) continue;
      const found = resolveHighlight(blocks, row.anchor);
      if (!found) continue;
      const cuts = anchors.flatMap(anchor => {
        const cut = resolveHighlight(blocks, anchor);
        return cut?.block === found.block ? [{ start: cut.start, end: cut.end }] : [];
      });
      const pieces = subtractInterval(found.start, found.end, cuts);
      if (pieces.length === 1 && pieces[0].start === found.start && pieces[0].end === found.end) continue;
      updates.push({ ...row, deleted: true }, ...pieces.map(piece => makeRow(makeDOMAnchor(blocks, found.block, piece.start, piece.end), row.color)));
    }
    if (reconnect) updates.push({ ...reconnect, deleted: true });
    if (!erase) updates.push(...anchors.map(anchor => makeRow(anchor)));
    if (updates.length) store.current.write(updates);
    else setStatus("선택한 부분에 형광펜 표시가 없습니다.");
    window.getSelection()?.removeAllRanges(); selection.current = null;
  }, [capture, color, rows, scope, user]);

  useEffect(() => {
    document.documentElement.dataset.highlighterMode = user ? mode : "read";
    const root = scope?.root;
    root?.setAttribute("data-highlighter-active", user && mode !== "read" ? "true" : "false");
    const selectionChanged = () => capture();
    let pointerTimer = 0;
    const pointerUp = (event: PointerEvent) => {
      if ((event.target as Element).closest?.("[data-highlight-ignore]")) return;
      window.clearTimeout(pointerTimer);
      if (user && mode !== "read") pointerTimer = window.setTimeout(() => apply(mode === "erase"), 60);
    };
    const click = (event: MouseEvent) => {
      if ((event.target as Element).closest?.("[data-highlight-ignore]")) return;
      if (user && mode !== "read" && root?.contains(event.target as Node)) { event.preventDefault(); event.stopPropagation(); }
    };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); setMode("read"); } };
    document.addEventListener("selectionchange", selectionChanged);
    root?.addEventListener("pointerup", pointerUp);
    root?.addEventListener("click", click, true);
    document.addEventListener("keydown", escape);
    return () => {
      window.clearTimeout(pointerTimer);
      document.documentElement.dataset.highlighterMode = "read";
      root?.removeAttribute("data-highlighter-active");
      document.removeEventListener("selectionchange", selectionChanged); root?.removeEventListener("pointerup", pointerUp);
      root?.removeEventListener("click", click, true); document.removeEventListener("keydown", escape);
    };
  }, [apply, capture, mode, scope, user]);

  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => { if (!tools.current?.contains(event.target as Node) && !panel.current?.contains(event.target as Node)) { setOpen(false); setConfirmClear(false); } };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  useEffect(() => {
    if (!open || !slot) return;
    const position = () => {
      const anchor = tools.current?.getBoundingClientRect();
      if (!anchor) return;
      const width = Math.min(288, window.innerWidth - 24);
      const next = { top: Math.min(anchor.bottom + 8, window.innerHeight - 100), left: Math.max(12, Math.min(anchor.left, window.innerWidth - width - 12)) };
      setPanelPosition(old => old.top === next.top && old.left === next.left ? old : next);
    };
    position();
    window.addEventListener("scroll", position, { passive: true });
    window.addEventListener("resize", position);
    const observer = new ResizeObserver(position);
    observer.observe(slot);
    return () => { observer.disconnect(); window.removeEventListener("scroll", position); window.removeEventListener("resize", position); };
  }, [open, slot]);

  const unmatched = detached.filter(row => !row.deleted && row.user_id === user && row.document_key === scope?.key);
  const activeRows = rows.filter(row => !row.deleted && row.user_id === user && row.document_key === scope?.key);
  const button = "flex items-center gap-2 rounded-md px-2.5 py-2 text-left text-xs hover:bg-slate-100";
  if (!slot) return null;
  return createPortal(<div ref={tools} className="relative shrink-0" data-highlight-ignore>
    <button type="button" aria-label="형광펜 도구" title={mode === "pen" ? "형광펜 모드 켜짐" : mode === "erase" ? "지우개 모드 켜짐" : "개인 형광펜"} aria-expanded={open} onPointerDown={capture} onClick={() => setOpen(value => !value)} className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition ${mode !== "read" && user ? "border-amber-400 bg-amber-100 text-amber-900" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`}><Highlighter size={18} /></button>
    {open && createPortal(<div ref={panel} data-highlight-ignore role="dialog" aria-label="형광펜 도구 패널" style={{ ...panelPosition, maxHeight: `calc(100dvh - ${panelPosition.top + 16}px)` }} className="fixed z-[60] w-72 max-w-[calc(100vw-1.5rem)] overflow-y-auto rounded-xl border border-slate-200 bg-white p-3 text-slate-800 shadow-xl">
      <div className="mb-2 flex items-center justify-between"><strong className="text-sm">개인 형광펜</strong><button type="button" className="rounded p-1 hover:bg-slate-100" aria-label="형광펜 패널 닫기" onClick={() => setOpen(false)}><X size={16} /></button></div>
      {!user ? <p className="text-xs leading-5 text-slate-600">Google 계정으로 로그인하면 표시가 내 계정에 저장됩니다.</p> : <>
        <div className="flex justify-between gap-2" role="group" aria-label="형광펜 색상">{HIGHLIGHT_COLORS.map(value => <button key={value} type="button" aria-label={COLORS[value].name + " 형광펜"} aria-pressed={color === value} title={COLORS[value].name} onClick={() => { setColor(value); if (selection.current) apply(false, value); }} className={`h-8 w-8 rounded-full border-2 ${color === value ? "border-slate-700 ring-2 ring-slate-200" : "border-transparent"}`} style={{ backgroundColor: COLORS[value].swatch }} />)}</div>
        <div className="mt-3 grid grid-cols-2 gap-1">
          <button type="button" aria-pressed={mode === "pen"} className={button + (mode === "pen" ? " bg-amber-100" : "")} onClick={() => setMode(value => value === "pen" ? "read" : "pen")}><Highlighter size={15} />형광펜 모드</button>
          <button type="button" aria-pressed={mode === "erase"} className={button + (mode === "erase" ? " bg-slate-200" : "")} onClick={() => setMode(value => value === "erase" ? "read" : "erase")}><Eraser size={15} />지우개 모드</button>
          <button type="button" className={button} onClick={() => setMode("read")}><MousePointer2 size={15} />일반 읽기</button>
          <button type="button" className={button} onClick={() => apply(false)}><Highlighter size={15} />선택 부분 표시</button>
          <button type="button" className={button} onClick={() => apply(true)}><Eraser size={15} />선택 부분 지우기</button>
          <button type="button" className={button + " text-rose-700"} onClick={() => setConfirmClear(true)}><Trash2 size={15} />문서 전체 지우기</button>
        </div>
        {confirmClear && <div className="mt-2 rounded-lg bg-rose-50 p-2 text-xs"><p>이 문서의 내 형광펜 {activeRows.length}개를 모두 지울까요?</p><div className="mt-2 flex gap-3"><button type="button" className="font-semibold text-rose-700" onClick={() => { store.current?.write(activeRows.map(row => ({ ...row, deleted: true }))); setConfirmClear(false); }}>모두 지우기</button><button type="button" onClick={() => setConfirmClear(false)}>취소</button></div></div>}
        <p className="mt-2 text-[11px] leading-4 text-slate-500">{mode === "read" ? "글자를 선택한 뒤 색상을 누르세요." : mode === "pen" ? "드래그하면 표시됩니다. 읽기로 돌아가려면 Esc." : "지울 글자만 드래그하세요. Esc로 종료."}</p>
        <p role="status" className="mt-1 text-[11px] leading-4 text-slate-500">{status}</p>
        {unmatched.length > 0 && <details className="mt-2 border-t pt-2 text-xs"><summary className="cursor-pointer">현재 화면에 연결되지 않은 표시 {unmatched.length}개</summary><p className="mt-2 text-slate-500">본문 수정·접힌 구역으로 숨겨진 표시도 기록은 보존됩니다. 본문을 선택해 다시 연결할 수 있습니다.</p>{unmatched.map(row => <div key={row.id} className="mt-2 rounded bg-slate-50 p-2"><p className="line-clamp-2">{row.anchor.exact}</p><div className="mt-1 flex gap-3"><button type="button" onClick={() => apply(false, row.color, row)} className="text-teal-700">선택 부분에 다시 연결</button><button type="button" onClick={() => store.current?.write([{ ...row, deleted: true }])} className="text-rose-700">삭제</button></div></div>)}</details>}
      </>}
    </div>, document.body)}
  </div>, slot);
}
