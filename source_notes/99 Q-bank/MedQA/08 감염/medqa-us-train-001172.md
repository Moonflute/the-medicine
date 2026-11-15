---
type: qbank
schema_version: 1
id: medqa-us-train-001172
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c4f9113e8bb2aaa9b35ec592b2aabb44ef9ab12a3269c3061d2d946914391b29
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Crohn disease"
  - "urethritis"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOuPhOyXvCAoVXJldGhyaXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvRXJ5dGhyb215Y2luLm1k
---

# MedQA US 임상문제

## 문제

성접촉 후 배뇨통과 맑은 요도 분비물이 생긴 환자다. 요도 도말에 호중구가 있지만 세포 내 그람음성 쌍구균은 보이지 않는다. 클라미디아와 임균을 확인할 적절한 검사는?

## 선택지

A. 요도염이 사라질 때까지 병원체 검사 보류
B. 중간뇨 일반배양만 시행
C. 혈청 클라미디아 IgG
D. 첫 소변의 임균·클라미디아 핵산증폭검사

## 해설


요도염 환자에서 첫 소변을 사용한 핵산증폭검사로 임균과 클라미디아를 확인할 수 있다. 일반 소변배양이나 임상 소견만으로 두 감염을 구분하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001172 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 비감염성 요도염/비세균성 방광염이라는 오류를 Chlamydia 비임균성 요도염으로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001172
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10925736/
