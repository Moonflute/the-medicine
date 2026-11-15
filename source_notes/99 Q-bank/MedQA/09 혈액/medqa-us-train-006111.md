---
type: qbank
schema_version: 1
id: medqa-us-train-006111
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:63cb63718e430491f95a1065d3cdaf9adb5503fdd9182317487ec7b8d0ff4667
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "철결핍성 빈혈"
  - "소구성 저색소성 빈혈"
  - "적혈구 크기와 모양 다양성"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

임신 33주인 환자의 혈색소가 8.7g/dL, 페리틴 8ng/mL다. 출혈이나 혈역학적 불안정은 없으나 여러 경구 철분을 시도할 때마다 구토해 복용할 수 없었다. 가장 적절한 다음 치료는?

## 선택지

A. 출산 뒤까지 철분 치료를 모두 미룬다
B. 현재 수치만으로 즉시 반복 수혈한다
C. 엽산 단독으로 치료한다
D. 임신 후반기이므로 정맥 철분 보충을 고려한다

## 해설


임신 첫 삼분기가 지난 뒤 철결핍성 빈혈 환자가 경구 철분을 견디지 못하거나 출산까지 시간이 짧으면 정맥 철분을 고려한다. 안정적 환자에서 혈색소만 보고 반복 수혈하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006111 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Anisopoikilocytosis와 소구성/저색소성 용어 교정; degmacytes를 깨물린적혈구로 복원.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006111
- https://doi.org/10.1002/ijgo.70529
