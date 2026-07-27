"use client";

import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2, ScanLine } from "lucide-react";
import { useMemo, useState } from "react";
import type { DomainNote } from "@/lib/webdb";

type ImagingTab = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  question: string;
  bestFor: string[];
  ordering: string[];
  caution: string;
  noteMatch?: string;
};

type ImagingPanel = { id: string; label: string; position: readonly [number, number] };
type Atlas = { src: string; panels: ImagingPanel[] };

const TABS: ImagingTab[] = [
  {
    id: "xray", label: "X-ray", eyebrow: "first-line / bedside",
    title: "\uC9C8\uBB38\uC5D0 \uB9DE\uB294 \uB2E8\uC21C \uBC29\uC0AC\uC120 \uAC80\uC0AC",
    question: "\uD3D0\uB9AC\uC131 \uACF5\uAE30\u00B7\uC561\uCCB4, \uC911\uC2EC \uACF5\uAE30\uB3C4, \uAD00\uC808 \uC815\uB82C\uC744 \uBE60\uB974\uAC8C \uD655\uC778\uD560 \uB54C \uC6B0\uC120 \uACE0\uB824\uD55C\uB2E4.",
    bestFor: ["CXR: edema, pleural air/fluid, focal opacity, line/tube position", "Bone: fracture, dislocation, alignment", "Abdomen: bowel gas pattern and free air"],
    ordering: ["CXR\uB294 AP/PA, upright/supine \uC5EC\uBD80\uC640 \uC774\uC804 \uC601\uC0C1\uC744 \uD568\uAED8 \uD655\uC778\uD55C\uB2E4.", "\uC784\uC0C1 \uC9C8\uBB38\uACFC \uC678\uC0C1 \uBD80\uC704\uB97C \uC8FC\uBB38\uC5D0 \uBA85\uC2DC\uD55C\uB2E4."],
    caution: "\uC815\uC0C1 X-ray\uB9CC\uC73C\uB85C PE, \uCD08\uAE30 \uD3D0\uB834, \uB300\uB3D9\uB9E5 \uC9C8\uD658\uC744 \uBC30\uC81C\uD560 \uC218\uB294 \uC5C6\uB2E4.", noteMatch: "X-ray",
  },
  {
    id: "us", label: "US", eyebrow: "real-time / radiation-free",
    title: "\uCE68\uC0C1 \uBC14\uB85C \uC606\uC5D0\uC11C \uBCF4\uB294 \uC2E4\uC2DC\uAC04 \uC601\uC0C1",
    question: "\uB2F4\uB3C4\u00B7\uC2E0\uC7A5\u00B7\uC784\uC2E0\u00B7DVT\u00B7\uBCF5\uC218\uCC98\uB7FC \uB3D9\uC801 \uAC80\uC0AC\uAC00 \uC720\uB9AC\uD55C \uC0C1\uD669\uC5D0\uC11C \uC4F4\uB2E4.",
    bestFor: ["RUQ pain: hepatobiliary disease and hydronephrosis", "DVT compression, aorta, pleural/peritoneal fluid", "Abscess, line, drainage and procedure guidance"],
    ordering: ["POCUS\uC640 \uC815\uC2DD \uC601\uC0C1\uAC80\uC0AC\uB97C \uAD6C\uBD84\uD558\uACE0 \uC9C8\uBB38\u00B7side\u00B7landmark\uB97C \uB0A8\uAE34\uB2E4.", "\uBE44\uB9CC, \uC7A5\uAC00\uC2A4, operator limitation\uACFC pretest probability\uB97C \uB2E4\uC2DC \uD655\uC778\uD55C\uB2E4."],
    caution: "POCUS\uB294 \uC0C1\uD669\uC5D0 \uB530\uB77C \uC815\uC2DD \uC601\uC0C1\uAC80\uC0AC\uB97C \uB300\uCCB4\uD558\uC9C0 \uBABB\uD558\uBA70, \uD55C\uACC4\uB97C \uAE30\uB85D\uD55C\uB2E4.", noteMatch: "Ultrasonography",
  },
  {
    id: "ct", label: "CT", eyebrow: "fast cross-sectional imaging",
    title: "\uC751\uAE09 \uC9C4\uB2E8\uC740 \uC784\uC0C1 \uC9C8\uBB38\uACFC phase\uB85C \uC815\uD55C\uB2E4",
    question: "\uCD9C\uD608\u00B7\uC678\uC0C1\u00B7\uAC10\uC5FC\u00B7\uACB0\uC11D\u00B7\uC885\uC591\u00B7\uD608\uAD00 \uC911 \uBB34\uC5C7\uC744 \uBCF4\uB824\uB294\uC9C0\uC5D0 \uB530\uB77C protocol\uC744 \uC815\uD55C\uB2E4.",
    bestFor: ["Non-contrast brain CT: acute hemorrhage and mass effect", "Chest/abdomen CT: trauma, infection, obstruction, stone, tumor", "CTA: PE, aortic syndrome, active bleeding, vascular occlusion"],
    ordering: ["\uBD80\uC704\uB9CC \uC801\uC9C0 \uB9D0\uACE0 \uD575\uC2EC \uC9C4\uB2E8\uACFC contrast/phase \uD544\uC694\uC131\uC744 \uC8FC\uBB38\uC5D0 \uBA85\uC2DC\uD55C\uB2E4.", "\uACB0\uC11D\uC740 non-contrast, \uAC10\uC5FC\u00B7\uC885\uC591\u00B7\uD608\uAD00\uC740 \uC9C8\uBB38\uC5D0 \uB9DE\uB294 contrast phase\uAC00 \uD575\uC2EC\uC774\uB2E4."],
    caution: "\uBC29\uC0AC\uC120\uACFC iodinated contrast \uC704\uD5D8\uC744 \uD655\uC778\uD558\uB418, \uC751\uAE09 \uC0C1\uD669\uC5D0\uC11C \uC9C4\uB2E8\uC744 \uBD80\uB2F9\uD558\uAC8C \uC9C0\uC5F0\uC2DC\uD0A4\uC9C0 \uC54A\uB294\uB2E4.", noteMatch: "Computed Tomography",
  },
  {
    id: "mri", label: "MRI", eyebrow: "tissue characterization",
    title: "\uC2DC\uD000\uC2A4\uC640 \uBD80\uC704\uAC00 \uC9C4\uB2E8\uB825\uC744 \uACB0\uC815\uD55C\uB2E4",
    question: "\uB1CC\uC9C8\uD658, \uCC99\uC218\u00B7cauda compression, \uAD00\uC808\u00B7\uC5F0\uBD80\uC870\uC9C1, \uC885\uC591 \uD2B9\uC131\uD654\uC5D0\uC11C \uC720\uC6A9\uD55C \uAC80\uC0AC\uB2E4.",
    bestFor: ["Acute ischemic stroke and posterior fossa", "Spinal cord/cauda equina, marrow, ligament, tendon and joint", "Liver/pelvis/brain lesion characterization"],
    ordering: ["\uD544\uC694\uD55C sequence\uC640 \uC784\uC0C1 \uC9C8\uBB38\uC744 \uBA85\uD655\uD788 \uD55C\uB2E4.", "implant, \uAE08\uC18D \uC774\uBB3C, patch\uB97C \uC815\uD655\uD55C \uC81C\uD488 \uC815\uBCF4\uB85C screening\uD55C\uB2E4."],
    caution: "\uC548\uC804\uC131\uC774 \uBD88\uBD84\uBA85\uD55C implant\uB97C MRI-safe\uB85C \uAC00\uC815\uD558\uC9C0 \uC54A\uB294\uB2E4. GBCA\uB294 \uC2E0\uAE30\uB2A5\uACFC \uD544\uC694\uC131\uC744 \uD655\uC778\uD55C\uB2E4.", noteMatch: "Magnetic Resonance Imaging",
  },
  {
    id: "angio", label: "Angio", eyebrow: "CTA / MRA / catheter",
    title: "\uD608\uAD00 \uD3D0\uC0C9\uACFC \uCD9C\uD608\uC740 \uC2DC\uAC04\uACFC \uC911\uC7AC \uAC00\uB2A5\uC131\uC774 \uC6B0\uC120\uC774\uB2E4",
    question: "\uD608\uAD00 \uD3D0\uC0C9, \uB300\uB3D9\uB9E5 \uC9C8\uD658, \uD65C\uB3D9 \uCD9C\uD608\uC5D0\uC11C CTA/MRA\uC640 catheter angiography\uC758 \uBAA9\uC801\uC744 \uAD6C\uBD84\uD55C\uB2E4.",
    bestFor: ["CTA: PE, aortic dissection, stroke large-vessel occlusion, active bleeding", "MRA: neurovascular, neck and other vascular assessment without radiation", "Catheter angiography: diagnosis plus embolization/revascularization"],
    ordering: ["\uD608\uAD00 \uC601\uC5ED, \uD608\uC804\uC6A9\uD574 \uAC00\uB2A5\uC131, \uC911\uC7AC \uAC00\uB2A5\uC131, \uAE34\uAE09\uB3C4\uB97C \uBA85\uC2DC\uD55C\uB2E4.", "stroke, aortic syndrome, active bleeding\uC740 time-critical pathway\uB97C \uC6B0\uC120 \uC801\uC6A9\uD55C\uB2E4."],
    caution: "CTA/MRA/catheter angiography\uB294 \uC11C\uB85C \uB300\uCCB4 \uAC00\uB2A5\uD55C \uAC80\uC0AC\uAC00 \uC544\uB2C8\uBA70, \uC18D\uB3C4\u00B7\uC870\uC601\uC81C\u00B7\uC911\uC7AC \uD544\uC694\uC131\uC5D0 \uB530\uB77C \uC120\uD0DD\uD55C\uB2E4.",
  },
  {
    id: "echo", label: "Echo", eyebrow: "cardiac ultrasound",
    title: "\uC2EC\uC7A5 \uAD6C\uC870\u00B7\uAE30\uB2A5\u00B7\uD608\uB958\uB97C \uD1B5\uD569\uD574 \uBCF8\uB2E4",
    question: "\uC2EC\uBD80\uC804, \uD0C0\uB4DC\uD3EC\uB124\uC774\uB4DC, RV strain, \uD310\uB9C9\uC9C8\uD658, \uC2EC\uB0B4\uB9C9\uC5FC\uC5D0\uC11C \uAD6C\uC870\uC640 \uD608\uC5ED\uD559\uC744 \uD3C9\uAC00\uD55C\uB2E4.",
    bestFor: ["LV/RV function, regional wall motion, chamber size", "Valve stenosis/regurgitation and Doppler hemodynamics", "Pericardial effusion/tamponade, endocarditis support"],
    ordering: ["TTE\uAC00 \uAE30\uBCF8\uC774\uBA70 posterior structure/valve detail\uC740 \uC9C8\uBB38\uC5D0 \uB530\uB77C TEE\uB97C \uACE0\uB824\uD55C\uB2E4.", "EF \uD558\uB098\uB9CC \uBCF4\uC9C0 \uB9D0\uACE0 loading condition, wall motion, Doppler\uC640 \uC784\uC0C1 \uC0C1\uD0DC\uB97C \uD568\uAED8 \uD574\uC11D\uD55C\uB2E4."],
    caution: "Acoustic window\uC640 operator dependency\uAC00 \uC788\uC73C\uBA70, coronary artery \uC790\uCCB4\uB97C \uC790\uC138\uD788 \uBCF4\uB294 \uAC80\uC0AC\uB294 \uC544\uB2C8\uB2E4.", noteMatch: "Echocardiography",
  },
];

