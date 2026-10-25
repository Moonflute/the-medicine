---
type: qbank
schema_version: 1
id: medqa-us-train-003447
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:110114724d850c1fd2f4bce7956d2f284cdebc210a0994f13077e95201e3032b
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "galactorrhea"
  - "hyperprolactinemia"
  - "antipsychotic medication"
  - "hypothyroidism"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoO2UhOuhnOudve2LtO2YiOymnSAoSHlwZXJwcm9sYWN0aW5lbWlhKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 여성이 한 달간 지속된 비혈성 유두분비로 내원했다. 하루 2~3잔의 술을 마시고 하루 1갑의 담배를 피운다. 최근 환청으로 입원한 뒤 정신과 치료를 받고 있으며 약물 이름은 기억하지 못한다. 두통도 자주 있다. 진찰에서 양쪽 유방을 눌렀을 때 젖이 나왔다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 현재 정신과 약물을 중단한다
B. 유방촬영술
C. TSH 측정
D. 초음파와 생검

## 해설

양측 유즙분비는 고프로락틴혈증을 고려하게 한다. 갑상선기능저하증도 원인이 될 수 있으므로 제시된 선지 중 C, TSH 측정이 적절한 평가에 포함된다. 실제 초기 평가에서는 임신 가능성, 혈청 프로락틴, 복용 약제와 신기능 등도 함께 확인한다.

최근 처방한 항정신병약이 원인일 수 있지만 정신과 담당의와 상의 없이 임의로 중단해서는 안 된다. 지속적인 두통 등 상황에 따라 뇌하수체 병변 평가도 필요하다. TSH만으로 모든 원인 평가가 끝나거나 TSH가 반드시 다른 모든 검사보다 먼저라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. TSH가 모든 유즙분비에서 유일한 첫 검사라는 과도한 일반화를 교정하고 임신·프로락틴/약물 평가 및 정신과 약 임의중단 금지 설명.
- https://academic.oup.com/jcem/article/96/2/273/2709487

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003447
