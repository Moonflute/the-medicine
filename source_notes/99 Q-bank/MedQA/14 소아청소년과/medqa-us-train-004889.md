---
type: qbank
schema_version: 1
id: medqa-us-train-004889
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7c45b8918e100a043a7bfb5b931fdb52c83a505ad8691bb3d8ad4ade7790fb87
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "심인성 성장장애"
  - "성장부진"
  - "성장곡선"
question_type: investigation
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30개월 아이의 체중이 1년 동안 성장곡선 여러 구간을 내려갔지만 키 성장은 유지됐다. 지속 구토, 만성 설사나 반복 감염은 없고 진찰은 정상이다. 우선 평가할 것은?

## 선택지

A. 정확한 성장 기록을 확인하고 섭취·식사 환경을 문진하거나 직접 관찰한다
B. 가족의 스트레스만으로 심인성 성장장애를 확진한다
C. 설사나 다른 단서가 없어도 내시경을 먼저 한다
D. 한 번의 체중값이면 충분하므로 이전 기록을 보지 않는다

## 해설

체중 성장 둔화는 정확히 잰 여러 성장 자료와 섭취·영양·식사 환경을 함께 봐야 한다. 특정 질환을 시사하는 단서가 없으면 문진과 진찰에 맞춰 검사를 선택한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 반응성관절염 오연결 해설 교체. B가 선택지 중 체중 증가 둔화를 가장 지지하지만 성장곡선만으로 심리사회적 원인 확정하지 않음을 명시.
- https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2025-075764/206901/Clinical-Practice-Guideline-for-Diagnosis-and?searchresult=1

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004889
- https://doi.org/10.1542/peds.2025-075764
