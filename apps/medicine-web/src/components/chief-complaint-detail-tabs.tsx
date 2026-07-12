"use client";

import { useMemo, useState } from "react";
import { BookOpenText, RotateCcw } from "lucide-react";
import type { ChiefComplaintHistorySlot, ChiefComplaintNote, DiseaseSection, TermLink } from "@/lib/webdb";
import { ChiefComplaintRecommendationPicker } from "@/components/chief-complaint-recommendation-picker";
import { RichTextLines } from "@/components/rich-text-lines";

type ViewKey = "concept" | "outpatient" | "inpatient";

type CommonHistoryFlow = {
  key: string;
  label: string;
  prompt: string;
};

const COMMON_HISTORY_FLOW: CommonHistoryFlow[] = [
  { key: "onset", label: "O (Onset)", prompt: "발생 시점과 당시 상황을 확인한다." },
  { key: "location", label: "L (Location)", prompt: "증상이 발생한 부위 또는 범위를 확인한다." },
  { key: "duration", label: "D (Duration)", prompt: "한 번 시작하면 얼마나 지속되는지 확인한다." },
  { key: "course", label: "Co (Course)", prompt: "시간에 따른 증상 변화를 확인한다." },
  { key: "experienced", label: "Ex (Experienced)", prompt: "과거에도 같은 증상이 있었는지 확인한다." },
  { key: "character", label: "C (Character)", prompt: "증상의 구체적인 특징, 정도, 양상, 일상생활 영향을 확인한다." },
  { key: "associated", label: "A (Associated symptoms)", prompt: "관련된 다른 증상을 계통별로 확인한다." },
  { key: "factor", label: "F (Factor)", prompt: "증상을 악화하거나 완화하는 요인을 확인한다." },
  { key: "event", label: "E (Event)", prompt: "증상과 관련된 사건, 유발 상황 또는 최근 변화를 확인한다." },
  {
    key: "background",
    label: "Background history",
    prompt: "외과력, 과거력, 약물력, 사회력, 가족력, 여성력을 확인한다.",
  },
];

const HISTORY_EXPANSIONS = [
  ["AVNCD", "Anorexia, Vomiting, Nausea, Constipation, Diarrhea"],
  ["FCCSR", "Fever, Chill, Cough, Sputum, Rhinorrhea"],
  ["HISR", "Hematuria, Incontinence, Hesitancy, Retention"],
  ["FUND", "Frequency, Urgency, Nocturia, Dysuria"],
  ["BSS", "bloody stool, acid regurgitation"],
  ["D.P", "Dyspnea, Palpitation"],
  ["HIR", "Hematuria, Incontinence, Retention"],
  ["HIS", "Hematuria, Incontinence, Hesitancy"],
  ["JD", "Jaundice"],
] as const;

function expandHistoryTerms(text: string) {
  return HISTORY_EXPANSIONS.reduce((result, [term, expansion]) => {
    const expandedMarker = term + " (";
    if (!result.includes(term) || result.includes(expandedMarker)) return result;
    return result.replaceAll(term, term + " (" + expansion + ")");
  }, text);
}

function mergeHistoryGroups(slots: ChiefComplaintHistorySlot[], key: string) {
  return slots.filter((slot) => slot.key === key).flatMap((slot) => slot.groups);
}

function buildHistoryChecklist(note: ChiefComplaintNote): ChiefComplaintHistorySlot[] {
  const sourceSlots = note.historyChecklist ?? [];
  const commonKeys = new Set(COMMON_HISTORY_FLOW.map((flow) => flow.key));
  const firstCommonIndex = sourceSlots.findIndex((slot) => commonKeys.has(slot.key));

  if (firstCommonIndex === -1) {
    return sourceSlots;
  }

  const commonSlots = COMMON_HISTORY_FLOW.map((flow) => ({
    key: flow.key,
    label: flow.label,
    groups: [
      { label: "Common", items: [flow.prompt] },
      ...mergeHistoryGroups(sourceSlots, flow.key),
    ],
  }));

  const result: ChiefComplaintHistorySlot[] = [];
  sourceSlots.forEach((slot, index) => {
    if (index === firstCommonIndex) {
      result.push(...commonSlots);
    }

    if (!commonKeys.has(slot.key)) {
      const existing = result.find((item) => item.key === slot.key);
      if (existing) {
        existing.groups.push(...slot.groups);
      } else {
        result.push(slot);
      }
    }
  });

  return result;
}

