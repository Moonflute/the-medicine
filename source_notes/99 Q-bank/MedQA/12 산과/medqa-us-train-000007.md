---
type: qbank
schema_version: 1
id: medqa-us-train-000007
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eab6a9961c6553479b81a5fa13d8ffd53a5f3aa506f58bfe0ec985812361ff8f
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "자간전증"
  - "고혈압"
  - "부종"
  - "단백뇨"
question_type: investigation
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDUg7Iug7J6lL-uLqOuwseuHqC5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 34주인 초임부의 혈압이 두 차례 150/94 mmHg였다. 임신 전 혈압은 정상이었고 소변 시험지에서 단백이 나왔다. 자간전증을 평가할 단백뇨 정량 검사 중 빠르게 시행할 수 있는 것은?

## 선택지

A. 소변 나트륨 농도
B. 소변 배양 검사
C. 혈청 총 단백 농도
D. 단회뇨 단백질/크레아티닌 비

## 해설

임신 20주 이후 생긴 고혈압에서 단회뇨 단백질/크레아티닌 비는 유의한 단백뇨를 평가하는 데 쓴다. 혈소판·간·신장 기능도 함께 확인하며 장기 손상이 있으면 단백뇨가 없어도 자간전증일 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 단백뇨를 측정전 소견처럼 창작한 해설 수정. D 유지, 부종은비특이·24시간뇨만필수아님.
- https://kansaspqc.kdhe.ks.gov/wp-content/uploads/2025/09/ACOG-Gestation-HTN-and-Preeclampsia-Practice-Bulletin.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000007
- https://www.nice.org.uk/guidance/ng133/chapter/recommendations
