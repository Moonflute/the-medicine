---
type: qbank
schema_version: 1
id: medqa-us-validation-000262
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2e116a444cb38a70f801de3380881ed7d2e9f9fff6dd04ce594f604ca8e6427f
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "질병불안장애"
  - "건강염려"
  - "정상 혈당"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yniOuzkSDrtojslYgg7J6l7JWgIChJbGxuZXNzIEFueGlldHkgRGlzb3JkZXIpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 여성이 2일 전부터 가벼운 피로와 어지러움이 있어 진료를 받으러 왔다. 증상 때문에 어제부터 출근하지 않았으며 자신에게 '혈당이 매우 높다'고 말한다. 지난 2년간 비슷한 증상이 자주 있어 시내 여러 의사를 방문했고, 가정용 혈당측정기도 구입해 매일 사용한다. 증상이 시작된 뒤 사회적으로 위축되어 대부분의 시간을 집에서 당뇨병을 인터넷으로 검색하며 보낸다. 일주일 전에도 증상 때문에 하루 휴가를 냈다. 치료는 받지 않는다. 공복 및 식후 혈당을 측정한 검사 결과 3회가 모두 정상이었다. 아버지와 남동생은 제2형 당뇨병이 있다. 환자는 불안해 보이지만 활력징후와 신체진찰은 정상이고 무작위 혈당은 128 mg/dL이다. 증상의 가장 가능성 높은 설명은?

## 선택지

A. 신체증상장애
B. 단극성 주요우울장애
C. 질병불안장애
D. 혈당 항상성 장애

## 해설

경미한 피로·어지럼보다 당뇨병에 대한 지속적인 과도한 걱정, 반복 측정·검색과 기능저하가 2년간 중심이므로 질병불안장애가 가장 적절하다. 의학적 질환이나 가족력이 전혀 없어야 하는 것은 아니고, 위험에 비해 걱정과 행동이 과도한지를 평가한다. 신체 증상 자체가 심하고 그에 대한 과도한 반응이 중심인 신체증상장애와 구별한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000262

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 질병불안장애에 실제 신체질환이 없다는 것이 필수라는 오류 제거. 경미한 신체증상보다 질병 집착·과도한 확인이 중심임을 설명.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://extranet.who.int/ncdccs/Data/LBN_D1_PHC%20clinical%20guidelines.pdf
