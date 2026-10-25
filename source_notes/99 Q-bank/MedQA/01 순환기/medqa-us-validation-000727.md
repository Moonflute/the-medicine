---
type: qbank
schema_version: 1
id: medqa-us-validation-000727
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:08faf761c7015287fe089c967609e14b15c39245a6b04b2fbba2deb855c555a4
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "복부대동맥류 선별"
  - "고령 남성 흡연자"
  - "복부 초음파"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uzteu2gCDrjIDrj5nrp6XrpZggKEFiZG9taW5hbCBBb3J0aWMgQW5ldXJ5c20pLm1k
question_type: prevention
difficulty: complex
answer: A
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

67세 남성이 새로 진료를 시작했다. 1년간 맑은 가래를 동반한 가벼운 기침과 2년간 빈뇨가 있으며, 20세부터 하루 한 갑 흡연하고 매일 맥주 1~2잔을 마신다. 가장 적절한 검사 선별은?

## 선택지

A. 복부 초음파
B. 방광 초음파
C. 혈청 전립선특이항원 검사
D. 가래 배양

## 해설

67세 남성이며 오랜 흡연력이 있으므로 복부대동맥류 선별을 위한 A, 복부 초음파가 해당된다. USPSTF는 흡연 경험이 있는 65~75세 남성에게 일회 복부 초음파 선별검사를 권고한다. '65세 이상 모든 남성에게 반복 검사'라는 뜻은 아니다.

빈뇨 등 증상은 별도의 임상 평가가 필요하지만, 방광 초음파나 가래 배양이 이 환자에서 보편적인 선별검사가 되는 것은 아니다. 전립선특이항원 검사는 연령·위험도와 선호를 고려한 공동의사결정이 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. AAA 선별의 나이 범위를 65세 이상 무제한이 아닌 65~75세, 흡연경험 남성의 일회 검사로 정정.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/abdominal-aortic-aneurysm-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000727
