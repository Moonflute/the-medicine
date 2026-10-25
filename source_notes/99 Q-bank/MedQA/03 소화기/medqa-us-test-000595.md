---
type: qbank
schema_version: 1
id: medqa-us-test-000595
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:7a3f460aa3b2c872485df8a9f2585b349da02504899c1d2aae3b255304334b02
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "위궤양"
  - "소화성 궤양"
  - "NSAID 사용"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITqtqTslpEgKEdhc3RyaWMgVWxjZXIpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

38세 여성이 2시간 동안 지속된 명치 불편감과 쥐어짜는 통증으로 응급진료를 받으러 왔다. 과거에도 비슷한 통증이 있었고 대부분 식후 발생하여 몇 시간 지나면 가라앉았다. 그래서 식사를 피하고 최근 몇 달 동안 체중이 몇 파운드 감소했다. 흡연자이며 가끔 술을 마신다. 만성 무릎 통증으로 일반의약품 진통제를 복용하는 것 외에는 과거력이 없다. 체온 37°C(98.6°F), 호흡 16회/분, 맥박 77회/분, 혈압 120/89 mmHg였고 복부 진찰은 정상이었다. 가장 가능성 높은 진단은?

## 선택지

A. 총담관결석증
B. 췌장염
C. 위 소화성 궤양
D. 담낭암

## 해설


식후에 발생하고 체중 감소가 동반된 상복부 쥐어짜는 통증은 위궤양의 전형적인 증상이다. 위궤양은 NSAID 사용과도 연관이 있다. 따라서 가장 가능성 높은 진단은 위 소화성 궤양이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 식후 악화 상복부 통증·식사 회피/체중 감소와 진통제 사용은 위궤양 C를 가장 지지. 다른 선택지의 담도/췌장·암 양상과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000595
