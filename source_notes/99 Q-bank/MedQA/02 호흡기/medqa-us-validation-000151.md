---
type: qbank
schema_version: 1
id: medqa-us-validation-000151
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a6d8e462f193853db0bf0c49702f0bd65fc2f27dc6701872e37d1bfd132d1587
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성 기관지염"
  - "만성폐쇄성폐질환"
  - "흡연"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 남성이 4개월간 흰 가래를 동반한 지속적인 기침과 운동 시 호흡곤란으로 진료를 받으러 왔다. 작년에도 같은 증상이 약 6개월 지속되었다. 30년간 하루 한 갑을 피웠고 진찰에서 모든 폐야에 호기 말 천명음이 들렸다. 가장 가능성 높은 진단은?

## 선택지

A. 석면폐증
B. 과민성 폐렴
C. 천식
D. 만성 기관지염

## 해설

현재 4개월간의 가래 기침뿐 아니라 작년에도 6개월 지속된 같은 증상과 장기 흡연력이 있어 만성기관지염(D)에 부합한다. 만성 가래 기침이 연속 2년간 각 3개월 이상 지속되는 임상 양상을 평가하며, COPD의 기류제한 여부는 폐활량검사로 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 만성기관지염의 2년 기준을 지지하는 영어 원문의 전년6개월 증상 이력을 복원.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000151
