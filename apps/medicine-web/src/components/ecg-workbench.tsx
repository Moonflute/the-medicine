"use client";

import Image from "next/image";
import Link from "next/link";
import { Activity, AlertTriangle, ChevronRight, CircleHelp, HeartPulse, RotateCcw, Stethoscope } from "lucide-react";
import { useMemo, useState } from "react";

type DiseaseLink = { slug: string; title: string; aliases: string[] };
type PatternKey = "sinus" | "af" | "flutter" | "svt" | "vt" | "mobitz1" | "mobitz2" | "av3" | "rbbb" | "lbbb" | "stemi" | "hyperK" | "hypoK" | "brugada" | "apb" | "junctional" | "wpw" | "torsades" | "vf" | "longqt" | "shortqt" | "osborn" | "lvh" | "rvh";
type Urgency = "urgent" | "caution";
type Pattern = { key: PatternKey; label: string; group: string; clue: string; summary: string; action: string; disease?: string; urgency?: Urgency };

const PATTERNS: Pattern[] = [
  { key: "sinus", label: "Sinus rhythm", group: "Rhythm", clue: "regular · P before every QRS · narrow QRS", summary: "기준 파형이다. 정상 동율동이라도 증상, 이전 ECG, ST-T 변화는 별도로 확인한다.", action: "rate, axis, PR/QRS/QTc와 ST-T를 순서대로 마무리한다." },
  { key: "af", label: "Atrial fibrillation", group: "Rhythm", clue: "irregularly irregular · discrete P 없음", summary: "RR 간격이 불규칙하고 조직된 P파가 보이지 않는 전형적 패턴이다.", action: "혈역학적 안정성, 발병 시점, stroke/bleeding risk 및 유발요인을 함께 평가한다.", disease: "심방세동", urgency: "caution" },
  { key: "flutter", label: "Atrial flutter", group: "Rhythm", clue: "saw-tooth flutter wave · AV conduction", summary: "2:1 전도라면 매우 규칙적인 빈맥처럼 보일 수 있다.", action: "빈맥 원인과 혈역학적 안정성을 먼저 확인하고 12-lead와 임상 맥락을 함께 본다.", disease: "심방조동", urgency: "caution" },
  { key: "svt", label: "Regular narrow SVT", group: "Rhythm", clue: "rapid · regular · narrow QRS", summary: "AVNRT/AVRT를 포함하는 regular narrow-complex tachycardia의 학습용 형태다.", action: "불안정성을 먼저 확인한다. 안정·규칙·좁은 QRS일 때 기관 SVT/ACLS 경로를 적용한다.", disease: "상심실성 빈맥", urgency: "caution" },
  { key: "vt", label: "Ventricular tachycardia", group: "Rhythm", clue: "wide · regular · AV dissociation/capture beat", summary: "wide-complex tachycardia는 명확해질 때까지 VT를 우선 고려하는 것이 안전하다.", action: "맥박과 불안정성을 즉시 확인하고, 지속성/불안정 WCT는 응급 ACLS 경로 및 전문가 평가가 필요하다.", disease: "심실빈맥", urgency: "urgent" },
  { key: "mobitz1", label: "Mobitz I (Wenckebach)", group: "Conduction", clue: "PR progressively lengthens → dropped QRS", summary: "PR 간격이 점차 길어진 뒤 QRS가 탈락하는 2도 AV block의 형태다.", action: "증상, 약물, 허혈·전해질 원인과 block level을 함께 평가한다.", disease: "방실차단", urgency: "caution" },
  { key: "mobitz2", label: "Mobitz II", group: "Conduction", clue: "fixed PR → sudden non-conducted P", summary: "일정한 PR 사이의 갑작스러운 QRS 탈락은 고위험 전도장애 단서다.", action: "증상 유무와 high-grade block을 즉시 평가하고 모니터링·전문가 평가를 지연하지 않는다.", disease: "방실차단", urgency: "urgent" },
  { key: "av3", label: "Complete AV block", group: "Conduction", clue: "P-QRS dissociation · escape rhythm", summary: "P파와 QRS가 독립적으로 진행하는 완전 방실차단의 학습용 형태다.", action: "관류·증상과 escape rate를 즉시 확인한다. 불안정하면 기관 서맥/pacing 경로를 적용한다.", disease: "방실차단", urgency: "urgent" },
  { key: "rbbb", label: "RBBB", group: "Conduction", clue: "V1 rSR′/M-like terminal R", summary: "우각차단의 대표 morphology를 단순화한 형태다. 실제 판독은 QRS duration과 여러 유도를 확인한다.", action: "새로 발생했거나 증상·허혈·PE 맥락이 있으면 원인을 함께 평가한다.", disease: "우각차단" },
  { key: "lbbb", label: "LBBB", group: "Conduction", clue: "V1 W-like · lateral broad/notched R", summary: "좌각차단의 대표 morphology를 단순화한 형태다. ST-T discordance가 동반될 수 있다.", action: "흉통/허혈 맥락에서는 이전 ECG, serial ECG와 ACS 경로를 함께 검토한다.", disease: "좌각차단", urgency: "caution" },
  { key: "stemi", label: "ST elevation pattern", group: "ST-T / electrolyte", clue: "contiguous leads · reciprocal change · symptoms", summary: "ST elevation 자체가 STEMI 확진은 아니다. 분포, reciprocal change, 증상, 이전 ECG를 통합한다.", action: "진행성 허혈 증상 또는 인접 유도 ST 변화는 시간 의존적 ACS 평가·기관 경로를 즉시 고려한다.", disease: "급성 관상동맥 증후군", urgency: "urgent" },
  { key: "hyperK", label: "Hyperkalemia pattern", group: "ST-T / electrolyte", clue: "peaked T → PR prolongation/P loss → QRS widening", summary: "고칼륨혈증 변화는 순차적이지 않을 수 있고 파형만으로 중증도를 배제할 수 없다.", action: "검체 오류를 확인하되 ECG 변화·중증 hyperK가 의심되면 즉시 모니터링 및 기관 경로를 적용한다.", disease: "고칼륨혈증", urgency: "urgent" },
  { key: "hypoK", label: "Hypokalemia / U wave", group: "ST-T / electrolyte", clue: "flat T · ST depression · prominent U", summary: "T파 평탄화와 U파가 두드러지는 전형적 저칼륨혈증 형태다.", action: "K/Mg, 원인 약물·손실, QT/QU 연장과 부정맥 위험을 함께 확인한다.", disease: "저칼륨혈증", urgency: "caution" },
  { key: "brugada", label: "Brugada pattern", group: "ST-T / electrolyte", clue: "coved ST elevation in right precordial leads", summary: "우전흉부 유도의 coved ST elevation은 Brugada pattern을 시사할 수 있으나 mimic 배제가 필요하다.", action: "syncope, fever, family history 또는 ventricular arrhythmia 맥락이면 응급·전문가 평가를 우선한다.", disease: "브루가다", urgency: "urgent" },
  { key: "apb", label: "Atrial premature beat", group: "Rhythm", clue: "early abnormal P wave", summary: "조기 P파가 앞당겨지고 대개 좁은 QRS가 뒤따르는 학습용 형태다.", action: "증상·빈도와 stimulant, electrolyte, structural heart disease 맥락을 확인한다.", disease: "심방조기수축" },
  { key: "junctional", label: "Junctional / escape rhythm", group: "Rhythm", clue: "absent or retrograde P · slow escape rhythm", summary: "P파가 없거나 QRS 뒤에 역행성 P파가 보이는 접합부/escape rhythm 단서다.", action: "서맥·전도장애, 약물/독성, ischemia와 관류를 먼저 평가한다.", urgency: "caution" },
  { key: "wpw", label: "Pre-excitation (WPW)", group: "Conduction", clue: "short PR · delta wave · wide QRS", summary: "delta wave는 accessory pathway를 통한 pre-excitation의 단서다.", action: "불규칙 wide tachycardia 또는 불안정성이 있으면 pre-excited AF 가능성을 우선 고려하고 응급·전문가 경로를 적용한다.", disease: "울프", urgency: "urgent" },
  { key: "vf", label: "Ventricular fibrillation", group: "Rhythm", clue: "chaotic waveform · organized QRS 없음", summary: "무질서한 파형과 맥박 없음은 shockable cardiac arrest rhythm으로 다룬다.", action: "즉시 cardiac arrest/defibrillation 경로를 적용한다.", urgency: "urgent" },
  { key: "torsades", label: "Torsades de pointes", group: "Rhythm", clue: "polymorphic VT · twisting axis · long QT context", summary: "QT 연장 맥락의 다형성 VT는 torsades를 시사한다.", action: "맥박·불안정성을 즉시 확인하고 기관 polymorphic VT/long-QT 경로를 적용한다.", urgency: "urgent" },
  { key: "longqt", label: "Long QT", group: "ST-T / electrolyte", clue: "prolonged QTc · torsades risk context", summary: "QTc는 rate, drugs, electrolytes, congenital risk를 함께 해석해야 한다.", action: "K/Mg/Ca, QT-prolonging drugs, bradycardia와 syncope를 확인한다.", urgency: "caution" },
  { key: "shortqt", label: "Short QT", group: "ST-T / electrolyte", clue: "shortened QT · hypercalcemia/digoxin context", summary: "짧은 QT는 hypercalcemia, digoxin effect 등과 함께 평가한다.", action: "Ca, drug/toxicology와 임상 상태를 통합한다." },
  { key: "osborn", label: "Osborn (J) wave", group: "ST-T / electrolyte", clue: "J-point notch/elevation · hypothermia context", summary: "Osborn wave는 저체온에서 대표적이며 고칼슘혈증 등에서도 보일 수 있다.", action: "core temperature, exposure, electrolyte와 동반 부정맥 위험을 확인한다.", disease: "저체온증", urgency: "caution" },
  { key: "lvh", label: "LVH voltage clue", group: "ST-T / electrolyte", clue: "V1 S or V5/V6 R ≥ 30 mm is one clue", summary: "high-voltage QRS는 LVH를 시사할 수 있으나 ECG만으로 확정하지 않는다.", action: "혈압·판막·구조적 심질환을 확인하고 필요 시 echocardiography와 연결한다.", disease: "고혈압" },
  { key: "rvh", label: "RVH voltage clue", group: "ST-T / electrolyte", clue: "V1 R/S > 1 is one supportive clue", summary: "우심실부하/RVH는 축, V1 morphology, 임상·영상 소견과 함께 해석한다.", action: "PE, pulmonary hypertension, chronic lung disease 맥락과 echo를 함께 평가한다.", disease: "폐색전증", urgency: "caution" },];

