---
type: qbank
schema_version: 1
id: medqa-us-train-005981
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b136985a1b1142b5e5adf6e819ec888d981f9b97d032bab57d18921a0b4f762e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "뇌정맥동혈전증"
  - "경구피임약 관련 혈전"
  - "달테파린"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-qyveq1rO2UvOyehOyVvSAoT3JhbCBDb250cmFjZXB0aXZlcykubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 36세 여성이 5일 동안 점점 심해지는 두통으로 응급실에 왔다. 오늘 아침 일어나 구토를 두 번 했다. 흡연과 음주는 하지 않고 한 명의 남성 파트너와 성관계를 하며 경구피임약을 사용한다. 체온은 37.5°C(99.5°F), 맥박은 분당 105회, 혈압은 125/80 mmHg이다. 우측 눈에 눈물이 나고 동공은 양측 반응성이지만 우측 외측 주시가 제한되어 있다. 안저검사에서 양측 시신경유두 부종이 보인다. 두부 MR 정맥조영술에서 좌측 가로정맥동에 불균일한 신호가 보인다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 달테파린 투여
B. 정맥 내 항생제 투여
C. D-이합체 측정
D. 혈관 내 혈전용해술

## 해설

뇌정맥동혈전증에서 급성기 비경구 항응고가 기본 치료이며, 보기 중 저분자량헤파린인 dalteparin(A)이 적절하다. Dalteparin은 항트롬빈 작용을 증강하여 주로 Xa 인자를 간접 억제한다. 직접 트롬빈 억제제가 아니다. 정맥동 내 혈전용해나 기계적 치료는 모든 환자의 일차 치료가 아니라 항응고에도 악화하는 일부 중증 환자에서 별도로 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. CVT 항응고 선택 A는 유지. Dalteparin을 직접 트롬빈 억제제로 분류한 약리 오류 교정.
- 공식/학회 근거: https://www.ahajournals.org/doi/pdf/10.1161/STR.0000000000000456

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005981
