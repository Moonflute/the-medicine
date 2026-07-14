"use client";

import { useMemo, useState } from "react";
import { BookOpenText, Maximize2, Minimize2, RotateCcw } from "lucide-react";
import type { ChiefComplaintExamSlot, ChiefComplaintHistorySlot, ChiefComplaintNote, DiseaseSection, TermLink } from "@/lib/webdb";
import { ChiefComplaintRecommendationPicker } from "@/components/chief-complaint-recommendation-picker";
import { RichTextLines } from "@/components/rich-text-lines";

type ViewKey = "concept" | "outpatient" | "inpatient";

type CommonHistoryFlow = {
  key: string;
  label: string;
  shortLabel: string;
  prompt: string;
};

const COMMON_HISTORY_FLOW: CommonHistoryFlow[] = [
  { key: "onset", label: "O (Onset)", shortLabel: "O", prompt: "\uBC1C\uC0DD \uC2DC\uC810\uACFC \uB2F9\uC2DC \uC0C1\uD669\uC744 \uD655\uC778\uD55C\uB2E4." },
  { key: "location", label: "L (Location)", shortLabel: "L", prompt: "\uC99D\uC0C1\uC774 \uBC1C\uC0DD\uD55C \uBD80\uC704 \uB610\uB294 \uBC94\uC704\uB97C \uD655\uC778\uD55C\uB2E4." },
  { key: "duration", label: "D (Duration)", shortLabel: "D", prompt: "\uD55C \uBC88 \uC2DC\uC791\uD558\uBA74 \uC5BC\uB9C8\uB098 \uC9C0\uC18D\uB418\uB294\uC9C0 \uD655\uC778\uD55C\uB2E4." },
  { key: "course", label: "Co (Course)", shortLabel: "Co", prompt: "\uC2DC\uAC04\uC5D0 \uB530\uB978 \uC99D\uC0C1 \uBCC0\uD654\uB97C \uD655\uC778\uD55C\uB2E4." },
  { key: "experienced", label: "Ex (Experienced)", shortLabel: "Ex", prompt: "\uACFC\uAC70\uC5D0\uB3C4 \uAC19\uC740 \uC99D\uC0C1\uC774 \uC788\uC5C8\uB294\uC9C0 \uD655\uC778\uD55C\uB2E4." },
  { key: "character", label: "C (Character)", shortLabel: "C", prompt: "\uC99D\uC0C1\uC758 \uAD6C\uCCB4\uC801\uC778 \uD2B9\uC9D5, \uC815\uB3C4, \uC591\uC0C1, \uC77C\uC0C1\uC0DD\uD65C \uC601\uD5A5\uC744 \uD655\uC778\uD55C\uB2E4." },
  { key: "associated", label: "A (Associated symptoms)", shortLabel: "A", prompt: "\uAD00\uB828\uB41C \uB2E4\uB978 \uC99D\uC0C1\uC744 \uACC4\uD1B5\uBCC4\uB85C \uD655\uC778\uD55C\uB2E4." },
  { key: "factor", label: "F (Factor)", shortLabel: "F", prompt: "\uC99D\uC0C1\uC744 \uC545\uD654\uD558\uAC70\uB098 \uC644\uD654\uD558\uB294 \uC694\uC778\uC744 \uD655\uC778\uD55C\uB2E4." },
  { key: "event", label: "E (Event)", shortLabel: "E", prompt: "\uC99D\uC0C1\uACFC \uAD00\uB828\uB41C \uC0AC\uAC74, \uC720\uBC1C \uC0C1\uD669 \uB610\uB294 \uCD5C\uADFC \uBCC0\uD654\uB97C \uD655\uC778\uD55C\uB2E4." },
  { key: "surgical", label: "\uC678\uACFC\uB825", shortLabel: "\uC678\uACFC\uB825", prompt: "\uC218\uC220, \uC785\uC6D0, \uAC74\uAC15\uAC80\uC9C4\uB825\uC744 \uD655\uC778\uD55C\uB2E4." },
  { key: "past", label: "\uACFC\uAC70\uB825", shortLabel: "\uACFC\uAC70\uB825", prompt: "\uACFC\uAC70\uB825\uACFC \uD604\uC7AC \uC9C8\uD658\uC744 \uD655\uC778\uD55C\uB2E4." },
  { key: "medication", label: "\uC57D\uBB3C\uB825", shortLabel: "\uC57D\uBB3C\uB825", prompt: "\uBCF5\uC6A9 \uC911\uC778 \uC57D\uBB3C\uACFC \uCD5C\uADFC \uBCF5\uC6A9 \uC57D\uBB3C\uC744 \uD655\uC778\uD55C\uB2E4." },
  { key: "social", label: "\uC0AC\uD68C\uB825", shortLabel: "\uC0AC\uD68C\uB825", prompt: "\uC74C\uC8FC, \uD761\uC5F0, \uC0DD\uD65C\uC2B5\uAD00\uACFC \uAD00\uB828 \uD658\uACBD\uC744 \uD655\uC778\uD55C\uB2E4." },
  { key: "family", label: "\uAC00\uC871\uB825", shortLabel: "\uAC00\uC871\uB825", prompt: "\uAC00\uC871 \uC911 \uC720\uC0AC \uC9C8\uD658\uC774\uB098 \uAD00\uB828 \uC9C8\uD658\uC774 \uC788\uC5C8\uB294\uC9C0 \uD655\uC778\uD55C\uB2E4." },
  { key: "female", label: "\uC5EC\uC131\uB825", shortLabel: "\uC5EC\uC131\uB825", prompt: "\uC5EC\uC131\uC9C8\uD658, \uC6D4\uACBD\uB825, \uC784\uC2E0\u00B7\uC0B0\uACFC\uB825\uC744 \uD655\uC778\uD55C\uB2E4." },
];

