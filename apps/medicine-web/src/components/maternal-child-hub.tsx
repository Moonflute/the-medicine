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

type PediatricMilestone = {
  age: string;
  title: string;
  gross: string[];
  fine: string[];
  language: string[];
  social: string[];
  visit: string[];
};

const pediatricMilestones: PediatricMilestone[] = [
  { age: "생후 2개월", title: "상호작용과 머리 들기", gross: ["엎드린 자세에서 머리를 든다.", "양팔·양다리를 대칭적으로 움직인다."], fine: ["손을 잠깐 편다.", "움직이는 사람·물체를 눈으로 따라본다."], language: ["울음 외의 소리를 낸다.", "큰 소리에 반응한다."], social: ["얼굴을 보고, 말하거나 웃어 주면 미소를 보인다.", "말하거나 안아 주면 진정된다."], visit: ["성장곡선·수유·배뇨·안전수면을 확인한다.", "교정연령이 필요한 미숙아인지 함께 기록한다."] },
  { age: "생후 4개월", title: "머리 조절과 초기 발성", gross: ["안았을 때 머리를 지지 없이 안정적으로 유지한다.", "엎드려 팔꿈치/전완으로 몸을 지지한다."], fine: ["손에 쥐여 준 장난감을 잡고, 팔을 휘둘러 장난감을 친다.", "손을 입으로 가져간다."], language: ["쿠잉(oo, ah 등)을 내고, 보호자 말에 소리로 반응한다.", "목소리 쪽으로 고개를 돌린다."], social: ["관심을 끌기 위해 미소·움직임·소리를 낸다.", "웃기면 소리 내 웃기 시작한다."], visit: ["머리처짐, 비대칭 운동, 시청각 반응을 확인한다.", "tummy time과 안전한 상호작용을 교육한다."] },
  { age: "생후 6개월", title: "뒤집기와 tripod sitting", gross: ["엎드린 자세에서 팔을 펴 몸을 민다.", "엎드림→등으로 뒤집고, 앉을 때 손으로 몸을 지지한다."], fine: ["원하는 장난감에 손을 뻗어 잡는다.", "입으로 물체를 탐색한다."], language: ["보호자와 소리를 주고받고, 옹알이·비명 같은 다양한 소리를 낸다."], social: ["친숙한 사람을 알아보고, 거울 속 자신을 보는 것을 좋아한다.", "웃음과 즐거운 상호작용이 뚜렷해진다."], visit: ["이유식 시작 준비·질식 위험 식품·철 섭취를 점검한다.", "뒤집기/손 사용 비대칭과 근긴장 이상을 확인한다."] },
  { age: "생후 9개월", title: "혼자 앉기와 이름 반응", gross: ["스스로 앉은 자세가 되고 지지 없이 앉는다.", "이동 방식은 다양할 수 있으나 체위 전환을 관찰한다."], fine: ["한 손에서 다른 손으로 물체를 옮긴다.", "손가락으로 음식을 끌어모으는 rake grasp가 나타난다."], language: ["ma-ma-ma, ba-ba-ba처럼 다양한 반복 음절을 낸다.", "이름을 부르면 돌아보고, 안아 달라고 팔을 든다."], social: ["낯가림·분리불안, 까꿍 놀이에 웃는 반응을 보일 수 있다."], visit: ["표준화 발달선별을 시행하는 시점이다.", "앉지 못함, 이름 반응·옹알이 부재, 퇴행은 조기 평가한다."] },
  { age: "생후 12개월", title: "붙잡고 서기와 첫 의사소통", gross: ["붙잡고 일어서고 가구를 잡고 옆으로 걷는다.", "독립 보행 시기는 개인차가 있어 추세를 본다."], fine: ["엄지와 집게손가락으로 작은 물체를 집는다.", "컵·통에 물체를 넣고, 가려진 물건을 찾는다."], language: ["bye-bye 손 흔들기, mama/dada 등 의미 있는 특수 호칭을 사용한다.", "‘안 돼’ 같은 단순 지시를 이해한다."], social: ["pat-a-cake 같은 상호작용 놀이를 한다.", "공동주의·gesture의 질을 함께 본다."], visit: ["보행 전후의 하지 비대칭·지속적 toe-walking을 확인한다.", "청력·구강·빈혈/납 위험과 예방접종 일정을 점검한다."] },
  { age: "생후 15–18개월", title: "독립 보행, 낙서, 단어", gross: ["18개월 무렵 붙잡지 않고 걷고, 가구에 오르내리기 시작한다.", "계단·달리기보다 보행의 대칭성과 진행을 우선 관찰한다."], fine: ["낙서를 하고, 컵으로 마시며 숟가락 사용을 시도한다.", "간단한 장난감을 기능적으로 조작한다."], language: ["mama/dada 외 3개 이상의 단어를 시도하고, gesture 없이 한 단계 지시를 따른다."], social: ["흥미 있는 것을 가리켜 보여 주고, 책을 함께 본다.", "보호자와 떨어졌다가 가까이 있는지 확인하는 행동이 보인다."], visit: ["18개월 표준 발달선별 및 ASD 특이 선별을 시행한다.", "가리키기·공동주의 부재, 독립보행 부재, 언어/기술 퇴행은 기다리지 않고 의뢰한다."] },
  { age: "24개월", title: "달리기와 두 단어 조합", gross: ["달리고 공을 찬다.", "도움 유무와 관계없이 몇 계단을 걷는다."], fine: ["숟가락으로 먹고, 한 손으로 용기를 잡은 채 다른 손으로 뚜껑을 연다."], language: ["두 단어 이상을 조합한다(예: ‘물 더’).", "책 속 물건·신체 부위를 가리킨다."], social: ["타인이 다치거나 슬퍼하는 것을 알아차리는 반응이 나타난다.", "새 상황에서 보호자 얼굴을 보고 반응을 확인한다."], visit: ["24개월 ASD 특이 선별을 반복한다.", "2단어 조합 부재, 상징/공동주의 저하, 퇴행은 청력·발달평가와 조기중재로 연결한다."] },
  { age: "30개월", title: "점프와 50단어", gross: ["양발을 바닥에서 동시에 떼어 점프한다.", "책장을 한 장씩 넘기고, 손으로 비트는 동작을 한다."], fine: ["옷 일부를 벗고, 문고리·뚜껑 같은 회전 동작을 조작한다."], language: ["약 50단어를 사용하고, 동사를 포함한 2단어 이상 조합을 쓴다.", "두 단계 지시를 따른다."], social: ["또래 옆에서 놀고 때로 함께 놀며, ‘나 봐’처럼 성취를 공유한다."], visit: ["30개월 표준 발달선별 시점이다.", "언어·사회성·적응기술을 분리해 확인하고, daycare 관찰도 수집한다."] },
  { age: "3세", title: "대화와 또래 놀이", gross: ["달리기·계단·놀이의 균형과 낙상 위험을 확인한다.", "옷 일부를 스스로 입고 포크를 사용한다."], fine: ["큰 구슬을 꿰고, 시범 후 원을 그린다."], language: ["두 번 이상 주고받는 대화를 하고 who/what/where/why 질문을 한다.", "이름을 말하며, 대부분의 상황에서 타인이 알아들을 수 있다."], social: ["또래를 알아차리고 놀이에 합류한다.", "분리 후 대개 10분 안에 진정한다."], visit: ["발달 퇴행, 기능 손실, 행동·수면·섭식 문제를 매 방문 감시한다.", "시력·청력·성장/BMI 및 가정 안전을 연령별 예방진료에 맞춰 점검한다."] },
  { age: "4세", title: "상상놀이와 정교한 손 사용", gross: ["큰 공을 대체로 잡는다.", "놀이터 위험을 피하고, 성인 감독하에 음식·물을 스스로 다룬다."], fine: ["주먹이 아닌 손가락·엄지로 크레용/연필을 잡는다.", "단추 일부를 풀고, 3개 이상 신체 부위를 가진 사람을 그린다."], language: ["4단어 이상 문장을 사용하고, 하루 있었던 일을 말한다.", "사물의 용도 같은 간단한 질문에 답한다."], social: ["교사·영웅 등 다른 역할을 상상놀이로 표현한다.", "다친/슬픈 또래를 위로하고 ‘도우미’ 역할을 좋아한다."], visit: ["언어 명료도, 또래 상호작용, 놀이의 유연성과 감각·행동 문제를 함께 평가한다.", "유치원 환경에서의 기능저하가 있으면 발달·행동 평가를 앞당긴다."] },
  { age: "5세", title: "학령 전 준비", gross: ["한 발로 뛴다.", "일상 단추를 일부 잠그고 간단한 집안일에 참여한다."], fine: ["이름의 일부 글자를 쓰고, 가리킨 글자·숫자를 일부 알아본다."], language: ["두 사건 이상이 있는 이야기를 들려주고, 3회 이상 대화를 이어간다.", "운율을 인지하고 책 내용의 간단한 질문에 답한다."], social: ["또래와 규칙을 지키거나 차례를 기다린다.", "노래·춤·연기로 자신을 표현한다."], visit: ["학령 전 시력·청력·수면·정서·학습 준비도와 안전을 확인한다.", "기능 저하·퇴행·보호자/교사 우려는 선별 결과와 무관하게 평가·의뢰한다."] },
];
const sourceLinks = [
  { label: "CDC: 연령별 발달 이정표", url: "https://www.cdc.gov/act-early/milestones/index.html" },
  { label: "CDC/AAP: 발달·ASD 선별", url: "https://www.cdc.gov/act-early/about/developmental-monitoring-and-screening.html" },
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
            <h1 className="mt-2 text-3xl font-bold text-slate-950">산부소아 Hub</h1>
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

      {filter !== "obstetrics" ? <PediatricMilestoneGuide /> : null}

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="text-lg font-bold text-slate-950">핵심 출처</h2><p className="mt-1 text-sm text-slate-600">이 Hub는 빠른 복습용 요약입니다. 예방접종, 산전·산후 검사, 선별 권고는 지역 지침의 최신판을 확인합니다.</p><div className="mt-4 flex flex-wrap gap-2">{sourceLinks.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-rose-300 hover:bg-rose-50"><ExternalLink className="h-3.5 w-3.5" />{source.label}</a>)}</div></section>
    </div>
  );
}

