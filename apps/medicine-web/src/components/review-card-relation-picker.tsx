"use client";

import Link from "next/link";
import { FileText, Plus, Search, X } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { REVIEW_CARD_RELATION_LIMIT, readReviewCardRelations, type ReviewCardRelations } from "@/lib/review-card-relations";
import { loadReviewCardCatalog, recommendReviewCardTopics, searchReviewCardDocuments, searchReviewCardSpecialties } from "@/lib/review-card-recommendations";

type Catalog = Awaited<ReturnType<typeof loadReviewCardCatalog>>;
type Group = keyof ReviewCardRelations;
const empty: ReviewCardRelations = { specialties: [], documents: [] };

type RelationFieldProps<T> = {
  label: string;
  selected: T[];
  options: T[];
  itemKey: (item: T) => string;
  itemLabel: (item: T) => string;
  search: string | null;
  onSearch: (value: string | null) => void;
  onChange: (value: T[]) => void;
  disabled: boolean;
  ready: boolean;
};

function RelationField<T>({ label, selected, options, itemKey, itemLabel, search, onSearch, onChange, disabled, ready }: RelationFieldProps<T>) {
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const searchOpen = search !== null;
  const full = selected.length >= REVIEW_CARD_RELATION_LIMIT;
  const selectedKeys = new Set(selected.map(itemKey));
  const choices = full ? [] : options.filter(item => !selectedKeys.has(itemKey(item))).slice(0, searchOpen ? 9 : 4);

  useEffect(() => {
    if (searchOpen) input.current?.focus();
  }, [searchOpen]);

  function add(item: T) {
    if (disabled || full || selectedKeys.has(itemKey(item))) return;
    onChange([...selected, item]);
    if (searchOpen) input.current?.focus();
  }

  return <div className="review-card-relation-field" role="group" aria-labelledby={id}>
    <div className="review-card-relation-heading">
      <span id={id}>{label}</span>
      <button ref={toggle} type="button" className="review-card-relation-toggle" disabled={disabled}
        aria-label={label + " 직접 검색"} aria-expanded={searchOpen} aria-controls={searchOpen ? id + "-search" : undefined}
        title={label + " 직접 검색"} onClick={() => onSearch(searchOpen ? null : "")}>
        {searchOpen ? <X size={15} aria-hidden="true" /> : <Search size={15} aria-hidden="true" />}
      </button>
    </div>
    {selected.length ? <div className="review-card-relation-pills" role="group" aria-label={label + " 선택됨"}>
      {selected.map(item => <button type="button" className="review-card-relation-pill" data-selected="true" disabled={disabled}
        key={itemKey(item)} aria-label={itemLabel(item) + " 제거"} onClick={() => onChange(selected.filter(other => itemKey(other) !== itemKey(item)))}>
        <span>{itemLabel(item)}</span><X size={13} aria-hidden="true" />
      </button>)}
    </div> : null}
    {searchOpen ? <input ref={input} id={id + "-search"} type="search" maxLength={120} className="review-card-relation-search"
      aria-label={label + " 검색어"} placeholder={label === "관련 분과" ? "분과명 검색" : "문서명·별칭 검색"} value={search}
      disabled={disabled} onChange={event => onSearch(event.target.value)} onKeyDown={event => {
        if (event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229) return;
        if (event.key === "Enter") {
          event.preventDefault();
          if (choices[0]) add(choices[0]);
        } else if (event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          onSearch(null);
          toggle.current?.focus();
        }
      }} /> : null}
    {choices.length ? <div className="review-card-relation-pills" role="group" aria-label={label + (searchOpen ? " 검색 결과" : " 추천")}>
      {!searchOpen ? <span className="review-card-relation-hint" aria-hidden="true">추천</span> : null}
      {choices.map(item => <button type="button" className="review-card-relation-pill" key={itemKey(item)} disabled={disabled}
        aria-label={itemLabel(item) + " 추가"} onClick={() => add(item)}>
        <Plus size={13} aria-hidden="true" /><span>{itemLabel(item)}</span>
      </button>)}
    </div> : null}
    {full ? <p className="review-card-relation-hint">최대 {REVIEW_CARD_RELATION_LIMIT}개까지 추가할 수 있어요.</p>
      : searchOpen && ready && search.trim() && !choices.length ? <p className="review-card-relation-hint">추가할 검색 결과가 없어요.</p> : null}
  </div>;
}

