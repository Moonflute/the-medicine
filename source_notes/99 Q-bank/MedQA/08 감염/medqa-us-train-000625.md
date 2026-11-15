---
type: qbank
schema_version: 1
id: medqa-us-train-000625
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:718fbcd70b98f9545de7b8251688dc620db4fb5a6bc3f4f852827c1ebb9c6c80
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute myeloid leukemia"
  - "graft-versus-host disease"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
  - MTEg7Jm46rO8L-yImO2YiCDqtIDroKgg7J207Iud7Y64IOuMgCDsiJnso7wg67CY7J2RIChUcmFuc2Z1c2lvbi1Bc3NvY2lhdGVkIEdyYWZ0LXZlcnN1cy1Ib3N0IERpc2Vhc2UpLm1k
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

동종 조혈모세포이식 5주 뒤 손바닥에서 시작한 홍반성 발진이 몸통으로 퍼지고, 물설사와 직접 빌리루빈 상승이 나타났다. 가장 먼저 의심할 이식 관련 합병증은?

## 선택지

A. 급성 이식편대숙주병
B. 간굴혈관폐쇄증후군
C. 이식 후 림프증식성 질환
D. 이식 관련 혈전미세혈관병증

## 해설


동종 이식 뒤 피부 발진, 위장관 증상과 담즙정체가 함께 나타나면 급성 이식편대숙주병을 의심한다. 감염과 약물 이상반응도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000625 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 공여자 조혈모세포 이식2개월 후 피부·장·간 침범은 급성 GVHD이며 공여자 T세포가 숙주항원을 공격하는 D가 맞다. 원문·선지·해설 일치.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000625
- https://www.ncbi.nlm.nih.gov/books/NBK608233/
