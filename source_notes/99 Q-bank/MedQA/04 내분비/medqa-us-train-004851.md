---
type: qbank
schema_version: 1
id: medqa-us-train-004851
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f19ab9080727e4779956d0b9b8888e4308b890dfd31cac25a5b5332ea6890c0c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "사이클로스포린"
  - "다모증"
  - "치은비대"
related_disease_slugs: []
question_type: adverse_effect
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 여자가 다모증과 잇몸 비대를 보인다. 3개월 전 간이식 후 이식 거부반응 예방약을 복용하고 있으며 제2형 당뇨병 조절이 잘 되지 않는다. 짙고 거친 털과 부어오른 잇몸이 관찰된다. 다음 중 원인 약물은?

## 선택지

A. 다클리주맙
B. 사이클로스포린
C. 타크로리무스
D. 메토트렉세이트

## 해설

장기이식 후 다모증과 치은비대는 cyclosporine B의 특징적인 이상반응 조합이다. Tacrolimus보다 이 조합이 cyclosporine을 지지한다. 색소침착이 털을 자라게 한다는 기전을 만들어 설명할 필요는 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Cyclosporine B의 다모·치은비대는 맞으나 색소침착이 다모 원인이라는 허구 기전을 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004851