export function ReviewCardRelationPicker({ front, back, value, onChange, disabled }: {
  front: string;
  back: string;
  value?: ReviewCardRelations;
  onChange: (value: ReviewCardRelations) => void;
  disabled: boolean;
}) {
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [search, setSearch] = useState<{ group: Group; term: string } | null>(null);
  const [note, setNote] = useState({ front, back });
  const relations = value ?? empty;
  const needsCatalog = Boolean(front.trim() || back.trim() || search);

  useEffect(() => {
    if (!needsCatalog || catalog) return;
    let current = true;
    loadReviewCardCatalog().then(result => {
      if (current) setCatalog(result);
    }).catch(() => {
      if (current) setFailed(true);
    });
    return () => { current = false; };
  }, [attempt, catalog, needsCatalog]);

  useEffect(() => {
    const timer = window.setTimeout(() => setNote({ front, back }), 220);
    return () => window.clearTimeout(timer);
  }, [front, back]);

  const suggestions = useMemo(() => {
    if (!catalog || (!note.front.trim() && !note.back.trim())) return empty;
    return recommendReviewCardTopics(catalog, note.front, note.back);
  }, [catalog, note]);

  function changeSearch(group: Group, term: string | null) {
    setSearch(term === null ? null : { group, term });
  }

  const specialtyOptions = search?.group === "specialties" && catalog
    ? searchReviewCardSpecialties(catalog, search.term)
    : suggestions.specialties;
  const documentOptions = search?.group === "documents" && search.term.trim() && catalog
    ? searchReviewCardDocuments(catalog, search.term)
    : suggestions.documents;

  return <div className="review-card-relations-editor">
    <RelationField label="관련 분과" selected={relations.specialties} options={specialtyOptions}
      itemKey={item => item.id} itemLabel={item => item.label}
      search={search?.group === "specialties" ? search.term : null} onSearch={term => changeSearch("specialties", term)}
      onChange={specialties => onChange({ ...relations, specialties })} disabled={disabled} ready={Boolean(catalog)} />
    <RelationField label="관련 문서" selected={relations.documents} options={documentOptions}
      itemKey={item => item.href} itemLabel={item => item.title}
      search={search?.group === "documents" ? search.term : null} onSearch={term => changeSearch("documents", term)}
      onChange={documents => onChange({ ...relations, documents })} disabled={disabled} ready={Boolean(catalog)} />
    {failed && !catalog && needsCatalog ? <p className="review-card-relation-hint" role="status">
      문서 목록을 불러오지 못했어요. <button type="button" className="review-card-link" disabled={disabled}
        onClick={() => { setFailed(false); setAttempt(value => value + 1); }}>다시 시도</button>
    </p> : null}
    {!failed && !catalog && search ? <p className="review-card-relation-hint" role="status">검색 목록을 불러오는 중이에요.</p> : null}
  </div>;
}

export function ReviewCardRelationPills({ value, newTab = false }: { value?: ReviewCardRelations; newTab?: boolean }) {
  const { specialties, documents } = readReviewCardRelations(value);
  if (!specialties.length && !documents.length) return null;
  return <div className="review-card-relation-pills" role="group" aria-label="관련 분과 및 문서">
    {specialties.map(item => <span key={item.id} className="review-card-relation-pill" data-selected="true" title="관련 분과">{item.label}</span>)}
    {documents.map(item => <Link key={item.href} className="review-card-relation-pill" href={item.href} prefetch={false}
      title={item.title} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined}>
      <FileText size={13} aria-hidden="true" /><span>{item.title}</span>
    </Link>)}
  </div>;
}
