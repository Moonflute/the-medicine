---
type: qbank
schema_version: 1
id: medqa-us-train-006634
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c1415f1ff15b9c2f730e6bcdc32e6a4b49892a6fd809fa764e47027181ddd6fd
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 말초신경병증"
  - "원위 대칭성 다발신경병증"
  - "신경병성 통증"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsi6Dqsr3rs5Hspp0gKERpYWJldGljIE5ldXJvcGF0aHkpLm1k
question_type: mechanism
difficulty: simple
answer: C
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

55세 남성이 발과 하퇴에 화끈거리고 찌르는 듯한 통증이 있으며 밤에 더 심해진다고 호소했다. 지난 6개월 동안 통증이 크게 악화되어 수면을 방해한다. 제2형 당뇨병과 본태성 고혈압이 있다. 다음 중 이 환자 상태의 병태생리를 가장 잘 설명하는 것은?

## 선택지

A. 고립성 뇌신경병증
B. 고립성 말초신경병증
C. 원위 대칭성 감각운동 다발신경병증
D. 신경근병증

## 해설

양측 발부터 시작하는 원위성 작열통·감각증상은 당뇨성 원위대칭 감각운동 다발신경병 C에 부합한다. 신경근병은 신경근 분포의 통증/감각저하·반사변화·근력저하가 다양하게 나타나며 근력저하만이 주증상인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원위대칭 다발신경병 C는 유지하되 신경근병증을 근력저하만의 질환으로 축소하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006634
