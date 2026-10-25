---
type: qbank
schema_version: 1
id: medqa-us-train-008049
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b28b937f085d4d30d13a925802eb35a665b22440cec9d5762a47ee34aa1fe47
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "exogenous hyperthyroidism"
  - "thyrotoxicosis"
  - "weight-loss supplement"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

이전에 건강했던 25세 여성이 한 달 동안 최소한의 운동이나 휴식 중에도 발생하는 두근거림으로 내원했다. 흉부 불편감이나 호흡곤란은 없다. 항상 긴장되고 과민한 느낌을 남자친구와 헤어진 탓으로 돌린다. 이후 운동을 더 자주 하고 한방 체중감량제를 복용해 6.8 kg이 빠졌다. 잠들기 어렵고 매일 아침 알람 1시간 전에 깬다. 7년간 매일 커피 2~3잔을 마셨고 3년간 하루 담배 한 갑을 피웠다. 체온 37.4°C(99.4°F), 맥박 110회/분, 호흡수 18회/분, 혈압 150/70 mm Hg이다. 손바닥에 땀이 많고 미세한 안정 시 손떨림, 3+ 심부건반사와 이완기 단축이 보인다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 커피 섭취
B. 하시모토 갑상선염
C. 외인성 갑상선기능항진증
D. 범불안장애

## 해설


정답 C. 체중감량제 시작 후 심계항진·발한·떨림·항진된 반사와 체중감소는 외인성 갑상선호르몬 노출에 의한 갑상선중독증을 의심하게 한다. 실제 성분과 TSH/free T4·T3 등을 확인해야 하며 모든 한방 감량제가 갑상선호르몬을 포함한다고 일반화하지 않는다. 장기간 변함없는 커피 섭취나 불안만으로 전형적 신체 소견을 모두 설명하기는 어렵다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008049 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 한방 감량제 이후 갑상선중독 증상은 외인성 호르몬 C 의심이나 제품 성분과 검사 없이 확정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008049
