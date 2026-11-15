---
type: qbank
schema_version: 1
id: medqa-us-train-000321
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a8ed7a4f156810cff381bc7127e33f5fb8c7cacb0f5290bc659f472476cdfb4d
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "rheumatoid arthritis"
  - "Felty syndrome"
  - "methotrexate toxicity"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: management
difficulty: complex
answer: C
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
---

# MedQA US 임상문제

## 문제

류마티스관절염이 있는 62세 남성이 주 1회 처방된 메토트렉세이트를 실수로 매일 복용했다. 입안 궤양과 심한 범혈구감소가 생겨 약을 중단하고 응급 입원했다. 중증 독성에서 사용할 구제 약제는?

## 선택지

A. 아미포스틴
B. 피리독신
C. 류코보린
D. 메스나

## 해설


중증 메토트렉세이트 독성에서는 폴린산인 류코보린으로 구제 치료를 한다. 일상적 예방용 엽산과 구별하며, 감염·신기능·혈구도 신속히 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-000321`와 직접 대조했다.
- 판정: RA 약물 변경 뒤 범혈구감소는 MTX 독성 가능성. C 유지; 혈소판만이 아닌 범혈구감소와 folinic acid 명칭·보충 취지 명료화.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/9273041/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000321
- https://pubmed.ncbi.nlm.nih.gov/37208770/
