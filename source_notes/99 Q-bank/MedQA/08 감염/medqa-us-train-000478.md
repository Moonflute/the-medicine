---
type: qbank
schema_version: 1
id: medqa-us-train-000478
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9a87b7b04da7228e0cd7fb658e5e5aba3582ecd82c51a30d82da4525acd56733
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Ciguatoxin"
  - "Scombrotoxin"
  - "Tetrodotoxin"
  - "Type I hypersensitivity reaction"
  - "Ciguatera poisoning"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KSR64-FIChQb2lzb25pbmcpLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

27세 남성이 구역과 구토를 주소로 응급실에 내원하였다. 환자는 해산물 식당에서 식사를 하고 귀가한 직후부터 이러한 증상을 겪기 시작하였다. 증상은 진행되어 현재 입안에서 이상한 금속성 맛이 느껴지고, 전신 가려움증과 시야 흐림이 있다고 보고하였다. 체온은 99.0°F(37.2°C), 혈압은 120/72 mmHg, 맥박은 50회/분, 호흡수는 17회/분, 실내 공기에서 산소 포화도는 99%이다. 신체 검진상 서맥과 뜨겁고 차가운 것을 구분하지 못하는 증상이 확인되었으며, 검진상 발진은 관찰되지 않았다. 이 환자의 증상에 대한 원인으로 가장 가능성이 높은 것은 무엇인가?

## 선택지

A. 시구아톡신(Ciguatoxin)
B. 스콤브로톡신(Scombrotoxin)
C. 테트로도톡신(Tetrodotoxin)
D. 제1형 과민반응(Type I hypersensitivity reaction)

## 해설


해산물 섭취 후 금속성 맛, 온도 구분 장애, 서맥은 시구아톡신 중독의 특징이다. 시구아톡신은 전압 의존 Na⁺ 채널을 활성화해 신경세포 탈분극을 지속시켜 감각 이상과 심혈관 억제를 일으킨다. 따라서 가장 가능성 높은 원인은 시구아톡신이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000478
