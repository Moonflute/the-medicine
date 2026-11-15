---
type: qbank
schema_version: 1
id: medqa-us-train-009970
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:86103d760bab2611b8f878d3aac3663a53a040a6e7e0587295918490fcc3e585
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐렴"
  - "폐실질 경화"
  - "기관지 호흡음"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 발열과 가래, 숨쉴 때 심해지는 오른쪽 흉통을 호소한다. 오른쪽 폐기저부에 타진 둔탁음이 있지만 촉각진탕은 오히려 증가하고 기관지 호흡음이 들린다. 이 소견의 가장 가능성 높은 원인은?

## 선택지

A. 폐렴에 의한 폐실질 경화
B. 흉막강의 액체 저류
C. 폐첨부 기흉
D. 폐기종으로 인한 과팽창

## 해설

폐실질이 분비물이나 염증 삼출물로 차면 타진은 둔탁해지면서 기관지에서 나온 진동과 소리는 더 잘 전달된다. 흉막액이 쌓인 경우에도 타진은 둔탁하지만 보통 촉각진탕과 호흡음이 줄어든다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 폐실질 경화를 폐섬유증과 동의어로 쓴 오역을 폐렴성 consolidation으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009970
