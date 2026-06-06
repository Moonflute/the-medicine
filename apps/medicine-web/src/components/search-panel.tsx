"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

type SearchEntry = {
  type: string;
  slug: string;
  title: string;
  category: string;
  aliases: string[];
  href: string;
};

export function SearchPanel({ entries }: { entries: SearchEntry[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return entries.slice(0, 8);

    return entries
      .filter((entry) => {
        const haystack = [entry.title, entry.category, ...entry.aliases]
          .join(" ")
          .toLowerCase();
        return haystack.includes(term);
      })
      .slice(0, 12);
  }, [entries, query]);

  return (
    <section className="rounded-[32px] border border-stone-200 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
          <Search className="h-5 w-5" />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold tracking-tight">Quick search</h2>
          <p className="text-sm text-stone-600">질병명, alias, CC로 바로 찾을 수 있게 붙여뒀습니다.</p>
        </div>
      </div>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="예: 고혈압, 흉통, STEMI"
        className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none ring-0 transition focus:border-stone-400"
      />
      <div className="mt-4 grid gap-3">
        {results.map((entry) => (
          <Link
            key={`${entry.type}:${entry.slug}`}
            href={entry.href}
            className="rounded-2xl border border-stone-200 bg-stone-50/80 px-4 py-3 transition hover:border-stone-300 hover:bg-white"
          >
            <div className="font-medium text-stone-900">{entry.title}</div>
            <div className="mt-1 text-sm text-stone-600">
              {entry.type} · {entry.category}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
