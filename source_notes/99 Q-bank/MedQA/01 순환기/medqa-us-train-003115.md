---
type: qbank
schema_version: 1
id: medqa-us-train-003115
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2efc8cf8b935053eb022fa4fb06466eb21ab7c9e932aa01fba5b16c0209485aa
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute aortic dissection"
  - "widened mediastinum"
  - "transesophageal echocardiography"
  - "unstable patient imaging"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
question_type: investigation
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 남성이 갑자기 시작된 극심한 등 통증으로 내원했다. 왼쪽 요골맥박이 약하고 곧 혈압이 72/45 mmHg로 떨어져 CT실로 이송할 수 없다. 삽관된 상태이며 응급 수술 평가와 동시에 침상에서 대동맥 내막판을 확인할 장비와 숙련 인력이 있다. 적절한 검사는?

## 선택지

A. 자기공명 혈관조영술
B. 혈압이 오를 때까지 아무 평가 없이 기다렸다 CT 촬영
C. 침상 경식도 심초음파
D. 운동부하 심초음파

## 해설

대동맥박리가 의심되지만 불안정해 이송이 불가능하면 즉시 가능한 침상 경식도 심초음파로 대동맥을 평가할 수 있다. 이송이 가능한 환자에서는 보통 CT 혈관조영술이 초기 검사다. 동시에 수술팀에 알린다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 대동맥박리 의심의 TEE C는 유지. 고혈압 환자를 저혈압성 불안정으로 단정하고 CTA가 신기능 저하에 절대금기인 듯한 설명 수정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003115
- ACC/AHA 대동맥질환 진료지침: https://professional.heart.org/en/science-news/2022-guideline-for-the-diagnosis-and-management-of-aortic-disease
