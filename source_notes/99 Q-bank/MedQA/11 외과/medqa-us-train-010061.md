---
type: qbank
schema_version: 1
id: medqa-us-train-010061
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:00a5958192b18b96978a28956fc1c77e2372ea3d7c381d0dd8fd6677e437289d
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "관통성 복부 손상"
  - "자상"
  - "탐색적 개복술"
related_disease_slugs:
  - MTEg7Jm46rO8L-q0gO2GteyDgSDrs7XrtoDsmbjsg4EgKFBlbmV0cmF0aW5nIEFiZG9taW5hbCBJbmp1cnkpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

24세 남성이 이물질이 복부에 박힌 채 이송됐다. 혈액제제 소생에도 혈압이 낮고 배 전체가 단단하다. 다음 조치는?

## 선택지

A. 이물질을 고정한 채 응급 개복술을 준비한다
B. 응급실에서 이물질을 먼저 제거한 뒤 관찰한다
C. 복부 단순촬영 후 수술 여부를 정한다
D. CT를 마칠 때까지 수술을 미룬다

## 해설


박힌 이물질과 지속되는 쇼크·복막 자극 징후가 있으면 즉시 외과적 출혈 및 장기 손상 관리를 진행한다. 이물질은 응급실에서 뽑지 않고 수술실에서 출혈을 통제할 수 있는 상태로 제거한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010061 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 체온 화씨 오역을 원문97°F로 교정하고 모든 복부 관통상에 개복술이라는 일반화를 제거했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.east.org/mobile/practice-management-guideline/78

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010061
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8896237/
