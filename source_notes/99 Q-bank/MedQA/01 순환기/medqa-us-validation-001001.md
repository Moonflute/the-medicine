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
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
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

최근 뇌졸중 병력(D)은 STEMI 혈전용해 치료 전에 반드시 확인할 중요한 금기 요인이다. 과거 두개내출혈은 시점에 관계없이 절대 금기이며, 허혈성 뇌졸중은 통상 3개월 이내가 절대 금기에 해당한다. 문항의 ‘3개월 전’은 실제 진료에서 정확한 날짜와 뇌졸중 유형을 확인해야 하며, 적절한 재관류 방법을 별도로 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 출혈성 뇌졸중은 시점과 무관한 금기이고 허혈성은 3개월 경계 확인이 필요하다는 구분을 보완.
- https://www.ahajournals.org/hyp/doi/pdf/10.1161/CIR.0000000000001309

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001001