const ATLASES: Record<string, Atlas> = {
  xray: { src: "/images/imaging/xray-normal-atlas.png", panels: [
    { id: "cxr-pa", label: "CXR PA", position: [0, 0] }, { id: "cxr-ap", label: "CXR AP", position: [1, 0] }, { id: "cxr-lateral", label: "CXR lateral", position: [2, 0] },
    { id: "abdomen", label: "Abdomen", position: [0, 1] }, { id: "shoulder", label: "Shoulder AP", position: [1, 1] }, { id: "knee", label: "Knee", position: [2, 1] },
  ] },
  us: { src: "/images/imaging/us-normal-atlas.png", panels: [
    { id: "ruq", label: "RUQ", position: [0, 0] }, { id: "renal", label: "Kidney\u00B7bladder", position: [1, 0] }, { id: "pelvis", label: "Pelvis", position: [2, 0] },
    { id: "dvt", label: "DVT compression", position: [0, 1] }, { id: "fast", label: "FAST/eFAST", position: [1, 1] }, { id: "doppler", label: "Carotid\u00B7aorta Doppler", position: [2, 1] },
  ] },
  ct: { src: "/images/imaging/ct-normal-atlas.png", panels: [
    { id: "brain", label: "Brain NCCT", position: [0, 0] }, { id: "chest-lung", label: "Chest lung", position: [1, 0] }, { id: "chest-mediastinum", label: "Chest mediastinum", position: [2, 0] },
    { id: "arterial", label: "Abdomen arterial", position: [0, 1] }, { id: "portal", label: "Abdomen portal venous", position: [1, 1] }, { id: "kub", label: "KUB", position: [2, 1] },
  ] },
  mri: { src: "/images/imaging/mri-normal-atlas.png", panels: [
    { id: "brain-t1", label: "Brain T1", position: [0, 0] }, { id: "brain-t2", label: "Brain T2", position: [1, 0] }, { id: "brain-flair", label: "Brain FLAIR", position: [2, 0] },
    { id: "brain-dwi", label: "Brain DWI/ADC", position: [0, 1] }, { id: "c-spine", label: "C-spine", position: [1, 1] }, { id: "l-spine", label: "L-spine T2", position: [2, 1] },
  ] },
  angio: { src: "/images/imaging/angio-normal-atlas.png", panels: [
    { id: "brain", label: "Brain CTA/MRA", position: [0, 0] }, { id: "neck", label: "Neck CTA", position: [1, 0] }, { id: "ctpa", label: "CTPA", position: [2, 0] },
    { id: "aorta", label: "Aorta CTA", position: [0, 1] }, { id: "runoff", label: "Lower-extremity runoff", position: [1, 1] }, { id: "catheter", label: "Catheter angiography", position: [2, 1] },
  ] },
  echo: { src: "/images/imaging/echo-normal-atlas.png", panels: [
    { id: "pslax", label: "PSLAX", position: [0, 0] }, { id: "psax", label: "PSAX", position: [1, 0] }, { id: "a4c", label: "Apical 4C", position: [2, 0] },
    { id: "a2c", label: "Apical 2C", position: [0, 1] }, { id: "subcostal", label: "Subcostal\u00B7IVC", position: [1, 1] }, { id: "doppler", label: "Doppler", position: [2, 1] },
  ] },
};