const WAVES: Record<PatternKey, string> = {
  sinus: "M0 120 L18 120 L26 110 L34 120 L54 120 L62 76 L70 154 L79 112 L88 120 L108 120 L118 102 L132 120 L158 120 L166 110 L174 120 L194 120 L202 76 L210 154 L219 112 L228 120 L248 120 L258 102 L272 120 L298 120 L306 110 L314 120 L334 120 L342 76 L350 154 L359 112 L368 120 L388 120 L398 102 L412 120 L438 120 L446 110 L454 120 L474 120 L482 76 L490 154 L499 112 L508 120 L528 120 L538 102 L552 120 L578 120 L586 110 L594 120 L614 120 L622 76 L630 154 L639 112 L648 120 L668 120 L678 102 L692 120",
  af: "M0 120 C10 105 15 135 25 120 S39 104 49 120 L61 120 L69 76 L77 154 L86 112 L96 120 C108 105 114 137 126 120 S142 105 153 120 L184 120 L192 76 L200 154 L209 112 L219 120 C230 106 238 136 249 120 S265 104 276 120 L291 120 L299 76 L307 154 L316 112 L326 120 C337 104 346 136 357 120 S374 104 384 120 L415 120 L423 76 L431 154 L440 112 L450 120 C461 104 470 137 481 120 S498 105 508 120 L526 120 L534 76 L542 154 L551 112 L561 120 C572 105 581 136 592 120 S609 105 620 120 L649 120 L657 76 L665 154 L674 112 L692 120",
  flutter: "M0 120 L10 102 L20 120 L30 102 L40 120 L50 102 L60 120 L69 76 L77 154 L86 112 L95 120 L105 102 L115 120 L125 102 L135 120 L145 102 L155 120 L164 76 L172 154 L181 112 L190 120 L200 102 L210 120 L220 102 L230 120 L240 102 L250 120 L259 76 L267 154 L276 112 L285 120 L295 102 L305 120 L315 102 L325 120 L335 102 L345 120 L354 76 L362 154 L371 112 L380 120 L390 102 L400 120 L410 102 L420 120 L430 102 L440 120 L449 76 L457 154 L466 112 L475 120 L485 102 L495 120 L505 102 L515 120 L525 102 L535 120 L544 76 L552 154 L561 112 L570 120 L580 102 L590 120 L600 102 L610 120 L620 102 L630 120 L639 76 L647 154 L656 112 L665 120 L675 102 L685 120 L695 120",
  svt: "M0 120 L18 120 L25 76 L33 154 L42 112 L52 120 L70 120 L77 76 L85 154 L94 112 L104 120 L122 120 L129 76 L137 154 L146 112 L156 120 L174 120 L181 76 L189 154 L198 112 L208 120 L226 120 L233 76 L241 154 L250 112 L260 120 L278 120 L285 76 L293 154 L302 112 L312 120 L330 120 L337 76 L345 154 L354 112 L364 120 L382 120 L389 76 L397 154 L406 112 L416 120 L434 120 L441 76 L449 154 L458 112 L468 120 L486 120 L493 76 L501 154 L510 112 L520 120 L538 120 L545 76 L553 154 L562 112 L572 120 L590 120 L597 76 L605 154 L614 112 L624 120 L642 120 L649 76 L657 154 L666 112 L696 120",
  vt: "M0 120 L38 120 L49 82 L70 156 L95 146 L116 120 L155 120 L166 82 L187 156 L212 146 L233 120 L272 120 L283 82 L304 156 L329 146 L350 120 L389 120 L400 82 L421 156 L446 146 L467 120 L506 120 L517 82 L538 156 L563 146 L584 120 L623 120 L634 82 L655 156 L680 146 L696 130",
  mobitz1: "M0 120 L20 120 L27 110 L34 120 L54 120 L62 76 L70 154 L79 112 L88 120 L110 120 L120 108 L136 120 L158 120 L166 110 L174 120 L198 120 L206 76 L214 154 L223 112 L232 120 L256 120 L269 108 L292 120 L318 120 L326 110 L334 120 L367 120 L392 120 L402 108 L430 120 L454 120 L462 76 L470 154 L479 112 L488 120 L514 120 L528 108 L558 120 L584 120 L592 110 L600 120 L634 120 L659 120 L669 76 L677 154 L686 112 L696 120",
  mobitz2: "M0 120 L20 120 L27 110 L34 120 L54 120 L62 76 L70 154 L79 112 L88 120 L118 120 L125 110 L132 120 L152 120 L160 76 L168 154 L177 112 L186 120 L216 120 L223 110 L230 120 L260 120 L300 120 L307 110 L314 120 L334 120 L342 76 L350 154 L359 112 L368 120 L398 120 L405 110 L412 120 L432 120 L440 76 L448 154 L457 112 L466 120 L496 120 L503 110 L510 120 L540 120 L580 120 L587 110 L594 120 L614 120 L622 76 L630 154 L639 112 L648 120 L678 120 L685 110 L692 120",
  av3: "M0 120 L24 120 L31 108 L38 120 L70 120 L78 76 L86 154 L95 112 L104 120 L128 120 L135 108 L142 120 L174 120 L182 76 L190 154 L199 112 L208 120 L232 120 L239 108 L246 120 L278 120 L286 76 L294 154 L303 112 L312 120 L336 120 L343 108 L350 120 L382 120 L390 76 L398 154 L407 112 L416 120 L440 120 L447 108 L454 120 L486 120 L494 76 L502 154 L511 112 L520 120 L544 120 L551 108 L558 120 L590 120 L598 76 L606 154 L615 112 L624 120 L648 120 L655 108 L662 120 L696 120",
  rbbb: "M0 120 L20 120 L28 110 L36 120 L56 120 L64 82 L72 150 L82 112 L92 120 L116 120 L126 100 L144 120 L166 120 L174 110 L182 120 L202 120 L210 82 L218 150 L228 112 L238 120 L262 120 L272 100 L290 120 L312 120 L320 110 L328 120 L348 120 L356 82 L364 150 L374 112 L384 120 L408 120 L418 100 L436 120 L458 120 L466 110 L474 120 L494 120 L502 82 L510 150 L520 112 L530 120 L554 120 L564 100 L582 120 L604 120 L612 110 L620 120 L640 120 L648 82 L656 150 L666 112 L676 120 L696 120",
  lbbb: "M0 120 L32 120 L43 108 L58 120 L80 120 L92 94 L110 146 L132 143 L151 120 L190 120 L201 108 L216 120 L238 120 L250 94 L268 146 L290 143 L309 120 L348 120 L359 108 L374 120 L396 120 L408 94 L426 146 L448 143 L467 120 L506 120 L517 108 L532 120 L554 120 L566 94 L584 146 L606 143 L625 120 L664 120 L675 108 L690 120",
  stemi: "M0 120 L20 120 L28 110 L36 120 L56 120 L64 76 L72 154 L81 112 L90 130 L110 130 L120 120 L136 130 L160 130 L168 110 L176 120 L196 120 L204 76 L212 154 L221 112 L230 136 L250 136 L260 126 L276 136 L300 136 L308 110 L316 120 L336 120 L344 76 L352 154 L361 112 L370 136 L390 136 L400 126 L416 136 L440 136 L448 110 L456 120 L476 120 L484 76 L492 154 L501 112 L510 130 L530 130 L540 120 L556 130 L580 130 L588 110 L596 120 L616 120 L624 76 L632 154 L641 112 L650 130 L670 130 L680 120 L696 120",
  hyperK: "M0 120 L22 120 L30 110 L38 120 L58 120 L66 76 L74 154 L83 112 L94 120 L108 120 L122 88 L136 120 L164 120 L172 110 L180 120 L200 120 L208 76 L216 154 L225 112 L236 120 L250 120 L264 88 L278 120 L306 120 L314 110 L322 120 L342 120 L350 76 L358 154 L367 112 L378 120 L392 120 L406 88 L420 120 L448 120 L456 110 L464 120 L484 120 L492 76 L500 154 L509 112 L520 120 L534 120 L548 88 L562 120 L590 120 L598 110 L606 120 L626 120 L634 76 L642 154 L651 112 L662 120 L676 120 L690 88 L696 110",
  hypoK: "M0 120 L20 120 L28 110 L36 120 L56 120 L64 76 L72 154 L81 112 L90 120 L114 120 L124 122 L136 120 L148 108 L160 120 L184 120 L192 110 L200 120 L220 120 L228 76 L236 154 L245 112 L254 120 L278 120 L288 122 L300 120 L312 108 L324 120 L348 120 L356 110 L364 120 L384 120 L392 76 L400 154 L409 112 L418 120 L442 120 L452 122 L464 120 L476 108 L488 120 L512 120 L520 110 L528 120 L548 120 L556 76 L564 154 L573 112 L582 120 L606 120 L616 122 L628 120 L640 108 L652 120 L676 120 L684 110 L696 120",
  brugada: "M0 120 L22 120 L30 110 L38 120 L58 120 L66 76 L74 154 L83 112 L92 138 L112 138 C122 138 128 130 136 120 L162 120 L170 110 L178 120 L198 120 L206 76 L214 154 L223 112 L232 138 L252 138 C262 138 268 130 276 120 L302 120 L310 110 L318 120 L338 120 L346 76 L354 154 L363 112 L372 138 L392 138 C402 138 408 130 416 120 L442 120 L450 110 L458 120 L478 120 L486 76 L494 154 L503 112 L512 138 L532 138 C542 138 548 130 556 120 L582 120 L590 110 L598 120 L618 120 L626 76 L634 154 L643 112 L652 138 L672 138 C682 138 688 130 696 120",
  apb: "M0 120 L18 120 L26 110 L34 120 L54 120 L62 76 L70 154 L79 112 L88 120 L112 120 L119 96 L128 120 L145 120 L153 76 L161 154 L170 112 L179 120 L205 120 L213 110 L221 120 L241 120 L249 76 L257 154 L266 112 L275 120 L301 120 L309 110 L317 120 L337 120 L345 76 L353 154 L362 112 L371 120 L397 120 L405 110 L413 120 L433 120 L441 76 L449 154 L458 112 L467 120 L493 120 L501 110 L509 120 L529 120 L537 76 L545 154 L554 112 L563 120 L589 120 L597 110 L605 120 L625 120 L633 76 L641 154 L650 112 L659 120 L696 120",
  wpw: "M0 120 L20 120 L28 108 L36 120 L48 120 L55 112 L62 92 L76 154 L92 116 L106 120 L128 120 L136 108 L144 120 L156 120 L163 112 L170 92 L184 154 L200 116 L214 120 L236 120 L244 108 L252 120 L264 120 L271 112 L278 92 L292 154 L308 116 L322 120 L344 120 L352 108 L360 120 L372 120 L379 112 L386 92 L400 154 L416 116 L430 120 L452 120 L460 108 L468 120 L480 120 L487 112 L494 92 L508 154 L524 116 L538 120 L560 120 L568 108 L576 120 L588 120 L595 112 L602 92 L616 154 L632 116 L646 120 L668 120 L676 108 L684 120 L696 120",
  vf: "M0 120 C10 52 22 168 35 92 S55 154 68 72 S90 165 106 88 S128 150 142 64 S164 172 180 96 S202 158 217 58 S239 166 254 82 S276 151 290 70 S314 170 329 92 S351 153 365 62 S387 166 403 85 S425 154 440 72 S462 169 478 96 S500 154 516 58 S538 165 552 82 S574 151 590 70 S612 170 628 92 S650 153 665 62 S684 150 696 90",
  torsades: "M0 120 L24 120 L36 92 L52 148 L74 134 L92 120 L110 120 L123 74 L143 160 L165 150 L185 120 L205 120 L222 58 L246 172 L270 160 L294 120 L314 120 L329 70 L351 164 L373 151 L394 120 L414 120 L429 91 L447 149 L469 135 L489 120 L509 120 L525 74 L547 160 L569 150 L590 120 L610 120 L627 58 L651 172 L675 160 L696 120",
  longqt: "M0 120 L18 120 L26 110 L34 120 L54 120 L62 76 L70 154 L79 112 L88 120 L128 120 L148 98 L168 120 L198 120 L206 110 L214 120 L234 120 L242 76 L250 154 L259 112 L268 120 L308 120 L328 98 L348 120 L378 120 L386 110 L394 120 L414 120 L422 76 L430 154 L439 112 L448 120 L488 120 L508 98 L528 120 L558 120 L566 110 L574 120 L594 120 L602 76 L610 154 L619 112 L628 120 L668 120 L688 98 L696 120",
  shortqt: "M0 120 L18 120 L26 110 L34 120 L54 120 L62 76 L70 154 L79 112 L88 120 L96 120 L105 106 L114 120 L136 120 L144 110 L152 120 L172 120 L180 76 L188 154 L197 112 L206 120 L214 120 L223 106 L232 120 L254 120 L262 110 L270 120 L290 120 L298 76 L306 154 L315 112 L324 120 L332 120 L341 106 L350 120 L372 120 L380 110 L388 120 L408 120 L416 76 L424 154 L433 112 L442 120 L450 120 L459 106 L468 120 L490 120 L498 110 L506 120 L526 120 L534 76 L542 154 L551 112 L560 120 L568 120 L577 106 L586 120 L608 120 L616 110 L624 120 L644 120 L652 76 L660 154 L669 112 L678 120 L696 120",
  osborn: "M0 120 L20 120 L28 110 L36 120 L56 120 L64 76 L72 154 L81 112 L90 128 L98 118 L106 120 L136 120 L144 110 L152 120 L172 120 L180 76 L188 154 L197 112 L206 128 L214 118 L222 120 L252 120 L260 110 L268 120 L288 120 L296 76 L304 154 L313 112 L322 128 L330 118 L338 120 L368 120 L376 110 L384 120 L404 120 L412 76 L420 154 L429 112 L438 128 L446 118 L454 120 L484 120 L492 110 L500 120 L520 120 L528 76 L536 154 L545 112 L554 128 L562 118 L570 120 L600 120 L608 110 L616 120 L636 120 L644 76 L652 154 L661 112 L670 128 L678 118 L686 120 L696 120",  junctional: "M0 120 L35 120 L43 82 L51 154 L60 112 L69 120 L110 120 L118 82 L126 154 L135 112 L144 120 L185 120 L193 82 L201 154 L210 112 L219 120 L260 120 L268 82 L276 154 L285 112 L294 120 L335 120 L343 82 L351 154 L360 112 L369 120 L410 120 L418 82 L426 154 L435 112 L444 120 L485 120 L493 82 L501 154 L510 112 L519 120 L560 120 L568 82 L576 154 L585 112 L594 120 L635 120 L643 82 L651 154 L660 112 L669 120 L696 120",
  lvh: "M0 120 L18 120 L26 110 L34 120 L54 120 L62 52 L72 164 L82 108 L92 120 L112 120 L122 96 L138 120 L158 120 L166 110 L174 120 L194 120 L202 52 L212 164 L222 108 L232 120 L252 120 L262 96 L278 120 L298 120 L306 110 L314 120 L334 120 L342 52 L352 164 L362 108 L372 120 L392 120 L402 96 L418 120 L438 120 L446 110 L454 120 L474 120 L482 52 L492 164 L502 108 L512 120 L532 120 L542 96 L558 120 L578 120 L586 110 L594 120 L614 120 L622 52 L632 164 L642 108 L652 120 L672 120 L682 96 L696 120",
  rvh: "M0 120 L18 120 L26 110 L34 120 L54 120 L62 50 L72 156 L82 104 L92 120 L112 120 L122 96 L138 120 L158 120 L166 110 L174 120 L194 120 L202 50 L212 156 L222 104 L232 120 L252 120 L262 96 L278 120 L298 120 L306 110 L314 120 L334 120 L342 50 L352 156 L362 104 L372 120 L392 120 L402 96 L418 120 L438 120 L446 110 L454 120 L474 120 L482 50 L492 156 L502 104 L512 120 L532 120 L542 96 L558 120 L578 120 L586 110 L594 120 L614 120 L622 50 L632 156 L642 104 L652 120 L672 120 L682 96 L696 120",};

