"use client";

import { useMemo, useState } from "react";
import { BookOpenText, Maximize2, Minimize2, RotateCcw } from "lucide-react";
import type { ChiefComplaintExamSlot, ChiefComplaintNote, DiseaseSection, TermLink } from "@/lib/webdb";
import { ChiefComplaintRecommendationPicker } from "@/components/chief-complaint-recommendation-picker";
import { RichTextLines } from "@/components/rich-text-lines";

type ViewKey = "concept" | "outpatient" | "inpatient" | "emergency";

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

const HISTORY_EXPANSIONS = [
  ["AVNCD", "Anorexia, Vomiting, Nausea, Constipation, Diarrhea"], ["ANVCD", "Anorexia, Nausea, Vomiting, Constipation, Diarrhea"], ["FCCSR", "Fever, Chill, Cough, Sputum, Rhinorrhea"], ["HISR", "Hematuria, Incontinence, Hesitancy, Retention"], ["FUND", "Frequency, Urgency, Nocturia, Dysuria"], ["BSS", "bloody stool, acid regurgitation"], ["D.P", "Dyspnea, Palpitation"], ["HIR", "Hematuria, Incontinence, Retention"], ["HIS", "Hematuria, Incontinence, Hesitancy"], ["JD", "Jaundice"],
] as const;
function expandHistoryTerms(text: string) { return HISTORY_EXPANSIONS.reduce((result, [term, expansion]) => !result.includes(term) || result.includes(term + " (") ? result : result.replaceAll(term, term + " (" + expansion + ")"), text); }
const QUICK_HISTORY_FLOW = [
  { key: "onset", label: "O", title: "\uBC1C\uC0DD", cue: "onset / context" }, { key: "location", label: "L", title: "\uC704\uCE58", cue: "site / distribution" }, { key: "duration", label: "D", title: "\uC9C0\uC18D", cue: "duration / frequency" },
  { key: "course", label: "Co", title: "\uACBD\uACFC", cue: "change over time" }, { key: "experienced", label: "Ex", title: "\uC774\uC804 \uACBD\uD5D8", cue: "similar episode / workup" }, { key: "character", label: "C", title: "\uC591\uC0C1", cue: "quality / severity / impact" },
];
const CONTEXT_HISTORY_FLOW = [{ key: "factor", label: "F", title: "\uC545\uD654\u00B7\uC644\uD654", cue: "trigger / relieving factor" }, { key: "event", label: "E", title: "\uCD5C\uADFC \uC0AC\uAC74", cue: "trauma / exposure / change" }];
const BACKGROUND_HISTORY_FLOW = [
  { key: "surgical", label: "\uC678", title: "\uC218\uC220\u00B7\uC785\uC6D0\uB825", cue: "operation / admission" }, { key: "past", label: "\uACFC", title: "\uACFC\uAC70\uB825", cue: "comorbidity / prior diagnosis" }, { key: "medication", label: "\uC57D", title: "\uC57D\uBB3C\u00B7\uC54C\uB808\uB974\uAE30", cue: "medication / allergy" },
  { key: "social", label: "\uC0AC", title: "\uC0AC\uD68C\uB825", cue: "smoking / alcohol / exposure" }, { key: "family", label: "\uAC00", title: "\uAC00\uC871\uB825", cue: "relevant family history" }, { key: "female", label: "\uC5EC", title: "\uC6D4\uACBD\u00B7\uC784\uC2E0\uB825", cue: "LMP / pregnancy when relevant" },
];
type HistoryChecklistItem = { id: string; text: string; key: string };
type AssociatedHistoryGroup = { label: string; items: HistoryChecklistItem[] };
function allHistoryItems(note: ChiefComplaintNote): HistoryChecklistItem[] { return (note.historyChecklist ?? []).flatMap((slot, slotIndex) => slot.groups.flatMap((group, groupIndex) => group.items.map((text, itemIndex) => ({ id: `history-${slotIndex}-${groupIndex}-${itemIndex}`, text, key: slot.key })))); }
function associatedSystemFor(text: string) {
  const value = text.toLowerCase();
  const systems: Array<[string, string[]]> = [
    ["\uD638\uD761\uAE30", ["dyspnea", "cough", "sputum", "hemoptysis", "rhinorrhea", "wheez", "\uD638\uD761", "\uAE30\uCE68", "\uAC00\uB798", "\uAC1D\uD608", "\uCF67\uBB3C", "\uCC9C\uBA85"]], ["\uC2EC\uD608\uAD00", ["palpitation", "syncope", "edema", "chest pain", "angina", "\uB450\uADFC", "\uC2E4\uC2E0", "\uBD80\uC885", "\uD749\uD1B5", "\uAC00\uC2B4", "\uC2DD\uC740\uB540"]],
    ["\uC18C\uD654\uAE30", ["anorexia", "vomit", "nausea", "constipation", "diarrhea", "bloody stool", "melena", "regurgitation", "dyspepsia", "abdominal", "jaundice", "\uC2DD\uC695", "\uAD6C\uD1A0", "\uC624\uC2EC", "\uBCC0\uBE44", "\uC124\uC0AC", "\uD608\uBCC0", "\uD751\uBCC0", "\uC18D\uC4F0\uB9BC", "\uC5ED\uB958", "\uBCF5\uD1B5", "\uD669\uB2EC"]], ["\uBE44\uB1E8\uAE30", ["hematuria", "dysuria", "frequency", "urgency", "nocturia", "retention", "incontinence", "urinary", "\uD608\uB1E8", "\uBC30\uB1E8", "\uBE48\uB1E8", "\uC808\uBC15\uB1E8", "\uC57C\uAC04\uB1E8", "\uC694\uC2E4\uAE08", "\uC694\uD3D0"]],
    ["\uB208\u00B7\uC774\uBE44\uC778\uD6C4", ["vision", "visual", "hearing", "ear", "throat", "nasal", "\uC774\uBA85", "\uB09C\uCCAD", "\uC2DC\uC57C", "\uB208", "\uADC0", "\uC778\uD6C4", "\uCF54\uB9C9\uD798"]], ["\uC2E0\uACBD", ["seizure", "weakness", "sensory", "headache", "vertigo", "dizziness", "conscious", "numb", "\uACBD\uB828", "\uB9C8\uBE44", "\uAC10\uAC01", "\uB450\uD1B5", "\uC5B4\uC9C0\uB7FC", "\uC758\uC2DD", "\uC800\uB9BC"]],
    ["\uC0B0\uBD80\uC778\uACFC", ["menstrual", "vaginal", "pregnan", "obstetric", "pelvic", "\uC6D4\uACBD", "\uC9C8\uCD9C\uD608", "\uC9C8\uBD84\uBE44", "\uC784\uC2E0", "\uACE8\uBC18"]], ["\uD53C\uBD80\u00B7\uADFC\uACE8\uACA9", ["rash", "skin", "joint", "muscle", "arthralgia", "\uD53C\uBD80", "\uBC1C\uC9C4", "\uAD00\uC808", "\uADFC\uC721"]],
    ["\uC815\uC2E0", ["anxiety", "depression", "mood", "sleep", "psychi", "\uBD88\uC548", "\uC6B0\uC6B8", "\uAE30\uBD84", "\uC218\uBA74"]], ["\uC804\uC2E0", ["fever", "chill", "fatigue", "weight", "general", "\uBC1C\uC5F4", "\uC624\uD55C", "\uD53C\uB85C", "\uCCB4\uC911", "\uC804\uC2E0"]],
  ];
  return systems.find(([, terms]) => terms.some((term) => value.includes(term)))?.[0] ?? "\uAE30\uD0C0";
}
function buildAssociatedGroups(items: HistoryChecklistItem[]) { const grouped = new Map<string, HistoryChecklistItem[]>(); items.filter((item) => item.key === "associated").forEach((item) => { const label = associatedSystemFor(item.text); grouped.set(label, [...(grouped.get(label) ?? []), item]); }); return Array.from(grouped, ([label, groupItems]) => ({ label, items: groupItems })); }
function primaryAssociatedSystems(category: string) {
  const groups: Record<string, string[]> = {
    "01": ["\uC18C\uD654\uAE30", "\uC804\uC2E0", "\uC2EC\uD608\uAD00"], "02": ["\uC2EC\uD608\uAD00", "\uD638\uD761\uAE30", "\uC18C\uD654\uAE30"], "03": ["\uD638\uD761\uAE30", "\uC804\uC2E0", "\uC2EC\uD608\uAD00"], "04": ["\uBE44\uB1E8\uAE30", "\uC804\uC2E0", "\uC0B0\uBD80\uC778\uACFC"], "05": ["\uC804\uC2E0", "\uD638\uD761\uAE30", "\uC18C\uD654\uAE30"], "06": ["\uD53C\uBD80\u00B7\uADFC\uACE8\uACA9", "\uC804\uC2E0", "\uC2E0\uACBD"], "07": ["\uC815\uC2E0", "\uC2E0\uACBD", "\uC804\uC2E0"], "08": ["\uC2E0\uACBD", "\uB208\u00B7\uC774\uBE44\uC778\uD6C4", "\uC804\uC2E0"], "09": ["\uC0B0\uBD80\uC778\uACFC", "\uBE44\uB1E8\uAE30", "\uC804\uC2E0"], "10": ["\uC804\uC2E0", "\uD638\uD761\uAE30", "\uC18C\uD654\uAE30"], "11": ["\uC815\uC2E0", "\uC804\uC2E0"], "12": ["\uB208\u00B7\uC774\uBE44\uC778\uD6C4", "\uD638\uD761\uAE30", "\uC804\uC2E0"],
  }; return groups[category.slice(0, 2)] ?? ["\uC804\uC2E0", "\uC2EC\uD608\uAD00", "\uD638\uD761\uAE30"];
}
function HistoryChecklist({ note }: { note: ChiefComplaintNote }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({}); const [showExpansions, setShowExpansions] = useState(false); const sourceItems = useMemo(() => allHistoryItems(note), [note]); const associatedGroups = useMemo(() => buildAssociatedGroups(sourceItems), [sourceItems]);
  const primaryAssociatedGroups = useMemo(() => { const preferred = primaryAssociatedSystems(note.category).map((label) => associatedGroups.find((group) => group.label === label)).filter((group): group is AssociatedHistoryGroup => Boolean(group)); const fallback = associatedGroups.filter((group) => group.label !== "\uAE30\uD0C0" && !preferred.some((item) => item.label === group.label)); return [...preferred, ...fallback].slice(0, 3); }, [associatedGroups, note.category]);
  const additionalAssociatedGroups = associatedGroups.filter((group) => !primaryAssociatedGroups.some((item) => item.label === group.label)); const byKey = (key: string) => sourceItems.filter((item) => item.key === key); const toggle = (id: string) => setChecked((current) => ({ ...current, [id]: !current[id] }));
  if (sourceItems.length === 0) return <div className="mt-2 text-sm text-slate-400">{"\uC815\uB9AC\uB41C Hx \uBB38\uC9C4 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."}</div>;
  const HistoryChip = ({ item }: { item: HistoryChecklistItem }) => <label className="flex min-w-0 cursor-pointer items-start gap-2 rounded-md border border-slate-200 bg-white px-2.5 py-2 text-xs leading-5 text-slate-700 transition hover:border-teal-200 hover:bg-teal-50/40"><input type="checkbox" checked={Boolean(checked[item.id])} onChange={() => toggle(item.id)} className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-teal-700" /><span className={checked[item.id] ? "min-w-0 break-words text-slate-400 line-through" : "min-w-0 break-words"}>{showExpansions ? expandHistoryTerms(item.text) : item.text}</span></label>;
  const CompactFlowCard = ({ flow }: { flow: { key: string; label: string; title: string; cue: string } }) => { const items = byKey(flow.key); return <section className="min-w-0 rounded-lg border border-slate-200 bg-slate-50/70 p-2.5"><div className="flex items-baseline gap-1.5"><span className="text-sm font-bold text-teal-800">{flow.label}</span><h5 className="text-xs font-semibold text-slate-800">{flow.title}</h5></div>{items.length > 0 ? <div className="mt-2 space-y-1.5">{items.map((item) => <HistoryChip key={item.id} item={item} />)}</div> : <p className="mt-1.5 text-[11px] leading-4 text-slate-500">{flow.cue}</p>}</section>; };
  return <div className="mt-3 space-y-4">
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3"><div className="text-sm text-slate-600">{"\uBB38\uC9C4 \uD655\uC778"} <span className="font-semibold text-slate-950">{sourceItems.filter((item) => checked[item.id]).length}</span> / {sourceItems.length}</div><div className="flex items-center gap-2"><button type="button" onClick={() => setShowExpansions((value) => !value)} className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"><BookOpenText size={14} aria-hidden="true" />{showExpansions ? "\uC57D\uC5B4 \uD480\uC774 \uC228\uAE30\uAE30" : "\uC57D\uC5B4 \uD480\uC774"}</button><button type="button" onClick={() => setChecked({})} className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"><RotateCcw size={14} aria-hidden="true" />{"\uCD08\uAE30\uD654"}</button></div></div>
    <section><div className="mb-2 flex items-center gap-2"><h4 className="text-sm font-semibold text-slate-950">{"\uC99D\uC0C1 \uC815\uBCF4"}</h4><span className="text-xs text-slate-500">OLDCoExC</span></div><div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">{QUICK_HISTORY_FLOW.map((flow) => <CompactFlowCard key={flow.key} flow={flow} />)}</div></section>
    <section><div className="mb-2 flex items-center gap-2"><h4 className="text-sm font-semibold text-slate-950">A. {"\uB3D9\uBC18 \uC99D\uC0C1"}</h4><span className="text-xs text-slate-500">CC {"\uD2B9\uD654 \uACC4\uD1B5 \uC6B0\uC120"}</span></div>{primaryAssociatedGroups.length > 0 ? <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">{primaryAssociatedGroups.map((group) => <div key={group.label} className="min-w-0 rounded-lg border border-teal-100 bg-teal-50/40 p-2.5"><h5 className="text-xs font-semibold text-teal-900">{group.label}</h5><div className="mt-2 space-y-1.5">{group.items.map((item) => <HistoryChip key={item.id} item={item} />)}</div></div>)}</div> : <p className="rounded-lg border border-dashed border-slate-200 px-3 py-2 text-xs text-slate-500">{"\uAD00\uB828 \uB3D9\uBC18 \uC99D\uC0C1\uC744 \uACC4\uD1B5\uBCC4\uB85C \uD655\uC778\uD569\uB2C8\uB2E4."}</p>}{additionalAssociatedGroups.length > 0 && <details className="mt-2 rounded-lg border border-slate-200 bg-white"><summary className="cursor-pointer px-3 py-2 text-xs font-medium text-slate-600">{"\uCD94\uAC00 \uB3D9\uBC18 \uC99D\uC0C1"} ({additionalAssociatedGroups.length}{"\uAC1C \uACC4\uD1B5"})</summary><div className="grid gap-2 border-t border-slate-100 p-2.5 md:grid-cols-2 xl:grid-cols-3">{additionalAssociatedGroups.map((group) => <div key={group.label} className="min-w-0 rounded-md bg-slate-50 p-2.5"><h5 className="text-xs font-semibold text-slate-800">{group.label}</h5><div className="mt-2 space-y-1.5">{group.items.map((item) => <HistoryChip key={item.id} item={item} />)}</div></div>)}</div></details>}</section>
    <section><h4 className="mb-2 text-sm font-semibold text-slate-950">{"\uC720\uBC1C\u00B7\uACBD\uACFC"}</h4><div className="grid grid-cols-1 gap-2 sm:grid-cols-2">{CONTEXT_HISTORY_FLOW.map((flow) => <CompactFlowCard key={flow.key} flow={flow} />)}</div></section>
    <section><div className="mb-2 flex items-center gap-2"><h4 className="text-sm font-semibold text-slate-950">{"\uAE30\uBCF8 \uBCD1\uB825"}</h4><span className="text-xs text-slate-500">{"\uC678\u00B7\uACFC\u00B7\uC57D\u00B7\uC0AC\u00B7\uAC00\u00B7\uC5EC"}</span></div><div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-6">{BACKGROUND_HISTORY_FLOW.map((flow) => <CompactFlowCard key={flow.key} flow={flow} />)}</div></section>
    <details className="rounded-lg border border-slate-200 bg-white"><summary className="cursor-pointer px-3 py-2.5 text-sm font-medium text-slate-700">{"\uC804\uCCB4 \uBB38\uC9C4"}</summary><div className="space-y-4 border-t border-slate-100 p-3">{(note.historyChecklist ?? []).map((slot, slotIndex) => { const flow = COMMON_HISTORY_FLOW.find((item) => item.key === slot.key); return <section key={`${slot.key}-${slotIndex}`}><h5 className="text-xs font-semibold text-slate-800">{flow?.label ?? slot.label}</h5><div className="mt-2 space-y-2">{slot.groups.map((group, groupIndex) => <div key={`${slot.key}-${group.label}-${groupIndex}`}>{group.label !== "CC-specific" && <div className="mb-1 text-[11px] font-medium text-slate-500">{group.label}</div>}<div className="space-y-1.5">{group.items.map((text, itemIndex) => <HistoryChip key={`history-${slotIndex}-${groupIndex}-${itemIndex}`} item={{ id: `history-${slotIndex}-${groupIndex}-${itemIndex}`, text, key: slot.key }} />)}</div></div>)}</div></section>; })}</div></details>
  </div>;
}


type CommonPhysicalExamFlow = {
  key: string;
  label: string;
  shortLabel: string;
  prompt: string;
};

const COMMON_PHYSICAL_EXAM_FLOW: CommonPhysicalExamFlow[] = [
  { key: "vitals", label: "V/S", shortLabel: "V/S", prompt: "활력징후를 측정한다." },
  { key: "eyes", label: "눈", shortLabel: "눈", prompt: "눈과 동공을 관찰한다." },
  { key: "mouth", label: "구강", shortLabel: "구강", prompt: "구강과 인두를 관찰한다." },
  { key: "neck", label: "목", shortLabel: "목", prompt: "목을 시진하고 촉진한다." },
  { key: "chest", label: "흉부", shortLabel: "흉부", prompt: "흉부를 시진, 촉진, 타진, 청진한다." },
  { key: "abdomen", label: "복부", shortLabel: "복부", prompt: "복부를 시진, 청진, 타진, 촉진한다." },
  { key: "extremities", label: "사지", shortLabel: "사지", prompt: "사지, 맥박, 부종을 확인한다." },
  { key: "skin", label: "피부", shortLabel: "피부", prompt: "피부를 시진하고 촉진한다." },
  { key: "neurologic", label: "신경학적 검사", shortLabel: "신경학적 검사", prompt: "필요한 신경학적 검사를 시행한다." },
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
  { key: "inpatient", label: "\uBCD1\uB3D9" },
  { key: "emergency", label: "ER" },
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

  if (view === "emergency") {
    return note.sections.filter((section) => section.title.trim().toLowerCase() === "er");
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
  const views = useMemo(
    () => VIEWS.filter((view) => view.key !== "emergency" || note.sections.some((section) => section.title.trim().toLowerCase() === "er")),
    [note.sections],
  );
  const sections = useMemo(() => getViewSections(note, activeView), [note, activeView]);

  return (
    <div className="space-y-6">
      <article className="surface p-5 sm:p-6">
        <div className="eyebrow">{note.category || "Chief Complaint"}</div>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold text-slate-950 sm:text-3xl">{note.title}</h1>
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
            {views.map((view) => {
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
        <div className="mb-3 text-xs uppercase text-slate-500">{views.find((view) => view.key === activeView)?.label}</div>
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
