---
type: qbank
schema_version: 1
id: medqa-us-train-001215
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c917b124415ad6629a1c9b8e1f2b3f866869d9eccc003c9e82a7abf4c77a6d28
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "Morton neuroma"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여성이 오른쪽 발 통증으로 일차 진료 의사를 방문하였다. 환자는 통증이 2주 전에 시작되었으며 체중을 실을 때 악화된다고 한다. 마라톤 훈련을 해왔으며, 이 통증으로 인해 훈련에 제한을 받고 있다. 신체 검진상 발에 염증이나 변형의 징후는 없다. 전족부(forefoot)를 압박하면서 동시에 지간 공간(interdigital space)을 누르면 셋째 발가락과 넷째 발가락 사이의 발바닥 면에 통증이 재현되며 들리는 소리(click)가 발생한다. 이 환자 상태의 원인은 무엇인가?

## 선택지

A. 골성 돌기
B. 점액낭의 염증
C. 양성 신경종
D. 족저근막의 염증 및 반흔

## 해설

정답은 C, 원문에서 '양성 신경종'이라고 부르는 Morton 신경종이다. 제3·4발가락 사이 발바닥 통증이 전족부 압박으로 재현되고 클릭이 생기는 소견은 이에 부합한다. 이름과 달리 진정한 신생물성 신경 종양은 아니며, 반복 자극·압박에 따른 지간신경 주변 조직의 비후와 섬유화가 중심이다. 원문 선지의 명칭을 유지하였으나 이를 실제 양성 종양의 증식으로 해석해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Morton 신경종을 실제 양성 신경 종양이라고 한 오류 수정. 압박성 신경주위 섬유화임을 설명하되 원문 선지 C 및 정답 유지.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/mortons-neuroma

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001215
