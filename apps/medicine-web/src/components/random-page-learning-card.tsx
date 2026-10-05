"use client";

import { ReviewLaunchAction } from "@/components/review-launch-actions";
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
    <ReviewLaunchAction kind="random" onClick={startRandomLearning} onSettings={() => setSettingsOpen((open) => !open)}
      settingsOpen={settingsOpen} settingsId="random-page-learning-options">
      {settingsOpen || message ? <>
      {settingsOpen ? (
        <div id="random-page-learning-options" className="review-launcher-options">
          <p>학습 대상</p>
          <div className="review-launcher-option-list">
            {DOMAIN_OPTIONS.map((option) => {
              const checked = domains.includes(option.value);
              return (
                <label key={option.value} className="review-launcher-option" data-checked={checked}>
                  <input type="checkbox" checked={checked} onChange={() => toggleDomain(option.value)} />
                  {option.label}
                </label>
              );
            })}
          </div>
        </div>
      ) : null}
      {message ? <p role="status" className="review-launcher-message">{message}</p> : null}
      </> : null}
    </ReviewLaunchAction>
  );
}
