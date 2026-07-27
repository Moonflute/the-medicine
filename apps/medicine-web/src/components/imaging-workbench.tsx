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
    title: "질문에 맞는 단순 방사선 검사",
    question: "폐리성 공기·액체, 중심 공기도, 관절 정렬을 빠르게 확인할 때 우선 고려한다.",
    bestFor: ["CXR: edema, pleural air/fluid, focal opacity, line/tube position", "Bone: fracture, dislocation, alignment", "Abdomen: bowel gas pattern and free air"],
    ordering: ["CXR는 AP/PA, upright/supine 여부와 이전 영상을 함께 확인한다.", "임상 질문과 외상 부위를 주문에 명시한다."],
    caution: "정상 X-ray만으로 PE, 초기 폐렴, 대동맥 질환을 배제할 수는 없다.", noteMatch: "X-ray",
  },
  {
    id: "us", label: "US", eyebrow: "real-time / radiation-free",
    title: "침상 바로 옆에서 보는 실시간 영상",
    question: "담도·신장·임신·DVT·복수처럼 동적 검사가 유리한 상황에서 쓴다.",
    bestFor: ["RUQ pain: hepatobiliary disease and hydronephrosis", "DVT compression, aorta, pleural/peritoneal fluid", "Abscess, line, drainage and procedure guidance"],
    ordering: ["POCUS와 정식 영상검사를 구분하고 질문·side·landmark를 남긴다.", "비만, 장가스, operator limitation과 pretest probability를 다시 확인한다."],
    caution: "POCUS는 상황에 따라 정식 영상검사를 대체하지 못하며, 한계를 기록한다.", noteMatch: "Ultrasonography",
  },
  {
    id: "ct", label: "CT", eyebrow: "fast cross-sectional imaging",
    title: "응급 진단은 임상 질문과 phase로 정한다",
    question: "출혈·외상·감염·결석·종양·혈관 중 무엇을 보려는지에 따라 protocol을 정한다.",
    bestFor: ["Non-contrast brain CT: acute hemorrhage and mass effect", "Chest/abdomen CT: trauma, infection, obstruction, stone, tumor", "CTA: PE, aortic syndrome, active bleeding, vascular occlusion"],
    ordering: ["부위만 적지 말고 핵심 진단과 contrast/phase 필요성을 주문에 명시한다.", "결석은 non-contrast, 감염·종양·혈관은 질문에 맞는 contrast phase가 핵심이다."],
    caution: "방사선과 iodinated contrast 위험을 확인하되, 응급 상황에서 진단을 부당하게 지연시키지 않는다.", noteMatch: "Computed Tomography",
  },
  {
    id: "mri", label: "MRI", eyebrow: "tissue characterization",
    title: "시퀀스와 부위가 진단력을 결정한다",
    question: "뇌질환, 척수·cauda compression, 관절·연부조직, 종양 특성화에서 유용한 검사다.",
    bestFor: ["Acute ischemic stroke and posterior fossa", "Spinal cord/cauda equina, marrow, ligament, tendon and joint", "Liver/pelvis/brain lesion characterization"],
    ordering: ["필요한 sequence와 임상 질문을 명확히 한다.", "implant, 금속 이물, patch를 정확한 제품 정보로 screening한다."],
    caution: "안전성이 불분명한 implant를 MRI-safe로 가정하지 않는다. GBCA는 신기능과 필요성을 확인한다.", noteMatch: "Magnetic Resonance Imaging",
  },
  {
    id: "angio", label: "Angio", eyebrow: "CTA / MRA / catheter",
    title: "혈관 폐색과 출혈은 시간과 중재 가능성이 우선이다",
    question: "혈관 폐색, 대동맥 질환, 활동 출혈에서 CTA/MRA와 catheter angiography의 목적을 구분한다.",
    bestFor: ["CTA: PE, aortic dissection, stroke large-vessel occlusion, active bleeding", "MRA: neurovascular, neck and other vascular assessment without radiation", "Catheter angiography: diagnosis plus embolization/revascularization"],
    ordering: ["혈관 영역, 혈전용해 가능성, 중재 가능성, 긴급도를 명시한다.", "stroke, aortic syndrome, active bleeding은 time-critical pathway를 우선 적용한다."],
    caution: "CTA/MRA/catheter angiography는 서로 대체 가능한 검사가 아니며, 속도·조영제·중재 필요성에 따라 선택한다.",
  },
  {
    id: "echo", label: "Echo", eyebrow: "cardiac ultrasound",
    title: "심장 구조·기능·혈류를 통합해 본다",
    question: "심부전, 타드포네이드, RV strain, 판막질환, 심내막염에서 구조와 혈역학을 평가한다.",
    bestFor: ["LV/RV function, regional wall motion, chamber size", "Valve stenosis/regurgitation and Doppler hemodynamics", "Pericardial effusion/tamponade, endocarditis support"],
    ordering: ["TTE가 기본이며 posterior structure/valve detail은 질문에 따라 TEE를 고려한다.", "EF 하나만 보지 말고 loading condition, wall motion, Doppler와 임상 상태를 함께 해석한다."],
    caution: "Acoustic window와 operator dependency가 있으며, coronary artery 자체를 자세히 보는 검사는 아니다.", noteMatch: "Echocardiography",
  },
];

