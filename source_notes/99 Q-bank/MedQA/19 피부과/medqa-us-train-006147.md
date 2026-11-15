---
type: qbank
schema_version: 1
id: medqa-us-train-006147
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dac620470edd3c1153d8373a2646cc3442d5bc01c6c7f528a26179cf0d3ece47
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "포르피리아 피부근육증"
  - "소변 유로포르피린"
  - "광과민성 수포"
  - "porphyria cutanea tarda"
question_type: investigation
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

51세 남성이 나프록센을 복용하기 시작한 뒤 햇빛에 노출되는 양손등에 물집과 흰색 작은 돌기, 흉터가 생겼다. 만발성 피부 포르피린증과 약물 유발 가성포르피린증을 구별할 검사는?

## 선택지

A. 소변 포르피린 분획 검사
B. 항핵항체 검사
C. 혈청 BP180 항체 검사
D. 단순포진바이러스 PCR

## 해설

두 병은 피부 모양이 비슷하지만 만발성 피부 포르피린증에서는 소변 포르피린 분획이 비정상적으로 증가하며, 가성포르피린증에서는 대개 정상이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Naproxen 관련 pseudoporphyria 감별을 놓치고 PCT로 확정한 설명을 교체한다. 소변 porphyrin 검사 C는 유지한다.
- 공식/학회 근거: https://www.bad.org.uk/pils/porphyria-cutanea-tarda
- 공식/학회 근거: https://www.pcds.org.uk/clinical-guidance/porphyria

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006147
