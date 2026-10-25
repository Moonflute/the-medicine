---
type: qbank
schema_version: 1
id: medqa-us-train-007938
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:86e313b92c167c0309ea8c710762fd8dc033e77643835853f2ef334b2eb3cf72
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "lithium-induced hyperthyroidism"
  - "thyrotoxicosis"
  - "TSH free T4"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
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

48세 여성이 정신과 의사의 권고로 가족과 함께 응급실에 왔다. 가족은 지난 일주일 동안 평소보다 안절부절못한다고 말한다. 환자는 생각이 빠르게 달린다고 호소한다. 양극성장애로 리튬을 복용 중이고 제1형 당뇨병이 있다. 가족과 환자 모두 약물을 복용하고 있다고 한다. 최근 질환이나 감염 접촉은 없다. 체온 100°F(37.8°C), 혈압 100/60 mmHg, 맥박 130회/분, 호흡수 20회/분이다. 땀을 많이 흘리고 심장 진찰에서 불규칙한 심방세동과 2/6등급 초기 수축기 심잡음이 들린다. 혈구검사와 대사 패널은 정상이고 리튬 수치도 치료 범위이다. 평가에 포함할 때 가장 유용한 검사는?

## 선택지

A. 갑상선글로불린 수치
B. 갑상선자극호르몬과 유리 티록신 수치
C. 갑상선자극호르몬과 총 티록신 수치
D. 트리요오드티로닌과 티록신 수치

## 해설


정답 B. 불안·발한·빈맥성 부정맥은 갑상선중독증 가능성이 있어 TSH와 free T4를 평가한다. Lithium은 갑상선기능저하와 갑상선종을 더 흔히 유발하며 갑상선중독증은 드물게 발생한다. 치료 범위 lithium 농도가 갑상선 기능 이상을 배제하지는 않는다. 증상을 모두 조증이나 lithium 독성으로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007938 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 리튬의 갑상선항진이 흔하다는 오류 제거; TSH/freeT4 B로 평가하되 원인은 검사 전 미확정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1089/thy.2016.0229

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007938
