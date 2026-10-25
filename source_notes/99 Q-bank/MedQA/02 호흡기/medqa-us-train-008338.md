---
type: qbank
schema_version: 1
id: medqa-us-train-008338
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3053e8999c07f76735474976ebe20295d784be8c2e76281dda4a84db8e9f652d
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "obstructive sleep apnea"
  - "obesity"
  - "daytime somnolence"
  - "Obstructive sleep apnea"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 남자가 수개월 동안 지속된 피로와 업무 집중곤란으로 내원했다. 낮에 피곤하고 직장에서 잠깐씩 잠들며 밤에 9시간 자지만 중간에 여러 번 깨고 아침에 일어나기 어렵다. 비만과 큰 목둘레가 있으며 BMI 33 kg/m²이다. 가장 가능성 높은 피로의 원인은?

## 선택지

A. 만성피로증후군
B. 일주기 수면-각성장애
C. 갑상선기능저하증
D. 폐쇄성 수면무호흡

## 해설

비만과 큰 목둘레, 수면 분절 및 심한 주간 졸림은 폐쇄성 수면무호흡(D)을 가장 의심하게 한다. 원문에 실제 무호흡이 관찰되었다고 제시된 것은 아니므로 확진으로 단정하지 않는다. 수면검사 등으로 확인하고 다른 졸림 원인도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 무호흡이 관찰되었다고 원문에 없는 소견을 추가한 해설을 의심 진단으로 한정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008338
