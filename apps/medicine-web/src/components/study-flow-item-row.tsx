"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUp, ChevronDown, ChevronRight, CornerDownRight, GripVertical, IndentDecrease, IndentIncrease, Link2, Plus, Trash2, X } from "lucide-react";
import { studyItems, type StudyItem, type StudyLink } from "@/lib/study-flow-model";
import { attachStudyLink, createStudyItem, deleteStudyItem, editStudyItem, getStudySnapshot, indentStudyItem, moveStudyItem, setStudyUI } from "@/lib/study-flow-store";
import { searchStudyLinks, type StudySearchEntry } from "@/lib/study-flow-search";

export function focusStudyItem(id: string) {
  requestAnimationFrame(() => {
    const input = document.getElementById("study-flow-input-" + id) as HTMLTextAreaElement | null;
    input?.focus();
    input?.scrollIntoView({ block: "nearest" });
  });
}
export const STUDY_KIND_LABELS: Record<string, string> = { disease: "Disease", cc: "CC", drug: "Drug", lab: "Lab & Img", skill: "Skill", question: "문제", page: "문서" };

type Mention = { start: number | null; end: number; query: string };
type Props = {
  item: StudyItem; depth?: number; selected: boolean; hasChildren: boolean; collapsed: boolean; previousId?: string;
  entries: StudySearchEntry[]; searchLoading: boolean; searchError: string;
  onSearch: () => void; onNavigate: (link: StudyLink, itemId: string) => void;
};

