---
type: qbank
schema_version: 1
id: medqa-us-train-001208
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b5cb907b2e6472b66a6055d56f35d84d29e2a013d8b5fe29ab614c6ce37bec0
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "fetal warfarin syndrome"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7IaM7JWEIOycoOyghOyniO2ZmC5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

임신 초기에 항응고제에 노출된 산모의 신생아에게 콧대 저형성과 골단의 점상 석회화가 보인다. 이 소견과 가장 관련이 높은 약제는?

## 선택지

A. 아스피린
B. 저분자량 헤파린
C. 와파린
D. 비분획 헤파린

## 해설


임신 초기 와파린 노출은 콧대 저형성과 골단의 점상 병변을 포함한 태아 와파린 증후군을 일으킬 수 있다. 기계판막 환자의 항응고 전략은 산모 혈전 위험도 함께 고려해 전문가가 정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001208
- https://academic.oup.com/eurheartj/article/46/43/4462/8234487
