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

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return entries.slice(0, 8);

    return entries
      .filter((entry) => {
        const haystack = [entry.title, entry.category, ...entry.aliases].join(" ").toLowerCase();
        return haystack.includes(term);
      })
      .slice(0, 10);
  }, [entries, query]);

  return (
    <section className={`surface overflow-hidden ${className}`.trim()}>
      <div className="border-b border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="eyebrow">Clinical search</div>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950 sm:text-4xl">The Medicine</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              질환, 증상, 약물, 검사 항목을 바로 찾아서 노트로 이동합니다.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-600 sm:min-w-80">
            <div className="surface-subtle px-3 py-2">
              <div className="text-base font-semibold text-slate-950">{entries.length}</div>
              <div>indexed</div>
            </div>
            <Link href="/specialties" className="surface-subtle px-3 py-2 transition hover:border-teal-500">
              <div className="text-base font-semibold text-slate-950">Disease</div>
              <div>library</div>
            </Link>
            <Link href="/cc" className="surface-subtle px-3 py-2 transition hover:border-teal-500">
              <div className="text-base font-semibold text-slate-950">CC</div>
              <div>routes</div>
            </Link>
          </div>
        </div>

        <label className="mt-5 flex items-center gap-3 border border-slate-300 bg-slate-50 px-4 py-3 focus-within:border-teal-600 focus-within:bg-white" style={{ borderRadius: 8 }}>
          <Search className="h-5 w-5 shrink-0 text-slate-500" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="예: 고혈압, 흉통, STEMI, metformin"
            className="min-w-0 flex-1 bg-transparent text-base text-slate-950 outline-none placeholder:text-slate-400"
          />
        </label>
      </div>

      <div className="bg-slate-50/70 p-3 sm:p-4">
        {results.length > 0 ? (
          <div className="grid gap-2 xl:max-h-[calc(100vh-20rem)] xl:overflow-y-auto xl:pr-1">
            {results.map((entry) => (
              <Link key={`${entry.type}:${entry.slug}`} href={entry.href} className="list-tile group flex items-center justify-between gap-4 px-4 py-3">
                <div className="min-w-0">
                  <div className="truncate font-semibold text-slate-950">{entry.title}</div>
                  <div className="mt-1 text-sm text-slate-600">
                    {entry.type} / {entry.category}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-teal-700" />
              </Link>
            ))}
          </div>
        ) : (
          <div className="surface-subtle p-6 text-sm text-slate-600">검색 결과가 없습니다.</div>
        )}
      </div>
    </section>
  );
}

