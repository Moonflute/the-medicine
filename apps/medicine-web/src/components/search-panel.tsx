"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Clock3, Search } from "lucide-react";
import type { SearchEntry } from "@/lib/types";

const RECENT_SEARCHES_KEY = "medicine-web-recent-searches";
const TYPE_LABELS: Record<string, string> = {
  chiefComplaint: "CC",
  disease: "Disease",
  drug: "Drug",
  pathology: "Pathology",
  labImg: "Lab / Img",
  skill: "Skill",
};

function normalizeSearchText(value: string) {
  return value.toLowerCase().replace(/[\s\uFF0F\/\u00B7._()-]+/g, "");
}

function matches(values: string[], term: string, compactTerm: string, mode: "exact" | "prefix" | "include") {
  return values.some((value) => {
    const lower = value.toLowerCase();
    const compact = normalizeSearchText(value);
    if (mode === "exact") return lower === term || compact === compactTerm;
    if (mode === "prefix") return lower.startsWith(term) || compact.startsWith(compactTerm);
    return lower.includes(term) || compact.includes(compactTerm);
  });
}

function scoreEntry(entry: SearchEntry, term: string, compactTerm: string) {
  const titles = [entry.title];
  const categories = [entry.category];
  const summaries = [entry.quickSummary];

  if (matches(titles, term, compactTerm, "exact")) return 100;
  if (matches(entry.aliases, term, compactTerm, "exact")) return 95;
  if (matches(titles, term, compactTerm, "prefix")) return 90;
  if (matches(entry.aliases, term, compactTerm, "prefix")) return 82;
  if (matches(titles, term, compactTerm, "include")) return 75;
  if (matches(entry.aliases, term, compactTerm, "include")) return 68;
  if (matches(entry.keywords, term, compactTerm, "exact")) return 62;
  if (matches(entry.keywords, term, compactTerm, "include")) return 55;
  if (matches(categories, term, compactTerm, "include")) return 45;
  if (matches(summaries, term, compactTerm, "include")) return 35;
  return 0;
}

export function SearchPanel({ entries, className = "" }: { entries: SearchEntry[]; className?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeResultIndex, setActiveResultIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = JSON.parse(window.localStorage.getItem(RECENT_SEARCHES_KEY) ?? "[]") as string[];
      return saved.filter((item) => typeof item === "string").slice(0, 6);
    } catch {
      window.localStorage.removeItem(RECENT_SEARCHES_KEY);
      return [];
    }
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const term = query.trim().toLowerCase();
  const compactTerm = normalizeSearchText(query.trim());

  useEffect(() => {
    const focusSearch = () => inputRef.current?.focus();
    window.addEventListener("medicine:focus-search", focusSearch);
    return () => window.removeEventListener("medicine:focus-search", focusSearch);
  }, []);

  const results = useMemo(() => {
    if (!term) return [];
    return entries
      .map((entry) => ({ entry, score: scoreEntry(entry, term, compactTerm) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title, "ko"))
      .map((item) => item.entry)
      .slice(0, 24);
  }, [entries, term, compactTerm]);

  const resultGroups = useMemo(() => results.reduce<Record<string, SearchEntry[]>>((groups, entry) => {
    const key = TYPE_LABELS[entry.type] ?? entry.type;
    groups[key] = [...(groups[key] ?? []), entry];
    return groups;
  }, {}), [results]);

  useEffect(() => {
    setActiveResultIndex(0);
  }, [term]);

  const rememberSearch = () => {
    const cleaned = query.trim();
    if (!cleaned) return;
    const next = [cleaned, ...recentSearches.filter((item) => normalizeSearchText(item) !== normalizeSearchText(cleaned))].slice(0, 6);
    setRecentSearches(next);
    window.localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(next));
  };

  const openResult = (index: number) => {
    const entry = results[index];
    if (!entry) return;
    rememberSearch();
    router.push(entry.href);
  };

  const handleInputKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveResultIndex((index) => (index + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveResultIndex((index) => (index - 1 + results.length) % results.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      openResult(activeResultIndex);
    }
  };

  useEffect(() => {
    document.getElementById(`search-result-${activeResultIndex}`)?.scrollIntoView({ block: "nearest" });
  }, [activeResultIndex]);
  return (
    <section className={`w-full ${className}`.trim()}>
      <label className="surface flex items-center gap-3 px-4 py-3 focus-within:border-teal-600 focus-within:ring-2 focus-within:ring-teal-600/15 sm:px-5 sm:py-4">
        <Search className="h-5 w-5 shrink-0 text-slate-500" />
        <input ref={inputRef} type="text" value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={handleInputKeyDown} placeholder="예: 가슴 통증, STEMI, metformin" className="min-w-0 flex-1 bg-transparent text-base text-slate-950 outline-none placeholder:text-slate-400 sm:text-lg" autoFocus />
        <span className="hidden rounded border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] text-slate-400 sm:inline">Ctrl K</span>
      </label>

      {!term && recentSearches.length > 0 ? (
        <div className="mt-4">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-slate-500"><Clock3 className="h-3.5 w-3.5" />최근 검색</div>
          <div className="flex flex-wrap gap-2">{recentSearches.map((item) => <button key={item} type="button" onClick={() => setQuery(item)} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-teal-300 hover:text-teal-800">{item}</button>)}</div>
        </div>
      ) : null}

      {term ? (
        <div className="mt-4 grid gap-4">
          {results.length > 0 ? Object.entries(resultGroups).map(([label, group]) => (
            <section key={label}>
              <div className="mb-2 text-xs font-semibold uppercase text-slate-500">{label}</div>
              <div className="grid gap-2">{group.map((entry) => {
                const resultIndex = results.indexOf(entry);
                const isActive = resultIndex === activeResultIndex;
                return (
                <Link key={`${entry.type}:${entry.slug}`} id={`search-result-${resultIndex}`} href={entry.href} onClick={rememberSearch} onMouseEnter={() => setActiveResultIndex(resultIndex)} className={`list-tile group flex items-center justify-between gap-4 px-4 py-3 ${isActive ? "border-teal-500 bg-teal-50" : ""}`}>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2"><div className="truncate font-semibold text-slate-950">{entry.title}</div><span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">{TYPE_LABELS[entry.type] ?? entry.type}</span></div>
                    <div className="mt-1 text-sm text-slate-500">{entry.category}</div>
                    {entry.quickSummary ? <div className="mt-1 line-clamp-2 text-sm leading-5 text-slate-700">{entry.quickSummary}</div> : null}
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-teal-700" />
                </Link>
                );
              })}</div>
            </section>
          )) : <div className="surface-subtle p-5 text-sm text-slate-600">검색 결과가 없습니다.</div>}
        </div>
      ) : null}
    </section>
  );
}