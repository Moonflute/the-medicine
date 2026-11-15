---
type: qbank
schema_version: 1
id: medqa-us-train-002464
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:31b3febaea02c7a7826426c32a521682034998ba5d458a4f6938e52e00970ab2
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "type 1 diabetes mellitus"
  - "exercise-related hypoglycemia"
  - "insulin dose adjustment"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-yggO2YiOuLuSAoSHlwb2dseWNlbWlhKS5tZA
question_type: management
difficulty: standard
answer: B
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

제1형 당뇨병이 있는 16세 학생의 연속혈당 기록을 보니 저녁 식사 인슐린을 맞고 1시간 뒤 달리기를 할 때마다 저혈당이 생겼다. 다른 시간대 혈당은 안정적이다. 다음 운동 전 예방 계획은?

## 선택지

A. 운동하는 날 기저 인슐린을 완전히 생략한다
B. 운동 전 식사 인슐린 감량 또는 탄수화물 보충을 계획하고 혈당을 확인한다
C. 같은 식사 인슐린을 유지하고 운동 전 추가 교정 인슐린을 맞는다
D. 혈당은 운동 시작 전 한 번만 확인하고 중간에는 재지 않는다

## 해설

식사 인슐린의 효과가 남아 있는 동안 지속성 유산소운동을 하면 저혈당 위험이 높다. 운동 유형·시간과 혈당 추세에 맞춰 식사 인슐린 및 탄수화물을 조절하고 운동 중·후에도 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 운동일 모든 인슐린을 일률 감량한다는 해설을 운동종류·혈당에 따른 개별 조절로 한정.
- https://www.ispad.org/asset/D31ED1DE-6566-4F33-BB13588B0ED74597/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002464
- https://doi.org/10.1111/pedi.13452
