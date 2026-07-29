"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Maximize2, RotateCw, Search, ShieldAlert, X } from "lucide-react";
import type { AntibioticEntry, AntibioticSpectrumDataset, CoverageLevel, PregnancyStatus } from "@/lib/types";
import type { InfectionPathway, InfectionPathwayDataset } from "@/lib/infection-types";

type Mode = "matrix" | "organism" | "antibiotic";
type OrganismGroup = "Gram-positive" | "Gram-negative" | "Anaerobes" | "Atypicals" | "Resistance phenotype";

const GROUP_ORDER: OrganismGroup[] = ["Gram-positive", "Gram-negative", "Anaerobes", "Atypicals", "Resistance phenotype"];
const GROUP_META: Record<OrganismGroup, { label: string; table: string; chip: string }> = {
  "Gram-positive": { label: "G(+) ", table: "bg-sky-700", chip: "border-sky-300 bg-sky-50 text-sky-950" },
  "Gram-negative": { label: "G(-)", table: "bg-rose-700", chip: "border-rose-300 bg-rose-50 text-rose-950" },
  Anaerobes: { label: "Anaerobe", table: "bg-amber-700", chip: "border-amber-300 bg-amber-50 text-amber-950" },
  Atypicals: { label: "Atypical", table: "bg-violet-700", chip: "border-violet-300 bg-violet-50 text-violet-950" },
  "Resistance phenotype": { label: "내성", table: "bg-slate-700", chip: "border-slate-300 bg-slate-100 text-slate-950" },
};

const COVERAGE: Record<CoverageLevel, { short: string; label: string; cell: string; rank: number }> = {
  preferred: { short: "◎", label: "우선 고려", cell: "bg-emerald-600 text-white", rank: 5 },
  active: { short: "○", label: "활성 기대", cell: "bg-teal-100 text-teal-950", rank: 4 },
  conditional: { short: "△", label: "조건부", cell: "bg-amber-100 text-amber-950", rank: 3 },
  variable: { short: "≈", label: "가변적", cell: "bg-orange-100 text-orange-950", rank: 2 },
  inactive: { short: "×", label: "비활성", cell: "bg-slate-100 text-slate-400", rank: 1 },
  unknown: { short: "?", label: "근거 불충분", cell: "bg-white text-slate-300", rank: 0 },
};

const PREGNANCY_LABELS: Record<PregnancyStatus, string> = {
  generally_compatible: "대체로 사용 가능", use_if_needed: "필요 시 사용", trimester_caution: "임신 시점 주의",
  avoid_if_possible: "가능하면 회피", contraindicated: "금기", insufficient_data: "자료 불충분",
};
const ROUTES = ["PO", "IV", "IM", "inhaled", "topical"];
const MATRIX_ORGANISM_LABELS: Record<string, string> = {
  "Streptococcus spp.": "Strep. spp.",
  "Streptococcus pneumoniae": "S. pneumoniae",
  "Enterococcus faecalis": "E. faecalis",
  "Enterococcus faecium": "E. faecium",
  "Listeria monocytogenes": "L. monocytogenes",
  "Haemophilus influenzae": "H. influenzae",
  "Neisseria spp.": "Neisseria spp.",
  "Escherichia coli": "E. coli",
  "Klebsiella pneumoniae": "K. pneumoniae",
  "Enterobacter cloacae": "E. cloacae",
  "Pseudomonas aeruginosa": "P. aeruginosa",
  "Acinetobacter baumannii": "A. baumannii",
  "Bacteroides fragilis": "B. fragilis",
  "Clostridioides difficile": "C. difficile",
  "Mycoplasma pneumoniae": "M. pneumoniae",
  "Chlamydia pneumoniae": "C. pneumoniae",
};
function matrixOrganismLabel(label: string) { return MATRIX_ORGANISM_LABELS[label] ?? label; }

