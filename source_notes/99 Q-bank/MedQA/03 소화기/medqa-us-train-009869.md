---
type: qbank
schema_version: 1
id: medqa-us-train-009869
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ce3e239f1e6c39f83cbb38c31f88e84b5c64e08d345b41067d8369dd7a9d11e5
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "셀리악병"
  - "포진상 피부염"
  - "IgA 조직 트랜스글루타미나제 항체"
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uMgOyDgSDtj6zsp4QgKEhlcnBlcyBab3N0ZXIpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
question_type: investigation
difficulty: complex
answer: C
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

17세 여성이 만성 설사, 철결핍빈혈과 팔꿈치에 심하게 가려운 작은 수포로 내원했다. 아직 글루텐을 제한하지 않았다. 셀리악병의 초기 혈청검사로 적절한 것은?

## 선택지

A. 혈청 리파아제와 아밀라아제
B. 호중구 세포질 항체
C. IgA 조직 트랜스글루타미나제 항체와 총 IgA
D. 항핵항체와 보체

## 해설


초기에는 글루텐을 섭취하는 상태에서 조직 트랜스글루타미나제 IgA 항체와 총 IgA를 함께 본다. IgA 결핍이면 IgG 기반 검사로 평가한다. 결과와 임상상에 따라 추가 검사로 진단을 확정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009869 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 설사·흡수장애·포진상피부염에서 IgA-tTG C 취지 유지; 검사 조건과 IgA 결핍 한계 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pubmed.ncbi.nlm.nih.gov/36602836/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009869
