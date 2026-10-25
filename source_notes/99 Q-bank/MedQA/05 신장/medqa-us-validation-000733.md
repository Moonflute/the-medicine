---
type: qbank
schema_version: 1
id: medqa-us-validation-000733
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:9683c9c914b822b267c725f684954f72512d6fe43dea77c444fc357f5e618a42
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "임신 중 요로결석"
  - "신산통"
  - "신장 초음파"
related_disease_slugs:
  - MDUg7Iug7J6lL-yalOuhnOqysOyEnSAoVXJvbGl0aGlhc2lzKS5tZA
question_type: investigation
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 하루 전 시작된 등에서 복부로 방사되는 10/10 산통으로 응급실에 왔다. 소변에서 β-hCG가 양성이고 적혈구가 보인다. 가장 가능성 높은 진단을 확인하는 데 가장 적절한 검사는?

## 선택지

A. 복부 CT
B. 질식 초음파
C. 복부 초음파
D. 신장 초음파

## 해설

등에서 복부로 방사되는 산통과 현미경적 혈뇨는 요로결석을 의심하게 한다. 임신검사가 양성이므로 결석과 수신증을 평가하는 첫 영상검사로 D, 신장 초음파가 적절하다. 방사선 노출이 없다는 장점 때문에 우선하는 것이며 비조영 CT보다 결석 검출 민감도가 높다는 의미는 아니다.

초음파 결과가 불명확하면 증상과 위험도에 따라 추가 영상검사를 결정한다. 임신 중 복통에서는 자궁외임신 같은 산과 응급질환도 함께 평가해야 하며, 결석 의심이나 혈뇨만으로 자궁외임신을 배제하지 않는다. 필요하면 질식 초음파 등 별도 산과 평가를 병행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 D 유지. 임신 결석에서 초음파를 CT보다 민감하다고 한 오류를 수정하고 방사선 회피의 초기검사 원칙 및 자궁외임신 감별 주의 보완.
- https://uroweb.org/guidelines/urolithiasis/chapter/guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000733