const CORE_HISTORY_KEYS = new Set(COMMON_HISTORY_FLOW.slice(0, 9).map((flow) => flow.key));

const HISTORY_EXPANSIONS = [
  ["AVNCD", "Anorexia, Vomiting, Nausea, Constipation, Diarrhea"],
  ["ANVCD", "Anorexia, Nausea, Vomiting, Constipation, Diarrhea"],
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

function buildHistoryChecklist(note: ChiefComplaintNote, compact: boolean): ChiefComplaintHistorySlot[] {
  const sourceSlots = note.historyChecklist ?? [];
  const commonKeys = new Set(COMMON_HISTORY_FLOW.map((flow) => flow.key));
  const firstCommonIndex = sourceSlots.findIndex((slot) => CORE_HISTORY_KEYS.has(slot.key));

  if (firstCommonIndex === -1) {
    return sourceSlots;
  }

  const commonSlots = COMMON_HISTORY_FLOW.map((flow) => ({
    key: flow.key,
    label: compact ? flow.shortLabel : flow.label,
    groups: [
      { label: "Common", items: [compact ? flow.shortLabel : flow.prompt] },
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
  const [compact, setCompact] = useState(false);
  const slots = useMemo(() => buildHistoryChecklist(note, compact), [note, compact]);
  const items = slots.flatMap((slot) =>
    slot.groups.flatMap((group) => group.items.map((text, index) => ({
      id: slot.key + "-" + group.label + "-" + index,
      text,
    }))),
  );
  const checkedCount = items.filter((item) => checked[item.id]).length;

  if (items.length === 0) {
    return <div className="mt-2 text-sm text-slate-400">{"\uC815\uB9AC\uB41C Hx \uBB38\uC9C4 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."}</div>;
  }

  return (
    <div className="mt-3 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="text-sm text-slate-600">
          {"\uBB38\uC9C4 \uD655\uC778"} <span className="font-semibold text-slate-950">{checkedCount}</span> / {items.length}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCompact((value) => !value)}
            aria-pressed={compact}
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
          >
            {compact ? <Maximize2 size={14} aria-hidden="true" /> : <Minimize2 size={14} aria-hidden="true" />}
            {compact ? "\uC804\uCCB4 \uBCF4\uAE30" : "\uAC04\uB7B5\uD654"}
          </button>
          <button
            type="button"
            onClick={() => setShowExpansions((value) => !value)}
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
          >
            <BookOpenText size={14} aria-hidden="true" />
            {showExpansions ? "\uC57D\uC5B4 \uD480\uC774 \uC228\uAE30\uAE30" : "\uC57D\uC5B4 \uD480\uC774"}
          </button>
          <button
            type="button"
            onClick={() => setChecked({})}
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
          >
            <RotateCcw size={14} aria-hidden="true" />
            {"\uCD08\uAE30\uD654"}
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
                  {group.label !== "CC-specific" && group.label !== "Common" && !compact && (
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


type CommonPhysicalExamFlow = {
  key: string;
  label: string;
  shortLabel: string;
  prompt: string;
};

const COMMON_PHYSICAL_EXAM_FLOW: CommonPhysicalExamFlow[] = [
  { key: "vitals", label: "V/S", shortLabel: "V/S", prompt: "Measure vital signs." },
  { key: "eyes", label: "Eyes", shortLabel: "Eyes", prompt: "Inspect the eyes and pupils." },
  { key: "mouth", label: "Mouth", shortLabel: "Mouth", prompt: "Inspect the oral cavity and pharynx." },
  { key: "neck", label: "Neck", shortLabel: "Neck", prompt: "Inspect and palpate the neck." },
  { key: "chest", label: "Chest", shortLabel: "Chest", prompt: "Perform chest inspection, palpation, percussion, and auscultation." },
  { key: "abdomen", label: "Abdomen", shortLabel: "Abdomen", prompt: "Perform abdominal inspection, auscultation, percussion, and palpation." },
  { key: "extremities", label: "Extremities", shortLabel: "Extremities", prompt: "Examine the extremities, pulses, and edema." },
  { key: "skin", label: "Skin", shortLabel: "Skin", prompt: "Inspect and palpate the skin." },
  { key: "neurologic", label: "Neurologic examination", shortLabel: "Neurologic", prompt: "Perform a focused neurologic examination." },
];

const COMMON_PHYSICAL_EXAM_KEYS = new Set(COMMON_PHYSICAL_EXAM_FLOW.map((flow) => flow.key));

const GENERIC_PHYSICAL_EXAM_ITEMS: Record<string, string[]> = {
  vitals: ["v/s", "vital signs"],
  eyes: ["eyes", "\uB208"],
  mouth: ["mouth", "\uC785"],
  neck: ["neck", "\uBAA9"],
  chest: ["chest", "\uD754\uBD80"],
  abdomen: ["abdomen", "\uBCF5\uBD80"],
  extremities: ["extremities", "\uC0AC\uC9C0"],
  skin: ["skin", "\uD53C\uBD80"],
  neurologic: ["neurologic examination"],
};

function mergePhysicalExamGroups(slots: ChiefComplaintExamSlot[], key: string) {
  const genericItems = GENERIC_PHYSICAL_EXAM_ITEMS[key] ?? [];
  return slots
    .filter((slot) => slot.key === key)
    .flatMap((slot) => slot.groups)
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => !genericItems.includes(item.trim().toLowerCase())),
    }))
    .filter((group) => group.items.length > 0);
}

function buildPhysicalExamChecklist(note: ChiefComplaintNote, compact: boolean): ChiefComplaintExamSlot[] {
  const sourceSlots = note.examChecklist ?? [];
  const firstCommonIndex = sourceSlots.findIndex((slot) => COMMON_PHYSICAL_EXAM_KEYS.has(slot.key));

  if (firstCommonIndex === -1) {
    return sourceSlots;
  }

  const commonSlots = COMMON_PHYSICAL_EXAM_FLOW.map((flow) => ({
    key: flow.key,
    label: compact ? flow.shortLabel : flow.label,
    groups: [
      { label: "Common", items: [compact ? flow.shortLabel : flow.prompt] },
      ...mergePhysicalExamGroups(sourceSlots, flow.key),
    ],
  }));

  const result: ChiefComplaintExamSlot[] = [];
  sourceSlots.forEach((slot, index) => {
    if (index === firstCommonIndex) {
      result.push(...commonSlots);
    }

    if (!COMMON_PHYSICAL_EXAM_KEYS.has(slot.key)) {
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

function PhysicalExamChecklist({ note }: { note: ChiefComplaintNote }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [compact, setCompact] = useState(false);
  const slots = useMemo(() => buildPhysicalExamChecklist(note, compact), [note, compact]);
  const items = slots.flatMap((slot) =>
    slot.groups.flatMap((group) => group.items.map((text, index) => ({
      id: slot.key + "-" + group.label + "-" + index,
      text,
    }))),
  );
  const checkedCount = items.filter((item) => checked[item.id]).length;

  if (items.length === 0) {
    return <div className="mt-2 text-sm text-slate-400">{"\uC815\uB9AC\uB41C PEx \uC9C4\uCC30 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."}</div>;
  }

  return (
    <div className="mt-3 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="text-sm text-slate-600">
          {"\uC9C4\uCC30 \uD655\uC778"} <span className="font-semibold text-slate-950">{checkedCount}</span> / {items.length}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCompact((value) => !value)}
            aria-pressed={compact}
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
          >
            {compact ? <Maximize2 size={14} aria-hidden="true" /> : <Minimize2 size={14} aria-hidden="true" />}
            {compact ? "\uC804\uCCB4 \uBCF4\uAE30" : "\uAC04\uB7B5\uD654"}
          </button>
          <button
            type="button"
            onClick={() => setChecked({})}
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
          >
            <RotateCcw size={14} aria-hidden="true" />
            {"\uCD08\uAE30\uD654"}
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
                  {group.label !== "CC-specific" && group.label !== "Common" && !compact && (
                    <div className="mb-1 text-xs font-medium uppercase text-slate-500">{group.label}</div>
                  )}
                  {group.items.map((text, index) => {
                    const id = slot.key + "-" + group.label + "-" + index;
                    return (
                      <label key={id} className="flex cursor-pointer items-start gap-3 py-2 text-sm leading-6 text-slate-700">
                        <input
                          type="checkbox"
                          checked={Boolean(checked[id])}
                          onChange={() => setChecked((current) => ({ ...current, [id]: !current[id] }))}
                          className="mt-1 h-4 w-4 shrink-0 accent-teal-700"
                        />
                        <span className={checked[id] ? "text-slate-400 line-through" : ""}>{text}</span>
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
  const isPhysicalExamSection = view === "outpatient" && section.title.trim().toLowerCase() === "pex";

  if (isHistorySection) {
    return <HistoryChecklist note={note} />;
  }

  if (isPhysicalExamSection) {
    return <PhysicalExamChecklist note={note} />;
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
