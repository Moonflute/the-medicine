---
type: qbank
schema_version: 1
id: medqa-us-train-005189
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f89624e2dea1057ecacd75833671c1671571cb11f8ac1ad6889f2e7f1db06bb3
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 무증상 세균뇨"
  - "대장균 요로감염"
  - "아목시실린/클라불란산"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-ustOymneyDgSDshLjqt6Drh6ggKEFzeW1wdG9tYXRpYyBCYWN0ZXJpdXJpYSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 12주 산모는 배뇨 증상이나 발열이 없지만 적절히 채취한 소변 배양에서 대장균이 100,000 CFU/mL 이상 자랐다. 가장 적절한 관리는?

## 선택지

A. 증상이 없으므로 치료하지 않는다
B. 배양 감수성에 맞는 임신 중 사용 가능한 항생제로 치료한다
C. 일단 방광경을 시행한 뒤 항생제를 결정한다
D. 치료 대신 임신 말까지 소변 시험지만 반복한다

## 해설

임신 중 유의한 무증상 세균뇨는 신우신염 위험을 줄이기 위해 치료한다. 약제는 배양과 감수성, 임신 주수에 맞춰 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 12주는 임신 1기이며 베타락탐은 2기 이후에만 사용한다는 오류 수정.
- https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/08/urinary-tract-infections-in-pregnant-individuals

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005189
- https://pubmed.ncbi.nlm.nih.gov/29637759/
- https://pubmed.ncbi.nlm.nih.gov/37473414/
