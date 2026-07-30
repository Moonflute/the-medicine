"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { ArrowUpRight, Bug, Dna, Search, ShieldAlert } from "lucide-react";
import type { AntibioticSpectrumDataset, MicrobiologyDataset, MicrobiologyEntity, MicrobiologyEntityKind, MicrobiologyPathogenType } from "@/lib/types";
import type { InfectionPathwayDataset } from "@/lib/infection-types";

const PATHOGEN_LABELS: Record<MicrobiologyPathogenType, string> = {
  bacterium: "세균",
  virus: "바이러스",
  fungus: "진균",
  protozoan: "원생동물",
  helminth: "연충",
  ectoparasite: "외부기생충",
  prion: "Prion",
  mixed: "혼합군",
};

const KIND_LABELS: Record<MicrobiologyEntityKind, string> = {
  organism: "병원체",
  clinical_group: "임상군",
  resistance_phenotype: "내성 phenotype",
};

const CATEGORY_ORDER = [
  "G(+) 구균",
  "G(+) 간균",
  "G(-) 구균·구간균",
  "G(-) 간균",
  "혐기성균",
  "비정형균",
  "Mycobacteria",
  "Spirochetes",
  "내성 phenotype",
  "호흡기 바이러스",
  "장관 바이러스",
  "Herpesvirus",
  "간염 바이러스",
  "Retrovirus",
  "피부·점막 바이러스",
  "발진 바이러스",
  "Yeast",
  "Mold",
  "Dermatophyte",
  "Dimorphic fungi",
  "Atypical fungi",
  "원충",
  "선충",
  "조충",
  "외부기생충",
  "연충 임상군",
];

function normalize(value: string) {
  return value.toLocaleLowerCase().replace(/[\s._/()·+-]+/g, "");
}

function matches(entity: MicrobiologyEntity, query: string) {
  if (!query) return true;
  const needle = normalize(query);
  return [
    entity.title,
    entity.scientificName,
    entity.koreanName,
    entity.category,
    ...entity.aliases,
    ...entity.classification,
    ...entity.clinicalTags,
  ].some((value) => normalize(value).includes(needle));
}

function categoryTone(category: string, pathogenType?: MicrobiologyPathogenType) {
  if (category.includes("G(+)") ) return "border-violet-200 bg-violet-50/55";
  if (category.includes("G(-)")) return "border-rose-200 bg-rose-50/55";
  if (pathogenType === "virus") return "border-teal-200 bg-teal-50/45";
  if (["protozoan", "helminth", "ectoparasite"].includes(pathogenType ?? "")) return "border-amber-200 bg-amber-50/50";
  if (pathogenType === "fungus") return "border-orange-200 bg-orange-50/45";
  if (category.includes("phenotype")) return "border-rose-200 bg-rose-50/45";
  return "border-sky-200 bg-sky-50/45";
}

function categoryAccent(category: string, pathogenType?: MicrobiologyPathogenType) {
  if (category.includes("G(+)") ) return "text-violet-700";
  if (category.includes("G(-)")) return "text-rose-700";
  if (pathogenType === "virus") return "text-teal-700";
  if (["protozoan", "helminth", "ectoparasite"].includes(pathogenType ?? "")) return "text-amber-700";
  if (pathogenType === "fungus") return "text-orange-700";
  return "text-sky-700";
}

function entityMetrics(entity: MicrobiologyEntity, pathways: InfectionPathwayDataset, spectrum: AntibioticSpectrumDataset) {
  const spectrumIds = new Set(entity.spectrumIds);
  const relatedPathways = pathways.pathways.filter((pathway) =>
    pathway.reviewStatus === "verified"
    && pathway.pathogenGroups.some((group) => group.organisms.some((organism) => spectrumIds.has(organism.organismId))),
  );
  const activeAntibiotics = spectrum.antibiotics.filter((antibiotic) =>
    entity.spectrumIds.some((id) => ["preferred", "active"].includes(antibiotic.coverage[id] ?? "unknown")),
  );
  return { pathwayCount: relatedPathways.length, antibioticCount: activeAntibiotics.length };
}

