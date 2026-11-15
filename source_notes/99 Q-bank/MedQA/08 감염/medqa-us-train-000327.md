---
type: qbank
schema_version: 1
id: medqa-us-train-000327
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c4e45295182e9ca715110509b927a7acf27bba3b4aaac5754b90244afa6c986c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute rheumatic fever"
  - "Acute rheumatic fever"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yCrOyKrOyVjOq3oCDsnbjrkZDsl7wgKFN0cmVwdG9jb2NjYWwgUGhhcnluZ2l0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

11세 남아가 3주 전 인후통을 앓은 뒤 열과 관절통이 생겼다. 오른쪽 무릎 부종이 호전되는 동안 왼쪽 팔꿈치와 무릎에 통증과 부종이 생겼다. 급성 류마티스열이 의심된다. 선행 A군 사슬알균 감염을 뒷받침하는 검사는?

## 선택지

A. 적혈구침강속도 상승
B. 말초혈액 백혈구 수 증가
C. 심전도 PR 간격 연장
D. 항스트렙톨리신 O 역가 상승

## 해설


인후염 뒤 생긴 이동성 큰관절염은 급성 류마티스열을 시사한다. 항스트렙톨리신 O 같은 항사슬알균 항체는 선행 감염의 근거가 될 수 있다. ESR 상승이나 PR 간격 연장은 그 감염의 증거를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000327 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 선행 GAS 감염 증거와 Jones 기준을 구분하고 혈청항체만이 항상 필수라는 일반화를 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/diagnosing-acute-rheumatic-fever.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000327
