---
type: qbank
schema_version: 1
id: medqa-us-train-002550
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:81540039cb0adb5ee37ba4c3305ff09ce3d0007ffc402be8d0bdf46b2de36659
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "schizophreniform disorder"
  - "psychosis duration 1-6 months"
  - "auditory hallucinations"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOyWkeyDgeyepeyVoCAoU2NoaXpvcGhyZW5pZm9ybSBkaXNvcmRlcikubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

19세 환자가 4개월째 환청과 피해망상을 보인다. 와해된 말과 자기 관리 저하도 이어진다. 주요 기분 삽화, 약물 노출이나 신체질환의 근거는 없다. 현재 경과에 가장 맞는 진단은?

## 선택지

A. 단기 정신병적 장애
B. 조현정동장애
C. 조현양상장애
D. 조현병

## 해설

조현병과 같은 핵심 정신병 증상이 1개월 이상 6개월 미만 지속되면 조현양상장애를 고려한다. 경과를 추적하면서 진단을 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Schizophreniform을조현형장애로옮겨schizotypal과혼동시킨용어오역교정. 조현양상장애A·1~6개월기간.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002550
- https://www.psychiatry.org/patients-families/schizophrenia/what-is-schizophrenia/
