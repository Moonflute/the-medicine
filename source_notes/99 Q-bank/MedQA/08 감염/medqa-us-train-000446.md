---
type: qbank
schema_version: 1
id: medqa-us-train-000446
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:87c83bdcf368740cf4edb0a177534d619966f83aa4f6f9818e1e53ef90017e47
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute intermittent porphyria"
  - "Acute intermittent porphyria"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
---

# MedQA US 임상문제

## 문제

급성 간성 포르피린증이 있는 23세 환자에게 심한 복통과 변비, 혼돈, 진행하는 다리 위약이 생겼다. 증상 중 채취한 소변에서 포르포빌리노겐이 크게 상승했다. 입원해 신경·호흡 상태를 감시하면서 시행할 특이 치료는?

## 선택지

A. 정맥 헤민
B. 포도당만 투여하고 근력 회복을 기다린다
C. 정기 예방치료에 쓰는 기보시란만 즉시 투여한다
D. 정맥 철분

## 해설


진행하는 위약을 동반한 중증 급성 발작에는 정맥 헤민이 필요하다. 포도당만으로는 중증 신경 증상을 동반한 발작의 특이 치료를 대신하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000446 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 본문에 없는 소변 색 변화를 진단 근거로 추가하지 않고 중증 신경내장성 포르피린증의 hemin 선택을 설명했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gastro.org/clinical-guidance/diagnosis-and-management-of-acute-hepatic-porphyrias-ahp/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000446
