---
type: qbank
schema_version: 1
id: medqa-us-train-010011
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:634b836505c2b0cf9592c1c4b07f25bfa7933101693614cc04cec976c4dc37fe
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "고혈압성 응급"
  - "급성 신손상"
  - "표적장기 손상"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVleyEsSDsnITquLAgKEh5cGVydGVuc2l2ZSBDcmlzaXMpLm1k
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

57세 남성의 혈압이 반복해서 198/112 mmHg로 측정된다. 증상은 없지만 혈청 크레아티닌이 이틀 전 0.9 mg/dL에서 오늘 2.3 mg/dL로 상승했다. 탈수, 요로 폐쇄나 최근 신독성 약물 노출은 확인되지 않는다. 이 상황의 분류는?

## 선택지

A. 증상 없는 고혈압으로 급성 장기손상 없음
B. 백의고혈압
C. 급성 신손상을 동반한 고혈압성 응급
D. 안정된 만성콩팥병에 동반된 고혈압

## 해설

고혈압성 응급의 핵심은 혈압 자체나 증상 유무가 아니라 급성 표적장기 손상이다. 이 사례에서는 심한 혈압 상승과 함께 새 급성 신손상이 확인됐다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정상 검사였던 지난주와 현재 Cr 상승을 연결하고 잘못된 체온 화씨 표기를 복원.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010011
