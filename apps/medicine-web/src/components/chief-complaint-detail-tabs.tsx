"use client";

import { useMemo, useState } from "react";
import type { ChiefComplaintNote, DiseaseSection, TermLink } from "@/lib/webdb";
import { ChiefComplaintRecommendationPicker } from "@/components/chief-complaint-recommendation-picker";
import { RichTextLines } from "@/components/rich-text-lines";

type ViewKey = "concept" | "outpatient" | "inpatient";

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
    return note.sections.filter((section) => sectionMatches(section, ["Concept", "\uAC10\uBCC4\uC9C4\uB2E8", "\uAD00\uB828\uC9C8\uD658"]));
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

function getPatientEducationDetailLines(lines: string[]) {
  const result: string[] = [];
  let block: string[] = [];

  function flushBlock() {
    if (block.length === 0) return;
    const isRecommendationBlock = block.some((line) => line.trim().startsWith("="));
    if (!isRecommendationBlock) result.push(...block);
    block = [];
  }

  for (const line of lines) {
    if (line.trim() === "---") {
      flushBlock();
      continue;
    }

    if (line.trim() === "") {
      flushBlock();
      if (result.length > 0 && result[result.length - 1] !== "") result.push("");
      continue;
    }

    block.push(line);
  }

  flushBlock();
  while (result[result.length - 1] === "") result.pop();
  return result;
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

  if (isOutpatientMatcher) {
    const detailLines = getPatientEducationDetailLines(section.content);
    return (
      <div className="mt-3 space-y-4">
        {detailLines.length > 0 ? (
          <details className="rounded-md border border-slate-200 bg-slate-50/70">
            <summary className="cursor-pointer px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-950">
              {"\uC0C1\uC138"}
            </summary>
            <RichTextLines
              lines={detailLines}
              className="border-t border-slate-200 px-3 py-3 text-sm leading-6 text-slate-700"
              wikiLinks={diseaseLinks}
            />
          </details>
        ) : null}
        <ChiefComplaintRecommendationPicker recommendations={note.recommendations} />
      </div>
    );
  }

  if (section.content.length === 0) {
    return <div className="mt-2 text-sm text-slate-400">{"\uC815\uB9AC\uB41C \uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."}</div>;
  }

  return (
    <RichTextLines
      lines={section.content}
      className="mt-2 space-y-2 text-sm leading-6 text-slate-700"
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
