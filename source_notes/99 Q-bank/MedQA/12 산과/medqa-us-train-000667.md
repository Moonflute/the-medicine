---
type: qbank
schema_version: 1
id: medqa-us-train-000667
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:09522f1c910158a5de268cdd66196e55da7b89ea8cef5acb65d8c7f47ab9c1a8
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "group B streptococcal (GBS) colonization"
  - "sepsis"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MqO2YiOymnSAoU2Vwc2lzKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2MqO2YiOymnSAoTmVvbmF0YWwgU2Vwc2lzKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

임신 37주 산모가 파수와 진통으로 왔다. 이번 임신의 GBS 검사 결과는 없지만 이전 아기가 출생 직후 침습성 B군 사슬알균 감염을 앓았다. 페니실린 알레르기는 없다. 다음 조치는?

## 선택지

A. 배양 결과를 기다리지 않고 분만 중 정맥 페니실린을 시작한다
B. 정상 체온이면 이전 신생아 감염 병력을 고려하지 않는다
C. 질·직장 배양 결과가 양성일 때만 이번 분만 중 예방한다
D. 신생아가 태어난 뒤 산모에게 경구 페니실린을 시작한다

## 해설


이전 신생아가 침습성 GBS 감염을 앓았다면 이번 검사 결과를 기다리지 않고 분만 중 예방 항생제를 투여한다. 알레르기가 없으면 정맥 페니실린이 우선이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000667
- https://pubmed.ncbi.nlm.nih.gov/31977795/