function HistoryChecklist({ note }: { note: ChiefComplaintNote }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [showExpansions, setShowExpansions] = useState(false);
  const slots = useMemo(() => buildHistoryChecklist(note), [note]);
  const items = slots.flatMap((slot) =>
    slot.groups.flatMap((group) => group.items.map((text, index) => ({
      id: slot.key + "-" + group.label + "-" + index,
      text,
    }))),
  );
  const checkedCount = items.filter((item) => checked[item.id]).length;

  if (items.length === 0) {
    return <div className="mt-2 text-sm text-slate-400">정리된 Hx 문진 항목이 없습니다.</div>;
  }

  return (
    <div className="mt-3 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="text-sm text-slate-600">
          문진 확인 <span className="font-semibold text-slate-950">{checkedCount}</span> / {items.length}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowExpansions((value) => !value)}
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
          >
            <BookOpenText size={14} aria-hidden="true" />
            {showExpansions ? "약어 풀이 숨기기" : "약어 풀이"}
          </button>
          <button
            type="button"
            onClick={() => setChecked({})}
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
          >
            <RotateCcw size={14} aria-hidden="true" />
            초기화
          </button>
        </div>
      </div>

      <div className="space-y-5">
        {slots.map((slot) => (
          <section key={slot.key}>
            <h4 className="text-sm font-semibold text-slate-950">{slot.label}</h4>
            <div className="mt-2 divide-y divide-slate-100">
              {slot.groups.map((group) => (
                <div key={slot.key + "-" + group.label} className="py-2 first:pt-0 last:pb-0">
                  {group.label !== "CC-specific" && (
                    <div className="mb-1 text-xs font-medium uppercase text-slate-500">{group.label}</div>
                  )}
                  {group.items.map((text, index) => {
                    const id = slot.key + "-" + group.label + "-" + index;
                    const content = showExpansions ? expandHistoryTerms(text) : text;
                    return (
                      <label key={id} className="flex cursor-pointer items-start gap-3 py-2 text-sm leading-6 text-slate-700">
                        <input
                          type="checkbox"
                          checked={Boolean(checked[id])}
                          onChange={() => setChecked((current) => ({ ...current, [id]: !current[id] }))}
                          className="mt-1 h-4 w-4 shrink-0 accent-teal-700"
                        />
                        <span className={checked[id] ? "text-slate-400 line-through" : ""}>{content}</span>
                      </label>
                    );
                  })}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

const VIEWS: Array<{ key: ViewKey; label: string }> = [
  { key: "concept", label: "\uAC1C\uB150" },
  { key: "outpatient", label: "\uC678\uB798" },
  { key: "inpatient", label: "\uC785\uC6D0" },
];

function sectionMatches(section: DiseaseSection, names: string[]) {
  return names.some((name) => section.title.trim().toLowerCase() === name.toLowerCase() || section.title.includes(name));
}

function getViewSections(note: ChiefComplaintNote, view: ViewKey) {
  if (view === "concept") {
    return note.sections.filter((section) => sectionMatches(section, ["Concept", "\uAC10\uBCC4\uC9C4\uB2E8"]));
  }

  if (view === "outpatient") {
    return note.sections.filter((section) => sectionMatches(section, ["Hx", "PEx", "\uD658\uC790\uAD50\uC721"]));
  }

  return note.sections.filter((section) => sectionMatches(section, ["\uC811\uADFC", "\uAC80\uC0AC", "\uCE58\uB8CC"]));
}

function displayTitle(section: DiseaseSection, view: ViewKey) {
  if (view === "outpatient" && section.title.includes("\uD658\uC790\uAD50\uC721")) return "\uAC10\uBCC4\uC9C4\uB2E8";
  return section.title;
}

function getRelatedDiseaseLinks(note: ChiefComplaintNote, diseaseLinks: TermLink[]) {
  const related = note.sections.find((section) => section.title.includes("\uAD00\uB828\uC9C8\uD658"));

  if (!related) return diseaseLinks;

  const hrefByTerm = new Map(diseaseLinks.map((item) => [item.term, item.href]));
  const result = new Map(diseaseLinks.map((item) => [item.term, item.href]));
  const text = related.content.join("\n");

  for (const match of text.matchAll(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g)) {
    const rawTarget = match[1].trim();
    const display = (match[2] ?? rawTarget).trim();
    const href = hrefByTerm.get(rawTarget) ?? hrefByTerm.get(display);

    if (!href) continue;

    for (const term of [rawTarget, display, rawTarget.replace(/\s*\([^)]*\)\s*$/, "").trim()]) {
      if (term && !result.has(term)) result.set(term, href);
    }
  }

  return [...result.entries()].map(([term, href]) => ({ term, href }));
}

function SectionContent({
  section,
  view,
  note,
  diseaseLinks,
}: {
  section: DiseaseSection;
  view: ViewKey;
  note: ChiefComplaintNote;
  diseaseLinks: TermLink[];
}) {
  const isOutpatientMatcher = view === "outpatient" && section.title.includes("\uD658\uC790\uAD50\uC721");
  const isHistorySection = view === "outpatient" && section.title.trim().toLowerCase() === "hx";

  if (isHistorySection) {
    return <HistoryChecklist note={note} />;
  }

  if (isOutpatientMatcher) {
    return (
      <div className="mt-3 space-y-4">
        <ChiefComplaintRecommendationPicker recommendations={note.recommendations} />
        <details className="rounded-md border border-slate-200 bg-slate-50/70">
          <summary className="cursor-pointer px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-950">
            {"\uC0C1\uC138"}
          </summary>
          <RichTextLines
            lines={section.content}
            className="border-t border-slate-200 px-3 py-3 text-sm leading-6 text-slate-700"
            wikiLinks={diseaseLinks}
          />
        </details>
      </div>
    );
  }

  if (section.content.length === 0) {
    return <div className="mt-2 text-sm text-slate-400">{"\uC815\uB9AC\uB41C \uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."}</div>;
  }

  const conceptTermLinks = view === "concept" && section.title.includes("\uAC10\uBCC4\uC9C4\uB2E8")
    ? getRelatedDiseaseLinks(note, diseaseLinks)
    : [];

  return (
    <RichTextLines
      lines={section.content}
      className="mt-2 space-y-2 text-sm leading-6 text-slate-700"
      termLinks={conceptTermLinks}
      wikiLinks={diseaseLinks}
    />
  );
}

export function ChiefComplaintDetailTabs({
  note,
  diseaseLinks,
}: {
  note: ChiefComplaintNote;
  diseaseLinks: TermLink[];
}) {
  const [activeView, setActiveView] = useState<ViewKey>("concept");
  const sections = useMemo(() => getViewSections(note, activeView), [note, activeView]);

  return (
    <div className="space-y-6">
      <article className="surface p-5 sm:p-6">
        <div className="eyebrow">{note.category || "Chief Complaint"}</div>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold text-slate-950 sm:text-3xl">{note.title}</h1>
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
            {VIEWS.map((view) => {
              const selected = activeView === view.key;
              return (
                <button
                  key={view.key}
                  type="button"
                  onClick={() => setActiveView(view.key)}
                  className={[
                    "rounded-md px-3 py-1.5 text-sm font-medium transition",
                    selected
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-500 hover:bg-white/70 hover:text-slate-950",
                  ].join(" ")}
                >
                  {view.label}
                </button>
              );
            })}
          </div>
        </div>
      </article>

      <section className="rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm">
        <div className="mb-3 text-xs uppercase text-slate-500">{VIEWS.find((view) => view.key === activeView)?.label}</div>
        <div className="space-y-4">
          {sections.map((section) => (
            <section key={activeView + "-" + section.title} className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-medium text-slate-950">{displayTitle(section, activeView)}</h3>
              <SectionContent section={section} view={activeView} note={note} diseaseLinks={diseaseLinks} />
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
