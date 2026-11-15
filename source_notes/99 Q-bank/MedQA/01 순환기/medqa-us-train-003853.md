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
explanation_status: "manual-reviewed"
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

68세 남성이 고혈압과 당뇨병이 있고, 밤에 숨이 차 깬다. 양쪽 폐기저부에 수포음이 들린다. 심초음파에서 좌심실 박출률은 55%이고 좌심방이 커져 있으며, E/e′는 17이다. 폐울혈을 가장 잘 설명하는 기전은?

## 선택지

A. 폐포벽 파괴에 의한 공기 가둠
B. 좌심실 수축력 감소에 의한 박출률 저하
C. 혈관 내 용적 감소에 의한 좌심실 충만압 저하
D. 좌심실 이완·순응도 저하에 의한 충만압 상승

## 해설


박출률이 보존돼도 심실이 잘 이완되지 않거나 뻣뻣하면 좌심실 충만압이 높아져 폐울혈이 생길 수 있다. 좌심방 확장과 높은 E/e′가 이를 지지한다. 박출률 정상만으로 심부전을 진단하거나 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: EF55·S4·폐울혈·오랜HTN/DM은 HFpEF의 이완장애 D에 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003853
- https://pubmed.ncbi.nlm.nih.gov/37161680/
