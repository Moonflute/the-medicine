---
type: qbank
schema_version: 1
id: medqa-us-train-004911
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c94334d9a9851ef8f0355f37af1c02e8e7d0e718d97169090fb456808ca2d6ff
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "경추 손상"
  - "척수 손상"
  - "기도 보호를 위한 기관삽관"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-qyveu2gOyZuOyDgSAoQ2VydmljYWwgVHJhdW1hKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sspnsiJgg7Jm47IOBIChTcGluYWwgY29yZCB0cmF1bWEpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

머리부터 떨어진 19세 환자가 의식이 없고 호흡수가 분당 8회다. 경추 손상이 의심된다. 영상검사 전에 가장 먼저 해야 할 조치는?

## 선택지

A. 경추 MRI
B. 경추 보호대를 풀고 앉힌다
C. 경추 정렬을 유지하면서 기도 확보와 환기를 시행한다
D. 직장수지검사로 괄약근 긴장을 평가한다

## 해설

의식이 없고 저환기라면 기도 확보와 산소화·환기가 먼저다. 경추 손상 가능성이 있으므로 머리와 목 움직임을 최소화하며 기도관리를 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Rapid sequence intubation의 '연속' 오역 교정. 경추보호 하 기도/환기 우선순위를 확인.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004911
