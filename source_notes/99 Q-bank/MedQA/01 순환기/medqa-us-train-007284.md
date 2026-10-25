---
type: qbank
schema_version: 1
id: medqa-us-train-007284
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:56cc0ee1f25c6177bac9924cd67a8ba634e6d84ff2db6d319f2fe1d5d26befc6
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "고혈압 진단"
  - "반복 혈압 측정"
  - "백의 고혈압"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: investigation
difficulty: simple
answer: C
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

45세 남자가 정기 건강검진을 위해 내원했다. 특별한 증상은 없다. 맥박은 75회/분, 혈압은 155/90 mmHg, 호흡수는 15회/분, BMI는 25 kg/m²이다. 신체검사는 정상이다. 호흡곤란, 주간 졸림, 두통, 발한, 심계항진은 없고 이전에 혈압이 높았던 적도 기억하지 못한다. 다음 중 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 심장내과 의뢰
B. 티아지드 이뇨제로 치료
C. 혈압을 다시 측정
D. 안심시킨다

## 해설


고혈압 진단은 한 번의 측정만으로는 확정되지 않으며, 반복 측정이 필요하다. 혈압을 다시 측정하여 지속적인 고혈압 여부를 확인한다. 따라서 혈압을 다시 측정하는 것이 정답이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 첫무증상고혈압측정155/90은적정조건반복측정 C가우선이며한번값만으로확진/안심하지않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007284
