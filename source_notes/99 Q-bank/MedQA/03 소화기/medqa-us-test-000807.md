---
type: qbank
schema_version: 1
id: medqa-us-test-000807
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b57b9425d4c71b69f6fad890eb4572fadb09219d06fc5ab1d0cf1df0e66f5f88
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "크론병"
  - "염증성 장질환"
  - "결장 궤양"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sl7zspp3shLEg7J6l7KeI7ZmYIChJQkQpIChJbmZsYW1tYXRvcnkgQm93ZWwgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: standard
answer: A
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

30세 여성이 한 달째 혈성 설사를 하고 체중이 줄었다. 대변 감염 검사에서 원인균은 확인되지 않았다. 내시경에서 말단 회장과 대장의 일부 구간에 깊은 종주 궤양이 있고 사이 점막과 직장은 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 크론병
B. 궤양성 대장염
C. 허혈성 대장염
D. 현미경적 대장염

## 해설

말단 회장과 대장의 불연속 침범 및 깊은 종주 궤양은 크론병에 합당하다. 치료 전에는 조직 소견과 노출력을 함께 보고, 국내에서 감별이 필요한 장결핵 등 감염도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 크론병의 분절성 병변과 전층 염증 개념을 명료화하고 비특이 생검만으로 확진하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000807
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13714433/
