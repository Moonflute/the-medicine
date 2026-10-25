---
type: qbank
schema_version: 1
id: medqa-us-validation-000033
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e826d2eec2bd55168467ff83a89fe4c6d12a85cf3f9f996497eda969aa9c9c77
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "드레슬러 증후군"
  - "심근경색 후 증후군"
  - "심낭염"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwLyjquInsgqzspp3tm4TqtbApLm1k
question_type: diagnosis
difficulty: complex
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

55세 남성이 마른기침과 심한 흉통으로 응급실에 왔다. 두 달 전 하벽 심근경색으로 우관상동맥 스텐트 삽입을 받았고 현재 발열, 심낭 마찰음, 심전도에서 미만성 ST 상승, 트로포닌 I 0.2 ng/mL가 있었다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 심장압전
B. 수축성 심낭염
C. 재경색
D. 드레슬러 증후군

## 해설

심근경색 2개월 후의 발열, 흉막성 흉통, 심낭 마찰음과 광범위 ST 상승은 심장손상 후 면역매개 심낭염인 Dressler 증후군(D)에 부합한다. 스텐트 삽입 부위가 흉막에 직접 닿아서 발생하는 현상이 아니다. 트로포닌 상승은 심근 침범 등도 평가해야 하며 값 하나만으로 재경색을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Dressler 기전을 스텐트 부위의 국소 염증이 아닌 심장손상 후 면역 염증으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000033
