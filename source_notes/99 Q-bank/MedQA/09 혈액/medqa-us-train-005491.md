---
type: qbank
schema_version: 1
id: medqa-us-train-005491
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:177c293c8dd31f44c3b2e7458bd10295c47535bbe1d2ad4a98f9731ddcb717c6
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "비타민 B12 결핍"
  - "아급성 연합성 변성"
  - "정신병적 증상"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

40세 여자가 3개월 동안 직장에서 집중하기 어렵다고 내원했다. 동료들이 자신을 험담하고 신문 광고가 자신에게만 보내는 메시지라고 확신하지만 기분장애, 불안과 환각은 없다. 다리에 저림, 양측 슬개건 반사 3+, 발목반사 소실, 붉고 매끈한 혀가 있다. 진단을 확인하는 데 가장 도움이 되는 검사는?

## 선택지

A. 혈청 에탄올 수치
B. 혈청 코발라민 수치
C. 혈청 티록신 수치
D. 혈청 엽산 수치

## 해설


정신인지 증상에 하지 감각 이상과 상위·하위운동신경 징후, beefy-red 매끈한 혀는 B12 결핍 가능성을 시사하여 cobalamin B가 적절하다. 혀는 붉은 설염이지 백색설이 아니다. 결과가 경계/임상 불일치면 MMA 등 추가 평가가 필요하며 한 수치만으로 모든 경우를 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005491 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 붉고 매끈한 혀를 백색설이라 부른 오류 교정; B12 평가 B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng239/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005491
