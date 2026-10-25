---
type: qbank
schema_version: 1
id: medqa-us-train-007943
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:33410426c529dbd15bc5fcec912e099782de2c80d89514a981ffc81ba7fc4a33
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "peripheral artery disease"
  - "intermittent claudication"
  - "myocardial infarction risk"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: prognosis
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 여성이 3개월 동안 점점 악화되는 우측 종아리 통증으로 내원했다. 약 10분 걸으면 통증이 생기고 쉬면 호전된다. 고혈압과 고지혈증이 있어 리시노프릴과 심바스타틴을 복용한다. 34년간 하루 담배 두 갑을 피웠다. 맥박 78회/분, 혈압 142/96 mm Hg이고 대퇴동맥과 슬와동맥 맥박은 양측 2+이다. 좌측 족부 맥박은 1+, 우측은 만져지지 않는다. 발목-상완지수는 우측 0.65, 좌측 0.9이다. 이 환자가 다음 중 가장 위험이 높은 질환은?

## 선택지

A. 하지 림프부종
B. 사지 절단
C. 급성 장간막 허혈
D. 급성 심근경색

## 해설


간헐성 파행과 발목-상완지수 감소는 말초동맥질환을 시사한다. 말초동맥질환 환자는 동맥경화성 심혈관 질환 위험이 높으며, 급성 심근경색이 가장 위험한 합병증이다. 따라서 가장 위험한 질환은 급성 심근경색이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ABI 0.65와 파행은 PAD를 지지하며, 선택지 중 전신 죽상경화 관련 심근경색 D의 위험이 가장 큼.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007943
