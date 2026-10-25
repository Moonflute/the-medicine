---
type: qbank
schema_version: 1
id: medqa-us-train-003026
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43b22b935d5b3aec73e65ae8bcf6c96717e5f7f3970e8b113a0406a3a81b21bb
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hypomagnesemia"
  - "alcohol use disorder"
  - "prolonged QT interval"
  - "malnutrition"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDsgqzsmqkg7J6l7JWgIChBbGNvaG9sIFVzZSBEaXNvcmRlcikubWQ
question_type: adverse_effect
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 남성이 발작 후 응급실에 왔다. 아내는 환자가 알코올 남용으로 어려움을 겪다 최근 ‘완전히 끊겠다’고 결심했다고 한다. 신체검사에서 영양실조 상태지만 말 자극에 반응한다. 중등도 사지 근력저하, 간헐적 두근거림, 빠른 심부건반사가 있고 심전도에서 정상 동율동과 QT 간격 연장이 보인다. 다음 중 어떤 영양 결핍이 이 소견에 가장 크게 기여했을 가능성이 높은가?

## 선택지

A. 칼륨
B. 엽산
C. 마그네슘
D. 비타민 D

## 해설


알코올 남용과 영양실조는 저마그네슘혈증을 초래하며, 이는 근육 약화와 QT 연장을 일으킨다. 다른 전해질 결핍은 주된 원인이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 영양결핍·알코올력에 신경근 과흥분·QT연장은 저Mg C; 금단 자체 평가와 별도로 묻는 결핍.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003026
