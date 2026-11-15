---
type: qbank
schema_version: 1
id: medqa-us-train-007422
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4e6d62abb82f4cac0420ae39a3d60a33f7b37793a3bd1603400786f129bc6603
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "거대세포바이러스 식도염"
  - "장기이식 후 감염"
  - "간시클로버"
  - "세포질 봉입체"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
question_type: management
difficulty: complex
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvQnVkZXNvbmlkZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzowOCDqsJDsl7wvR2FuY2ljbG92aXIubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
---

# MedQA US 임상문제

## 문제

신장이식 후 면역억제제를 복용 중인 환자가 삼킴통증으로 물도 마시기 어렵다. 식도 궤양 조직의 CMV 면역조직화학염색이 양성이다. 초기 치료는?

## 선택지

A. 경구 발간시클로버
B. 정맥 아시클로버
C. 정맥 간시클로버
D. 정맥 플루코나졸

## 해설


조직검사로 확인된 CMV 식도염에서 경구 투여가 불가능하거나 중증이면 정맥 간시클로버로 시작한다. 신기능에 맞춰 용량을 조정하고 혈구 수를 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007422 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CMV 식도염 ganciclovir C 유지; 핵/세포질 봉입체와 신기능·골수 독성 감시 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/cytomegalovirus

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007422
- https://doi.org/10.1097/TP.0000000000005374