type DecisionKey = "rate" | "rhythm" | "axis" | "atrial" | "av" | "qrs" | "stt" | "territory";
type Decision = { key: DecisionKey; number: string; title: string; hint: string; options: Array<[string, string]> };
const DECISIONS: Decision[] = [
  { key: "rate", number: "01", title: "Rate", hint: "HR 60–100/min · regular rhythm은 1500 / small box", options: [["brady", "< 50/min"], ["normal", "50–149/min"], ["tachy", "≥ 150/min"]] },
  { key: "rhythm", number: "02", title: "RR regularity", hint: "먼저 RR 간격이 규칙적인지 확인", options: [["regular", "규칙적"], ["irregular", "불규칙"], ["irregular_irregular", "irregularly irregular"]] },
  { key: "axis", number: "03", title: "Axis", hint: "I · aVF (필요 시 II)를 함께 확인", options: [["normal", "정상축"], ["left", "좌축편위"], ["right", "우축편위"], ["unclear", "판단 보류"]] },
  { key: "atrial", number: "04", title: "P wave", hint: "P morphology 및 P-QRS 관계", options: [["normal", "정상 P"], ["absent", "뚜렷한 P 없음"], ["saw", "saw-tooth"], ["premature", "조기 이상 P"], ["notched", "notched P"]] },
  { key: "av", number: "05", title: "PR / AV relation", hint: "PR 120–200 ms · QRS 탈락·AV dissociation을 찾기", options: [["normal", "정상"], ["first", "PR > 200 ms"], ["mobitz1", "PR 점차 연장 → 탈락"], ["mobitz2", "고정 PR → 탈락"], ["av3", "P-QRS 독립"]] },
  { key: "qrs", number: "06", title: "QRS / voltage", hint: "QRS ≥120 ms, V1 M/W, voltage까지 확인", options: [["narrow", "narrow"], ["wide_regular", "wide · regular"], ["wide_irregular", "wide · irregular"], ["rbbb", "V1 M / RBBB"], ["lbbb", "V1 W / LBBB"], ["high_voltage", "high voltage"], ["low_voltage", "low voltage"], ["wpw", "short PR / delta"], ["lvh", "LVH voltage"], ["rvh", "RVH clue"], ["vf", "chaotic / VF"]] },
  { key: "stt", number: "07", title: "ST-T-QT", hint: "분포·reciprocal change·이전 ECG·전해질 맥락", options: [["none", "특이 없음"], ["stemi", "ST elevation"], ["hyperK", "peaked T"], ["hypoK", "flat T / U wave"], ["longqt", "long QT"], ["shortqt", "short QT"], ["osborn", "Osborn wave"], ["brugada", "coved ST (V1–V3)"], ["torsades", "polymorphic VT / twisting"]] },
  { key: "territory", number: "08", title: "ST territory", hint: "ST elevation일 때 인접 유도 분포와 reciprocal change를 추가로 확인", options: [["none", "해당 없음"], ["anterior", "V1–V4 anterior/septal"], ["inferior", "II, III, aVF inferior"], ["lateral", "I, aVL, V5–V6 lateral"], ["posterior", "V1–V3 ST depression / tall R"], ["right", "V3R–V4R right ventricle"]] },
];

