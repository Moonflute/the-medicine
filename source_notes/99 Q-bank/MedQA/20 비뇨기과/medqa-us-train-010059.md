---
type: qbank
schema_version: 1
id: medqa-us-train-010059
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7e391f612292ba1cb8f5b861fbf1e7c5a65b05fc279a67bdec3dffab24a1d25d
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "양성 전립선 비대증"
  - "피나스테리드"
  - "전립선 비대"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yWkeyEsSDsoITrpr3sg5gg67mE64yA7KadIChCZW5pZ24gUHJvc3RhdGljIEh5cGVycGxhc2lhKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 탐스로신을 복용 중이지만 소변줄기가 약하고 잔뇨감이 남아 있다. 초음파에서 전립선 부피는 55 mL다. 장기적으로 전립선 크기와 요폐 위험을 줄이기 위해 추가할 약은?

## 선택지

A. 옥시부티닌
B. 테라조신
C. 타다라필
D. 피나스테리드

## 해설

크기가 큰 전립선에서 5α-환원효소 억제제를 추가하면 수개월에 걸쳐 전립선이 작아지고 급성 요폐와 수술 위험이 줄어든다. 알파 차단제를 두 종류 병용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 추가 finasteride A 유지, 다른 약 모두 무효라는 설명을 nitrate-tadalafil 금기·alpha 중복·저류 위험으로 교정.
- 공식/학회 근거: https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts/chapter/disease-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010059
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4778754/
