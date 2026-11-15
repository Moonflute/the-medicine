---
type: qbank
schema_version: 1
id: medqa-us-train-004006
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ec3eb35b63664be50ac7fa6c3c5a3a01f41b434298f89d292df0919ef61967f
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "외측대퇴피신경통"
  - "감각신경 포착"
  - "서혜인대"
  - "meralgia paresthetica"
question_type: management
related_disease_slugs: []
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

33세 환자가 꽉 끼는 작업복을 입은 날 오른쪽 허벅지 앞가쪽이 화끈거린다. 해당 부위 감각만 둔하고 무릎 폄 근력·반사는 정상이다. 가장 적절한 초기 조치는?

## 선택지

A. 대퇴신경 차단술을 바로 시행한다
B. 척추 견인치료를 시작한다
C. 허리둘레를 조이는 옷이나 벨트를 피한다
D. 지속적인 무릎 고정 보조기를 처방한다

## 해설

외측대퇴피신경은 감각신경이다. 앞가쪽 허벅지에 국한된 감각증상과 정상 근력·반사가 특징이며 우선 허리 주변 압박을 줄인다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 질환명을 대퇴근막증후군으로 잘못 부른 해설을 외측대퇴피신경 압박성 감각신경병증으로 교정했다. 압박을 줄이는 C를 유지한다.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/burning-thigh-pain-meralgia-paresthetica/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004006
