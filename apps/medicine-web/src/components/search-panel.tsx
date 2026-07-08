"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

type SearchEntry = {
  type: string;
  slug: string;
  title: string;
  category: string;
  aliases: string[];
  href: string;
};

const TYPE_LABELS: Record<string, string> = {
  chiefComplaint: "CC",
  disease: "Disease",
  drug: "Drug",
  physiology: "Physiology",
  labImg: "Lab / Img",
};

function normalizeSearchText(value: string) {
  return value.toLowerCase().replace(/[\s\uFF0F\/\u00B7._()-]+/g, "");
}

function scoreEntry(entry: SearchEntry, term: string, compactTerm: string) {
  const title = entry.title.toLowerCase();
  const compactTitle = normalizeSearchText(entry.title);
  const aliases = entry.aliases.map((alias) => alias.toLowerCase());
  const compactAliases = entry.aliases.map(normalizeSearchText);
  const category = entry.category.toLowerCase();
  const compactCategory = normalizeSearchText(entry.category);

  if (title === term || compactTitle === compactTerm) return 100;
  if (title.startsWith(term) || compactTitle.startsWith(compactTerm)) return 90;
  if (aliases.some((alias) => alias === term) || compactAliases.some((alias) => alias === compactTerm)) return 85;
  if (title.includes(term) || compactTitle.includes(compactTerm)) return 75;
  if (aliases.some((alias) => alias.includes(term)) || compactAliases.some((alias) => alias.includes(compactTerm))) return 65;
  if (category.includes(term) || compactCategory.includes(compactTerm)) return 45;

  return 0;
}

export function SearchPanel({ entries, className = "" }: { entries: SearchEntry[]; className?: string }) {
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();
  const compactTerm = normalizeSearchText(query.trim());

  const results = useMemo(() => {
    if (!term) return [];

    return entries
      .map((entry) => ({
        entry,
        score: scoreEntry(entry, term, compactTerm),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title, "ko"))
      .map((item) => item.entry)
      .slice(0, 20);
  }, [entries, term, compactTerm]);

  const resultGroups = useMemo(() => {
    return results.reduce<Record<string, SearchEntry[]>>((groups, entry) => {
      const key = TYPE_LABELS[entry.type] ?? entry.type;
      groups[key] = [...(groups[key] ?? []), entry];
      return groups;
    }, {});
  }, [results]);

  const groupEntries = Object.entries(resultGroups);

  const renderEntry = (entry: SearchEntry) => (
    <Link key={`${entry.type}:${entry.slug}`} href={entry.href} className="list-tile group flex items-center justify-between gap-4 px-4 py-3">
      <div className="min-w-0">
        <div className="truncate font-semibold text-slate-950">{entry.title}</div>
        <div className="mt-1 text-sm text-slate-600">
          {TYPE_LABELS[entry.type] ?? entry.type} / {entry.category}
        </div>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-teal-700" />
    </Link>
  );

  return (
    <section className={`w-full ${className}`.trim()}>
      <label className="surface flex items-center gap-3 px-4 py-3 focus-within:border-teal-600 focus-within:ring-2 focus-within:ring-teal-600/15 sm:px-5 sm:py-4">
        <Search className="h-5 w-5 shrink-0 text-slate-500" />
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="예: 가슴 통증, STEMI, metformin"
          className="min-w-0 flex-1 bg-transparent text-base text-slate-950 outline-none placeholder:text-slate-400 sm:text-lg"
          autoFocus
        />
      </label>

      {term ? (
        <div className="mt-4 grid gap-4">
          {results.length > 0 ? (
            groupEntries.map(([label, group]) => (
              <section key={label}>
                <div className="mb-2 text-xs font-semibold uppercase text-slate-500">{label}</div>
                <div className="grid gap-2">{group.map((entry) => renderEntry(entry))}</div>
              </section>
            ))
          ) : (
            <div className="surface-subtle p-5 text-sm text-slate-600">검색 결과가 없습니다.</div>
          )}
        </div>
      ) : null}
    </section>
  );
}