function PediatricMilestoneGuide() {
  return (
    <section className="rounded-xl border border-sky-200 bg-sky-50/60 p-4 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Pediatric development</div><h2 className="mt-2 text-2xl font-bold text-slate-950">연령별 발달 이정표 · 진료 포인트</h2><p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">CDC 이정표는 해당 연령까지 대다수(약 75% 이상)의 아이가 보이는 행동을 정리한 감시 도구입니다. 진단 기준이나 평균 연령표가 아니며, 미숙아는 교정연령을 적용하고 개별 경과·기능·퇴행을 함께 판단합니다.</p></div>
        <span className="rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-semibold text-sky-800">매 예방진료: 발달 감시</span>
      </div>
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-900"><strong>선별·의뢰:</strong> 표준화 발달선별은 9·18·30개월, ASD 특이 선별은 18·24개월에 시행합니다. 기술 소실(regression), 보호자 우려, 다영역 지연은 시점을 기다리지 말고 청력·시력·신경학적 평가와 조기중재 의뢰를 병행합니다.</div>
      <div className="mt-5 grid gap-4 xl:grid-cols-2">{pediatricMilestones.map((milestone) => <PediatricMilestoneCard key={milestone.age} milestone={milestone} />)}</div>
    </section>
  );
}

function PediatricMilestoneCard({ milestone }: { milestone: PediatricMilestone }) {
  const areas = [
    ["대근육", milestone.gross],
    ["소근육·인지", milestone.fine],
    ["언어·의사소통", milestone.language],
    ["사회성·적응", milestone.social],
  ] as const;
  return <article className="rounded-xl border border-sky-100 bg-white p-4 shadow-sm"><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-bold text-sky-800">{milestone.age}</span><h3 className="font-bold text-slate-950">{milestone.title}</h3></div><div className="mt-4 grid gap-3 sm:grid-cols-2">{areas.map(([title, items]) => <div key={title} className="rounded-lg bg-slate-50 p-3"><h4 className="text-xs font-bold text-slate-800">{title}</h4><ul className="mt-1.5 space-y-1 text-xs leading-5 text-slate-600">{items.map((item) => <li key={item} className="flex gap-1.5"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-500" />{item}</li>)}</ul></div>)}</div><div className="mt-3 rounded-lg border border-rose-100 bg-rose-50/50 p-3"><h4 className="text-xs font-bold text-rose-900">진료·선별 포인트</h4><ul className="mt-1.5 space-y-1 text-xs leading-5 text-rose-900">{milestone.visit.map((item) => <li key={item} className="flex gap-1.5"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-500" />{item}</li>)}</ul></div></article>;
}
function TimelineBlock({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  return <div className="rounded-lg border border-white bg-white p-3"><div className="flex items-center gap-2 text-xs font-bold text-slate-800">{icon}{title}</div><ul className="mt-2 space-y-1.5 text-xs leading-5 text-slate-600">{items.map((item) => <li key={item} className="flex gap-1.5"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />{item}</li>)}</ul></div>;
}
