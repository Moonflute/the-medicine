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

24세 여성이 하루 동안 지속된 메스꺼움과 쇠약으로 병원에 왔다. 심각한 질환 병력은 없고 남성 2명과 성생활을 하며 경구피임약을 사용하지만 콘돔은 일관되게 사용하지 않는다. 마지막 월경은 4일 전이었다. 체온 37.8°C(100°F), 맥박 88회/분, 호흡 18회/분, 혈압 115/70 mmHg였다. 오른쪽 늑골척추각 압통이 있었고 복부는 부드럽고 압통이 없었다. 혈색소 14 g/dL, 백혈구 13,000/mm³, 혈소판 250,000/mm³, BUN 18 mg/dL, 크레아티닌 0.8 mg/dL, 포도당 95 mg/dL, CRP 16.4 mg/L(정상 0.08~3.1)였다. 다음 중 가장 적절한 처치는?

## 선택지

A. 요검사
B. 자궁경부 면봉검사
C. 혈액배양
D. 복부 CT

## 해설


발열·오른쪽 옆쪽척추각 압통 및 높은 CRP는 급성 신우신염을 시사한다. 초기 진단은 소변검사(배양 포함)로 확인한다. 따라서 가장 적절한 검사는 A이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 전신 염증 소견과 우측 CVA 압통은 요로감염/신우신염 의심. 초기 요검사 A가 경부 면봉이나 복부 CT보다 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000816
