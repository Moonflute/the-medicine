---
type: qbank
schema_version: 1
id: medqa-us-train-007468
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ee28e5dc062481fbb19c319393f63b4ca408fa921fbf005e28fc8b0ada588ac0
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "암로디핀 유발 말초부종"
  - "고혈압"
  - "칼슘통로차단제"
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 45세 남자가 정기 건강검진을 받으러 내원했다. 특히 이른 아침에 반복되는 두통이 있고 때때로 어지럽다. 심각한 질환 가족력은 없다. 일주일에 3일 5마일씩 달리며 담배와 술은 하지 않는다. 키는 177cm(5피트 10인치), 체중 72kg(159lb), BMI는 23kg/m²이다. 체온은 37°C(98.6°F), 맥박 70회/분, 혈압 152/90 mmHg이다. 신체검사와 검사실 결과는 정상이다. 2주 후 양팔 혈압이 150/90 mmHg였고 항고혈압제를 시작했다. 한 달 후 양쪽 정강이 앞에 2+ 부종이 생겼다. 다음 중 어떤 약물로 치료받았을 가능성이 가장 높은가?

## 선택지

A. 로사르탄
B. 프라조신
C. 프로프라놀롤
D. 암로디핀

## 해설

암로디핀은 세동맥을 확장하여 모세혈관의 정수압을 높이고, 발목과 정강이의 의존성 말초부종을 일으킬 수 있다. 약물을 시작한 뒤 양측 정강이에 부종이 생긴 점은 D와 일치한다. 종양의 전이로 생기는 부종이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 암로디핀의 의존성 말초부종을 ‘전이성’으로 잘못 표현한 해설을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007468
