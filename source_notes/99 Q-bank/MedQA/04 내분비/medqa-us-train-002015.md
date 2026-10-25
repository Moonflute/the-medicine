---
type: qbank
schema_version: 1
id: medqa-us-train-002015
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1fc24c4d5456d71c0ea8b57bdb21d41958853d843b297fd161b2987d9a30c7fb
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hyperthyroidism"
  - "hypercalcemia"
  - "hypercalciuria"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 아프리카계 미국인 여성이 건강검진을 위해 내원했다. 2개월간 체중이 20파운드 감소했지만 식욕은 증가했고 다한증, 소변량 및 빈뇨 증가가 있다. 진찰에서 불안해 보이며 규칙적인 빈맥이 있다. 혈청 Na+ 139 mEq/L, Cl- 100 mEq/L, K+ 4.3 mEq/L, HCO3- 25 mEq/L, Ca2+ 12.2 mg/dL이며 요중 칼슘이 상승했다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 가족성 저칼슘뇨성 고칼슘혈증
B. 부갑상선기능항진증
C. 갑상선기능항진증
D. 사르코이드증

## 해설

식욕 증가에도 체중이 감소하고 발한·불안·빈맥이 있는 양상은 갑상선기능항진증 C에 부합한다. 갑상선호르몬 과다에 따른 골흡수 증가는 고칼슘혈증·고칼슘뇨를 동반할 수 있다. 고칼슘혈증만으로 원인을 확정하는 것은 아니므로 실제로는 TSH/유리 T4와 PTH 등으로 평가한다. FHH는 가족성 저칼슘뇨성 고칼슘혈증이며 요중 칼슘 증가와 맞지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원문 FHH 선지의 고칼슘혈증/저칼슘뇨 번역을 바로잡고 누락된 불안·빈맥 진찰을 복원; 전신 항진 증상 C.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002015
