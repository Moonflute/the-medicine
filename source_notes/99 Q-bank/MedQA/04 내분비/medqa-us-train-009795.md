---
type: qbank
schema_version: 1
id: medqa-us-train-009795
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:21ae99aa5732575fe2604759bc29537f42257e2897ef1cc0c614d6eb4f15b423
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "고지혈증"
  - "만성콩팥병"
  - "스타틴"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: management
difficulty: complex
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXpldGltaWJlLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmVub2ZpYnJhdGUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

제2형 당뇨병과 3기 만성콩팥병이 있는 54세 남성의 LDL 콜레스테롤이 160 mg/dL, 중성지방은 101 mg/dL이다. 심혈관 위험을 낮추기 위해 아직 지질약을 쓰지 않은 이 환자에서 먼저 시작할 약은?

## 선택지

A. 에제티미브 단독
B. 페노피브레이트
C. 오메가-3 지방산
D. 아토르바스타틴

## 해설


당뇨병에 만성콩팥병이 있는 환자의 높은 LDL에는 스타틴이 일차 치료다. 고중성지방혈증 치료제를 먼저 쓰는 상황이 아니다. 목표와 약제 강도는 심혈관 위험과 내약성에 맞춘다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009795 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: simvastatin은 고강도 아닌 보통 중강도이며 CKD의 일률 LDL100 목표 주장을 교정. 선택지 유일 statin D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://kdigo.org/wp-content/uploads/2026/04/KDIGO-2024-CKD-Guideline.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009795
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
