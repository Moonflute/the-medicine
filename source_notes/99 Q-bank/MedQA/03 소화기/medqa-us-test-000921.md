---
type: qbank
schema_version: 1
id: medqa-us-test-000921
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:5900c9995fdda75abb15dfb0355d542d194f4f8dc298ac7afb51b3115f395393
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "플러머-빈슨 증후군"
  - "철결핍성 빈혈"
  - "식도막"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

61세 여성이 고형식을 삼키기 어렵고 쉽게 피곤하다고 한다. 혈색소 9.8 g/dL, MCV 70 fL, 페리틴 6 ng/mL다. 식도 조영에서 상부 식도의 얇은 막이 보이고 종괴나 게실은 없다. 이 조합이 시사하는 진단은?

## 선택지

A. 플러머–빈슨 증후군
B. 샤츠키 고리
C. 젠커 게실
D. 식도이완불능증

## 해설

철결핍빈혈, 연하곤란, 상부 식도막은 플러머–빈슨 증후군에 합당하다. 샤츠키 고리는 식도 위쪽이 아니라 위식도 접합부 쪽에 위치한다. 식도막만 보고 철결핍의 원인 평가를 생략해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 식도막이 철결핍성 빈혈을 일으킨다는 역인과 해설 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000921
