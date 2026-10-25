---
type: qbank
schema_version: 1
id: medqa-us-validation-000866
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:503d280ba9d0f6a291a326ff895a309969742f36bd04e4c7180dc7c471f732a6
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "베르니케 뇌병증"
  - "티아민 결핍"
  - "알코올 사용장애"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDsgqzsmqkg7J6l7JWgIChBbGNvaG9sIFVzZSBEaXNvcmRlcikubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

52세 노숙인 남성이 의식변화와 지남력 저하로 왔다. 손목을 펴려 할 때 날개짓 떨림이 있고 포도당 수액을 투여한 뒤 다음 날 시각장애, 수평 안진, 비틀거리는 보행이 생겼다. 가장 가능성 높은 진단은?

## 선택지

A. 알코올 관련 치매
B. 간성뇌증
C. 섬망
D. 베르니케 뇌병증

## 해설


혼란에 새 안진·보행실조가 동반되어 Wernicke 뇌병증(D)을 시사한다. 영양결핍 위험 환자에서는 포도당 공급으로 thiamine 요구량이 증가하며 기존 결핍이 드러나거나 악화될 수 있다. 손목의 asterixis는 안진이 아니고 간성뇌증 등 대사성 질환에서도 나타나는 비특이 소견이다. 두 뇌병증이 함께 있을 수도 있지만 새 안구·보행 증상을 설명하는 정답은 D이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000866 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 포도당 뒤 안진·보행실조·혼란의 Wernicke D 유지. Asterixis를 안구진동/특이 B1 결핍 소견으로 잘못 설명한 부분 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000866
