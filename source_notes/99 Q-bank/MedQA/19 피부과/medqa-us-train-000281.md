---
type: qbank
schema_version: 1
id: medqa-us-train-000281
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:684d60806960b9a4a5217929034c63d39871794096b25c8dbf4ba2418b5f24f4
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "Ecthyma gangrenosum"
  - "Pyoderma gangrenosum"
  - "Blastomycosis"
  - "Basal cell carcinoma"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-q4sOyggCDshLjtj6zslZQgKEJhc2FsIENlbGwgQ2FyY2lub21hKS5tZA
  - MDgg6rCQ7Je8L-ynhOq3oC5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMyDshoztmZTquLAvTWVzYWxhemluZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

크론병이 있는 54세 여성이 정강이를 가볍게 긁힌 뒤 한 달 사이 궤양이 빠르게 커져 내원했다. 통증이 심하고 가장자리는 보랏빛을 띠며 피부 아래가 파여 있다. 가장 가능성 높은 진단은?

## 선택지

A. 괴저성 농피증
B. 정맥성 하지궤양
C. 괴저성 농창
D. 피부 편평세포암

## 해설

염증성 장질환 환자에서 사소한 외상 뒤 빠르게 커지는 통증성 궤양과 보라색의 파고든 경계는 괴저성 농피증의 단서다. 감염 여부도 평가하며 불필요한 외상은 병변을 악화시킬 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Crohn병·외상 후 빠른 통증성 자색 궤양의 PG B는 맞으나 A ecthyma gangrenosum도 같은 한국어로 번역한 선지를 구분한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000281
