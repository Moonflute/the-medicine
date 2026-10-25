---
type: qbank
schema_version: 1
id: medqa-us-train-003853
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9c1c3daed478391113150ae0c5752a9ca5d6a48b1b4d47783d63bbd5a8d4f8c4
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "heart failure with preserved ejection fraction"
  - "diastolic dysfunction"
  - "impaired ventricular relaxation"
  - "pulmonary edema"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-unjOyEsSDsi6zrtoDsoIQgKOuwley2nOuloCDrs7TsobQpIChDaHJvbmljIEhlYXJ0IEZhaWx1cmUgd2l0aCBQcmVzZXJ2ZWQgRWplY3Rpb24gRnJhY3Rpb24gKEhGcEVGKSkubWQ
question_type: mechanism
difficulty: complex
answer: D
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

68세 남성이 야간 발작성 호흡곤란과 거품 가래로 내원했다. 고혈압과 당뇨병이 있고 심초음파에서 좌심실 박출률은 55%였다. 심첨부에서 후기 이완기의 저음이 들렸고 폐기저부에 수포음이 있었다. 다음 중 현재 상태의 가장 가능성 높은 원인은?

## 선택지

A. 폐포벽 파괴
B. 심근 수축력 감소
C. 이뇨제 과량
D. 심근 이완 장애

## 해설


좌심실 박출률이 정상(55%)이면서 후기 이완기 저음과 폐기저부 수포음은 이완기 기능 장애(보존된 EF의 심부전)와 일치한다. 이는 심근 이완 장애가 폐울혈을 일으키는 메커니즘이다. 따라서 가장 가능성 높은 원인은 심근 이완 장애이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: EF55·S4·폐울혈·오랜HTN/DM은 HFpEF의 이완장애 D에 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003853