function normalize(value: string) { return value.toLocaleLowerCase().replace(/[\s/_-]+/g, ""); }
function drugMatches(entry: AntibioticEntry, query: string) {
  if (!query) return true;
  const needle = normalize(query);
  return [entry.inn, entry.displayName, entry.drugTitle, entry.class].some((value) => normalize(value).includes(needle));
}
function coverage(entry: AntibioticEntry, organismId: string): CoverageLevel { return entry.coverage[organismId] ?? "unknown"; }

function classFamily(value: string) {
  const normalized = value.toLowerCase();
  if (normalized.includes("penicillin")) return { key: "penicillins", label: "Penicillins / BLI", color: "bg-sky-100 text-sky-950" };
  if (normalized.includes("cephalosporin") || normalized.includes("cephamycin")) return { key: "cephalosporins", label: "Cephalosporins", color: "bg-indigo-100 text-indigo-950" };
  if (normalized.includes("carbapenem")) return { key: "carbapenems", label: "Carbapenems / BLI", color: "bg-orange-100 text-orange-950" };
  if (normalized.includes("monobactam")) return { key: "monobactams", label: "Monobactams", color: "bg-lime-100 text-lime-950" };
  if (normalized.includes("aminoglycoside")) return { key: "aminoglycosides", label: "Aminoglycosides", color: "bg-yellow-100 text-yellow-950" };
  if (normalized.includes("fluoroquinolone")) return { key: "fluoroquinolones", label: "Fluoroquinolones", color: "bg-fuchsia-100 text-fuchsia-950" };
  if (normalized.includes("macrolide") || normalized.includes("lincosamide")) return { key: "macrolides", label: "Macrolides / Lincosamides", color: "bg-pink-100 text-pink-950" };
  if (normalized.includes("tetracycline") || normalized.includes("glycylcycline")) return { key: "tetracyclines", label: "Tetracyclines", color: "bg-emerald-100 text-emerald-950" };
  if (normalized.includes("glycopeptide") || normalized.includes("lipopeptide") || normalized.includes("oxazolidinone")) return { key: "gram-positive", label: "Gram-positive agents", color: "bg-violet-100 text-violet-950" };
  return { key: "other", label: "Other antibacterial agents", color: "bg-stone-100 text-stone-950" };
}

function groupedDrugs(entries: AntibioticEntry[]) {
  const order = ["penicillins", "cephalosporins", "carbapenems", "monobactams", "aminoglycosides", "fluoroquinolones", "macrolides", "tetracyclines", "gram-positive", "other"];
  return order.map((key) => {
    const notes = entries.filter((entry) => classFamily(entry.class).key === key).sort((a, b) => a.inn.localeCompare(b.inn));
    return notes.length ? { meta: classFamily(notes[0].class), notes } : null;
  }).filter(Boolean) as Array<{ meta: ReturnType<typeof classFamily>; notes: AntibioticEntry[] }>;
}

function CoverageBadge({ level }: { level: CoverageLevel }) {
  const meta = COVERAGE[level];
  return <span className={`inline-flex min-w-8 items-center justify-center rounded-md px-2 py-1 text-xs font-bold ${meta.cell}`}>{meta.short}</span>;
}

function DrugResult({ entry, organismId }: { entry: AntibioticEntry; organismId?: string }) {
  const level = organismId ? coverage(entry, organismId) : undefined;
  return <Link href={`/drugs/${entry.drugSlug}`} className="group grid gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-teal-400 hover:shadow-md sm:grid-cols-[1fr_auto]">
    <div><div className="flex flex-wrap items-center gap-2"><strong className="text-base text-slate-950">{entry.inn}</strong><span className="text-sm text-slate-500">{entry.displayName}</span></div><div className="mt-1 text-xs text-slate-500">{entry.class} · {entry.routes.join(" / ")}</div>{entry.siteCaveats[0] ? <p className="mt-2 text-sm leading-6 text-slate-700">{entry.siteCaveats[0]}</p> : null}</div>
    <div className="flex items-center gap-2 self-center">{level ? <><CoverageBadge level={level} /><span className="text-xs text-slate-600">{COVERAGE[level].label}</span></> : null}<ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-teal-700" /></div>
  </Link>;
}

