---
type: qbank
schema_version: 1
id: medqa-us-train-008113
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c681777598d95ea67ae6e2c3b46e388a64fb6a10368645276bc9385c1454bab7
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "Lynch syndrome"
  - "MLH1 MSH2 mutation"
  - "endometrial and ovarian cancer prophylaxis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nslZQgKEVuZG9tZXRyaWFsIENhbmNlcikubWQ
question_type: prevention
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NlbGVjb3hpYi5tZA
---

# MedQA US 임상문제

## 문제

42세 여성에게 병적 MSH2 변이가 확인됐다. 출산을 마쳤고 더 임신할 계획은 없다. 대장내시경 감시와 별도로 린치증후군 관련 부인암 위험을 줄이기 위해 논의할 수술은?

## 선택지

A. 예방적 양측 유방절제술
B. 난관절제술로 모든 자궁내막암 위험 제거
C. 위험감소 자궁절제술 및 양측 난관난소절제술
D. 자궁내막 소작술

## 해설


MSH2 관련 린치증후군에서는 자궁내막암과 난소암 위험을 같이 고려한다. 출산 계획이 끝나면 위험감소 자궁절제술과 양측 난관난소절제술을 상담하되 시기는 변이별 위험과 수술로 인한 조기폐경의 영향을 반영한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008113 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Lynch 예방수술 A는일생중고려이나34세현재즉시일률시행아님. 출산계획·유전자·조기폐경위험에따른시기명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://integration.asrm.org/globalassets/_asrm/practice-guidance/practice-guidelines/pdf/reproductive_and_hormonal_considerations.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008113
- https://www.ncbi.nlm.nih.gov/books/NBK1211/