type Interpretation = { title: string; clue: string; action: string; disease?: string; urgency?: Urgency };
function interpret(answer: Partial<Record<DecisionKey, string>>): Interpretation[] {
  const output: Interpretation[] = [];
  const add = (item: Interpretation) => { if (!output.some((value) => value.title === item.title)) output.push(item); };
  if (answer.stt === "stemi") add({ title: "Acute ischemia / STEMI pattern", clue: "인접 유도 ST elevation은 분포·reciprocal change·증상과 함께 본다.", action: "진행성 흉통 또는 허혈 의심이면 시간 의존적 ACS 평가 및 기관 경로를 즉시 적용한다.", disease: "급성 관상동맥 증후군", urgency: "urgent" });
  if (answer.stt === "hyperK") add({ title: "Hyperkalemia pattern", clue: "peaked T ± PR prolongation/P loss/QRS widening", action: "즉시 재확인·모니터링하고 중증 ECG 변화면 기관 hyperkalemia 경로를 적용한다.", disease: "고칼륨혈증", urgency: "urgent" });
  if (answer.stt === "hypoK") add({ title: "Hypokalemia pattern", clue: "flat/inverted T, ST depression, prominent U", action: "K/Mg 및 원인 약물·손실과 QT/QU 연장을 확인한다.", disease: "저칼륨혈증", urgency: "caution" });
  if (answer.stt === "longqt") add({ title: "Long-QT risk pattern", clue: "hypoK/hypoCa, 약물, bradycardia, congenital LQTS를 검토", action: "QT-prolonging 요인과 syncope/torsades 위험을 즉시 재평가한다.", urgency: "caution" });
  if (answer.stt === "shortqt") add({ title: "Short-QT pattern", clue: "hypercalcemia 또는 digoxin 등 맥락을 확인", action: "Ca, 약물·독성 및 환자 상태를 통합해서 해석한다." });
  if (answer.stt === "osborn") add({ title: "Osborn wave", clue: "저체온에서 대표적으로 나타나는 J wave", action: "체온·저체온 원인과 동반 부정맥 위험을 확인한다.", disease: "저체온증", urgency: "caution" });
  if (answer.stt === "torsades") add({ title: "Polymorphic VT / torsades concern", clue: "twisting polymorphic VT, especially with long-QT context", action: "맥박·불안정성을 즉시 확인하고 기관 polymorphic VT/long-QT 경로와 전해질·약물 교정을 적용한다.", urgency: "urgent" });
  if (answer.qrs === "wpw") add({ title: "Pre-excitation / WPW pattern", clue: "short PR with delta wave and widened QRS", action: "tachyarrhythmia가 동반되면 pre-excited AF 여부와 불안정성을 우선 확인하고 전문가 평가를 연결한다.", disease: "울프", urgency: "caution" });
  if (answer.qrs === "vf") add({ title: "Ventricular fibrillation / pulseless rhythm", clue: "organized QRS 없이 chaotic waveform", action: "맥박이 없으면 즉시 cardiac arrest 및 defibrillation 경로를 적용한다.", urgency: "urgent" });
  if (answer.qrs === "lvh") add({ title: "LVH voltage clue", clue: "V1 S 또는 V5/V6 R ≥30 mm는 한 가지 screening criterion", action: "ECG voltage 단독으로 확정하지 말고 혈압·판막·echo를 포함해 구조적 심질환을 평가한다.", disease: "고혈압" });
  if (answer.qrs === "rvh") add({ title: "RVH / right-heart strain clue", clue: "V1 R/S >1, right axis, right precordial changes를 함께 확인", action: "PE, pulmonary hypertension, chronic lung disease 맥락과 echo를 통합한다.", disease: "폐색전증", urgency: "caution" });
  if (answer.territory === "anterior") add({ title: "Anterior / septal ST territory", clue: "V1–V4 contiguous elevation", action: "reciprocal change와 증상을 확인하고 ACS emergency pathway를 적용한다.", disease: "급성 관상동맥 증후군", urgency: "urgent" });
  if (answer.territory === "inferior") add({ title: "Inferior ST territory", clue: "II, III, aVF contiguous elevation", action: "RV involvement를 고려해 right-sided lead를 추가하고 ACS pathway를 적용한다.", disease: "급성 관상동맥 증후군", urgency: "urgent" });
  if (answer.territory === "lateral") add({ title: "Lateral ST territory", clue: "I, aVL, V5–V6 contiguous elevation", action: "인접 유도 변화와 reciprocal change를 확인하고 ACS pathway를 적용한다.", disease: "급성 관상동맥 증후군", urgency: "urgent" });
  if (answer.territory === "posterior") add({ title: "Posterior MI concern", clue: "V1–V3 ST depression with tall R can be posterior pattern", action: "posterior leads V7–V9와 임상 증상을 확인하고 ACS pathway를 적용한다.", disease: "급성 관상동맥 증후군", urgency: "urgent" });
  if (answer.territory === "right") add({ title: "Right-ventricular involvement concern", clue: "inferior STEMI context with V3R–V4R elevation", action: "right-sided lead와 hemodynamic context를 확인하고 ACS pathway를 적용한다.", disease: "급성 관상동맥 증후군", urgency: "urgent" });  if (answer.stt === "brugada") add({ title: "Brugada pattern", clue: "V1–V3 coved ST elevation은 mimic을 배제해야 한다.", action: "syncope, fever, family history/ventricular arrhythmia 맥락이면 응급·전문가 평가를 우선한다.", disease: "브루가다", urgency: "urgent" });
  if (answer.av === "first") add({ title: "1도 AV block", clue: "모든 P가 전도되며 PR >200 ms", action: "약물, 전해질, 허혈 및 추적 필요성을 임상 맥락과 함께 검토한다.", disease: "방실차단" });
  if (answer.av === "mobitz1") add({ title: "Mobitz I (Wenckebach)", clue: "PR이 점차 길어진 뒤 QRS 탈락", action: "증상·약물·허혈/전해질 원인과 block level을 평가한다.", disease: "방실차단", urgency: "caution" });
  if (answer.av === "mobitz2") add({ title: "Mobitz II / high-grade block", clue: "고정된 PR 뒤 갑작스러운 QRS 탈락", action: "모니터링과 urgent expert evaluation을 지연하지 않는다.", disease: "방실차단", urgency: "urgent" });
  if (answer.av === "av3") add({ title: "Complete AV block", clue: "P-QRS dissociation, escape rhythm", action: "관류·증상과 escape rate를 즉시 확인하고 불안정 시 서맥/pacing 경로를 적용한다.", disease: "방실차단", urgency: "urgent" });
  if (answer.atrial === "saw") add({ title: "Atrial flutter", clue: "saw-tooth flutter wave; 2:1 전도는 규칙적 빈맥처럼 보일 수 있다.", action: "안정성, 발병 시점, 유발요인과 혈전 위험을 함께 평가한다.", disease: "심방조동", urgency: "caution" });
  if (answer.atrial === "absent" && answer.rhythm === "irregular_irregular") add({ title: "Atrial fibrillation", clue: "irregularly irregular RR + discrete P wave 없음", action: "안정성, duration, trigger 및 stroke/bleeding risk를 통합 평가한다.", disease: "심방세동", urgency: "caution" });
  if (answer.atrial === "premature") add({ title: "Atrial premature beat", clue: "조기에 나타나는 abnormal P wave", action: "빈도, 증상, trigger와 구조적 심질환 위험을 임상적으로 판단한다.", disease: "심방조기수축" });
  if (answer.atrial === "notched") add({ title: "Left atrial abnormality clue", clue: "notched P wave는 LA enlargement와 연관될 수 있다.", action: "단일 ECG 소견으로 확정하지 말고 echo 및 원인 질환 맥락과 연결한다." });
  if (answer.qrs === "wide_regular" && answer.rate === "tachy") add({ title: "Wide-complex tachycardia: VT 우선", clue: "wide + regular tachycardia는 VT로 간주하는 쪽이 안전하다.", action: "맥박·불안정성을 즉시 확인하고 ACLS WCT 경로 및 전문가 평가를 적용한다.", disease: "심실빈맥", urgency: "urgent" });
  if (answer.qrs === "wide_irregular") add({ title: "Irregular wide-complex tachycardia", clue: "AF with aberrancy/pre-excitation, polymorphic VT 등 감별이 필요", action: "불안정·pre-excitation·polymorphic VT 가능성을 우선 배제하고 응급·전문가 경로를 적용한다.", disease: "심방세동", urgency: "urgent" });
  if (answer.qrs === "narrow" && answer.rate === "tachy" && answer.rhythm === "regular") add({ title: "Regular narrow-complex SVT", clue: "AVNRT/AVRT, flutter 2:1, sinus tachycardia를 구분", action: "불안정성부터 확인하고, 안정·규칙·좁은 QRS일 때 기관 SVT/ACLS 경로를 따른다.", disease: "상심실성 빈맥", urgency: "caution" });
  if (answer.qrs === "rbbb") add({ title: "RBBB morphology", clue: "V1 rSR′/M-like, terminal S 확인", action: "new finding, ischemia/PE 증상 여부와 이전 ECG를 함께 본다.", disease: "우각차단" });
  if (answer.qrs === "lbbb") add({ title: "LBBB morphology", clue: "V1 W-like, lateral broad/notched R", action: "허혈 맥락에서는 previous/serial ECG와 ACS 경로를 병행한다.", disease: "좌각차단", urgency: "caution" });
  if (answer.qrs === "high_voltage") add({ title: "High-voltage QRS", clue: "ventricular hypertrophy 가능성을 고려", action: "혈압·판막·구조적 심질환 맥락과 echo를 연결한다." });
  if (answer.qrs === "low_voltage") add({ title: "Low-voltage QRS", clue: "pericardial effusion, obesity/COPD, infiltrative disease 등 감별", action: "임상 불안정/effusion 맥락이면 bedside echo를 포함해 평가한다.", urgency: "caution" });
  if (answer.rate === "brady" && answer.av === "normal") add({ title: "Sinus bradycardia", clue: "P before each QRS + slow rate", action: "증상·관류를 보고 저산소증, 약물/독성, 허혈, 전해질 등 reversible cause를 평가한다.", urgency: "caution" });
  if (answer.axis === "left") add({ title: "Left-axis deviation", clue: "LAFB, inferior MI, LVH 등 맥락에서 해석", action: "축편위 단독으로 진단하지 말고 QRS morphology와 구조적 심질환 정보를 통합한다." });
  if (answer.axis === "right") add({ title: "Right-axis deviation", clue: "RVH, PE, chronic lung disease 등 맥락에서 해석", action: "급성 증상·저산소증·우심부하 소견이 있으면 임상 위험도를 우선 판단한다." });
  return output;
}