function SpectrumTable({ antibiotics, organisms, matchingOnly }: { antibiotics: AntibioticEntry[]; organisms: AntibioticSpectrumDataset["organisms"]; matchingOnly: boolean }) {
  const groups = GROUP_ORDER.map((group) => ({ group, organisms: organisms.filter((item) => item.group === group) })).filter((item) => item.organisms.length);
  const rows = groupedDrugs(antibiotics);
  return <table className="min-w-max border-separate border-spacing-0 text-xs">
    <thead className="sticky top-0 z-20 text-white">
      <tr>
        <th rowSpan={2} className="sticky left-0 z-30 min-w-40 border-b border-r border-slate-700 bg-slate-950 px-3 py-3 text-left sm:min-w-56 sm:px-4">Antibiotic</th>
        {groups.map(({ group, organisms: items }) => <th key={group} colSpan={items.length} className={`border-b border-r border-white/30 px-2 py-2 text-center font-semibold ${GROUP_META[group].table}`}>{GROUP_META[group].label}</th>)}
      </tr>
      <tr>
        {groups.flatMap(({ organisms: items }) => items).map((organism) => <th key={organism.id} title={organism.label} className="min-w-14 max-w-16 border-b border-r border-slate-700 bg-slate-950 px-1 py-2 align-bottom sm:min-w-16 sm:max-w-20">{organism.microbiologySlug ? <Link href={`/microbiology/${organism.microbiologySlug}`} className="block text-[11px] leading-4 hover:text-teal-200">{matrixOrganismLabel(organism.label)}</Link> : <span className="block text-[11px] leading-4">{matrixOrganismLabel(organism.label)}</span>}</th>)}
      </tr>
    </thead>
    {rows.map(({ meta, notes }) => <tbody key={meta.key}>
      <tr><th colSpan={organisms.length + 1} className={`border-b border-t border-slate-200 px-3 py-1.5 text-left text-[11px] font-bold uppercase tracking-wide ${meta.color}`}>{meta.label}</th></tr>
      {notes.map((entry) => <tr key={entry.id}>
        <th className="sticky left-0 z-10 border-b border-r border-slate-200 bg-white px-3 py-2 text-left sm:px-4"><Link href={`/drugs/${entry.drugSlug}`} className="font-semibold text-slate-950 hover:text-teal-700">{entry.inn}</Link><span className="mt-0.5 block font-normal text-slate-400">{entry.routes.join("/")}</span></th>
        {organisms.map((organism) => { const level = coverage(entry, organism.id); const faded = matchingOnly && COVERAGE[level].rank < COVERAGE.active.rank; return <td key={organism.id} title={`${entry.inn} · ${organism.label}: ${COVERAGE[level].label}`} className={`border-b border-r border-slate-100 p-1 text-center sm:p-1.5 ${faded ? "opacity-20" : ""}`}><CoverageBadge level={level} /></td>; })}
      </tr>)}
    </tbody>)}
  </table>;
}

function PathwayLinks({ title, pathways, specialtySlug }: { title: string; pathways: InfectionPathway[]; specialtySlug: string }) {
  if (pathways.length === 0) return null;
  return <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-4"><h3 className="text-sm font-bold text-slate-950">{title}</h3><div className="mt-3 flex flex-wrap gap-2">{pathways.map((item) => <Link key={item.id} href={`/specialty/${specialtySlug}/hub?view=diseases&pathway=${item.id}`} className="rounded-full border border-teal-200 bg-white px-3 py-1.5 text-xs font-medium text-teal-900 hover:border-teal-500">{item.displayName}</Link>)}</div></section>;
}


