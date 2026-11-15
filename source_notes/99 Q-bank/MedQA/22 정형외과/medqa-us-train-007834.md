---
type: qbank
schema_version: 1
id: medqa-us-train-007834
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ad06e7fb6070d4f9132654ea88c8cc2ef4b6f841476e4372c7cff942ece7bd5
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "rotator cuff tendinopathy"
  - "shoulder impingement"
  - "NSAID treatment"
  - "Rotator cuff tendinopathy"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 투수가 공을 던지거나 팔을 머리 위로 올릴 때 가쪽 어깨가 아프다. 수동 관절 운동 범위는 정상이고 뚜렷한 근력저하나 외상은 없다. 회전근개 건병증의 가장 적절한 초기 치료는?

## 선택지

A. 통증이 없어질 때까지 어깨를 고정한다
B. 던지기 부하를 조절하고 운동 재활을 시작한다
C. 초기에 관절강 내 스테로이드 주사를 반복한다
D. 초기에 견봉성형술을 시행한다

## 해설

회전근개 건병증의 초기 치료는 통증을 유발하는 부하를 줄이고 능동 운동과 점진적 근력 운동을 시행하는 것이다. 장기간 고정이나 수술이 일률적 첫 치료는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 회전근개 건병증 초기 보존적 치료 B를 유지하며 휴식만 지속하는 대신 부하 조절·운동 재활 및 NSAID의 금기를 설명했다.
- 공식/학회 근거: https://doi.org/10.2519/jospt.2025.13182

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007834
- [회전근개 건병증 진료지침 (JOSPT, 2025)](https://doi.org/10.2519/jospt.2025.13182)
