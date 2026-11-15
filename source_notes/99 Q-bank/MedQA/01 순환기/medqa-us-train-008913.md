---
type: qbank
schema_version: 1
id: medqa-us-train-008913
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f85ab8f3e00a2f479097f7ccd6933dc17736db4e46f033c009e6e552bac19452
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertensive emergency"
  - "papilledema"
  - "hypertensive retinopathy"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MTgg7JWI6rO8L-qzoO2YiOyVleunneunieuzkeymnSAoaHlwZXJ0ZW5zaXZlIHJldGlub3BhdGh5KS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 여성이 수 시간에 걸쳐 심해진 두통과 흐린 시야로 응급실에 왔다. 혈압은 반복해서 192/116 mmHg이다. 안저에서 양안의 화염상 출혈, 면화반과 시신경유두 부종이 새로 확인된다. 머리 CT에서 급성 출혈은 없다. 이 상태에 대한 판단으로 가장 적절한 것은?

## 선택지

A. 증상이 가벼운 만성 고혈압이므로 외래 추적한다
B. 머리 CT가 정상이므로 급성 표적장기손상을 배제한다
C. 고혈압과 무관한 안과 질환으로 보고 혈압은 추적만 한다
D. 급성 망막 표적장기손상을 동반한 고혈압 응급증이다

## 해설

심한 혈압 상승에 망막 출혈·면화반·유두부종이 동반되면 급성 망막 표적장기손상을 의미한다. 두부 CT가 정상이어도 고혈압 응급증을 배제할 수 없다. 감시하에 혈압을 조절하면서 다른 장기 손상도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 고혈압성 장기손상 D의 치료를 무조건 급속 정상화로 오용하는 문장을 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008913
- https://doi.org/10.5646/ch.2026.32.e31
- https://academic.oup.com/eurheartj/article/45/38/3912/7741010