export function AntibioticOverview({ dataset, pathways, initialMode, initialOrganism, initialAntibiotic }: { dataset: AntibioticSpectrumDataset; pathways: InfectionPathwayDataset; initialMode?: string; initialOrganism?: string; initialAntibiotic?: string }) {
  const searchParams = useSearchParams();
  const resolvedMode = initialMode ?? searchParams.get("mode") ?? "";
  const resolvedOrganism = initialOrganism ?? searchParams.get("organism") ?? "";
  const resolvedAntibiotic = initialAntibiotic ?? searchParams.get("antibiotic") ?? "";
  const validMode = (["matrix", "organism", "antibiotic"] as Mode[]).includes(resolvedMode as Mode) ? resolvedMode as Mode : "matrix";
  const [mode, setMode] = useState<Mode>(validMode);
  const [query, setQuery] = useState(""); const deferredQuery = useDeferredValue(query);
  const [group, setGroup] = useState<OrganismGroup | "">(""); const [route, setRoute] = useState(""); const [drugClass, setDrugClass] = useState(""); const [pregnancy, setPregnancy] = useState(""); const [matchingOnly, setMatchingOnly] = useState(false);
  const [organismId, setOrganismId] = useState(dataset.organisms.some((item) => item.id === resolvedOrganism) ? resolvedOrganism : dataset.organisms[0]?.id ?? ""); const [antibioticId, setAntibioticId] = useState(dataset.antibiotics.some((item) => item.id === resolvedAntibiotic) ? resolvedAntibiotic : dataset.antibiotics[0]?.id ?? ""); const [matrixFocus, setMatrixFocus] = useState(false);
  const classes = [...new Set(dataset.antibiotics.map((item) => item.class))].sort();
  const organisms = dataset.organisms.slice().sort((a, b) => GROUP_ORDER.indexOf(a.group as OrganismGroup) - GROUP_ORDER.indexOf(b.group as OrganismGroup));
  const visibleOrganisms = group ? organisms.filter((item) => item.group === group) : organisms;
  const filteredDrugs = dataset.antibiotics.filter((entry) => !(!drugMatches(entry, deferredQuery) || (route && !entry.routes.includes(route)) || (drugClass && entry.class !== drugClass) || (pregnancy && entry.pregnancy.status !== pregnancy)));
  const selectedOrganism = organisms.find((item) => item.id === organismId);
  const organismResults = dataset.antibiotics.filter((entry) => !route || entry.routes.includes(route)).sort((a, b) => COVERAGE[coverage(b, organismId)].rank - COVERAGE[coverage(a, organismId)].rank);
  const selectedDrug = dataset.antibiotics.find((item) => item.id === antibioticId);
  const verifiedPathways = pathways.pathways.filter((item) => item.reviewStatus === "verified");
  const organismPathways = verifiedPathways.filter((item) => item.pathogenGroups.some((group) => group.organisms.some((organism) => organism.organismId === organismId)));
  const antibioticPathways = verifiedPathways.filter((item) => item.empiricRegimens.some((regimen) => regimen.components.some((component) => component.antibioticIds.includes(antibioticId))) || item.targetedTherapies.some((therapy) => therapy.antibioticIds.includes(antibioticId)));
  const infectionSpecialtySlug = "MDgg6rCQ7Je8";

  const reset = () => { setQuery(""); setGroup(""); setRoute(""); setDrugClass(""); setPregnancy(""); setMatchingOnly(false); };
  const matrix = <SpectrumTable antibiotics={filteredDrugs} organisms={visibleOrganisms} matchingOnly={matchingOnly} />;

  return <div className="space-y-6">
    <div className="grid grid-cols-[repeat(3,minmax(0,1fr))_2.5rem] items-center gap-2 sm:flex" role="tablist" aria-label="탐색 방식">
      {([ ["matrix", "Matrix", "Spectrum matrix"], ["organism", "균→약", "균 → 항생제"], ["antibiotic", "약→균", "항생제 → 균"] ] as const).map(([value, mobileLabel, desktopLabel]) => <button key={value} type="button" role="tab" aria-selected={mode === value} onClick={() => setMode(value)} className={`min-w-0 rounded-full px-2 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${mode === value ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-700 hover:border-teal-400"}`}><span className="sm:hidden">{mobileLabel}</span><span className="hidden sm:inline">{desktopLabel}</span></button>)}
    </div>

    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="grid gap-3 lg:grid-cols-[minmax(220px,1.4fr)_repeat(3,minmax(150px,1fr))]"><label className="relative block"><Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400" /><span className="sr-only">항생제 검색</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="성분명·한글명·class 검색" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" /></label><select value={drugClass} onChange={(event) => setDrugClass(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm"><option value="">모든 class</option>{classes.map((item) => <option key={item}>{item}</option>)}</select><select value={pregnancy} onChange={(event) => setPregnancy(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm"><option value="">임신 관련 상태 전체</option>{Object.entries(PREGNANCY_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select><button type="button" onClick={reset} className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">필터 초기화</button></div>
      <div className="mt-4 flex flex-wrap items-center gap-2">{ROUTES.map((item) => <button key={item} type="button" onClick={() => setRoute(route === item ? "" : item)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${route === item ? "border-teal-700 bg-teal-700 text-white" : "border-slate-200 bg-white text-slate-600"}`}>{item}</button>)}<span className="mx-1 h-5 w-px bg-slate-200" />{GROUP_ORDER.map((item) => <button key={item} type="button" onClick={() => setGroup(group === item ? "" : item)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${group === item ? GROUP_META[item].chip : "border-slate-200 bg-white text-slate-600"}`}>{GROUP_META[item].label}</button>)}<span className="ml-auto text-xs font-medium text-slate-500">{filteredDrugs.length}/{dataset.antibiotics.length}개</span></div>
    </section>

    {mode === "matrix" ? <section className="space-y-4"><div className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-stone-50 px-4 py-3">{(Object.keys(COVERAGE) as CoverageLevel[]).map((level) => <span key={level} className="inline-flex items-center gap-1.5 text-xs text-slate-600"><CoverageBadge level={level} />{COVERAGE[level].label}</span>)}<label className="ml-auto inline-flex items-center gap-2 text-xs font-medium text-slate-600"><input type="checkbox" checked={matchingOnly} onChange={(event) => setMatchingOnly(event.target.checked)} /> 활성 기대 이상만 강조</label><button type="button" onClick={() => setMatrixFocus(true)} title="전체 화면으로 보기" aria-label="전체 화면으로 보기" className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-800"><Maximize2 className="h-4 w-4" /></button></div><div className="max-h-[68vh] overflow-auto rounded-2xl border border-slate-200 bg-white shadow-sm">{matrix}</div><p className="text-center text-xs text-slate-500">모바일에서는 좌우로 밀어 전체 균 coverage를 비교할 수 있습니다.</p></section> : null}

    {mode === "organism" ? <section className="grid gap-5 lg:grid-cols-[280px_1fr]"><div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><label className="text-xs font-semibold uppercase tracking-wide text-slate-500">균 또는 phenotype 선택</label><select value={organismId} onChange={(event) => setOrganismId(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-3 text-sm">{GROUP_ORDER.map((item) => <optgroup key={item} label={GROUP_META[item].label}>{organisms.filter((organism) => organism.group === item).map((organism) => <option key={organism.id} value={organism.id}>{organism.label}</option>)}</optgroup>)}</select><p className="mt-4 text-sm leading-6 text-slate-600">{selectedOrganism?.aliases.join(" · ") || "일반적인 in-vitro spectrum 기준"}</p>{selectedOrganism?.microbiologySlug ? <Link href={`/microbiology/${selectedOrganism.microbiologySlug}`} className="mt-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-semibold text-teal-900">병원체 노트 <ArrowUpRight className="h-3.5 w-3.5" /></Link> : null}</div><div className="space-y-3">{organismResults.filter((entry) => COVERAGE[coverage(entry, organismId)].rank >= (matchingOnly ? 4 : 2)).map((entry) => <DrugResult key={entry.id} entry={entry} organismId={organismId} />)}</div></section> : null}

    {mode === "antibiotic" && selectedDrug ? <section className="space-y-5"><div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><label className="text-xs font-semibold uppercase tracking-wide text-slate-500">항생제 선택</label><select value={antibioticId} onChange={(event) => setAntibioticId(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-3 text-sm sm:max-w-xl">{classes.map((item) => <optgroup key={item} label={item}>{dataset.antibiotics.filter((entry) => entry.class === item).map((entry) => <option key={entry.id} value={entry.id}>{entry.inn} ({entry.displayName})</option>)}</optgroup>)}</select><div className="mt-5 flex flex-wrap items-start justify-between gap-4 border-t border-slate-100 pt-5"><div><h2 className="text-2xl font-bold text-slate-950">{selectedDrug.inn}</h2><p className="mt-1 text-sm text-slate-500">{selectedDrug.class} · {selectedDrug.routes.join(" / ")} · 임신: {PREGNANCY_LABELS[selectedDrug.pregnancy.status]}</p></div><Link href={`/drugs/${selectedDrug.drugSlug}`} className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white">개별 약물 노트 <ArrowUpRight className="h-4 w-4" /></Link></div></div>{(selectedDrug.siteCaveats.length > 0 || selectedDrug.resistanceNotes.length > 0) ? <div className="rounded-xl border border-amber-200 bg-amber-50 p-4"><div className="flex gap-2 text-sm font-semibold text-amber-950"><ShieldAlert className="h-4 w-4" />임상적 예외</div>{[...selectedDrug.siteCaveats, ...selectedDrug.resistanceNotes].map((note) => <p key={note} className="mt-2 text-sm leading-6 text-amber-950">{note}</p>)}</div> : null}<div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{organisms.map((organism) => { const level = coverage(selectedDrug, organism.id); return <article key={organism.id} className={`rounded-xl border border-slate-200 p-4 ${COVERAGE[level].cell}`}><div className="flex items-center justify-between gap-3"><strong className="text-sm">{organism.label}</strong><span className="text-lg font-black">{COVERAGE[level].short}</span></div><div className="mt-1 text-xs opacity-75">{COVERAGE[level].label}</div></article>; })}</div></section> : null}
    {mode === "organism" ? <PathwayLinks title="이 병원체와 연결된 감염질환" pathways={organismPathways} specialtySlug={infectionSpecialtySlug} /> : null}
    {mode === "antibiotic" ? <PathwayLinks title="이 항생제가 연결된 감염질환" pathways={antibioticPathways} specialtySlug={infectionSpecialtySlug} /> : null}
    <footer className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-5 text-slate-600"><strong className="text-slate-800">해석 주의:</strong> {dataset.disclaimer} · 검토일 {dataset.reviewedAt}</footer>
    {matrixFocus ? <div className="fixed inset-0 z-50 flex flex-col bg-slate-950 p-3 text-white sm:p-5"><div className="mb-3 flex items-center justify-between gap-3"><div><strong className="text-sm">항생제 overview · spectrum matrix</strong><span className="ml-2 hidden text-xs text-slate-400 sm:inline">화면을 가로로 돌리면 더 넓게 볼 수 있습니다.</span></div><div className="flex items-center gap-2"><RotateCw className="h-4 w-4 text-teal-300 sm:hidden" /><button type="button" onClick={() => setMatrixFocus(false)} className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-600 text-white hover:bg-slate-800" aria-label="전체 화면 닫기"><X className="h-4 w-4" /></button></div></div><div className="min-h-0 flex-1 overflow-auto rounded-xl border border-slate-700 bg-white text-slate-950">{matrix}</div></div> : null}
  </div>;
}
