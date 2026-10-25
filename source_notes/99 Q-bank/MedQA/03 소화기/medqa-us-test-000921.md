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

61세 여성이 한 달 동안 피로와 경미한 목 통증이 있고 삼키기 어렵다고 했다. 호흡곤란은 없지만 최근 몇 달 동안 의도하지 않은 체중이 5~10파운드 감소했다. 손톱은 편평하고 결막이 약간 창백했다. 상부 바륨 식도조영술에서 상부 식도막이 보였고 혈색소 10 g/dL, 백혈구 11,000/mm³, 호중구 70%, 림프구 25%, 단핵구 5%, ESR 10 mm/h였다. 가장 가능성 높은 진단은?

## 선택지

A. 플러머-빈슨 증후군
B. 식도 편평세포암
C. 젠커 게실
D. 식도이완불능증

## 해설

정답은 A이다. 상부 식도막, 연하곤란 및 빈혈·손톱 변화의 조합은 Plummer–Vinson 증후군을 가장 지지한다. 철결핍성 빈혈과 식도막이 연관되는 증후군이며 식도막이 형성되어 철결핍성 빈혈을 직접 일으킨다고 설명하지 않는다. 실제로 철결핍을 확인하고 원인을 평가해야 하며 고형 종괴나 게실·하부 식도 이완 장애와 구별한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 식도막이 철결핍성 빈혈을 일으킨다는 역인과 해설 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000921
