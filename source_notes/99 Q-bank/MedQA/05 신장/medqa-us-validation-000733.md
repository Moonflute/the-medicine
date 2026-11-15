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

임신 24주인 29세 여성이 오른쪽 옆구리에서 사타구니로 뻗치는 산통과 현미경적 혈뇨가 있다. 발열은 없고 산과 응급질환을 시사하는 소견은 없다. 요로결석과 폐색을 확인할 첫 영상검사는?

## 선택지

A. 복부·골반 비조영 CT
B. 정맥신우조영술
C. 복부 단순촬영
D. 신장·방광 초음파

## 해설

임신 중에는 전리방사선이 없는 초음파로 결석과 수신증을 먼저 평가한다. 진단이 불명확하면서 위험이 높은 경우 증상과 임신 상태에 맞춰 추가 영상을 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 D 유지. 임신 결석에서 초음파를 CT보다 민감하다고 한 오류를 수정하고 방사선 회피의 초기검사 원칙 및 자궁외임신 감별 주의 보완.
- https://uroweb.org/guidelines/urolithiasis/chapter/guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000733
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10330415/
