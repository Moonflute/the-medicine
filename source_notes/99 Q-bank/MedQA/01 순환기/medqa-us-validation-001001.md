---
type: qbank
schema_version: 1
id: medqa-us-validation-001001
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:4a3c226033229f4a27d7d1767c20119505a9a4c6b4e56804cb99ddaab7001fcc
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 심근경색"
  - "혈전용해요법"
  - "최근 뇌졸중"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

60세 남성이 45분 전 설거지 중 시작된 흉부 불편감과 목을 조이는 느낌, 구역으로 응급실에 왔다. 심전도에서 급성 심근경색 소견이 보이며 아스피린을 투여받았다. 이 환자에서 혈전용해요법의 금기 사항은?

## 선택지

A. 아스피린 투여
B. 혈압 상승
C. 흡연력
D. 3개월 전 뇌졸중 병력

## 해설


혈전용해제는 최근 3개월 이내에 뇌졸중(특히 출혈성) 병력이 있으면 출혈 위험이 크게 증가한다. 따라서 3개월 전 뇌졸중 병력은 절대 금기이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001001
