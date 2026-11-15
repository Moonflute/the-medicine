---
type: qbank
schema_version: 1
id: medqa-us-train-000783
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fe9223e7cfc6447c0260682c16810f89263bae43ecdac49db68a802d70f7a551
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "high blood pressure"
  - "angioedema"
related_disease_slugs: []
question_type: management
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2FwdG9wcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

71세 남성이 캡토프릴을 시작한 뒤 두드러기 없이 입술과 혀가 부었다. 응급 평가 후 캡토프릴을 중단하자 부종이 호전됐다. 혈압은 여전히 161/88 mmHg이고 심부전이나 알부민뇨는 없다. 이후 사용할 항고혈압제로 적절한 것은?

## 선택지

A. 저용량 캡토프릴 재투여
B. 에날라프릴로 변경
C. 사쿠비트릴/발사르탄으로 변경
D. 암로디핀으로 변경

## 해설


혀와 입술의 부종은 ACE 억제제에 의한 혈관부종에 합당하다. 같은 계열 약은 재투여하지 않으며 ACE 억제제로 인한 혈관부종 병력이 있으면 사쿠비트릴/발사르탄도 피한다. 암로디핀은 이 상황에서 선택할 수 있는 다른 계열의 혈압약이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACEI 시작 후 입술/혀/안면부종은 ACEI angioedema. 재투여 금지와 별다른 강제 RAS적응증 없는 HTN의 thiazide D가 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000783
- https://koreanhypertension.org/reference/guide?idno=10446&mode=read
- https://www.aaem.org/statements/ed-patients-angioedema-secondary/
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/207620s018lbl.pdf
