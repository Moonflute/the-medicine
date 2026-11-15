---
type: qbank
schema_version: 1
id: medqa-us-train-009414
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:da9ab45c1e69f4d219785840edfca87118541a01c55c93b9615afa6c874b9e26
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "full-thickness burn"
  - "전층 화상"
  - "burn excision and grafting"
  - "Burn"
related_disease_slugs:
  - MTEg7Jm46rO8L-2ZlOyDgSAoQnVybikubWQ
question_type: management
difficulty: standard
answer: D
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

34세 여성이 화재 후 앞팔에 하얗고 건조한 가죽 같은 화상을 입었다. 중심부는 바늘 자극을 느끼지 못한다. 기도와 순환은 안정됐고 흡입손상도 평가했다. 전층 화상 부위의 근본 치료는?

## 선택지

A. 국소 항생제 연고만 도포
B. 물집만 제거하고 자연 회복을 기다린다
C. 모든 전층 화상에서 팔을 절단한다
D. 화상 전문팀에서 괴사 조직을 절제하고 피부이식을 검토한다

## 해설


진피 전층이 파괴된 화상은 해당 부위에서 재상피화가 어렵다. 범위와 위치에 따라 화상 전문팀이 괴사 조직 절제와 피부이식을 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009414 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 전층 화상의 해부층을 진피 전층 소실로 정확히 하고 신경·혈관 상태와 전기화상 평가를 구분했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://jts.health.mil/assets/docs/cpgs/Burn_Care_CPG_10_June_2025_ID12.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009414
- https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral
