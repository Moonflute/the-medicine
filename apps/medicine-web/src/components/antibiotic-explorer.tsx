"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { ArrowUpRight, Search, ShieldAlert } from "lucide-react";
import type {
  AntibioticEntry,
  AntibioticSpectrumDataset,
  CoverageLevel,
  PregnancyStatus,
} from "@/lib/types";

type Mode = "matrix" | "organism" | "antibiotic";

const COVERAGE: Record<CoverageLevel, { short: string; label: string; cell: string; rank: number }> = {
  preferred: { short: "◎", label: "우선 고려", cell: "bg-emerald-600 text-white", rank: 5 },
  active: { short: "●", label: "활성 기대", cell: "bg-teal-100 text-teal-950", rank: 4 },
  conditional: { short: "△", label: "조건부", cell: "bg-amber-100 text-amber-950", rank: 3 },
  variable: { short: "≈", label: "가변적", cell: "bg-orange-100 text-orange-950", rank: 2 },
  inactive: { short: "×", label: "비활성", cell: "bg-slate-100 text-slate-400", rank: 1 },
  unknown: { short: "?", label: "근거 불충분", cell: "bg-white text-slate-300", rank: 0 },
};

const PREGNANCY_LABELS: Record<PregnancyStatus, string> = {
  generally_compatible: "대체로 사용 가능",
  use_if_needed: "필요 시 사용",
  trimester_caution: "임신 시점 주의",
  avoid_if_possible: "가능하면 회피",
  contraindicated: "금기",
  insufficient_data: "자료 불충분",
};

const GROUP_LABELS: Record<string, string> = {
  "Gram-positive": "G(+)",
  "Gram-negative": "G(-)",
  Anaerobes: "Anaerobe",
  Atypicals: "Atypical",
  "Resistance phenotype": "내성 phenotype",
};

const ROUTES = ["PO", "IV", "IM", "inhaled", "topical"];

function normalize(value: string) {
  return value.toLocaleLowerCase().replace(/[\s/_-]+/g, "");
}

function drugMatches(entry: AntibioticEntry, query: string) {
  if (!query) return true;
  const needle = normalize(query);
  return [entry.inn, entry.displayName, entry.drugTitle, entry.class].some((value) => normalize(value).includes(needle));
}

function CoverageBadge({ level }: { level: CoverageLevel }) {
  const meta = COVERAGE[level];
  return <span className={`inline-flex min-w-8 items-center justify-center rounded-md px-2 py-1 text-xs font-bold ${meta.cell}`}>{meta.short}</span>;
}

function DrugResult({ entry, organismId }: { entry: AntibioticEntry; organismId?: string }) {
  const level = organismId ? entry.coverage[organismId] ?? "unknown" : undefined;
  return (
    <Link
      href={`/drugs/${entry.drugSlug}`}
      className="group grid gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-teal-400 hover:shadow-md sm:grid-cols-[1fr_auto]"
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <strong className="text-base text-slate-950">{entry.inn}</strong>
          <span className="text-sm text-slate-500">{entry.displayName}</span>
        </div>
        <div className="mt-1 text-xs text-slate-500">{entry.class} · {entry.routes.join(" / ")}</div>
        {entry.siteCaveats[0] ? <p className="mt-2 text-sm leading-6 text-slate-700">{entry.siteCaveats[0]}</p> : null}
      </div>
      <div className="flex items-center gap-2 self-center">
        {level ? <><CoverageBadge level={level} /><span className="text-xs text-slate-600">{COVERAGE[level].label}</span></> : null}
        <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-teal-700" />
      </div>
    </Link>
  );
}

