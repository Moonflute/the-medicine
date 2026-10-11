"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCheck, CornerDownRight, FilePlus2, GitBranch, ListTree, Plus, RefreshCw, Trash2, X } from "lucide-react";
import { StudyFlowItemRow, focusStudyItem } from "./study-flow-item-row";
import { StudyFlowMindmap } from "./study-flow-mindmap";
import { outlineStudyItems, studyFlows, studyItems, type StudyLink } from "@/lib/study-flow-model";
import { createStudyFlow, createStudyItem, deleteStudyFlow, editStudyItem, getStudyServerSnapshot, getStudySnapshot, hasGuestStudyFlows, importGuestStudyFlows, patchStudyRecords, retryStudyStorage, setStudyUI, subscribeStudyFlow, STUDY_FLOW_RETRY } from "@/lib/study-flow-store";
import { loadStudySearchIndex, practiceStudyEntries, type StudySearchEntry } from "@/lib/study-flow-search";
import { currentStudyPageSource, studyPath, STUDY_SOURCE_EVENT } from "@/lib/study-flow-source";
import { loadPracticeIndex } from "@/lib/practice-bank";

const pageNames: Record<string, string> = {
  "/": "홈", "/review": "Review", "/cc": "CC", "/specialties": "질병 목록",
  "/drugs": "약물 목록", "/lab-img": "Lab & Img", "/skills": "Skills",
  "/infection-hub": "감염 Hub", "/nervous-system-hub": "신경계 Hub", "/maternal-child-hub": "산부소아 Hub",
};

function subscribeSource(listener: () => void) {
  window.addEventListener(STUDY_SOURCE_EVENT, listener);
  return () => window.removeEventListener(STUDY_SOURCE_EVENT, listener);
}
function noSource() { return null; }

