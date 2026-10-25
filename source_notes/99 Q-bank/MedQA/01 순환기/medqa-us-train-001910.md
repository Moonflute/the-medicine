---
type: qbank
schema_version: 1
id: medqa-us-train-001910
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:92ce98696530a0a852ba5c4408a9a18b57be7504781d6b7e4684cb3764859f56
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "essential hypertension"
  - "JNC 8"
  - "first-line antihypertensive"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: management
difficulty: standard
answer: B
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

56세 백인 남성이 처음 진료를 받으러 내원했다. 진료받은 적이 없고 알려진 질환도 없다. 중심성 비만이 있으며 심음과 폐음은 정상이다. 혈압 157/95 mm Hg, 심박수 92/min이고 2주 후에도 혈압이 높아 본태성 고혈압으로 진단하고 약물치료를 시작하려 한다. JNC 8 지침에 따라 백인에서 고혈압의 일차 치료로 고려할 수 있는 약물 조합은 무엇인가?

## 선택지

A. ACE 억제제, ARB, 베타차단제 또는 thiazide
B. ACE 억제제, ARB, CCB 또는 thiazide
C. ACE 억제제, ARB, CCB 또는 loop 이뇨제
D. ACE 억제제, ARB, alpha 차단제 또는 loop 이뇨제

## 해설


백인 고혈압 환자 1차 치료에 ACE 억제제, ARB, 칼슘채널 차단제 또는 thiazide 이뇨제가 권장된다. 이는 JNC 8에서 백인에게 제시한 4가지 옵션 중 하나이다. 따라서 제시된 조합 중 ACE 억제제, ARB, CCB 또는 thiazide이 맞는다. ACE 억제제와 ARB를 동시에 사용하는 조합은 포함되지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: JNC 8을 명시한 역사적 문항: thiazide/ACEI/ARB/CCB 중 하나가 B이며 ACEI+ARB 병용을 뜻하지 않는다.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001910
