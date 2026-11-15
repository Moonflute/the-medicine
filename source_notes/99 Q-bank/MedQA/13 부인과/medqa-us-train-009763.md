---
type: qbank
schema_version: 1
id: medqa-us-train-009763
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:64b96da356585645d9e5be81aa9c90d6c8a5033da1a721c3afacb33bba162bcf
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "다낭성 난소 증후군"
  - "고안드로겐혈증"
  - "불규칙 월경"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-uLpOuCrSDrgpzshowg7Kad7ZuE6rWwIChQb2x5Y3lzdGljIE92YXJ5IFN5bmRyb21lKS5tZA
difficulty: complex
answer: B
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
---

# MedQA US 임상문제

## 문제

다낭성난소증후군을 진단받은 22세 여성이 다모와 불규칙한 월경을 치료하고 싶다. 임신 계획은 없고 흡연, 조짐편두통, 혈전증이나 고혈압은 없다. 주기와 다모를 함께 조절할 약은?

## 선택지

A. 레트로졸
B. 저용량 복합 경구피임약
C. 류프로라이드 주사
D. 메트포르민만 투여해 다모를 우선 조절

## 해설

임신을 원하지 않고 에스트로겐 금기가 없으면 복합 경구피임약은 월경불순과 다모의 약물 치료에 쓸 수 있다. 메트포르민은 주로 대사 적응증에 맞춰 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: PCOS 월경·다모증·피임 목적의 복합 피임약 D 유지. 혈당 190을 정상으로 간과하지 않도록 보완.
- https://integration.asrm.org/practice-guidance/practice-committee-documents/recommendations-from-the-2023-international-evidence-based-guideline-for-the-assessment-and-management-of-polycystic-ovary-syndrome/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009763
- https://pmc.ncbi.nlm.nih.gov/articles/10505534/
