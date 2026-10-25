---
type: qbank
schema_version: 1
id: medqa-us-train-009689
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:88695979bed00e5cd4fb681953679b99aeff5acde57fdd0358fba2d1f1830261
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "celiac disease"
  - "셀리악병"
  - "dermatitis herpetiformis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
question_type: investigation
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

36세 백인 여성이 6개월 동안 악취 나는 많은 부유성 변과 심한 가스로 내원했다. 체중 감소가 있고 최근 사소한 낙상으로 손목이 골절되었다. 활력징후는 정상이며 군집성 구진수포성 가려운 피부병변과 손발의 감각저하가 있다. 다음 중 가장 유용한 검사는 무엇인가?

## 선택지

A. 항조직 트랜스글루타미나제 항체
B. D-자일로스 검사
C. 항Saccharomyces cerevisiae 항체
D. 수소 호기검사

## 해설


정답 A. 만성 흡수장애와 취약골절, 군집성의 가려운 구진수포 발진은 셀리악병과 포진상피부염을 시사한다. 이는 지루성피부염이 아니다. gluten을 섭취하는 동안 IgA-tTG와 total IgA를 확인하며, IgA 결핍이면 IgG 기반 검사를 이용한다. 항체만의 진단 가능 여부는 수치·연령·지침 조건에 달려 있고, 일반적으로 조직 확인도 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009689 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 골흡수장애·군집성 소양성 구진수포 발진은 포진상피부염이며 지루성피부염이라는 오연결 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pubmed.ncbi.nlm.nih.gov/36602836/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009689
