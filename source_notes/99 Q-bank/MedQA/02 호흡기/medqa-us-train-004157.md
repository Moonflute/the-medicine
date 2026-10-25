---
type: qbank
schema_version: 1
id: medqa-us-train-004157
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b6636994fe65c11ac643ed973861d96d216add17545fce7d2e33406f5a5ecbe
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성폐쇄성폐질환"
  - "호흡지수"
  - "영양요법"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: 임상증례 객관식
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

중증 COPD가 있는 67세 남자의 호흡지수(RQ)는 0.8이다. 의사는 대사로 생성되는 이산화탄소 양을 줄여 CO2 호흡 부담을 제거하는 데 필요한 호흡 에너지 소비를 줄이고자 한다. 다음 중 호흡지수를 낮추는 식이 조절은 무엇인가?

## 선택지

A. 탄수화물 섭취 증가, 단백질 섭취 감소
B. 탄수화물 섭취 감소, 지방 섭취 증가
C. 탄수화물 섭취 감소, 단백질 섭취 증가
D. 지방 섭취 감소, 단백질 섭취 증가

## 해설


탄수화물은 RQ를 높이고 CO₂ 생산을 증가시키므로, 탄수화물 섭취를 줄이고 지방을 늘리는 것이 호흡지수를 낮춘다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 탄수화물RQ1·지방RQ0.7의 기초대사원리상 탄수감소/지방증가 B가 RQ를 낮춤. 모든 COPD에 같은 고지방처방을 뜻하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004157
