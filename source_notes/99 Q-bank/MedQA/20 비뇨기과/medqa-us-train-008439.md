---
type: qbank
schema_version: 1
id: medqa-us-train-008439
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3d5971f7fbf14fa148977140d9f861a191720ba730d94fed4a986176fe759de9
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "embryonal carcinoma"
  - "nonseminomatous germ cell tumor"
  - "cryptorchidism"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yeoOuzteqzoO2ZmOymnSAoQ3J5cHRvcmNoaWRpc20pLm1k
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmCDsooXslpEgKFRlc3RpY3VsYXIgY2FuY2VyKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 남성의 초음파에서 고환 내부의 고형 종괴가 보인다. 혈청 AFP와 β-hCG가 모두 상승했다. 이 표지자 조합을 어떻게 해석해야 하는가?

## 선택지

A. 순수 정상피종으로 확정할 수 있다
B. 표지자가 상승하면 조직검사는 불필요하다
C. 비정상피종성 생식세포종양 성분을 의심한다
D. AFP 상승은 정상피종을 지지한다

## 해설

순수 정상피종은 AFP를 분비하지 않는다. 다른 AFP 상승 원인이 없다면 비정상피종성 성분을 의심해야 하며, 표지자만으로 배아암 등 세부 조직형을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. AFP와 hCG 동시 상승의 비정상피종성 종양 근거를 설명하고 다른 종양의 표지자를 잘못 일반화한 부분 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008439
- https://uroweb.org/guidelines/testicular-cancer/chapter/diagnostic-evaluation
