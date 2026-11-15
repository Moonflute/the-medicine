---
type: qbank
schema_version: 1
id: medqa-us-train-008560
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2ca01a3ef4734aa6b55bac1ea72b87857406e040217d6f1f12b02fa9c1a72aa9
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "short cervix"
  - "preterm birth prevention"
  - "vaginal progesterone"
question_type: prevention
related_disease_slugs:
  - MTIg7IKw6rO8L-yhsOyCsCAoUHJldGVybSBiaXJ0aCkubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

과거 자연 조산이 없는 초임부가 임신 20주 단태임신으로 평가받았다. 질식 초음파에서 자궁경부 길이는 18 mm다. 경부는 닫혀 있고 진통이나 양막파수는 없다. 조산 위험을 낮추는 처치는?

## 선택지

A. 질 프로게스테론을 사용한다
B. 경부가 닫혀 있어도 응급 봉축술을 우선 시행한다
C. 장기간 침상안정만 처방한다
D. 진통이 없지만 정맥 자궁수축억제제를 투여한다

## 해설


자연 조산 병력이 없는 단태임신에서 24주 전 경부 길이가 20 mm 이하라면 질 프로게스테론을 권고한다. 경부 개대가 없는 짧은 자궁경부와 경부가 이미 열린 상황을 구분한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008560
- https://pubmed.ncbi.nlm.nih.gov/38754603/
