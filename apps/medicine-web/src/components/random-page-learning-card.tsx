"use client";

import { Settings2, Shuffle } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { ReviewCatalogItem, ReviewDomain } from "@/lib/review-store";

const STORAGE_KEY = "medicine-web-random-page-domains";

const DOMAIN_OPTIONS: Array<{ value: ReviewDomain; label: string }> = [
  { value: "cc", label: "CC" },
  { value: "disease", label: "질환" },
  { value: "drug", label: "약물" },
  { value: "lab", label: "검사" },
  { value: "skill", label: "술기" },
];

const DEFAULT_DOMAINS = DOMAIN_OPTIONS.map((option) => option.value);

function isReviewDomain(value: unknown): value is ReviewDomain {
  return DOMAIN_OPTIONS.some((option) => option.value === value);
}

export function RandomPageLearningCard({ catalog }: { catalog: ReviewCatalogItem[] }) {
  const router = useRouter();
  const [domains, setDomains] = useState<ReviewDomain[]>(DEFAULT_DOMAINS);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
        if (Array.isArray(stored)) {
          const valid = stored.filter(isReviewDomain);
          if (valid.length > 0) setDomains(valid);
        }
      } catch {
        // Use the complete default set when local storage is unavailable or invalid.
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function toggleDomain(domain: ReviewDomain) {
    setMessage("");
    setDomains((current) => {
      if (current.includes(domain) && current.length === 1) {
        setMessage("학습할 섹션을 하나 이상 선택하세요.");
        return current;
      }
      const next = current.includes(domain) ? current.filter((item) => item !== domain) : [...current, domain];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  function startRandomLearning() {
    const candidates = catalog.filter((item) => domains.includes(item.type));
    if (candidates.length === 0) {
      setMessage("설정에서 학습할 섹션을 하나 이상 선택하세요.");
      setSettingsOpen(true);
      return;
    }

    const page = candidates[Math.floor(Math.random() * candidates.length)];
    setMessage("");
    router.push(page.href);
  }

  return (
    <section className="relative rounded-xl border border-indigo-200 bg-indigo-50 p-5 transition hover:border-indigo-400 hover:bg-indigo-100/70 sm:p-6">
      <button type="button" onClick={startRandomLearning} aria-label="Start random page learning" className="absolute inset-0 z-0 cursor-pointer rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2" />
      <div className="pointer-events-none relative z-10 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-indigo-800"><Shuffle className="h-5 w-5" />Random study</div>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">랜덤 페이지 학습</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">선택한 섹션에서 임의의 페이지를 열어 복습합니다.</p>
        </div>
        <button
          type="button"
          className="pointer-events-auto relative z-10 rounded-lg border border-indigo-200 bg-white p-2 text-indigo-700 transition hover:bg-indigo-100"
          aria-label="랜덤 학습 설정"
          title="랜덤 학습 설정"
          onClick={() => setSettingsOpen((open) => !open)}
        >
          <Settings2 className="h-5 w-5" />
        </button>
      </div>

      {settingsOpen ? (
        <div className="pointer-events-auto relative z-10 mt-4 rounded-lg border border-indigo-200 bg-white/80 p-4">
          <p className="text-sm font-semibold text-slate-800">학습 대상</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {DOMAIN_OPTIONS.map((option) => {
              const checked = domains.includes(option.value);
              return (
                <label key={option.value} className={`cursor-pointer rounded-lg border px-3 py-2 text-sm font-medium transition ${checked ? "border-indigo-300 bg-indigo-100 text-indigo-900" : "border-slate-200 bg-white text-slate-600"}`}>
                  <input className="sr-only" type="checkbox" checked={checked} onChange={() => toggleDomain(option.value)} />
                  {option.label}
                </label>
              );
            })}
          </div>
        </div>
      ) : null}
      {message ? <p role="status" className="mt-3 text-sm font-medium text-rose-700">{message}</p> : null}
    </section>
  );
}