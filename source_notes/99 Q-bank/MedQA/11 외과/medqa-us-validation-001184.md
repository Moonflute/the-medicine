---
type: qbank
schema_version: 1
id: medqa-us-validation-001184
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:c7e4cc47e9e2ab857baf7cc2ca199f06d08075dfadd49743191f2757b6866cb4
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "슬개건염"
  - "전방 무릎 통증"
  - "슬개골 하극 압통"
  - "Patellar tendinitis"
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yVhO2CrOugiOyKpCDqsbTrs5Hspp0gKEFjaGlsbGVzIFRlbmRpbm9wYXRoeSkubWQ
question_type: management
difficulty: standard
answer: B
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

22세 농구 동호인이 점프와 착지 때 무릎 앞이 아프다. 압통은 슬개골 바로 아래 힘줄에 국한되고, 관절 삼출 없이 무릎을 완전히 펼 수 있다. 슬개건병증의 초기 치료는?

## 선택지

A. 무릎 고정 후 증상이 없어질 때까지 운동 금지
B. 통증을 유발하는 부하를 조절하고 힘줄·넙다리네갈래근 강화 운동을 단계적으로 시행
C. 슬개건에 스테로이드 주사를 우선 시행
D. 증상 지속 기간과 관계없이 슬개건 수술 시행

## 해설


슬개건병증은 점프량 등 급격한 부하를 줄이면서 통증 반응에 맞춰 단계적으로 강화·복귀하는 운동 치료를 우선한다. 힘줄 주사나 수술부터 시작하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001184 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 슬개건염 진단 C는 유지하고 원문 농구·점프 운동 맥락을 복원했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001184
- https://pubmed.ncbi.nlm.nih.gov/39045713/
