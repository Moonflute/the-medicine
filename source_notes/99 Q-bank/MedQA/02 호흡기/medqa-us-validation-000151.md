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

48세 남성이 가래가 섞인 기침 때문에 내원했다. 올해 4개월, 지난해 6개월간 대부분의 날에 기침하고 가래를 뱉었다. 30갑년 흡연력이 있고 다른 만성 가래의 원인은 확인되지 않았다. 이 증상 양상을 가장 잘 설명하는 것은?

## 선택지

A. 감염 후 기침
B. 과민성 폐렴
C. 기침형 천식
D. 만성 기관지염

## 해설

다른 원인을 제외한 뒤 가래가 동반된 기침이 2년 연속 매년 3개월 이상 지속되면 임상적으로 만성 기관지염에 해당한다. 이 정의만으로 COPD를 진단하지 않으며, 기류제한은 기관지확장제 투여 후 폐활량검사로 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 만성기관지염의 2년 기준을 지지하는 영어 원문의 전년6개월 증상 이력을 복원.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000151
- https://new.lungkorea.org/board/guide/view/13792
