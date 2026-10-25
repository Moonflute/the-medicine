---
type: qbank
schema_version: 1
id: medqa-us-validation-000121
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a4cd4bd50a8d5938be233871b63634efcf05eb8cb537cfa9448dde2a47b9d14a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "조현병"
  - "뇌실 확장"
  - "만성 대마초 사용"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
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
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 남성이 룸메이트를 해치겠다고 위협해 경찰과 함께 응급실에 왔다. 라디오에서 누군가 그렇게 하라고 말했다고 하며 2년간 점점 가족과 친구로부터 고립되고 방에서 지구를 악의적인 외계 세력으로부터 구하는 프로젝트를 해왔다. 매일 대마초를 피우고 정신상태검사에서 둔화된 정동과 와해된 언어가 있었다. 뇌 MRI에서 가장 가능성 높은 소견은?

## 선택지

A. 뇌실주위 반점과 백질 병변
B. 고리 조영 병변
C. 측두엽 고신호 병변
D. 뇌실 확장

## 해설

장기간 망상·사회적 위축·와해된 언어·둔화 정동의 조현병 양상에서 원문이 묻는 고전적 영상 관련 소견은 뇌실 확장이다. 이는 집단 연구에서 관찰되는 비특이적 연관이며 개인 환자에게 반드시 보이거나 MRI만으로 진단되는 것은 아니다. 일상적인 대마 사용만으로 뇌실 확장을 단정하지 않으며, 다발성경화증의 반점·종양/감염의 고리 조영·특정 뇌염 소견과 구별하는 선택지 문제이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000121

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 뇌실 확장을 대마 사용이나 개인 환자의 보편 MRI 소견으로 과장한 해설 교정; 선지 문자 제거.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
