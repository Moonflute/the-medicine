"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Check, ChevronRight, ExternalLink, HeartPulse, ShieldAlert, Stethoscope } from "lucide-react";
import type { DiseaseNote } from "@/lib/webdb";

type StageGroup = "obstetrics" | "pediatrics" | "shared";

type TimelineStage = {
  group: StageGroup;
  time: string;
  title: string;
  subtitle: string;
  development: string[];
  assessments: string[];
  clinicalFocus: string[];
  related: string[];
  sources: string[];
};

const stages: TimelineStage[] = [
  {
    group: "obstetrics", time: "GA 0–13+6주", title: "임신 초기", subtitle: "임신 확인 · 주수 확정 · 위험도 층화",
    development: ["배아기에서 태아기로 전환하며 기관형성기 약물·방사선 노출을 재평가한다.", "CRL 기반 초음파가 가능하면 EDD는 초기 초음파 자료를 우선해 확정한다."],
    assessments: ["병력(산과력·유전·혈전·정신건강·약물)과 혈압·BMI를 포함한 baseline risk assessment", "ABO/RhD·항체선별, CBC, 소변검사/배양, 감염 선별 및 지역 지침 기반의 산전검사", "11–13+6주 NT/aneuploidy 선별 또는 cfDNA 선택지를 비지시적으로 상담"],
    clinicalFocus: ["엽산, 금연·음주·약물 위해, 임신 중 백신, teratogen exposure를 문서화한다.", "출혈·편측 복통·실신은 자궁외임신 또는 유산 가능성을 우선 평가한다."],
    related: ["자궁외 임신", "절박 유산", "자연 유산", "임신 입덧"], sources: ["ACOG 산전관리", "WHO ANC"],
  },
  {
    group: "obstetrics", time: "GA 14–27+6주", title: "임신 중기", subtitle: "구조 평가 · 태반/자궁경부 위험 평가 · 대사 선별",
    development: ["18–22주 전후 상세 해부학 초음파에서 구조 이상, 태반 위치, 제대·양수를 체계적으로 평가한다.", "성장 곡선 해석은 단일 추정보다 이전 검사와 임상 위험도를 함께 본다."],
    assessments: ["18–22주 anatomy scan; 전치태반·자궁경부 길이·다태임신이면 추적 계획을 개별화", "24–28주 임신성 당뇨 선별; RhD 음성에서는 항체 상태와 예방 계획 확인", "고위험군은 자궁경부 길이, 태아성장, 자간전증 위험 및 aspirin 적응증을 재평가"],
    clinicalFocus: ["지속 두통·시야장애·우상복부 통증·고혈압은 자간전증 평가로 바로 연결한다.", "질 출혈·양수 누출·규칙 수축은 조기진통/PPROM 및 태반 질환을 배제한다."],
    related: ["임신성 당뇨병", "전자간증", "전치태반", "조기 진통", "태아 성장 지연"], sources: ["ACOG 산전관리", "ACOG 당뇨·고혈압 지침"],
  },
  {
    group: "obstetrics", time: "GA 28–36+6주", title: "임신 후기", subtitle: "태아 안녕 · 성장 · 분만 준비",
    development: ["태아 성장·태반 기능·양수량은 모체 질환과 이전 성장자료에 따라 surveillance 강도를 정한다.", "태동 교육은 ‘평소보다 감소’라는 변화 자체를 신속 평가의 신호로 다룬다."],
    assessments: ["고위험 임신에서 NST/BPP·성장 초음파의 적응증과 시작 시점을 개별화", "GBS vaginal–rectal culture는 36 0/7–37 6/7주에 시행하는 체계를 기본으로 한다.", "분만 방식·시기, 출혈 위험, 수혈 준비, 신생아팀 필요 여부를 antepartum huddle로 정리"],
    clinicalFocus: ["28주 이후 태동 감소, 심한 고혈압 증상, 출혈은 당일 평가한다.", "둔위·다태·FGR·전치태반에서는 분만 장소와 팀 역량을 조기에 조율한다."],
    related: ["임신 중 태아 감시", "둔위", "태아 성장 지연", "조기 양막 파수"], sources: ["ACOG 태아감시", "CDC GBS"],
  },
  {
    group: "obstetrics", time: "GA 37주–분만", title: "만삭 · 분만", subtitle: "분만 시기 결정 · 산과 응급 인지",
    development: ["분만 시기는 산모·태아 적응증, 자궁경부 상태, 이전 수술력, 선호를 함께 고려한다.", "분만 중 FHR 해석은 임상 상황·진통 패턴·산모 상태와 통합해 대응한다."],
    assessments: ["입원 시 산과력, 태반 위치, GBS/항체/혈액형, 출혈·마취 위험, 신생아 처치 필요성을 확인", "표준화된 hemorrhage readiness와 shoulder dystocia·응급 제왕절개 팀 역할을 사전 공유", "산모 vital sign·소변량·출혈량 및 지속적인 태아 감시의 적응증을 문서화"],
    clinicalFocus: ["산후출혈의 4T(tone, trauma, tissue, thrombin)를 병렬로 평가한다.", "지속적 category III FHR, 제대탈출, 자궁파열 의심은 즉시 팀 호출·분만 가속이 필요한 상황이다."],
    related: ["난산", "견갑 난산", "제왕절개술", "자궁이완증", "태반조기박리"], sources: ["ACOG 분만·산후출혈", "WHO intrapartum care"],
  },
  {
    group: "shared", time: "출생–생후 6주", title: "산후 · 신생아 전환기", subtitle: "두 환자(산모와 신생아)의 안전한 인계",
    development: ["신생아는 호흡·체온·수유 적응과 황달 위험을, 산모는 출혈·혈압·감염·정신건강을 동시에 평가한다.", "수유는 관찰과 코칭을 통해 latch, 통증, 탈수/체중변화를 함께 확인한다."],
    assessments: ["신생아 신체진찰, bilirubin risk assessment, 청각·CCHD·대사 선별과 지역 예방접종 계획", "산모의 출혈·감염·혈압·VTE·우울/불안 선별 및 퇴원 전 safety-net", "WHO 권고에 따라 48–72시간, 7–14일, 6주 접촉을 기본 틀로 하되 위험도에 맞춰 조정"],
    clinicalFocus: ["신생아의 수유부진, 무기력, 발열/저체온, 진행성 황달은 즉시 평가한다.", "산후 두통·시야장애·호흡곤란·과다출혈·자살사고는 응급 또는 긴급 의뢰 신호다."],
    related: ["산욕기 자궁 감염", "산욕기 유방염", "자궁이완증", "신생아 황달", "신생아 패혈증"], sources: ["WHO 산후·신생아관리", "CDC 신생아 선별"],
  },
  {
    group: "pediatrics", time: "생후 2–6개월", title: "초기 영아기", subtitle: "성장곡선 · 초기 마일스톤 · 기본 접종",
    development: ["사회적 미소·상호작용, head control, 양측 손 사용, 옹알이와 청각 반응을 연속적으로 확인한다.", "머리둘레·체중·신장의 추세와 수유량·배뇨·수면을 한 번의 수치보다 함께 해석한다."],
    assessments: ["각 well-child visit에서 성장, feeding, 안전수면, caregiver mental health, 발달 감시", "발달 우려·비대칭 움직임·지속되는 primitive reflex는 조기 선별/의뢰로 연결", "예방접종은 국가예방접종 최신 일정과 catch-up 최소 간격으로 확인"],
    clinicalFocus: ["3개월 이전 발열, 호흡곤란, 탈수, poor feeding은 연령 특이적 중증 감염 평가가 필요하다.", "고관절 불안정, 청력 위험, 조기 황달 연장은 선별 결과와 별개로 재평가한다."],
    related: ["신생아 황달", "급성 세기관지염", "선천성 심장병", "발달 지연"], sources: ["CDC 발달감시", "질병관리청 예방접종"],
  },
  {
    group: "pediatrics", time: "생후 6–12개월", title: "후기 영아기", subtitle: "이유식 · 이동성 · 의사소통 확장",
    development: ["앉기·기기/이동, 양손 협응과 pincer grasp의 발달, 이름 반응·babbling·공동주의의 질을 확인한다.", "성장부진은 섭취량뿐 아니라 흡수, 만성질환, feeding interaction까지 구조화해 본다."],
    assessments: ["철 결핍 및 납 등 지역·개인 위험 기반의 선별, 구강·시력·청력 위험 재평가", "이유식 질감·알레르겐 도입·질식 위험 식품·철분 섭취를 상담", "접종 누락은 단순히 다음 회차로 미루지 않고 catch-up schedule로 재구성"],
    clinicalFocus: ["발달 퇴행, 이름 부름에 반응 없음, 앉지 못함/한쪽만 사용은 빨리 평가한다.", "지속 구토, 탈수, 체중 백분위 하락은 feeding disorder·기저질환을 고려한다."],
    related: ["철결핍 빈혈", "성장부진", "음식 알레르기", "뇌성 마비"], sources: ["CDC 발달감시", "AAP 예방의학"],
  },
  {
    group: "pediatrics", time: "12–24개월", title: "걸음마기", subtitle: "보행 · 언어 · 자폐 스펙트럼 선별",
    development: ["독립 보행, functional play, 지시 따르기, 의미 있는 단어와 gesture/공동주의를 관찰한다.", "언어·사회성·운동의 영역별 궤적과 퇴행 여부를 모두 기록한다."],
    assessments: ["표준화 발달 선별은 정기방문에 통합하고, autism-specific screening은 권고 시점과 임상 우려 시 시행", "시력·청력, 구강, 빈혈/납 위험, 수면·행동·가정 안전을 재평가", "MMR·수두 등 일정은 국가별 최신표와 금기·면역저하 상태를 함께 대조"],
    clinicalFocus: ["걷지 못함, 단어·사회적 상호작용의 뚜렷한 지연 또는 퇴행은 기다리지 않고 조기중재를 의뢰한다.", "경련, 비정상 보행, 반복성 구토·두통 등 신경학적 red flag는 긴급 평가한다."],
    related: ["자폐 스펙트럼 장애", "언어 발달 지연", "열성 경련", "가와사키병"], sources: ["CDC 발달감시", "CDC 예방접종"],
  },
  {
    group: "pediatrics", time: "2–5세", title: "유아기", subtitle: "학습 준비 · 시각/청각 · 예방과 안전",
    development: ["상상놀이, 다단계 지시 수행, 문장 언어, 달리기·계단·미세운동, 또래 상호작용을 전반적으로 확인한다.", "비만·수면·변비·행동·노출(수동흡연, 안전, 폭력)을 예방진료의 일부로 다룬다."],
    assessments: ["성장/BP, 시력·청력, 구강, 발달·행동 및 사회적 결정요인 선별", "학령 전 접종 완료 여부와 지역 유행·여행·기저질환에 따른 추가 접종 확인", "반복 감염, 천명, 변비, 수면호흡장애는 장기 경과와 기능 영향을 기록"],
    clinicalFocus: ["발달 퇴행, 심한 행동 변화, 시력저하 의심, 수면무호흡, 지속적인 성장 이탈은 재평가한다.", "학대·방임 의심 소견은 지역 법령과 기관 프로토콜에 따라 안전을 우선한다."],
    related: ["천식", "소아 비만", "변비", "급성 중이염"], sources: ["CDC 소아 발달", "질병관리청 예방접종"],
  },
  {
    group: "pediatrics", time: "6–18세", title: "학령기 · 청소년기", subtitle: "성장급등 · 정신건강 · 전환진료",
    development: ["사춘기 단계, 키 성장속도, 수면·학업·또래관계·자기관리 능력의 변화가 핵심이다.", "청소년 진료는 비밀보장 범위와 보호자 참여를 사전에 설명하고 일정 부분 단독 문진을 포함한다."],
    assessments: ["BMI·혈압·시력·청력, 우울/자살위험·물질사용·성건강·폭력 노출을 연령과 위험에 맞춰 선별", "HPV, Tdap, meningococcal 등 최신 국가 일정과 고위험군 추가접종을 확인", "만성질환에서는 성인 진료 전환 계획, 복약 자가관리, 응급계획을 조기에 시작"],
    clinicalFocus: ["자살사고, 섭식장애, 심한 두통·신경학적 증상, 운동 중 흉통/실신은 즉시 위험도를 평가한다.", "사춘기 지연/조숙, 성장속도 저하는 가족력과 성장곡선을 바탕으로 내분비 평가를 고려한다."],
    related: ["우울증", "섭식 장애", "당뇨병", "천식"], sources: ["CDC 청소년 예방접종", "AAP 예방의학"],
  },
];

