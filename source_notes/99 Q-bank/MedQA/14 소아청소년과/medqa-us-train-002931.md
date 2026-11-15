---
type: qbank
schema_version: 1
id: medqa-us-train-002931
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d72420f5db92efbf896e0f1e5fec1a09f5a7783f8ed02e9a4a82097bae3be62b
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "hyper-IgM syndrome"
  - "CD40 ligand deficiency"
  - "Pneumocystis jirovecii pneumonia"
  - "immunodeficiency"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KSR7KadIOuzte2VqSDrqbTsl60g6rKw7ZWN7KadIChTZXZlcmUgQ29tYmluZWQgSW1tdW5vZGVmaWNpZW5jeSkubWQ
  - MDgg6rCQ7Je8L-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-qzoElnTSDspp3tm4TqtbAgKEh5cGVyLUlnTSBTeW5kcm9tZSkubWQ
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

6개월 남아가 폐포자충 폐렴을 앓았다. 혈청 IgG와 IgA는 매우 낮지만 IgM은 높고, B세포 수는 정상이다. B세포의 항체 종류 전환 장애가 의심된다. 우선 확인할 유전자는?

## 선택지

A. BTK
B. CD40LG
C. CYBB
D. WAS

## 해설

IgM은 유지되거나 높으면서 IgG·IgA가 낮고 폐포자충처럼 기회감염이 생기면 CD40 리간드 결핍을 의심한다. BTK 결핍과 달리 B세포 수가 보존될 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 기전 정답은 유지하고 methenamine silver stain의 중복된 오역을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002931
- https://www.ncbi.nlm.nih.gov/books/NBK1402/
