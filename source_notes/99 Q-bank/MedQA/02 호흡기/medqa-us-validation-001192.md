---
type: qbank
schema_version: 1
id: medqa-us-validation-001192
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7c05c260e723a26a66c48c5d07229f6c14600a043b7757a502fdc4dc06e0cba3
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "흡인성 폐렴"
  - "의식저하"
  - "우하엽 침윤"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

55세 남성이 일주일간 기침과 식욕부진으로 응급실에 왔다. 악취 나는 소량의 가래와 야간 발한이 있고, HIV 감염 병력과 심한 속쓰림이 있으며 노숙 중이고 술을 많이 마신다. 오른쪽 폐기저부에 수포음과 타진상 둔탁음, 흉부 X선에서 오른쪽 하엽 침윤이 보인다. 가장 가능성 높은 원인은?

## 선택지

A. 폐포자충 폐렴
B. 흡인성 폐렴
C. 승모판 역류
D. 인두식도 게실

## 해설

과음과 현재 취한 상태, 심한 역류 증상은 흡인 위험을 높인다. 악취 나는 가래와 우하엽의 의존부 침윤은 B의 흡인성 폐렴을 지지한다. 원문에 없는 구토나 확정된 의식소실을 만들지 않으며, HIV 환자에서 다른 감염 가능성도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 노숙·흡연만으로 흡인을 일반화하지 않고 실제 알코올 중독·역류·악취가래·의존부 침윤으로 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001192
