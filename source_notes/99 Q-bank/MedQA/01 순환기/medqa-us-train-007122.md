---
type: qbank
schema_version: 1
id: medqa-us-train-007122
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:523bef3b068b56804306f2f1e8a04a81c70778050d18903355c6e69a69d6536f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "감염성 심내막염"
  - "오슬러 결절"
  - "승모판 탈출증"
  - "혈액배양"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: B
answer_change_reason: "ESC2023은IE치료를신속히시작하며항생제전혈액배양3세트를30분간격채취하도록권고. 일률24시간채혈및결과대기 B대신 A로변경."
---

# MedQA US 임상문제

## 문제

38세 여성이 한 달째 발열과 피로로 내원했다. 심첨부에서 겨드랑이로 퍼지는 범수축기 잡음이 들리고, 손끝에 통증 있는 붉은 결절이 보인다. 혈압은 안정적이며 아직 항생제를 투여하지 않았다. 감염성 심내막염이 의심될 때 항생제 투여 전에 할 검사는?

## 선택지

A. 서로 다른 말초 정맥에서 혈액배양 3세트를 채취한다
B. 혈액배양 1세트만 채취한다
C. 손끝 결절 표면에서 면봉 검체만 채취한다
D. 첫 항생제 투여 직후 혈액배양 검체를 채취한다

## 해설

지속되는 발열, 새 판막 역류 잡음과 오슬러 결절은 심내막염을 시사한다. 안정적인 환자에서는 항생제 투여 전 혈액배양을 여러 세트 확보해 원인균 검출률을 높인다. 심초음파도 신속히 시행하며, 쇼크 환자에서 치료를 지연하라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 의심IE의혈액배양후조기경험항생제 A로B→A 변경. 배양결과까지일률24시간대기하는설명교정.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007122
- ESC 감염성 심내막염 진료지침(2023): https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/endocarditis