export function AntibioticExplorer({ dataset }: { dataset: AntibioticSpectrumDataset }) {
  const [mode, setMode] = useState<Mode>("matrix");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [group, setGroup] = useState("");
  const [route, setRoute] = useState("");
  const [drugClass, setDrugClass] = useState("");
  const [pregnancy, setPregnancy] = useState("");
  const [matchingOnly, setMatchingOnly] = useState(false);
  const [organismId, setOrganismId] = useState(dataset.organisms[0]?.id ?? "");
  const [antibioticId, setAntibioticId] = useState(dataset.antibiotics[0]?.id ?? "");

  const classes = [...new Set(dataset.antibiotics.map((item) => item.class))].sort();
  const groups = [...new Set(dataset.organisms.map((item) => item.group))];
  const visibleOrganisms = group ? dataset.organisms.filter((item) => item.group === group) : dataset.organisms;
  const filteredDrugs = dataset.antibiotics.filter((entry) => {
    if (!drugMatches(entry, deferredQuery)) return false;
    if (route && !entry.routes.includes(route)) return false;
    if (drugClass && entry.class !== drugClass) return false;
    if (pregnancy && entry.pregnancy.status !== pregnancy) return false;
    return true;
  });
  const selectedOrganism = dataset.organisms.find((item) => item.id === organismId);
  const organismResults = [...dataset.antibiotics]
    .filter((entry) => !route || entry.routes.includes(route))
    .sort((a, b) => COVERAGE[b.coverage[organismId] ?? "unknown"].rank - COVERAGE[a.coverage[organismId] ?? "unknown"].rank);
  const selectedDrug = dataset.antibiotics.find((item) => item.id === antibioticId);

  const reset = () => {
    setQuery("");
    setGroup("");
    setRoute("");
    setDrugClass("");
    setPregnancy("");
    setMatchingOnly(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="탐색 방식">
        {([
          ["matrix", "Spectrum matrix"],
          ["organism", "균 → 항생제"],
          ["antibiotic", "항생제 → 균"],
        ] as const).map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={mode === value}
            onClick={() => setMode(value)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${mode === value ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-700 hover:border-teal-400"}`}
          >
            {label}
          </button>
        ))}
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5" aria-label="항생제 필터">
        <div className="grid gap-3 lg:grid-cols-[minmax(220px,1.4fr)_repeat(3,minmax(150px,1fr))]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <span className="sr-only">항생제 검색</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="성분명·한글명·class 검색" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
          </label>
          <select value={drugClass} onChange={(event) => setDrugClass(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm">
            <option value="">모든 class</option>
            {classes.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select value={pregnancy} onChange={(event) => setPregnancy(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm">
            <option value="">임신 관련 상태 전체</option>
            {Object.entries(PREGNANCY_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
          <button type="button" onClick={reset} className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">필터 초기화</button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {ROUTES.map((item) => <button key={item} type="button" onClick={() => setRoute(route === item ? "" : item)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${route === item ? "border-teal-700 bg-teal-700 text-white" : "border-slate-200 bg-white text-slate-600"}`}>{item}</button>)}
          <span className="mx-1 h-5 w-px bg-slate-200" />
          {groups.map((item) => <button key={item} type="button" onClick={() => setGroup(group === item ? "" : item)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${group === item ? "border-amber-600 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-600"}`}>{GROUP_LABELS[item] ?? item}</button>)}
          <span className="ml-auto text-xs font-medium text-slate-500">{filteredDrugs.length}/{dataset.antibiotics.length}개</span>
        </div>
      </section>

      {mode === "matrix" ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-stone-50 px-4 py-3">
            {(Object.keys(COVERAGE) as CoverageLevel[]).map((level) => <span key={level} className="inline-flex items-center gap-1.5 text-xs text-slate-600"><CoverageBadge level={level} />{COVERAGE[level].label}</span>)}
            <label className="ml-auto inline-flex items-center gap-2 text-xs font-medium text-slate-600"><input type="checkbox" checked={matchingOnly} onChange={(event) => setMatchingOnly(event.target.checked)} /> 활성 기대 이상만 강조</label>
          </div>

          <div className="hidden max-h-[72vh] overflow-auto rounded-2xl border border-slate-200 bg-white shadow-sm lg:block">
            <table className="min-w-max border-separate border-spacing-0 text-xs">
              <thead className="sticky top-0 z-20 bg-slate-950 text-white">
                <tr>
                  <th className="sticky left-0 z-30 min-w-56 border-b border-r border-slate-700 bg-slate-950 px-4 py-3 text-left">Antibiotic</th>
                  {visibleOrganisms.map((organism) => <th key={organism.id} className="min-w-24 max-w-28 border-b border-r border-slate-700 px-2 py-3 align-bottom"><span className="block -rotate-0 leading-4">{organism.label}</span></th>)}
                </tr>
              </thead>
              <tbody>
                {dataset.antibiotics.map((entry) => {
                  const matches = filteredDrugs.some((item) => item.id === entry.id);
                  return (
                    <tr key={entry.id} className={`transition ${matches ? "opacity-100" : matchingOnly ? "hidden" : "opacity-20"}`}>
                      <th className="sticky left-0 z-10 border-b border-r border-slate-200 bg-white px-4 py-2 text-left">
                        <Link href={`/drugs/${entry.drugSlug}`} className="font-semibold text-slate-950 hover:text-teal-700">{entry.inn}</Link>
                        <span className="mt-0.5 block font-normal text-slate-400">{entry.routes.join("/")}</span>
                      </th>
                      {visibleOrganisms.map((organism) => {
                        const level = entry.coverage[organism.id] ?? "unknown";
                        const faded = matchingOnly && COVERAGE[level].rank < COVERAGE.active.rank;
                        return <td key={organism.id} title={`${entry.inn} · ${organism.label}: ${COVERAGE[level].label}`} className={`border-b border-r border-slate-100 p-1.5 text-center ${faded ? "opacity-20" : ""}`}><CoverageBadge level={level} /></td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="grid gap-3 lg:hidden">
            {filteredDrugs.map((entry) => <DrugResult key={entry.id} entry={entry} />)}
          </div>
        </section>
      ) : null}

      {mode === "organism" ? (
        <section className="grid gap-5 lg:grid-cols-[280px_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">균 또는 phenotype 선택</label>
            <select value={organismId} onChange={(event) => setOrganismId(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-3 text-sm">
              {groups.map((item) => <optgroup key={item} label={GROUP_LABELS[item] ?? item}>{dataset.organisms.filter((organism) => organism.group === item).map((organism) => <option key={organism.id} value={organism.id}>{organism.label}</option>)}</optgroup>)}
            </select>
            <p className="mt-4 text-sm leading-6 text-slate-600">{selectedOrganism?.aliases.join(" · ") || "일반적인 in-vitro spectrum 기준"}</p>
          </div>
          <div className="space-y-3">
            {organismResults.filter((entry) => COVERAGE[entry.coverage[organismId] ?? "unknown"].rank >= (matchingOnly ? 4 : 2)).map((entry) => <DrugResult key={entry.id} entry={entry} organismId={organismId} />)}
          </div>
        </section>
      ) : null}

      {mode === "antibiotic" && selectedDrug ? (
        <section className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">항생제 선택</label>
            <select value={antibioticId} onChange={(event) => setAntibioticId(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-3 text-sm sm:max-w-xl">
              {classes.map((item) => <optgroup key={item} label={item}>{dataset.antibiotics.filter((entry) => entry.class === item).map((entry) => <option key={entry.id} value={entry.id}>{entry.inn} ({entry.displayName})</option>)}</optgroup>)}
            </select>
            <div className="mt-5 flex flex-wrap items-start justify-between gap-4 border-t border-slate-100 pt-5">
              <div><h2 className="text-2xl font-bold text-slate-950">{selectedDrug.inn}</h2><p className="mt-1 text-sm text-slate-500">{selectedDrug.class} · {selectedDrug.routes.join(" / ")} · 임신: {PREGNANCY_LABELS[selectedDrug.pregnancy.status]}</p></div>
              <Link href={`/drugs/${selectedDrug.drugSlug}`} className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white">개별 약물 노트 <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </div>
          {(selectedDrug.siteCaveats.length > 0 || selectedDrug.resistanceNotes.length > 0) ? <div className="rounded-xl border border-amber-200 bg-amber-50 p-4"><div className="flex gap-2 text-sm font-semibold text-amber-950"><ShieldAlert className="h-4 w-4" />임상적 예외</div>{[...selectedDrug.siteCaveats, ...selectedDrug.resistanceNotes].map((note) => <p key={note} className="mt-2 text-sm leading-6 text-amber-950">{note}</p>)}</div> : null}
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {dataset.organisms.map((organism) => { const level = selectedDrug.coverage[organism.id] ?? "unknown"; return <article key={organism.id} className={`rounded-xl border border-slate-200 p-4 ${COVERAGE[level].cell}`}><div className="flex items-center justify-between gap-3"><strong className="text-sm">{organism.label}</strong><span className="text-lg font-black">{COVERAGE[level].short}</span></div><div className="mt-1 text-xs opacity-75">{COVERAGE[level].label}</div></article>; })}
          </div>
        </section>
      ) : null}

      <footer className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-5 text-slate-600">
        <strong className="text-slate-800">해석 주의:</strong> {dataset.disclaimer} · 검토일 {dataset.reviewedAt}
      </footer>
    </div>
  );
}
