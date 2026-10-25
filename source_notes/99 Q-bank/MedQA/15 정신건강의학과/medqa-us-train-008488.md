---
type: qbank
schema_version: 1
id: medqa-us-train-008488
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a6f829733132a037853d052cb5ae32df126a3430bc914bacfe5223720176070a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "alcoholic hallucinosis"
  - "alcohol withdrawal"
  - "alcohol-induced psychotic disorder"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDsnKDrsJwg7KCV7Iug67OR7KCBIOyepeyVoCAoQWxjb2hvbC1JbmR1Y2VkIFBzeWNob3RpYyBEaXNvcmRlcikubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 남성이 추운 밤 아파트 앞에서 이마에 작은 상처가 난 채 혼미한 상태로 발견되어 응급실로 이송되었다. 조영제를 사용하지 않은 두부 CT는 정상이며 응급실에서 관찰 중이다. 12시간 후 그는 벽지가 가족을 위협하는 소리가 들린다며 도와달라고 소리쳤다. 두통도 있다. 10년 전부터 규칙적으로 술을 마시기 시작했고 입원 전에 보드카 1파인트를 마셨다. 가끔 대마초를 피우고 코카인을 사용한다. 활력징후는 정상이다. 정신상태검사에서 의식은 명료하고 지남력도 정상이다. 매우 괴로워하며 땀을 많이 흘린다. 오른손에서 미세한 손가락 떨림이 관찰된다. 나머지 신경학적 검사는 정상이다. 소변 독성검사 결과는 대기 중이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 알코올성 환각증
B. 코카인 중독
C. 진전섬망
D. 단기 정신병적 장애

## 해설

만성 과음 환자에게 음주 중단·감소 뒤 환각이 나타났으나 의식과 지남력이 명료하여, 제시된 선택지 중 알코올성 환각증이 가장 적절하다. 섬망의 주의력·의식 변동과 구별한다. 시작 시점은 다양하고 12시간 이내가 필수 조건은 아니며 정상 CT 자체가 이를 진단하지 않는다. 코카인 등 물질 노출과 의학적 감별도 평가하고 추후 중증 금단 진행을 관찰한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008488

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 알코올성 환각증 답 유지. 12시간 이내가 필수·정상CT/혈역학이 진단 조건이라는 설명 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.asam.org/quality-care/clinical-guidelines/alcohol-withdrawal-management-guideline
