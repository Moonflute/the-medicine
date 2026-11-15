---
type: qbank
schema_version: 1
id: medqa-us-train-008193
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1004e501bd76077e33adca2a897c787963488d9187fe049e5187b74420e0e48b
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "placenta previa"
  - "marginal placenta previa"
  - "painless third-trimester bleeding"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOy5mO2DnOuwmCAoUGxhY2VudGEgUHJldmlhKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: A
answer_change_reason: "RCOG Green-top 27a(2026): 태반이 내자궁구를 덮으면 praevia, 태반 가장자리가 내구에서 20mm 미만이나 덮지 않으면 low-lying. 본문의 5cm→1cm는 정상→저위태반으로 B에 해당한다."
---

# MedQA US 임상문제

## 문제

임신 33주 질식 초음파에서 태반의 가장자리가 내자궁구에서 10 mm 떨어져 있고 안쪽을 덮지는 않는다. 이 소견을 무엇이라 하는가?

## 선택지

A. 저위태반
B. 전치태반
C. 태반조기박리
D. 태반유착스펙트럼

## 해설

임신 중기 이후 태반이 내자궁구를 덮지 않으면서 가장자리가 20 mm 미만으로 가까우면 저위태반이다. 내자궁구를 덮는 전치태반과 다르며 추적 영상과 산과 상황으로 분만 방법을 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 내구에서1cm떨어지고덮지않은태반은저위태반이므로원정답A→B교정. 5cm는정상. RCOG2026직접분류근거.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13485456/
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/placenta-praevia-placenta-accreta-and-vasa-praevia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008193
- https://pubmed.ncbi.nlm.nih.gov/42374711/