const ASSET_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const ATLASES: Record<string, Atlas> = {
  xray: { src: "/images/imaging/xray-normal-atlas.png", panels: [
    { id: "cxr-pa", label: "CXR PA", position: [0, 0] }, { id: "cxr-ap", label: "CXR AP", position: [1, 0] }, { id: "cxr-lateral", label: "CXR lateral", position: [2, 0] },
    { id: "abdomen", label: "Abdomen", position: [0, 1] }, { id: "shoulder", label: "Shoulder AP", position: [1, 1] }, { id: "knee", label: "Knee", position: [2, 1] },
  ] },
  us: { src: "/images/imaging/us-normal-atlas.png", panels: [
    { id: "ruq", label: "RUQ", position: [0, 0] }, { id: "renal", label: "Kidney·bladder", position: [1, 0] }, { id: "pelvis", label: "Pelvis", position: [2, 0] },
    { id: "dvt", label: "DVT compression", position: [0, 1] }, { id: "fast", label: "FAST/eFAST", position: [1, 1] }, { id: "doppler", label: "Carotid·aorta Doppler", position: [2, 1] },
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
    { id: "a2c", label: "Apical 2C", position: [0, 1] }, { id: "subcostal", label: "Subcostal·IVC", position: [1, 1] }, { id: "doppler", label: "Doppler", position: [2, 1] },
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
        <div><div className="eyebrow">Imaging choice</div><h2 className="mt-1 text-2xl font-semibold text-slate-950">영상검사 선택과 판독 확인</h2><p className="mt-1 text-sm leading-6 text-slate-600">검사 이름보다 임상 질문과 긴급도를 먼저 정한다.</p></div>
      </div>
    </div>
    <div className="border-b border-slate-200 px-3 py-3 sm:px-5">
      <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="영상검사 종류">
        {TABS.map((tab) => <button key={tab.id} type="button" role="tab" aria-selected={activeId === tab.id} onClick={() => selectTab(tab.id)} className={`shrink-0 rounded-lg border px-3.5 py-2 text-sm font-semibold transition ${activeId === tab.id ? "border-teal-700 bg-teal-700 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-teal-300"}`}>{tab.label}</button>)}
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label={`${active.label} 부위 및 시퀀스`}>
        {atlas.panels.map((panel) => <button key={panel.id} type="button" aria-pressed={selectedPanel.id === panel.id} onClick={() => setActivePanelId(panel.id)} className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${selectedPanel.id === panel.id ? "border-teal-600 bg-teal-50 text-teal-800" : "border-slate-200 bg-white text-slate-600 hover:border-teal-300"}`}>{panel.label}</button>)}
      </div>
    </div>
    <div className="p-5 sm:p-6" role="tabpanel">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]">
        <div>
          <div className="relative mx-auto mb-4 aspect-square w-full max-w-[440px] overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <Image src={`${ASSET_BASE_PATH}${atlas.src}`} alt={`${active.label} ${selectedPanel.label} 정상 영상 도식`} width={1536} height={1024} sizes="(max-width: 640px) 100vw, 440px" className="absolute max-w-none" style={{ width: "300%", height: "200%", left: `-${column * 100}%`, top: `-${row * 100}%` }} />
          </div>
          <div className="text-center text-xs font-semibold text-slate-500">{selectedPanel.label} · 정상 패널</div>
          <div className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-teal-700">{active.eyebrow}</div>
          <h3 className="mt-2 text-2xl font-semibold text-slate-950">{active.title}</h3>
          <p className="mt-3 rounded-lg border-l-4 border-teal-600 bg-teal-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-800">{active.question}</p>
          <div className="mt-5"><h4 className="text-sm font-bold text-slate-950">우선 떠올릴 상황</h4><ul className="mt-2 space-y-2">{active.bestFor.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-700" />{item}</li>)}</ul></div>
        </div>
        <aside className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4"><h4 className="text-sm font-bold text-slate-950">주문·의뢰 시 확인</h4><ol className="mt-3 space-y-2 text-sm leading-6 text-slate-700">{active.ordering.map((item, index) => <li key={item} className="flex gap-2"><span className="font-semibold text-teal-700">{index + 1}</span>{item}</li>)}</ol></div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4"><div className="flex gap-2 text-sm font-bold text-amber-900"><AlertTriangle className="h-4 w-4 shrink-0" />놓치지 말 것</div><p className="mt-2 text-sm leading-6 text-amber-950">{active.caution}</p></div>
          {detail ? <Link href={`/lab-img/${detail.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-700">{active.label} 개별 해설 <ArrowRight className="h-4 w-4" /></Link> : null}
        </aside>
      </div>
    </div>
  </section>;
}