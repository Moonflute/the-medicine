---
type: qbank
schema_version: 1
id: medqa-us-train-001129
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fa940533afec6f3e27ef448a6651c6907c17f951c37c81fa4806d554ab2492ad
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "disseminated gonococcal infection"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yehOq3oCDqsJDsl7wgKEdvbm9jb2NjYWwgSW5mZWN0aW9uKS5tZA
question_type: investigation
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

배뇨통이 생긴 뒤 여러 관절이 아프다가 한쪽 손목이 붉고 부었다. 혈압은 안정적이고 아직 항생제를 쓰지 않았다. 감염성 관절염과 파종성 임균 감염이 의심될 때 손목에서 우선 할 검사는?

## 선택지

A. 손목 MRI 결과가 나온 뒤 모든 검체 채취를 시작한다
B. 손목 X선만으로 관절 감염을 배제한다
C. 관절강에 스테로이드를 주사한 뒤 반응을 본다
D. 관절천자로 세포 수, 그람염색·배양과 결정을 검사한다

## 해설


안정적인 감염성 관절염 의심 환자에서는 항생제 전 관절액을 신속히 채취한다. 임균이 의심되면 관절액 검사가 음성이더라도 노출된 점막 등에서 별도로 검사한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001129 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 안정된 급성 관절염에서 관절천자 우선은 적절하나 임균 관절액 배양이 항상 양성·필수 확진이라는 과장을 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9901514/
- https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001129
- https://jbji.copernicus.org/articles/8/29/2023/