export function StudyFlowPanel() {
  const state = useSyncExternalStore(subscribeStudyFlow, getStudySnapshot, getStudyServerSnapshot);
  const pathname = usePathname();
  const router = useRouter();
  const readSource = useCallback(() => currentStudyPageSource(pathname), [pathname]);
  const liveSource = useSyncExternalStore(subscribeSource, readSource, noSource);
  const [publicEntries, setPublicEntries] = useState<StudySearchEntry[]>([]);
  const [publicLoading, setPublicLoading] = useState(true);
  const [publicError, setPublicError] = useState("");
  const [privateSearch, setPrivateSearch] = useState<{ account: string | null; entries: StudySearchEntry[]; loading: boolean; error: string }>({ account: null, entries: [], loading: false, error: "" });
  const privateRequest = useRef<string | null>(null);
  const mounted = useRef(true);
  const body = useRef<HTMLDivElement>(null);
  const flows = useMemo(() => studyFlows(state.records), [state.records]);
  const flow = flows.find(value => value.id === state.ui.flowId) ?? flows[0];
  const items = useMemo(() => flow ? studyItems(state.records, flow.id) : [], [state.records, flow]);
  const allRows = useMemo(() => outlineStudyItems(items), [items]);
  const collapsed = useMemo(() => new Set(state.ui.collapsed), [state.ui.collapsed]);
  const rows = useMemo(() => outlineStudyItems(state.ui.hideDone ? items.filter(item => !item.done) : items, collapsed), [items, collapsed, state.ui.hideDone]);
  const selected = items.find(item => item.id === state.ui.itemId);
  const children = useMemo(() => new Set(items.flatMap(item => item.parentId ? [item.parentId] : [])), [items]);
  const entries = useMemo(() => [...publicEntries, ...(privateSearch.account === state.account ? privateSearch.entries : [])], [publicEntries, privateSearch, state.account]);
  const path = studyPath(pathname);
  const knownSource = publicEntries.find(entry => studyPath(entry.href.split("?")[0]) === path);
  const currentSource: StudyLink | null = liveSource ?? knownSource ?? (path === "/review/qbank/session" ? null : {
    key: "page:" + path, kind: "page", href: path,
    title: pageNames[path] ?? decodeURIComponent(path.split("/").filter(Boolean).at(-1) ?? "현재 페이지").replace(/[-_]/g, " ").slice(0, 300),
  });
  const publicLoad = useCallback(async () => {
    setPublicLoading(true);
    setPublicError("");
    try { const result = await loadStudySearchIndex(); if (mounted.current) setPublicEntries(result); }
    catch { if (mounted.current) setPublicError("문서 목록을 불러오지 못했습니다. 다시 시도해 주세요."); }
    finally { if (mounted.current) setPublicLoading(false); }
  }, []);
  useEffect(() => {
    mounted.current = true;
    void loadStudySearchIndex().then(result => { if (mounted.current) setPublicEntries(result); })
      .catch(() => { if (mounted.current) setPublicError("문서 목록을 불러오지 못했습니다. 다시 시도해 주세요."); })
      .finally(() => { if (mounted.current) setPublicLoading(false); });
    return () => { mounted.current = false; };
  }, []);
  useEffect(() => {
    document.getElementById("study-flow-close")?.focus();
  }, []);
  const loadSearch = () => {
    if (publicError) void publicLoad();
    const account = getStudySnapshot().account;
    if (!account || privateRequest.current === account) return;
    privateRequest.current = account;
    setPrivateSearch({ account, entries: [], loading: true, error: "" });
    void loadPracticeIndex().then(result => {
      if (mounted.current && getStudySnapshot().account === account) setPrivateSearch({ account, entries: practiceStudyEntries(result.questions), loading: false, error: "" });
    }).catch(() => {
      if (privateRequest.current === account) privateRequest.current = null;
      if (mounted.current && getStudySnapshot().account === account) setPrivateSearch({ account, entries: [], loading: false, error: "공개 문서만 검색됩니다. 비공개 문제는 로그인과 접근 권한을 확인해 주세요." });
    });
  };
  const rememberNavigation = (_link: StudyLink, itemId: string) => {
    setStudyUI({ itemId, flowId: flow?.id ?? null, ...(window.matchMedia("(max-width: 767px)").matches ? { open: false } : {}) });
  };
  const openLink = (link: StudyLink, itemId: string) => {
    rememberNavigation(link, itemId);
    router.push(link.href);
  };
  const add = (link?: StudyLink, child = false) => {
    const flowId = flow?.id ?? createStudyFlow();
    const id = createStudyItem(flowId, link?.title ?? "", link, child && selected ? selected.id : null, !child ? selected?.id : undefined);
    setStudyUI({ flowId, itemId: id, view: "outline", hideDone: false, collapsed: selected ? state.ui.collapsed.filter(value => value !== selected.id && value !== selected.parentId) : state.ui.collapsed });
    focusStudyItem(id);
  };
  const chooseItem = (id: string, navigate = true) => {
    const target = allRows.find(row => row.item.id === id);
    if (!target) return;
    const ancestors = new Set<string>();
    let parent = target.parentId;
    while (parent && !ancestors.has(parent)) { ancestors.add(parent); parent = allRows.find(row => row.item.id === parent)?.parentId ?? null; }
    setStudyUI({ flowId: flow?.id ?? null, itemId: id, collapsed: state.ui.collapsed.filter(value => !ancestors.has(value)) });
    if (navigate && target.item.links[0]) openLink(target.item.links[0], id);
    else focusStudyItem(id);
  };
  const selectedIndex = allRows.findIndex(row => row.item.id === selected?.id);
  const previous = allRows[selectedIndex - 1]?.item;
  const next = allRows[selectedIndex + 1]?.item;
  const completeAndNext = () => {
    if (!selected) return;
    editStudyItem(selected.id, { done: true });
    const rest = [...allRows.slice(selectedIndex + 1), ...allRows.slice(0, selectedIndex)].find(row => !row.item.done);
    if (rest) chooseItem(rest.item.id);
  };
  const rowProps = {
    entries, searchLoading: publicLoading || (privateSearch.account === state.account && privateSearch.loading),
    searchError: publicError || (privateSearch.account === state.account ? privateSearch.error : ""),
    onSearch: loadSearch, onNavigate: rememberNavigation,
  };
  const guestAvailable = hasGuestStudyFlows();
  const syncProblem = state.storageError || state.sync.state === "error" || state.sync.state === "offline";
  return <aside id="study-flow-panel" className="study-flow-panel" role="region" aria-label="학습 Flow">
    <header className="study-flow-header">
      <div><ListTree size={18} /><h2>학습 Flow</h2><span>보려던 것, 이어서</span></div>
      <button id="study-flow-close" type="button" aria-label="학습 Flow 닫기" onClick={() => { setStudyUI({ open: false }); document.getElementById("study-flow-toggle")?.focus(); }}><X size={19} /></button>
    </header>
    <div className="study-flow-settings">
      <div className="study-flow-chooser">
        <select aria-label="학습 Flow 선택" value={flow?.id ?? ""} onChange={event => setStudyUI({ flowId: event.target.value, itemId: null })}>
          {!flows.length ? <option value="">Flow를 만들어 시작하세요</option> : flows.map(value => <option value={value.id} key={value.id}>{value.title || "이름 없는 Flow"}</option>)}
        </select>
        <button type="button" onClick={() => createStudyFlow()} aria-label="새 학습 Flow" title="새 학습 Flow"><Plus size={17} /></button>
        {flow ? <button type="button" aria-label="현재 Flow 삭제" title="현재 Flow 삭제" onClick={() => {
          if (window.confirm("이 Flow와 항목을 삭제할까요? 다른 Flow와 연결된 원본 문서는 삭제되지 않습니다.")) deleteStudyFlow(flow.id);
        }}><Trash2 size={16} /></button> : null}
      </div>
      {flow ? <input className="study-flow-title-input" aria-label="Flow 이름" value={flow.title} maxLength={200} placeholder="Flow 이름"
        onChange={event => patchStudyRecords([{ id: flow.id, values: { title: event.target.value } }])} /> : null}
      <div className="study-flow-view-bar">
        <div role="group" aria-label="학습 Flow 보기">
          <button type="button" className={state.ui.view === "outline" ? "is-active" : ""} aria-pressed={state.ui.view === "outline"} onClick={() => { setStudyUI({ view: "outline" }); if (selected) focusStudyItem(selected.id); }}><ListTree size={15} />Outliner</button>
          <button type="button" className={state.ui.view === "mindmap" ? "is-active" : ""} aria-pressed={state.ui.view === "mindmap"} onClick={() => setStudyUI({ view: "mindmap" })}><GitBranch size={15} />Mindmap</button>
        </div>
        <label><input type="checkbox" checked={state.ui.hideDone} onChange={event => setStudyUI({ hideDone: event.target.checked })} />완료 숨김</label>
      </div>
      <div className="study-flow-add-bar">
        <button type="button" onClick={() => add()}><Plus size={15} />항목 추가</button>
        <button type="button" disabled={!currentSource} onClick={() => currentSource && add(currentSource)} title={currentSource?.title ?? "문제를 불러오는 중"}><FilePlus2 size={15} />현재 {currentSource?.kind === "question" ? "문제" : "페이지"} 추가</button>
        {selected ? <button type="button" title="선택 항목 아래에 추가" aria-label="하위 항목 추가" onClick={() => add(undefined, true)}><CornerDownRight size={15} /></button> : null}
      </div>
      {guestAvailable ? <div className="study-flow-guest"><span>로그인 전에 이 기기에 적어둔 Flow가 있습니다.</span><button type="button" onClick={() => importGuestStudyFlows()}>내 계정으로 가져오기</button></div> : null}
    </div>
    <div className="study-flow-body" ref={body}>
      {!items.length ? <div className="study-flow-empty"><ListTree size={28} /><p>공부할 것들을 적고 순서대로 이어 보세요.</p><span>Enter로 다음 항목 · Tab으로 하위 항목<br />@로 문서 연결 · Shift Enter로 줄바꿈</span><button type="button" onClick={() => add()}>첫 항목 적기</button></div>
      : state.ui.view === "outline" ? <div className="study-flow-outline" aria-label="학습 항목 목록">
        {rows.map((row, index) => <StudyFlowItemRow key={row.item.id} {...rowProps} item={row.item} depth={row.depth} selected={selected?.id === row.item.id} hasChildren={children.has(row.item.id)} collapsed={collapsed.has(row.item.id)} previousId={rows[index - 1]?.item.id} />)}
        {!rows.length ? <p className="study-flow-empty-note">모든 항목을 완료했습니다. ‘완료 숨김’을 끄면 다시 볼 수 있습니다.</p> : null}
      </div> : <>
        <StudyFlowMindmap rows={rows} title={flow?.title ?? ""} selectedId={selected?.id ?? null} onNavigate={openLink} />
        {selected ? <div className="study-flow-map-editor"><p>선택 항목 편집</p><StudyFlowItemRow key={selected.id} {...rowProps} item={selected} selected hasChildren={children.has(selected.id)} collapsed={collapsed.has(selected.id)} /></div> : <p className="study-flow-empty-note">노드를 선택하면 아래에서 같은 항목을 편집할 수 있습니다.</p>}
      </>}
    </div>
    <footer className="study-flow-footer">
      {selected ? <div className="study-flow-reading">
        <span title={selected.text}>{selected.text || "새 항목"}</span>
        <div>
          <button type="button" disabled={!previous} aria-label="이전 학습 항목" title="이전 항목" onClick={() => previous && chooseItem(previous.id)}><ArrowLeft size={16} /></button>
          <button type="button" onClick={completeAndNext}><CheckCheck size={15} />완료하고 다음</button>
          <button type="button" disabled={!next} aria-label="다음 학습 항목" title="다음 항목" onClick={() => next && chooseItem(next.id)}><ArrowRight size={16} /></button>
        </div>
      </div> : null}
      <div className="study-flow-save-status">
        <span className={syncProblem ? "has-error" : ""} role="status">{state.sync.message}</span>
        <small>{items.filter(item => item.done).length}/{items.length}</small>
        {syncProblem || publicError ? <button type="button" aria-label="저장 및 검색 목록 다시 시도" title="다시 시도" onClick={() => { if (state.storageError) retryStudyStorage(); window.dispatchEvent(new Event(STUDY_FLOW_RETRY)); if (publicError) void publicLoad(); }}><RefreshCw size={13} /></button> : null}
      </div>
    </footer>
  </aside>;
}
