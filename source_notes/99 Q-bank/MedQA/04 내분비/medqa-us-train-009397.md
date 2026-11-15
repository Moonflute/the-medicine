---
type: qbank
schema_version: 1
id: medqa-us-train-009397
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7e5f76bd05f95bd8f10012f0894c971961e20769c58e30d5f0d2ef08dbc5b692
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "acute hypocalcemia"
  - "급성 저칼슘혈증"
  - "citrate toxicity from transfusion"
related_disease_slugs:
  - MDQg64K067aE67mEL-yggOy5vOyKmO2YiOymnSAoSHlwb2NhbGNlbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

고관절 수술 중 대량 수혈을 받던 74세 환자에게 입 주위 저림과 수근경련이 생겼다. 총 칼슘보다 지금 생리적으로 활성인 칼슘이 낮은지 가장 직접 확인할 검사는?

## 선택지

A. 혈중 이온화 칼슘
B. 소변 칼슘 배설량
C. 혈청 25-하이드록시 비타민 D
D. 혈청 부갑상선호르몬

## 해설


수혈제의 구연산이 칼슘과 결합하면 이온화 칼슘이 급히 낮아질 수 있다. 대량 수혈 중에는 이온화 칼슘을 직접 확인해 보충 여부를 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009397 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 심한 수술 출혈 후 tetany/Chvostek 소견은 대량 수혈 citrate–ionizedCa 감소 A에 부합하는 기초 합병증 기전. 실제 수혈기록 미제시 한계 내 추론.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009397
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/