function linkedNote(notes: DomainNote[], match?: string) {
  return match ? notes.find((note) => note.title.includes(match) || note.aliases.some((alias) => alias.includes(match))) : undefined;
}

export function ImagingWorkbench({ notes }: { notes: DomainNote[] }) {
  const [activeId, setActiveId] = useState("us");
  const [activePanelId, setActivePanelId] = useState("ruq");
  const active = TABS.find((tab) => tab.id === activeId) ?? TABS[0];
  const atlas = ATLASES[active.id];
  const selectedPanel = useMemo(() => atlas.panels.find((panel) => panel.id === activePanelId) ?? atlas.panels[0], [activePanelId, atlas]);
  const [column, row] = selectedPanel.position;
  const detail = linkedNote(notes, active.noteMatch);

  function selectTab(id: string) {
    setActiveId(id);
    setActivePanelId(ATLASES[id].panels[0].id);
  }

  return <section className="rounded-xl border border-teal-200 bg-white shadow-sm">
    <div className="border-b border-teal-100 bg-gradient-to-br from-teal-50 to-white px-5 py-5 sm:px-6">
      <div className="flex items-start gap-3">
        <span className="rounded-lg bg-teal-700 p-2 text-white"><ScanLine className="h-5 w-5" /></span>
        <div><div className="eyebrow">Imaging choice</div><h2 className="mt-1 text-2xl font-semibold text-slate-950">\uC601\uC0C1\uAC80\uC0AC \uC120\uD0DD\uACFC \uD310\uB3C5 \uD655\uC778</h2><p className="mt-1 text-sm leading-6 text-slate-600">\uAC80\uC0AC \uC774\uB984\uBCF4\uB2E4 \uC784\uC0C1 \uC9C8\uBB38\uACFC \uAE34\uAE09\uB3C4\uB97C \uBA3C\uC800 \uC815\uD55C\uB2E4.</p></div>
      </div>
    </div>
    <div className="border-b border-slate-200 px-3 py-3 sm:px-5">
      <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="\uC601\uC0C1\uAC80\uC0AC \uC885\uB958">
        {TABS.map((tab) => <button key={tab.id} type="button" role="tab" aria-selected={activeId === tab.id} onClick={() => selectTab(tab.id)} className={`shrink-0 rounded-lg border px-3.5 py-2 text-sm font-semibold transition ${activeId === tab.id ? "border-teal-700 bg-teal-700 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-teal-300"}`}>{tab.label}</button>)}
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label={`${active.label} \uBD80\uC704 \uBC0F \uC2DC\uD000\uC2A4`}>
        {atlas.panels.map((panel) => <button key={panel.id} type="button" aria-pressed={selectedPanel.id === panel.id} onClick={() => setActivePanelId(panel.id)} className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${selectedPanel.id === panel.id ? "border-teal-600 bg-teal-50 text-teal-800" : "border-slate-200 bg-white text-slate-600 hover:border-teal-300"}`}>{panel.label}</button>)}
      </div>
    </div>
    <div className="p-5 sm:p-6" role="tabpanel">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]">
        <div>
          <div className="relative mx-auto mb-4 aspect-square w-full max-w-[440px] overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <Image src={atlas.src} alt={`${active.label} ${selectedPanel.label} \uC815\uC0C1 \uC601\uC0C1 \uB3C4\uC2DD`} width={1536} height={1024} sizes="(max-width: 640px) 100vw, 440px" className="absolute max-w-none" style={{ width: "300%", height: "200%", left: `-${column * 100}%`, top: `-${row * 100}%` }} />
          </div>
          <div className="text-center text-xs font-semibold text-slate-500">{selectedPanel.label} \u00B7 \uC815\uC0C1 \uD328\uB110</div>
          <div className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-teal-700">{active.eyebrow}</div>
          <h3 className="mt-2 text-2xl font-semibold text-slate-950">{active.title}</h3>
          <p className="mt-3 rounded-lg border-l-4 border-teal-600 bg-teal-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-800">{active.question}</p>
          <div className="mt-5"><h4 className="text-sm font-bold text-slate-950">\uC6B0\uC120 \uB5A0\uC62C\uB9B4 \uC0C1\uD669</h4><ul className="mt-2 space-y-2">{active.bestFor.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-700" />{item}</li>)}</ul></div>
        </div>
        <aside className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4"><h4 className="text-sm font-bold text-slate-950">\uC8FC\uBB38\u00B7\uC758\uB8B0 \uC2DC \uD655\uC778</h4><ol className="mt-3 space-y-2 text-sm leading-6 text-slate-700">{active.ordering.map((item, index) => <li key={item} className="flex gap-2"><span className="font-semibold text-teal-700">{index + 1}</span>{item}</li>)}</ol></div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4"><div className="flex gap-2 text-sm font-bold text-amber-900"><AlertTriangle className="h-4 w-4 shrink-0" />\uB193\uCE58\uC9C0 \uB9D0 \uAC83</div><p className="mt-2 text-sm leading-6 text-amber-950">{active.caution}</p></div>
          {detail ? <Link href={`/lab-img/${detail.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-700">{active.label} \uAC1C\uBCC4 \uD574\uC124 <ArrowRight className="h-4 w-4" /></Link> : null}
        </aside>
      </div>
    </div>
  </section>;
}