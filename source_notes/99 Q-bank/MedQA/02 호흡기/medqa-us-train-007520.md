---
type: qbank
schema_version: 1
id: medqa-us-train-007520
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:728f5af397e0e5ac876b7e43ca20b08cac2116e80ca24e6e9011848813dd2f07
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성 폐쇄성 폐질환"
  - "흡연"
  - "FEV1 감소"
  - "금연"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 남성이 만성 가래와 운동 시 숨참이 있다. 30갑년 흡연력이 있고 지금도 담배를 피운다. 기관지확장제 투여 후 FEV₁/FVC는 0.59로 COPD가 확인됐다. 향후 폐기능 감소를 늦추기 위한 가장 중요한 조치는?

## 선택지

A. 금연을 돕고 금단 증상과 재흡연을 추적한다
B. 증상이 있을 때만 속효성 기관지확장제를 쓴다
C. 호흡곤란을 줄이기 위해 신체활동을 제한한다
D. 안정기에도 예방적으로 경구 스테로이드를 복용한다

## 해설


금연은 계속 흡연하는 COPD 환자에서 폐기능 감소를 늦추는 핵심 중재다. 기관지확장제는 증상과 악화를 줄이는 데 중요하지만 금연을 대신하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 장기 흡연·만성 가래와 폐쇄성 질환 의심에서 진행을 늦추는 선택지는 금연 A이며 해설과 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007520
- https://new.lungkorea.org/board/guide/view/13792