function EmergencyPathwayCard({ answer }: { answer: Partial<Record<DecisionKey, string>> }) {
  const cards: Array<{ title: string; urgent?: boolean; steps: string[] }> = [];
  if (answer.qrs === "vf") cards.push({ title: "VF / pulseless rhythm", urgent: true, steps: ["즉시 cardiac arrest response와 high-quality CPR", "shockable rhythm의 defibrillation 경로 적용", "rhythm check와 reversible cause 평가를 기관 ACLS 흐름에 따라 반복"] });
  if (answer.qrs === "wide_regular" || answer.stt === "torsades") cards.push({ title: "Wide-complex / polymorphic tachycardia", urgent: true, steps: ["맥박과 hypotension·shock·ischemic pain·acute HF·altered mental status 확인", "불안정하면 synchronized cardioversion 또는 polymorphic VT의 unsynchronized shock 경로", "안정형 wide QRS tachycardia는 기관 antiarrhythmic·expert consultation 경로"] });
  if (answer.qrs === "narrow" && answer.rate === "tachy" && answer.rhythm === "regular") cards.push({ title: "Stable regular narrow SVT", steps: ["불안정성부터 배제", "안정·규칙·narrow QRS일 때 vagal maneuver 고려", "기관 ACLS/SVT 프로토콜에서 adenosine 및 rate-control 적응증 확인"] });
  if (answer.rate === "brady" || answer.av === "mobitz2" || answer.av === "av3") cards.push({ title: "Symptomatic bradycardia / high-grade block", urgent: answer.av === "mobitz2" || answer.av === "av3", steps: ["관류저하: hypotension, AMS, shock, ischemic discomfort, acute HF 확인", "airway/oxygenation, cardiac monitor, IV access, 12-lead ECG", "지속적 compromise면 기관 서맥 경로의 atropine → pacing/vasoactive support 및 expert consultation"] });
  if (answer.stt === "stemi" || answer.territory && answer.territory !== "none") cards.push({ title: "Acute ischemia / STEMI pathway", urgent: true, steps: ["증상·serial 12-lead·reciprocal change와 이전 ECG 확인", "posterior/RV involvement가 의심되면 추가 유도 확보", "시간 의존적 ACS/reperfusion activation은 기관 경로로 즉시 진행"] });
  if (answer.stt === "hyperK") cards.push({ title: "Hyperkalemia with ECG change", urgent: true, steps: ["monitoring 및 repeat potassium/hemolysis 확인을 병행", "ECG 변화 또는 중증 hyperK면 기관 hyperkalemia emergency protocol 적용", "원인·renal function·acid-base 상태와 재측정으로 반응 확인"] });
  if (!cards.length) return <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-600">판독 선택에 따라 이곳에 처치 경로가 나타납니다. 이 카드는 현장 기관 프로토콜을 대체하지 않습니다.</section>;
  return <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center gap-2"><HeartPulse className="h-5 w-5 text-rose-700" /><h3 className="text-lg font-semibold text-slate-950">처치 경로 요약</h3></div><div className="mt-4 grid gap-3 lg:grid-cols-2">{cards.map((card) => <article key={card.title} className={card.urgent ? "rounded-lg border border-rose-200 bg-rose-50 p-4" : "rounded-lg border border-sky-200 bg-sky-50 p-4"}><div className="flex items-center gap-2"><h4 className="font-semibold text-slate-950">{card.title}</h4><UrgencyBadge urgency={card.urgent ? "urgent" : undefined} /></div><ol className="mt-3 space-y-2 text-sm leading-6 text-slate-700">{card.steps.map((step, index) => <li key={step} className="flex gap-2"><span className="font-semibold text-slate-500">{index + 1}.</span><span>{step}</span></li>)}</ol></article>)}</div><p className="mt-4 text-xs leading-5 text-slate-500">AHA 2025 Adult Advanced Life Support를 기준 링크로 두며, 실제 약제·용량·에너지 설정은 소속 기관 protocol과 환자 상태를 우선합니다.</p></section>;
}
function UrgencyBadge({ urgency }: { urgency?: Urgency }) {
  if (!urgency) return null;
  return <span className={urgency === "urgent" ? "rounded-full bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-700" : "rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800"}>{urgency === "urgent" ? "즉시 확인" : "주의"}</span>;
}