export function StudyFlowItemRow({ item, depth = 0, selected, hasChildren, collapsed, previousId, entries, searchLoading, searchError, onSearch, onNavigate }: Props) {
  const input = useRef<HTMLTextAreaElement>(null);
  const composing = useRef(false);
  const [mention, setMention] = useState<Mention | null>(null);
  const [kind, setKind] = useState("all");
  const [active, setActive] = useState(0);
  const results = useMemo(() => mention ? searchStudyLinks(entries, mention.query, kind) : [], [entries, mention, kind]);
  useEffect(() => {
    if (input.current) {
      input.current.style.height = "auto";
      input.current.style.height = Math.max(28, input.current.scrollHeight) + "px";
    }
  }, [item.text]);
  const findMention = (value: string, cursor: number) => {
    const match = /(?:^|\s)@([^@\n]*)$/.exec(value.slice(0, cursor));
    if (!match) { setMention(null); return; }
    setMention({ start: value.lastIndexOf("@", cursor - 1), end: cursor, query: match[1] });
    setActive(0);
    onSearch();
  };
  const pick = (link: StudyLink) => {
    if (mention?.start !== null && mention?.start !== undefined) {
      const text = item.text.slice(0, mention.start) + item.text.slice(mention.end);
      editStudyItem(item.id, { text: text.trim() ? text : link.title, links: [...item.links.filter(value => value.key !== link.key), link].slice(0, 50) });
    } else attachStudyLink(item.id, link);
    setMention(null);
    focusStudyItem(item.id);
  };
  const add = (child = false) => {
    const id = createStudyItem(item.flowId, "", undefined, child ? item.id : item.parentId, child ? undefined : item.id);
    if (child) {
      const ui = getStudySnapshot().ui;
      setStudyUI({ collapsed: ui.collapsed.filter(id => id !== item.id) });
    }
    focusStudyItem(id);
  };
  const move = (direction: -1 | 1) => {
    const siblings = studyItems(getStudySnapshot().records, item.flowId).filter(value => value.parentId === item.parentId).sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
    const index = siblings.findIndex(value => value.id === item.id);
    if (direction === -1 && index > 0) moveStudyItem(item.flowId, item.id, item.parentId, siblings[index - 1].id);
    if (direction === 1 && index < siblings.length - 1) moveStudyItem(item.flowId, item.id, item.parentId, siblings[index + 2]?.id);
  };
  return <div className={"study-flow-row" + (selected ? " is-selected" : "") + (item.done ? " is-done" : "")} style={{ marginLeft: "calc(var(--study-flow-indent, 16px) * " + Math.min(depth, 6) + ")" }} data-item-id={item.id}
    onDragOver={event => { if (event.dataTransfer.types.includes("text/study-flow-item")) event.preventDefault(); }}
    onDrop={event => {
      const id = event.dataTransfer.getData("text/study-flow-item");
      if (!id || id === item.id) return;
      event.preventDefault();
      moveStudyItem(item.flowId, id, event.shiftKey ? item.id : item.parentId, event.shiftKey ? undefined : item.id);
    }}>
    <div className="study-flow-row-line">
      <button type="button" className="study-flow-grip" draggable onDragStart={event => { event.dataTransfer.setData("text/study-flow-item", item.id); event.dataTransfer.effectAllowed = "move"; }} aria-label="드래그로 순서 변경" title="드래그로 순서 변경 · Shift로 하위 항목에 넣기"><GripVertical size={14} /></button>
      <button type="button" className="study-flow-fold" disabled={!hasChildren} aria-label={collapsed ? "하위 항목 펼치기" : "하위 항목 접기"} aria-expanded={hasChildren ? !collapsed : undefined}
        onClick={() => { const ui = getStudySnapshot().ui; setStudyUI({ collapsed: collapsed ? ui.collapsed.filter(id => id !== item.id) : [...ui.collapsed, item.id] }); }}>
        {hasChildren ? collapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} /> : <span />}
      </button>
      <input type="checkbox" checked={item.done} onChange={event => editStudyItem(item.id, { done: event.target.checked })} aria-label={(item.text || "새 항목") + (item.done ? " 다시 활성화" : " 완료")} />
      <textarea id={"study-flow-input-" + item.id} ref={input} value={item.text} rows={1} maxLength={20000} placeholder="공부할 것 적기 · @ 문서 연결" aria-label="학습 항목 메모"
        onFocus={() => setStudyUI({ itemId: item.id })}
        onChange={event => {
          editStudyItem(item.id, { text: event.target.value });
          if (!composing.current) findMention(event.target.value, event.target.selectionStart);
        }}
        onCompositionStart={() => { composing.current = true; }}
        onCompositionEnd={event => { composing.current = false; findMention(event.currentTarget.value, event.currentTarget.selectionStart); }}
        onClick={event => { if (!composing.current) findMention(event.currentTarget.value, event.currentTarget.selectionStart); }}
        onKeyDown={event => {
          if (composing.current || event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229) return;
          if (mention && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
            event.preventDefault();
            if (results.length) setActive(index => (index + (event.key === "ArrowDown" ? 1 : -1) + results.length) % results.length);
            return;
          }
          if (mention && event.key === "Escape") { event.preventDefault(); setMention(null); return; }
          if (mention && event.key === "Enter" && !event.shiftKey && results.length) { event.preventDefault(); pick(results[Math.min(active, results.length - 1)]); return; }
          if (event.key === "Tab") {
            if (indentStudyItem(item.flowId, item.id, event.shiftKey)) { event.preventDefault(); setMention(null); }
            return;
          }
          if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) { event.preventDefault(); editStudyItem(item.id, { done: !item.done }); return; }
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            const before = item.text.slice(0, event.currentTarget.selectionStart);
            const after = item.text.slice(event.currentTarget.selectionEnd);
            editStudyItem(item.id, { text: before });
            const id = createStudyItem(item.flowId, after, undefined, item.parentId, item.id);
            setMention(null);
            focusStudyItem(id);
          }
          if (event.key === "Backspace" && !item.text && previousId && !mention) { event.preventDefault(); deleteStudyItem(item.flowId, item.id); focusStudyItem(previousId); }
        }} />
    </div>
    {item.links.length ? <div className="study-flow-links">{item.links.map(link => <span className="study-flow-link" key={link.key}>
      <Link href={link.href} prefetch={false} onClick={() => onNavigate(link, item.id)} title={link.title}><small>{STUDY_KIND_LABELS[link.kind] ?? "문서"}</small>{link.title}</Link>
      <button type="button" aria-label={link.title + " 연결 제거"} onClick={() => editStudyItem(item.id, { links: item.links.filter(value => value.key !== link.key) })}><X size={12} /></button>
    </span>)}</div> : null}
    <div className="study-flow-row-tools">
      <button type="button" onClick={() => add()} title="다음 항목 추가" aria-label="다음 항목 추가"><Plus size={14} /></button>
      <button type="button" onClick={() => add(true)} title="하위 항목 추가" aria-label="하위 항목 추가"><CornerDownRight size={14} /></button>
      <button type="button" onClick={() => indentStudyItem(item.flowId, item.id)} title="들여쓰기 · Tab" aria-label="들여쓰기"><IndentIncrease size={14} /></button>
      <button type="button" onClick={() => indentStudyItem(item.flowId, item.id, true)} title="내어쓰기 · Shift Tab" aria-label="내어쓰기"><IndentDecrease size={14} /></button>
      <button type="button" onClick={() => move(-1)} title="위로 이동" aria-label="위로 이동"><ArrowUp size={14} /></button>
      <button type="button" onClick={() => move(1)} title="아래로 이동" aria-label="아래로 이동"><ArrowDown size={14} /></button>
      <button type="button" onClick={() => { onSearch(); setMention({ start: null, end: 0, query: "" }); setActive(0); }} title="문서 연결 · @" aria-label="문서 연결"><Link2 size={14} /></button>
      <button type="button" onClick={() => { deleteStudyItem(item.flowId, item.id); if (previousId) focusStudyItem(previousId); }} title="항목 삭제 · 하위 항목은 유지" aria-label="항목 삭제"><Trash2 size={14} /></button>
      {depth > 6 ? <small>{depth + 1}단계</small> : null}
    </div>
    {mention ? <div className="study-flow-link-search" data-highlight-ignore>
      <div className="study-flow-link-search-bar">
        {mention.start === null ? <input aria-label="연결할 문서 검색" autoFocus value={mention.query} placeholder="문서명이나 문제 ID 검색" onChange={event => { setMention({ ...mention, query: event.target.value }); setActive(0); }} onKeyDown={event => {
          if (event.nativeEvent.isComposing) return;
          if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); if (results.length) setActive(index => (index + (event.key === "ArrowDown" ? 1 : -1) + results.length) % results.length); }
          if (event.key === "Enter" && results.length) { event.preventDefault(); pick(results[Math.min(active, results.length - 1)]); }
          if (event.key === "Escape") { event.preventDefault(); setMention(null); focusStudyItem(item.id); }
        }} /> : <span>@ {mention.query || "문서명 검색"}</span>}
        <select value={kind} aria-label="문서 종류" onChange={event => { setKind(event.target.value); setActive(0); }}>
          <option value="all">전체</option><option value="disease">Disease</option><option value="cc">CC</option><option value="drug">Drug</option><option value="lab">Lab & Img</option><option value="question">문제</option><option value="skill">Skill</option>
        </select>
        <button type="button" aria-label="문서 검색 닫기" onClick={() => setMention(null)}><X size={14} /></button>
      </div>
      <div className="study-flow-search-results" role="listbox" aria-label="문서 검색 결과">
        {results.map((entry, index) => <button type="button" role="option" aria-selected={index === Math.min(active, results.length - 1)} className={index === Math.min(active, results.length - 1) ? "is-active" : ""} key={entry.key} onMouseDown={event => event.preventDefault()} onClick={() => pick(entry)}>
          <small>{STUDY_KIND_LABELS[entry.kind] ?? "문서"}</small><span>{entry.title}</span>
        </button>)}
        {!results.length ? <p>{searchLoading ? "검색 목록을 불러오는 중…" : searchError || "검색 결과가 없습니다."}</p> : null}
      </div>
      <p className="study-flow-search-tip">↑ ↓ 선택 · Enter 연결 · Esc 닫기</p>
    </div> : null}
  </div>;
}
