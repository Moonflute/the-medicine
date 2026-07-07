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

export function SearchPanel({ entries, className = "" }: { entries: SearchEntry[]; className?: string }) {
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!term) return [];

    return entries
      .filter((entry) => {
        const haystack = [entry.title, entry.category, ...entry.aliases].join(" ").toLowerCase();
        return haystack.includes(term);
      })
      .slice(0, 10);
  }, [entries, term]);

  return (
    <section className={`w-full ${className}`.trim()}>
      <label className="surface flex items-center gap-3 px-4 py-3 focus-within:border-teal-600 focus-within:ring-2 focus-within:ring-teal-600/15 sm:px-5 sm:py-4">
        <Search className="h-5 w-5 shrink-0 text-slate-500" />
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="예: 고혈압, 흉통, STEMI, metformin"
          className="min-w-0 flex-1 bg-transparent text-base text-slate-950 outline-none placeholder:text-slate-400 sm:text-lg"
          autoFocus
        />
      </label>

      {term ? (
        <div className="mt-4 grid gap-2">
          {results.length > 0 ? (
            results.map((entry) => (
              <Link key={`${entry.type}:${entry.slug}`} href={entry.href} className="list-tile group flex items-center justify-between gap-4 px-4 py-3">
                <div className="min-w-0">
                  <div className="truncate font-semibold text-slate-950">{entry.title}</div>
                  <div className="mt-1 text-sm text-slate-600">
                    {entry.type} / {entry.category}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-teal-700" />
              </Link>
            ))
          ) : (
            <div className="surface-subtle p-5 text-sm text-slate-600">검색 결과가 없습니다.</div>
          )}
        </div>
      ) : null}
    </section>
  );
}