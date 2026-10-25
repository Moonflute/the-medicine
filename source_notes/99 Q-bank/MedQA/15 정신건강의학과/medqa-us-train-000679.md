---
type: qbank
schema_version: 1
id: medqa-us-train-000679
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:75e7bc0b413ce635895a0251c24f85730450cfcc13a171c2e301fac025fe3d80
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "major depressive episode"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MaXRoaXVtLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 추적 관찰을 위해 내원하였다. 주요 우울 삽화(major depressive episode)로 6주 전 파록세틴(paroxetine) 치료를 시작하였다. 현재 그는 훨씬 기분이 나아졌으며 새로 얻은 활력에 매우 만족한다고 말한다. 매일 밤 약 8시간의 수면을 취하고 있다. 식욕은 증가하였다. 작년에 그는 우울한 기분, 불면증, 저에너지 상태를 겪은 두 번의 삽화가 있었으며, 그 기간 동안 직업 훈련을 중단하고 체육관에 가는 것을 멈췄었다. 현재 그는 지역 은행에서의 업무를 재개할 수 있게 되었다. 또한 일주일에 세 번 체육관에 가서 운동을 하고 다시 독서를 즐기고 있다. 체온은 36.5°C, 맥박은 분당 70회, 혈압은 128/66 mmHg이다. 신체 및 신경학적 검사상 이상 소견은 없다. 정신 상태 검사에서 그는 자신의 기분을 "좋다"고 표현한다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 파록세틴 치료를 2년간 지속한다
B. 파록세틴을 중단한다
C. 파록세틴 치료를 6개월간 지속한다
D. 파록세틴에서 리튬(lithium) 치료로 변경한다

## 해설

최근 삽화 외에도 작년에 두 차례의 우울 삽화와 기능저하가 있어 재발 위험이 높다. 제시된 선택지 중 파록세틴을 2년간 유지하는 장기 재발 예방 전략이 적절하다. 모든 환자가 호전 6개월 후 일률적으로 2년 치료해야 한다는 뜻은 아니며, 삽화 횟수·중증도·선호·부작용을 고려해 지속 기간을 정기적으로 재평가한다. 정상 수면과 기능 회복을 새 조증으로 해석해 리튬으로 바꿀 근거도 없다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000679

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 유지 2년 정답 유지. '6개월 호전이면 모두 2년' 오류 대신 반복 삽화와 기능저하에 따른 재발 위험을 근거로 설명.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/ng222/chapter/Recommendations
