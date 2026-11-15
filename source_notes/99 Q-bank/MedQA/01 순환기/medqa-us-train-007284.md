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
explanation_status: "manual-reviewed"
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

45세 남성이 건강검진에서 처음 혈압이 높게 나왔다. 안정한 뒤 올바른 자세로 반복 측정한 진료실 평균 혈압은 150/92 mmHg이다. 증상이나 급성 장기손상 소견은 없다. 지속성 고혈압과 백의고혈압을 구분하기 위해 다음에 할 검사는?

## 선택지

A. 운동부하 심전도
B. 신동맥 CT 혈관조영술
C. 가정혈압 또는 24시간 활동혈압 측정
D. 6개월 후 같은 진료실에서 한 번만 재측정

## 해설


진료실 혈압이 높아도 진료실 밖에서 정상인 백의고혈압일 수 있다. 표준화한 가정혈압이나 활동혈압 측정으로 진료실 밖 혈압을 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 첫무증상고혈압측정155/90은적정조건반복측정 C가우선이며한번값만으로확진/안심하지않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007284
- 대한고혈압학회 고혈압 진료지침: https://guideline.or.kr/guide/view.php?cate=A&number=1143
