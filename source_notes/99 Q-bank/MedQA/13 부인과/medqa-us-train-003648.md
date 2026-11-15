---
type: qbank
schema_version: 1
id: medqa-us-train-003648
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:71112823707f49fab191d9e36b45c915a2f37dc0ac37b42f9983afadca2f3d56
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "endometriosis"
  - "thoracic endometriosis"
  - "dysmenorrhea"
  - "laparoscopy"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nspp0gKEVuZG9tZXRyaW9zaXMpLm1k
  - MTMg67aA7J246rO8L-yblOqyve2GtSAoRHlzbWVub3JyaGVhKS5tZA
difficulty: complex
answer: C
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

29세 여성이 지난 세 주기마다 월경이 시작된 뒤 이틀 안에 오른쪽 기흉을 겪었다. 월경통과 깊은 성교통으로 자궁내막증을 평가 중이다. 재발과 관련해 의심할 원인은?

## 선택지

A. 급성 골반염에 동반된 간주위염
B. 임신 중 폐동맥 색전증
C. 흉부 자궁내막증에 의한 월경성 기흉
D. 자궁선근증에 의한 폐부종

## 해설

월경 시작 전후로 반복되는 기흉은 흉부 자궁내막증을 시사한다. 급성 기흉을 먼저 치료하고 부인과·흉부외과가 원인 평가와 재발 예방을 함께 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 자궁내막증진단에항상복강경필수라는일반화교정. 확진방법을묻는선지C유지.
- https://www.nice.org.uk/guidance/ng73/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003648
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11788693/
- https://www.eshre.eu/guideline/endometriosis
