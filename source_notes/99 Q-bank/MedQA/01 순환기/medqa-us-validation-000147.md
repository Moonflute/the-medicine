---
type: qbank
schema_version: 1
id: medqa-us-validation-000147
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8d3e7fe33078016528f1d68994e84e0f208ff9eddcbe68426e1532ca9036edac
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심장 아밀로이드증"
  - "제한성 심근병증"
  - "심근 생검"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-ygnO2VnOyEsSDsi6zqt7zrs5Hspp0gKFJlc3RyaWN0aXZlIENhcmRpb215b3BhdGh5KS5tZA
question_type: investigation
difficulty: standard
answer: B
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

59세 여성이 기좌호흡과 하지부종으로 내원했다. 심전도 전압은 낮지만 심초음파에서 심실벽이 두껍고 좌심실 이완기능이 저하되어 있다. 심장 아밀로이드증이 의심된다. AL형을 놓치지 않기 위해 먼저 시행할 혈액·소변 검사 조합은?

## 선택지

A. 혈청 단백전기영동 단독
B. 혈청 유리경쇄 정량 및 비율과 혈청·소변 면역고정전기영동
C. 혈청 트로포닌과 BNP만 측정
D. 혈청 페리틴과 트랜스페린 포화도

## 해설

두꺼운 심실벽에 비해 낮은 심전도 전압은 심장 아밀로이드증의 단서다. AL형 평가에는 유리경쇄와 혈청·소변 면역고정검사를 함께 사용한다. 단클론 단백이 있으면 조직 검사와 침착 유형 확인을 검토하며, 없으면 골추적자 핵의학 검사로 ATTR형을 평가할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 과립상 반점을 미세 석회화로 오역하고 모든 아밀로이드증에 심장생검이 필수라 단정한 설명을 교정.
- https://www.jacc.org/doi/10.1016/j.jacc.2022.11.022

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000147
- 미국혈액학회 AL 아밀로이드증 진단 지침(2026): https://pmc.ncbi.nlm.nih.gov/articles/PMC13425172/
