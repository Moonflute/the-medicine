---
type: qbank
schema_version: 1
id: medqa-us-train-006064
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7c0c6d7ad70e99cac92effb035640d6aad936b1a7673e06ee838f401401f47bf
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "심실중격결손"
  - "범수축기 잡음"
  - "좌우 단락"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius7IukIOykkeqyqSDqsrDshpAgKFZlbnRyaWN1bGFyIFNlcHRhbCBEZWZlY3QpLm1k
difficulty: standard
answer: C
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

4세 남아가 피로하고 예전 같지 않으며 달리거나 다른 아이들과 놀 때 쉽게 지친다고 하여 내원했다. 지난주부터 호흡곤란도 호소한다. 체온은 98.6°F(37.2°C), 혈압은 100/75 mmHg, 맥박은 분당 98회, 호흡수는 분당 22회이다. 숨이 차 보이고 좌측 흉골연을 따라 전율을 동반한 범수축기 잡음이 크게 들린다. 그 외 이상은 없고 산전 경과와 유전자검사는 정상이었다고 한다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 팔로 4징
B. 동맥관 개존증
C. 심실중격결손
D. 심방중격결손

## 해설

좌측 흉골연의 큰 범수축기 잡음과 전율은 VSD(C)에 부합한다. 수축기 압력차에 따라 심실중격 결손을 통과하는 혈류의 난류가 잡음을 만든다. 이를 전신적 혈액 혼합음이라고 부르지 않는다. PDA의 지속성 잡음이나 ASD의 폐동맥 박출성 잡음/고정 분열과 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: VSD 잡음을 전신적 혈류 혼합음이라고 잘못 설명한 해설을 중격을 가로지르는 난류로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006064
