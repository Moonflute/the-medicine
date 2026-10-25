---
type: qbank
schema_version: 1
id: medqa-us-train-010061
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:00a5958192b18b96978a28956fc1c77e2372ea3d7c381d0dd8fd6677e437289d
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "관통성 복부 손상"
  - "자상"
  - "탐색적 개복술"
related_disease_slugs:
  - MTEg7Jm46rO8L-q0gO2GteyDgSDrs7XrtoDsmbjsg4EgKFBlbmV0cmF0aW5nIEFiZG9taW5hbCBJbmp1cnkpLm1k
question_type: management
difficulty: complex
answer: C
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

24세 남성이 지역 술집에서 싸운 뒤 응급실에 내원했다. 6인치 부엌칼로 심와부를 찔렸고 칼이 복부에 꽂힌 채 있다. 체온 97°F(36.1°C), 혈압 97/68 mmHg, 맥박 분당 127회, 호흡수 분당 19회, 실내 공기 산소포화도 99%이다. 혈액제제와 정맥 수액을 시작했다. 다음 중 가장 적절한 처치는?

## 선택지

A. 진단적 복막세척
B. 탐색적 복강경검사
C. 탐색적 개복술
D. 외상 초음파 집중평가(FAST)

## 해설


복부에 칼이 남아 있고 빈맥·경계성 저혈압으로 혈액제제 소생이 시작된 상황은 수술실에서 통제된 제거와 손상·출혈 평가가 필요하므로 개복술(C)이 적절하다. 응급실에서 칼을 먼저 뽑지 않는다. 모든 안정적 복부 자상이 반드시 개복술 대상이라는 의미는 아니지만 이 환자에서 FAST나 진단 검사로 필요한 외과 처치를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010061 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 체온 화씨 오역을 원문97°F로 교정하고 모든 복부 관통상에 개복술이라는 일반화를 제거했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.east.org/mobile/practice-management-guideline/78

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010061
