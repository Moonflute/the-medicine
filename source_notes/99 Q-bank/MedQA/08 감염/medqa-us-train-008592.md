---
type: qbank
schema_version: 1
id: medqa-us-train-008592
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:694964ad6c4ab2714701e325fcfa489b85571dcb29b5d1a2f3a4e5734fc0eb5d
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "cryptococcal meningitis"
  - "chronic meningitis"
  - "immunocompromised host"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
  - MDgg6rCQ7Je8L-2BrOumve2GoOy9lOy_oOyKpOymnSAoQ3J5cHRvY29jY29zaXMpLm1k
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

폐이식 후 면역억제제를 복용 중인 환자가 3주 동안 심해지는 두통과 혼돈으로 왔다. 뇌척수액에서 림프구가 늘고 포도당이 낮다. 크립토코쿠스 수막염이 의심될 때 뇌척수액에서 신속히 확인할 항목은?

## 선택지

A. 올리고클론 띠
B. HSV 항체 단독
C. 크립토코쿠스 항원
D. VDRL 단독

## 해설


크립토코쿠스 항원은 뇌척수액에서 신속하게 진단에 도움을 주며, 진균 배양과 개방압 평가도 병행한다. 뇌척수액 세포 수나 당만으로 원인균을 특정할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008592 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 이식 후 아급성 수막염의 진균성 CSF 패턴 D 유지. 진균성 CSF가 반드시 혼탁하거나 C가 정상이라는 잘못된 단정은 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008592
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11526416/
