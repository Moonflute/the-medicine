---
type: qbank
schema_version: 1
id: medqa-us-validation-000084
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:394d2893831233a7bcab86b50908892763f70cdf7ba7c035bd93d857c27d961b
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "고혈압성 응급증"
  - "급성 관상동맥증후군"
  - "장기 손상"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDqtIDsg4Hrj5nrp6Ug7Kad7ZuE6rWwIChBQ1MpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: diagnosis
difficulty: complex
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

55세 흑인 남성이 하루 전 시작된 흉부 압박감으로 응급실에 왔다. 통증이 턱과 왼쪽 어깨로 방사되고 호흡곤란이 있으며 혈압 230/130 mmHg, 심전도에서 미만성 T파 역전과 외측 유도의 ST하강, 트로포닌 상승이 있었다. 가장 가능성 높은 진단은?

## 선택지

A. 고혈압성 긴급증
B. 고혈압성 응급증
C. 대동맥류
D. 악성 고혈압

## 해설


고혈압성 응급증은 급성 장기 손상(심근, 뇌, 신장)과 동반된 심각한 혈압 상승을 의미한다. 환자는 급성 관상동맥증후군과 유사한 심전도 변화와 트로포닌 상승을 보이며, 즉시 혈압 강하와 장기 보호가 필요하다. 따라서 고혈압성 응급증이 가장 가능성 높은 진단이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 230/130 mmHg의 혈압과 허혈성 ECG·트로포닌 상승은 심장 장기손상을 동반한 고혈압성 응급 B.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000084