const sourceLinks = [
  { label: "ACOG: 산전관리", url: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/08/recommendations-for-preventive-care-for-women" },
  { label: "WHO: ANC", url: "https://www.who.int/publications/i/item/9789241549912" },
  { label: "WHO: 산후·신생아 관리", url: "https://www.who.int/publications/i/item/9789240045989" },
  { label: "CDC: 소아 예방접종", url: "https://www.cdc.gov/vaccines/hcp/imz-schedules/child-adolescent.html" },
  { label: "CDC: 발달감시·선별", url: "https://www.cdc.gov/act-early/about/developmental-monitoring-and-screening.html" },
  { label: "질병관리청: 예방접종도우미", url: "https://nip.kdca.go.kr" },
];

function normalized(value: string) { return value.replace(/\s*\([^)]*\)\s*$/, "").trim(); }

function resolveRelated(diseases: DiseaseNote[], terms: string[]) {
  return terms.flatMap((term) => {
    const found = diseases.find((note) => normalized(note.title) === term || note.aliases.some((alias) => normalized(alias) === term));
    return found ? [{ title: term, slug: found.slug }] : [];
  });
}

export function MaternalChildHub({ diseases }: { diseases: DiseaseNote[] }) {
  const [filter, setFilter] = useState<"all" | "obstetrics" | "pediatrics">("all");
  const visible = stages.filter((stage) => filter === "all" || stage.group === filter || stage.group === "shared");

  return (
    <div className="space-y-5">
      <section className="rounded-xl border border-rose-200 bg-gradient-to-br from-white via-rose-50/70 to-amber-50 p-5 shadow-sm sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-700">Longitudinal care</div>
            <h1 className="mt-2 text-3xl font-bold text-slate-950">모자보건 Hub</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">임신 시작부터 출생·소아청소년기까지 이어지는 핵심 예방진료와 위험 신호를 한 흐름으로 정리합니다. 실제 검사·접종·의뢰는 국내 최신 지침과 기관 프로토콜을 우선합니다.</p>
          </div>
          <div className="rounded-xl border border-rose-100 bg-white/90 p-1.5 shadow-sm" aria-label="표시 범위">
            {[{ key: "all", label: "전체" }, { key: "obstetrics", label: "산과" }, { key: "pediatrics", label: "소아" }].map((item) => (
              <button key={item.key} type="button" onClick={() => setFilter(item.key as typeof filter)} className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition ${filter === item.key ? "bg-rose-700 text-white shadow-sm" : "text-slate-600 hover:bg-rose-50"}`}>
                {filter === item.key ? <Check className="h-4 w-4" /> : null}{item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600"><span className="rounded-full bg-rose-100 px-3 py-1.5 font-semibold text-rose-800">산과</span><span className="rounded-full bg-sky-100 px-3 py-1.5 font-semibold text-sky-800">소아청소년과</span><span className="rounded-full bg-violet-100 px-3 py-1.5 font-semibold text-violet-800">공통 전환기</span></div>
      </section>

      <section aria-label="임신부터 소아청소년기까지의 타임라인" className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="relative ml-2 border-l-2 border-slate-200 pl-6 sm:ml-4 sm:pl-9">
          {visible.map((stage) => {
            const links = resolveRelated(diseases, stage.related);
            const color = stage.group === "obstetrics" ? "rose" : stage.group === "pediatrics" ? "sky" : "violet";
            const badge = color === "rose" ? "bg-rose-100 text-rose-800" : color === "sky" ? "bg-sky-100 text-sky-800" : "bg-violet-100 text-violet-800";
            const dot = color === "rose" ? "bg-rose-600 ring-rose-100" : color === "sky" ? "bg-sky-600 ring-sky-100" : "bg-violet-600 ring-violet-100";
            return <article key={stage.time} className="relative pb-7 last:pb-0"><span className={`absolute -left-[35px] top-5 h-4 w-4 rounded-full ring-4 sm:-left-[47px] ${dot}`} aria-hidden="true" />
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${badge}`}>{stage.group === "obstetrics" ? "산과" : stage.group === "pediatrics" ? "소아청소년과" : "산후·신생아"}</span><span className="text-sm font-bold text-slate-700">{stage.time}</span></div>
                <h2 className="mt-3 text-xl font-bold text-slate-950">{stage.title}</h2><p className="mt-1 text-sm font-medium text-slate-600">{stage.subtitle}</p>
                <div className="mt-4 grid gap-4 lg:grid-cols-3"><TimelineBlock icon={<HeartPulse className="h-4 w-4" />} title="발달·생리" items={stage.development} /><TimelineBlock icon={<Stethoscope className="h-4 w-4" />} title="진료·검사" items={stage.assessments} /><TimelineBlock icon={<ShieldAlert className="h-4 w-4" />} title="주의·의뢰" items={stage.clinicalFocus} /></div>
                <div className="mt-4 flex flex-wrap gap-2">{links.map((link) => <Link key={link.slug} href={`/disease/${link.slug}`} className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 transition hover:border-rose-300 hover:text-rose-800">{link.title}<ChevronRight className="h-3.5 w-3.5" /></Link>)}</div>
                <p className="mt-3 text-xs text-slate-500">근거: {stage.sources.join(" · ")}</p>
              </div>
            </article>;
          })}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="text-lg font-bold text-slate-950">핵심 출처</h2><p className="mt-1 text-sm text-slate-600">이 Hub는 빠른 복습용 요약입니다. 예방접종, 산전·산후 검사, 선별 권고는 지역 지침의 최신판을 확인합니다.</p><div className="mt-4 flex flex-wrap gap-2">{sourceLinks.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-rose-300 hover:bg-rose-50"><ExternalLink className="h-3.5 w-3.5" />{source.label}</a>)}</div></section>
    </div>
  );
}

function TimelineBlock({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  return <div className="rounded-lg border border-white bg-white p-3"><div className="flex items-center gap-2 text-xs font-bold text-slate-800">{icon}{title}</div><ul className="mt-2 space-y-1.5 text-xs leading-5 text-slate-600">{items.map((item) => <li key={item} className="flex gap-1.5"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />{item}</li>)}</ul></div>;
}
