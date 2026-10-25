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
answer: D
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

임신 12주인 23세 임신 2회·출산 1회의 여자가 첫 산전 진료를 받으러 왔다. 소변 시험지에서 백혈구에스터라제와 아질산염이 양성이고 소변배양에서 대장균이 100,000 CFU/mL 이상 자랐다. 다음 중 가장 적절한 처치는?

## 선택지

A. 겐타마이신 투여
B. 신장 초음파
C. 방광경검사
D. 아목시실린/클라불란산 투여

## 해설

임신 중 무증상 E. coli 세균뇨 ≥100,000 CFU/mL는 치료 대상이다. 제시된 경구 약제 중 아목시실린/클라불란산(D)을 감수성이 확인된 경우 사용할 수 있다. 12주부터 치료를 미뤄야 하는 것은 아니며 보통 5–7일 표적 치료한다. 내성이 흔하므로 배양·감수성에 맞추고 합병증 없는 세균뇨에 방광경·정맥 겐타마이신을 일률 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 12주는 임신 1기이며 베타락탐은 2기 이후에만 사용한다는 오류 수정.
- https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/08/urinary-tract-infections-in-pregnant-individuals

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005189
