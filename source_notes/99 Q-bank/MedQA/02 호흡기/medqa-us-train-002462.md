---
type: qbank
schema_version: 1
id: medqa-us-train-002462
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5e14c53befaa115ee84977f6d016718caa04bf277f051696bd06ab07e1af2c48
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "pleural empyema"
  - "retained hemothorax"
  - "post-traumatic infection"
related_disease_slugs: []
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 남성이 3일간 악화된 호흡곤란과 가래 기침으로 응급실에 왔다. 3주 전 싸움 중 오른쪽 흉곽에 외상을 입었고 당시 통증과 경한 호흡곤란이 있었지만 진료받지 않았다. 체온 38.4°C, 맥박 95회/분, 호흡 18회/분, 혈압 120/75 mmHg이며 오른쪽 하부 폐야 호흡음이 감소되어 있다. 흉부 CT에서 오른쪽 7·8번 갈비뼈 골절, 우측 흉막 분리와 비후, 흉막강의 조밀한 액체 저류가 보인다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 바이러스성 흉막염
B. 폐농양
C. 농흉
D. 중피종

## 해설

외상 후 지연된 발열·호흡기 증상과 흉막 분리·비후(split pleura), 흉막강 액체 저류는 감염된 잔류 혈흉/농흉 C를 시사한다. 농흉은 흉막강에 고름이 고이는 상태이지 폐실질의 농양이나 고형 종괴가 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Split pleura+외상 후 발열은 농흉 C. 흉막강 고름을 고형성 물질로 정의한 오류 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002462
