"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Plus } from "lucide-react";

type ReferenceEntry = { id: string; label: string; low: string; high: string };
type ReferenceRow = ReferenceEntry & { unit: string; source?: string; note?: string };
type ReferenceGroup = { id: string; label: string; source: string; rows: ReferenceRow[] };
type ReferenceList = { groups: ReferenceGroup[]; sources: Record<string, { label: string; href: string }> };
type SavedReference = ReferenceEntry & { group: string };
type Draft = SavedReference & { adding: boolean };

const storagePrefix = "medicine-study-references-v1:";

function readSavedReferences(key: string): SavedReference[] | null {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const rows: unknown = JSON.parse(raw);
    if (!Array.isArray(rows) || rows.some(row => !row || typeof row.id !== "string" ||
      typeof row.group !== "string" || typeof row.label !== "string" ||
      typeof row.low !== "string" || typeof row.high !== "string")) return null;
    return rows;
  } catch {
    return null;
  }
}

function boundNumber(text: string, isLower: boolean) {
  const number = text.replace(isLower ? /^(?:>=|≥|>)\s*/ : /^(?:<=|≤|<)\s*/, "").replace(/^−/, "-");
  return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/.test(number) ? Number(number) : NaN;
}

export function StudyReferenceTab({ account }: { account: string | null }) {
  const storageKey = storagePrefix + (account ?? "guest");
  const [saved, setSaved] = useState(() => readSavedReferences(storageKey));
  const [catalog, setCatalog] = useState<ReferenceList | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [error, setError] = useState("");
  const editorInput = useRef<HTMLInputElement>(null);
  const editingId = draft?.id;

  useEffect(() => {
    const controller = new AbortController();
    fetch((process.env.NEXT_PUBLIC_BASE_PATH ?? "") + "/generated/study-reference-values.json", { signal: controller.signal })
      .then(async response => {
        if (!response.ok) throw new Error("기준치 목록을 읽지 못했습니다.");
        const data = await response.json() as ReferenceList;
        if (!data?.groups?.length || !data.sources) throw new Error("기준치 목록이 비어 있습니다.");
        if (!controller.signal.aborted) setCatalog(data);
      })
      .catch(() => { if (!controller.signal.aborted) setLoadError(true); });
    return () => controller.abort();
  }, [loadAttempt]);

  useEffect(() => {
    const update = (event: StorageEvent) => {
      if (event.key === storageKey || event.key === null) setSaved(readSavedReferences(storageKey));
    };
    window.addEventListener("storage", update);
    return () => window.removeEventListener("storage", update);
  }, [storageKey]);

  useEffect(() => {
    if (editingId) editorInput.current?.focus();
  }, [editingId]);

  if (!catalog) {
    return <div className="study-flow-body study-reference-loading">
      {loadError ? <><p role="alert">기준치 목록을 불러오지 못했습니다.</p><button type="button" onClick={() => {
        setLoadError(false);
        setLoadAttempt(attempt => attempt + 1);
      }}>다시 시도</button></> : <p role="status">기준치 목록을 불러오는 중…</p>}
    </div>;
  }

  const { groups, sources } = catalog;
  const savedById = new Map<string, SavedReference>(saved?.map(row => [row.id, row]));
  const baseIds = new Set(groups.flatMap(group => group.rows.map(row => row.id)));
  const editingGroup = groups.find(group => group.id === draft?.group);
  const original = editingGroup?.rows.find(row => row.id === editingId);
  const source = original && editingGroup ? sources[original.source ?? editingGroup.source] : null;

  const closeEditor = (rowId?: string) => {
    setDraft(null);
    setError("");
    requestAnimationFrame(() => {
      const rowButton = rowId ? document.getElementById("study-reference-" + rowId) : null;
      (rowButton ?? document.getElementById("study-reference-add"))?.focus();
    });
  };

  const persist = (id: string, replacement: SavedReference | null) => {
    try {
      const latest = readSavedReferences(storageKey);
      if (latest === null) throw new Error("저장된 기준치를 읽지 못했습니다.");
      const index = latest.findIndex(row => row.id === id);
      const rows = latest.filter(row => row.id !== id);
      if (replacement) rows.splice(index < 0 ? rows.length : index, 0, replacement);
      window.localStorage.setItem(storageKey, JSON.stringify(rows));
      setSaved(rows);
      closeEditor(id);
    } catch {
      setError("기준치를 저장하지 못했습니다. 브라우저 저장 공간을 확인해 주세요.");
    }
  };

  const save = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!draft) return;
    const { id, group } = draft;
    const label = draft.label.trim();
    const low = draft.low.trim();
    const high = draft.high.trim();
    const lower = low ? boundNumber(low, true) : -Infinity;
    const upper = high ? boundNumber(high, false) : Infinity;
    if (!label || (!low && !high) || Number.isNaN(lower) || Number.isNaN(upper) || lower > upper) {
      setError("항목명과 숫자를 입력해 주세요. 하한은 상한 이하여야 합니다.");
      return;
    }
    const matchesDefault = original && low === original.low && high === original.high;
    persist(id, matchesDefault ? null : { id, group, label, low, high });
  };

  const editor = draft && <form className="study-reference-form" onSubmit={save} onKeyDown={event => {
    if (event.key === "Escape" && !event.nativeEvent.isComposing) {
      event.preventDefault();
      closeEditor(draft.id);
    }
  }}>
    {draft.adding ? <select aria-label="기준치 분류" value={draft.group} onChange={event => setDraft({ ...draft, group: event.target.value })}>
      {groups.map(group => <option key={group.id} value={group.id}>{group.label}</option>)}
    </select> : null}
    <div className="study-reference-fields">
      {original ? <strong>{original.label}</strong> : <input ref={editorInput} aria-label="항목명" maxLength={60} placeholder="항목명" value={draft.label} onChange={event => setDraft({ ...draft, label: event.target.value })} />}
      <input ref={original?.low ? editorInput : undefined} aria-label="하한" inputMode="decimal" maxLength={16} placeholder="하한" value={draft.low} onChange={event => setDraft({ ...draft, low: event.target.value })} />
      <input ref={original && !original.low ? editorInput : undefined} aria-label="상한" inputMode="decimal" maxLength={16} placeholder="상한" value={draft.high} onChange={event => setDraft({ ...draft, high: event.target.value })} />
    </div>
    {original ? <p className="study-reference-source">
      <span>{original.unit || "무단위"}{original.note ? " · " + original.note : ""}</span>
      {source ? <a href={source.href} target="_blank" rel="noreferrer">기본값 출처 · {source.label}</a> : null}
    </p> : null}
    {error ? <p className="study-reference-error" role="alert">{error}</p> : null}
    <div className="study-reference-actions">
      {!draft.adding && (!original || savedById.has(draft.id)) ? <button type="button" onClick={() => persist(draft.id, null)}>{original ? "기본값 복원" : "삭제"}</button> : null}
      <button type="button" onClick={() => closeEditor(draft.id)}>취소</button>
      <button className="study-reference-save" type="submit" title="이 브라우저에 저장">저장</button>
    </div>
  </form>;

  return <div className="study-flow-body study-reference-body">
    <div className="study-reference-content">
      <div className="study-reference-toolbar">
        <p>성인 학습용 · 실제 판독은 검사실 참고범위 우선</p>
        <button id="study-reference-add" type="button" disabled={!!draft || saved === null} onClick={() => {
          setDraft({ id: window.crypto.randomUUID(), group: groups[0].id, label: "", low: "", high: "", adding: true });
        }}><Plus size={14} />추가</button>
      </div>
      {saved === null ? <p className="study-reference-error" role="alert">기기에 저장된 기준치를 읽지 못했습니다.</p> : null}
      {draft?.adding ? editor : null}
      <table className="study-reference-table" aria-label="성인 학습용 기준치">
        <colgroup><col /><col className="study-reference-value-col" /><col className="study-reference-value-col" /></colgroup>
        <thead className="sr-only"><tr><th scope="col">항목명</th><th scope="col">하한</th><th scope="col">상한</th></tr></thead>
        {groups.map(group => {
          const rows = group.rows.map(row => ({ entry: savedById.get(row.id) ?? row, unit: row.unit }));
          for (const row of saved ?? []) if (row.group === group.id && !baseIds.has(row.id)) rows.push({ entry: row, unit: "" });
          // Keep the open editor reachable if another tab removes a personal row.
          if (draft && !draft.adding && draft.group === group.id && !rows.some(row => row.entry.id === draft.id)) {
            rows.push({ entry: draft, unit: "" });
          }
          return <tbody key={group.id}>
            <tr className="study-reference-group"><th scope="rowgroup" colSpan={3}>{group.label}</th></tr>
            {rows.map(({ entry, unit }) => editingId === entry.id && !draft?.adding ?
              <tr key={entry.id}><td colSpan={3}>{editor}</td></tr> :
              <tr key={entry.id} className="study-reference-row">
                <th scope="row">{draft || saved === null ? entry.label : <button
                  id={"study-reference-" + entry.id} type="button"
                  title={unit ? `${unit} · 단위·출처 및 편집` : "편집"}
                  aria-label={entry.label + " 편집" + (unit ? ", " + unit : "")}
                  onClick={() => setDraft({ ...entry, group: group.id, adding: false })}
                >{entry.label}</button>}</th>
                <td>{entry.low}</td><td>{entry.high}</td>
              </tr>)}
          </tbody>;
        })}
      </table>
    </div>
  </div>;
}