function PathogenCard({ entity, pathways, spectrum }: { entity: MicrobiologyEntity; pathways: InfectionPathwayDataset; spectrum: AntibioticSpectrumDataset }) {
  const metrics = entityMetrics(entity, pathways, spectrum);
  const isPhenotype = entity.entityKind === "resistance_phenotype";
  return (
    <Link
      href={`/microbiology/${entity.slug}`}
      className="group flex min-h-36 flex-col rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-teal-400 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${isPhenotype ? "bg-rose-100 text-rose-800" : entity.entityKind === "clinical_group" ? "bg-amber-100 text-amber-900" : "bg-teal-100 text-teal-800"}`}>
          {KIND_LABELS[entity.entityKind]}
        </span>
        <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-teal-700" />
      </div>
      <h3 className="mt-3 text-sm font-bold leading-5 text-slate-950">{entity.koreanName || entity.scientificName}</h3>
      {entity.koreanName !== entity.scientificName ? <p className="mt-1 text-xs italic leading-5 text-slate-500">{entity.scientificName}</p> : null}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {entity.classification.slice(0, 3).map((item) => <span key={item} className="rounded bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600">{item}</span>)}
      </div>
      <div className="mt-auto flex gap-3 pt-4 text-[11px] font-medium text-slate-500">
        {metrics.pathwayCount ? <span>관련 질환 {metrics.pathwayCount}</span> : null}
        {metrics.antibioticCount ? <span>활성 항생제 {metrics.antibioticCount}</span> : null}
      </div>
    </Link>
  );
}

export function MicrobiologyBrowser({ dataset, pathways, spectrum }: { dataset: MicrobiologyDataset; pathways: InfectionPathwayDataset; spectrum: AntibioticSpectrumDataset }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [pathogenType, setPathogenType] = useState<MicrobiologyPathogenType | "">("");
  const [entityKind, setEntityKind] = useState<MicrobiologyEntityKind | "">("");
  const availablePathogenTypes = [...new Set(dataset.entities.map((entity) => entity.pathogenType))];
  const visible = dataset.entities.filter((entity) =>
    matches(entity, deferredQuery)
    && (!pathogenType || entity.pathogenType === pathogenType)
    && (!entityKind || entity.entityKind === entityKind),
  );
  const categories = [...new Set(visible.map((entity) => entity.category))]
    .sort((a, b) => {
      const aIndex = CATEGORY_ORDER.indexOf(a);
      const bIndex = CATEGORY_ORDER.indexOf(b);
      if (aIndex < 0 && bIndex < 0) return a.localeCompare(b, "ko");
      if (aIndex < 0) return 1;
      if (bIndex < 0) return -1;
      return aIndex - bIndex;
    });

  return (
    <div className="space-y-5">
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <span className="sr-only">병원체 검색</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="국문명·scientific name·약어 검색"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          />
        </label>
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" onClick={() => setPathogenType("")} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${!pathogenType ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 text-slate-600"}`}>전체</button>
          {availablePathogenTypes.map((type) => (
            <button key={type} type="button" onClick={() => setPathogenType(pathogenType === type ? "" : type)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${pathogenType === type ? "border-teal-700 bg-teal-700 text-white" : "border-slate-200 text-slate-600"}`}>
              {PATHOGEN_LABELS[type]}
            </button>
          ))}
          <span className="mx-1 h-7 w-px bg-slate-200" />
          {(["organism", "clinical_group", "resistance_phenotype"] as MicrobiologyEntityKind[]).map((kind) => (
            <button key={kind} type="button" onClick={() => setEntityKind(entityKind === kind ? "" : kind)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${entityKind === kind ? "border-amber-700 bg-amber-700 text-white" : "border-slate-200 text-slate-600"}`}>
              {KIND_LABELS[kind]}
            </button>
          ))}
          <span className="ml-auto self-center text-xs font-semibold text-slate-500">{visible.length}/{dataset.entities.length}</span>
        </div>
      </section>

      {categories.length ? categories.map((category) => {
        const entities = visible.filter((entity) => entity.category === category);
        const CategoryIcon = category === "내성 phenotype" ? ShieldAlert : category.includes("비정형") ? Dna : Bug;
        const tone = categoryTone(category, entities[0]?.pathogenType);
        const accent = categoryAccent(category, entities[0]?.pathogenType);
        return (
          <section key={category} className={`rounded-2xl border p-4 sm:p-5 ${tone}`}>
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="flex items-center gap-2 text-base font-bold text-slate-950"><CategoryIcon className={`h-5 w-5 ${accent}`} />{category}</h2>
              <span className="text-xs font-semibold text-slate-500">{entities.length}개</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {entities.map((entity) => <PathogenCard key={entity.id} entity={entity} pathways={pathways} spectrum={spectrum} />)}
            </div>
          </section>
        );
      }) : (
        <section className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">조건에 맞는 병원체가 없습니다.</section>
      )}

      <footer className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-5 text-slate-600">
        <strong className="text-slate-800">해석 주의:</strong> {dataset.disclaimer} · DB 검토일 {dataset.reviewedAt}
      </footer>
    </div>
  );
}
