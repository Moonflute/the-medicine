---
type: qbank
schema_version: 1
id: medqa-us-train-009081
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7711eb5e089b320161ced95bb4099e7934380f1ae1995ac10bd821bd2b59f0c0
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "transfusion-associated circulatory overload"
  - "pulmonary edema"
  - "blood transfusion complication"
related_disease_slugs:
  - MTEg7Jm46rO8L-yImO2YiCDqtIDroKgg7Iic7ZmY65-JIOqzvOuLpCAoVHJhbnNmdXNpb24tQXNzb2NpYXRlZCBDaXJjdWxhdG9yeSBPdmVybG9hZCkubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

농축적혈구 여러 단위를 수혈한 2시간 뒤 환자에게 호흡곤란이 생겼다. 수혈 전보다 혈압이 크게 올랐고 목정맥이 팽창했으며 새 양측 폐부종이 보인다. 체액수지가 크게 양성이다. 가장 가능성 높은 반응은?

## 선택지

A. 수혈 관련 급성 폐손상
B. 급성 용혈성 수혈반응
C. 수혈 관련 아나필락시스
D. 수혈 관련 순환과부하

## 해설


수혈 직후 호흡곤란과 폐부종은 여러 반응에서 나타날 수 있다. 혈압 상승과 목정맥 팽창, 양성 체액수지는 순환과부하를 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009081 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 단시간 4단위 수혈과 수액 뒤 고혈압·S3·폐부종은 TACO D. TRALI/알레르기/PE 선지와 구분되는 내용 확인.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009081
- https://www.transfusion.or.kr/KOR/images/file/2022_5.pdf
- https://profedu.blood.ca/en/transfusion/clinical-guide/transfusion-reactions