function EcgStrip({ pattern }: { pattern: Pattern }) {
  return <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-950 shadow-inner">
    <svg viewBox="0 0 696 170" className="h-auto min-w-[580px] w-full" role="img" aria-label={pattern.label + " ECG waveform"}>
      <defs>
        <pattern id="ecg-minor-grid" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M 14 0 L 0 0 0 14" fill="none" stroke="#5f2637" strokeOpacity="0.52" strokeWidth="0.7" /></pattern>
        <pattern id="ecg-major-grid" width="70" height="70" patternUnits="userSpaceOnUse"><rect width="70" height="70" fill="url(#ecg-minor-grid)" /><path d="M 70 0 L 0 0 0 70" fill="none" stroke="#9e3551" strokeOpacity="0.7" strokeWidth="1.2" /></pattern>
      </defs>
      <rect width="696" height="170" fill="#160b13" />
      <rect width="696" height="170" fill="url(#ecg-major-grid)" />
      <path d={WAVES[pattern.key]} fill="none" stroke="#f8fafc" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 25 L18 49 L46 49 L46 25" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <text x="57" y="38" fill="#cbd5e1" fontSize="12">25 mm/s · 10 mm/mV · schematic lead</text>
    </svg>
  </div>;
}

export function ECGWorkbench({ diseases }: { diseases: DiseaseLink[] }) {
  const [tab, setTab] = useState<"waveform" | "guide" | "compare">("waveform");
  const [referenceImage, setReferenceImage] = useState<string>();
  const [selectedPattern, setSelectedPattern] = useState<PatternKey>("sinus");
  const [answers, setAnswers] = useState<Partial<Record<DecisionKey, string>>>({});
  const pattern = PATTERNS.find((item) => item.key === selectedPattern) || PATTERNS[0];
  const interpretations = useMemo(() => interpret(answers), [answers]);
  const hrefFor = (term?: string) => {
    if (!term) return undefined;
    const item = diseases.find((disease) => [disease.title, ...disease.aliases].some((value) => value.includes(term) || term.includes(value)));
    return item ? "/disease/" + item.slug : undefined;
  };
  const groups = ["Rhythm", "Conduction", "ST-T / electrolyte"];

  return <section className="overflow-hidden rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-slate-50 shadow-sm">
    <div className="border-b border-teal-100 bg-white/80 px-5 py-5 sm:px-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700"><Activity className="h-4 w-4" />ECG Workbench</div>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">파형 학습 · 단계형 판독</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">대표 파형은 학습용 schematic이다. 실제 12-lead ECG는 환자 상태, lead placement, serial ECG와 함께 판독한다.</p>
        </div>
        <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1 text-sm font-semibold">
          <button type="button" onClick={() => setTab("waveform")} className={tab === "waveform" ? "rounded-lg bg-teal-700 px-3 py-2 text-white shadow-sm" : "rounded-lg px-3 py-2 text-slate-600"}>파형 라이브러리</button>
          <button type="button" onClick={() => setTab("guide")} className={tab === "guide" ? "rounded-lg bg-teal-700 px-3 py-2 text-white shadow-sm" : "rounded-lg px-3 py-2 text-slate-600"}>판독 도우미</button>
          <button type="button" onClick={() => setTab("compare")} className={tab === "compare" ? "rounded-lg bg-teal-700 px-3 py-2 text-white shadow-sm" : "rounded-lg px-3 py-2 text-slate-600"}>이미지 비교</button>
        </div>
      </div>
    </div>

    {tab === "waveform" ? <div className="grid gap-5 p-5 lg:grid-cols-[250px_minmax(0,1fr)] lg:p-6">
      <div className="space-y-4">
        {groups.map((group) => <div key={group}>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">{group}</p>
          <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
            {PATTERNS.filter((item) => item.group === group).map((item) => <button key={item.key} type="button" onClick={() => setSelectedPattern(item.key)} className={selectedPattern === item.key ? "flex items-center justify-between rounded-lg border border-teal-400 bg-teal-700 px-3 py-2.5 text-left text-sm font-semibold text-white shadow-sm" : "flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition hover:border-teal-300"}>
              <span>{item.label}</span><ChevronRight className="h-4 w-4 shrink-0" />
            </button>)}
          </div>
        </div>)}
      </div>
      <div className="min-w-0 space-y-4">
        <EcgStrip pattern={pattern} />
        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
          <div><div className="flex flex-wrap items-center gap-2"><h3 className="text-xl font-semibold text-slate-950">{pattern.label}</h3><UrgencyBadge urgency={pattern.urgency} /></div><p className="mt-2 font-medium text-teal-800">{pattern.clue}</p><p className="mt-2 text-sm leading-6 text-slate-700">{pattern.summary}</p></div>
          {hrefFor(pattern.disease) ? <Link href={hrefFor(pattern.disease) || "/disease"} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-teal-200 bg-white px-3 py-2 text-sm font-semibold text-teal-800 transition hover:bg-teal-50">관련 질환 <ChevronRight className="h-4 w-4" /></Link> : null}
        </div>
        <div className={pattern.urgency === "urgent" ? "rounded-xl border border-rose-200 bg-rose-50 p-4" : "rounded-xl border border-amber-200 bg-amber-50 p-4"}><div className="flex items-start gap-2"><AlertTriangle className={pattern.urgency === "urgent" ? "mt-0.5 h-4 w-4 text-rose-700" : "mt-0.5 h-4 w-4 text-amber-700"} /><div><p className="text-sm font-semibold text-slate-950">다음 확인</p><p className="mt-1 text-sm leading-6 text-slate-700">{pattern.action}</p></div></div></div>
      </div>
    </div> : tab === "guide" ? <div className="space-y-5 p-5 lg:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3"><div><h3 className="text-xl font-semibold text-slate-950">판독 순서를 따라 후보 좁히기</h3><p className="mt-1 text-sm text-slate-600">선택하지 않은 항목은 보류한다. 아래 결과는 감별 단서이며 자동 진단이 아니다.</p></div><button type="button" onClick={() => setAnswers({})} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-teal-300"><RotateCcw className="h-4 w-4" />초기화</button></div>
      <div className="grid gap-3 xl:grid-cols-2">
        {DECISIONS.map((step) => <article key={step.key} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><div className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-800">{step.number}</span><div><h4 className="font-semibold text-slate-950">{step.title}</h4><p className="mt-0.5 text-xs leading-5 text-slate-500">{step.hint}</p></div></div><div className="mt-3 flex flex-wrap gap-2">{step.options.map(([value, label]) => <button key={value} type="button" onClick={() => setAnswers((current) => ({ ...current, [step.key]: current[step.key] === value ? undefined : value }))} className={answers[step.key] === value ? "rounded-full border border-teal-600 bg-teal-700 px-3 py-1.5 text-xs font-semibold text-white" : "rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-teal-300 hover:bg-white"}>{label}</button>)}</div></article>)}
      </div>
      <section className="rounded-xl border border-teal-200 bg-white p-5 shadow-sm"><div className="flex items-center gap-2"><Stethoscope className="h-5 w-5 text-teal-700" /><h3 className="text-lg font-semibold text-slate-950">판독 후보 · 다음 행동</h3></div>
        {interpretations.length ? <div className="mt-4 grid gap-3 lg:grid-cols-2">{interpretations.map((item) => <article key={item.title} className={item.urgency === "urgent" ? "rounded-lg border border-rose-200 bg-rose-50 p-4" : "rounded-lg border border-slate-200 bg-slate-50 p-4"}><div className="flex flex-wrap items-center gap-2"><h4 className="font-semibold text-slate-950">{item.title}</h4><UrgencyBadge urgency={item.urgency} /></div><p className="mt-2 text-sm text-slate-700">{item.clue}</p><p className="mt-2 text-sm leading-6 text-slate-700"><span className="font-semibold">다음:</span> {item.action}</p>{hrefFor(item.disease) ? <Link href={hrefFor(item.disease) || "/disease"} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-800 hover:underline">관련 질환 문서 <ChevronRight className="h-4 w-4" /></Link> : null}</article>)}</div> : <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm leading-6 text-slate-600"><CircleHelp className="mr-2 inline h-4 w-4 text-teal-700" />RR regularity부터 선택하면 조합에 맞는 대표 후보와 확인 포인트가 나타난다.</div>}
      </section>
      <EmergencyPathwayCard answer={answers} />
    </div> : <div className="grid gap-5 p-5 lg:grid-cols-2 lg:p-6">
      <section className="rounded-xl border border-dashed border-teal-300 bg-white p-5">
        <h3 className="text-lg font-semibold text-slate-950">내 ECG 이미지 비교</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">이미지는 이 브라우저에서만 미리보기로 사용되며 서버에 전송하거나 자동 판독하지 않습니다. 개인정보·식별정보는 올리지 마세요.</p>
        <label className="mt-4 flex min-h-52 cursor-pointer flex-col items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-5 text-center hover:border-teal-300">
          <span className="text-sm font-semibold text-teal-800">ECG strip 또는 12-lead 이미지 선택</span>
          <span className="mt-1 text-xs text-slate-500">PNG · JPG · WEBP</span>
          <input type="file" accept="image/png,image/jpeg,image/webp" className="sr-only" onChange={(event) => {
            const file = event.currentTarget.files?.[0];
            if (file) setReferenceImage(URL.createObjectURL(file));
          }} />
        </label>
        {referenceImage ? <button type="button" onClick={() => setReferenceImage(undefined)} className="mt-3 text-sm font-semibold text-slate-600 underline">이미지 지우기</button> : null}
      </section>
      <section className="rounded-xl border border-slate-200 bg-slate-950 p-3">
        {referenceImage ? <Image src={referenceImage} alt="Local ECG reference" width={1200} height={600} unoptimized className="max-h-[440px] w-full rounded-lg object-contain" /> : <div className="flex min-h-72 items-center justify-center rounded-lg border border-dashed border-slate-600 px-6 text-center text-sm leading-6 text-slate-400">이미지를 고르면 이곳에 표시됩니다. 파형 라이브러리와 판독 도우미를 오가며 수동으로 비교하세요.</div>}
      </section>
    </div>}

    <div className="border-t border-teal-100 bg-slate-50 px-5 py-4 text-xs leading-5 text-slate-600"><div className="flex items-start gap-2"><HeartPulse className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" /><p><strong className="text-slate-800">Clinical safety.</strong> 맥박 없음, shock, altered mental status, ischemic chest pain, acute heart failure, sustained wide-complex tachycardia, high-grade AV block, hyperkalemia ECG 변화는 즉시 monitor·기관 응급 경로·전문가 평가가 우선이다. <a className="font-semibold text-teal-800 underline" href="https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support" target="_blank" rel="noreferrer">AHA 2025 adult advanced life support</a> · <a className="font-semibold text-teal-800 underline" href="https://litfl.com/ecg-library/" target="_blank" rel="noreferrer">LITFL ECG library</a></p></div></div>
  </section>;
}