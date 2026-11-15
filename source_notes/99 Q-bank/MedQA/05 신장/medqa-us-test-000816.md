---
type: qbank
schema_version: 1
id: medqa-us-test-000816
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:83c256fa58b6bef80e39bea9d502941fef2d042a8d28e2f28183af7b80a9a1af
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "급성 신우신염"
  - "요로감염"
  - "늑골척추각 압통"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA
  - MDUg7Iug7J6lL-yalOuhnOqwkOyXvC5tZA
question_type: investigation
difficulty: complex
answer: A
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

24세 비임신 여성이 열과 오한, 배뇨통, 오른쪽 늑골척추각 압통으로 내원했다. 혈압은 안정적이고 급성 신우신염이 의심된다. 경험적 항생제를 시작하기 전에 우선 채취할 검체는?

## 선택지

A. 소변 일반검사와 배양을 위한 중간뇨
B. 질 면봉 검체
C. 대변배양 검체
D. 소변 세포진검사 검체

## 해설


신우신염이 의심되면 항생제 전에 소변검사와 배양 검체를 채취한다. 이후 감수성에 따라 항생제를 조정한다. 중증 환자의 경우 검체 채취를 이유로 필요한 항생제 투여를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 전신 염증 소견과 우측 CVA 압통은 요로감염/신우신염 의심. 초기 요검사 A가 경부 면봉이나 복부 CT보다 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000816
- https://doi.org/10.3947/ic.2018.50.1.67
