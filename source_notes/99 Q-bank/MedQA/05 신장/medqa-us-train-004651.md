---
type: qbank
schema_version: 1
id: medqa-us-train-004651
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:62124bfa7dfeee670ecd9958fb66f5745c6aeb8a4da3f796cdedd13d122aaf8d
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "고혈압"
  - "비만"
  - "고혈압성 장기 손상 평가"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: investigation
difficulty: complex
answer: D
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

병적 비만인 50세 여성이 처음으로 일차진료를 받으러 왔다. 최근 아버지가 신부전으로 사망해 자신이 건강한지 확인하고 싶어 한다. 회계사로 일하며 미혼이고 성생활은 없으며 가끔 음주한다. 현재 복용하는 약은 없다. 밤에 코를 고는지는 모르지만 자주 피곤하다. 두통은 없지만 밤에 운전할 때 가끔 시야가 흐리다. 혈뇨나 빈뇨는 없다. 운동 프로그램에도 참여하지 않는다. 월경은 2개월마다 있고 양이 많다. 처음 측정한 혈압은 180/100 mmHg, 심박수는 분당 70회, 체중은 150kg (330lb)이다. 신체검사에서 처진 눈꺼풀, 두꺼운 목과 큰 혀가 보이고 심장 청진은 정상이며 폐는 깨끗하다. 복부는 크지만 부드럽고 압통이 없으며 말초 맥박은 만져진다. 어려움 없이 걸을 수 있다. 혈압을 다시 측정하니 155/105 mmHg이다. 다음 중 가장 적절한 다음 단계 관리에 포함되는 것은 무엇인가?

## 선택지

A. 코르티솔 수치
B. 신동맥 도플러 초음파
C. 갑상샘자극호르몬
D. 소변검사

## 해설

새로 확인된 고혈압에서는 신장질환과 표적장기 손상 여부를 평가해야 한다. 보기 중 D, 소변검사는 혈뇨·단백뇨 등을 확인하는 기본 평가에 포함되며, 알부민뇨는 소변 알부민/크레아티닌 비로 정량 평가한다. 혈청 크레아티닌·전해질과 심전도 등도 임상 상황에 따라 함께 확인한다.

비만·피로·굵은 목은 수면무호흡을 의심하게 할 수 있지만 소변검사로 수면무호흡을 진단하는 것은 아니다. 코르티솔이나 신동맥 도플러 등 특정 이차성 고혈압 검사는 관련 임상 단서에 따라 선택한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 D 유지. 소변검사를 수면무호흡 자체의 진단검사처럼 설명한 오류를 신장질환/고혈압 표적장기 손상 초기 평가로 수정.
- https://www.nice.org.uk/guidance/ng136/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004651
