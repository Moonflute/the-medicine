---
type: qbank
schema_version: 1
id: medqa-us-train-006208
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e561cf635eef8d9493eb21465298ffcce687d4c801ae670dcbde5591529a0f26
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "호중구감소성 발열"
  - "급성 골수성 백혈병"
  - "광범위 항녹농균 항생제"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2FzcG9mdW5naW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFsYWN5Y2xvdmlyLm1k
---

# MedQA US 임상문제

## 문제

급성 골수성 백혈병 유도항암 환자의 체온은 38.8°C, 절대호중구수는 320/μL다. 혈압은 안정적이나 호중구감소가 더 지속될 것으로 예상되고 뚜렷한 감염 부위는 없다. 혈액배양을 채취한 직후 시작할 치료는?

## 선택지

A. 정맥 반코마이신 단독
B. 경구 아목시실린/클라불란산 단독
C. 정맥 세페핌
D. 혈액배양이 양성이 될 때까지 기다린 뒤 표적 치료

## 해설


백혈병 유도항암 중 열이 난 호중구감소 환자는 고위험이다. 지체 없이 세페핌 등 녹농균을 포괄하는 정맥 베타락탐을 시작하며, 감염 초점과 내성 위험에 따라 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006208 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 40%를 정상 호중구로 오해하지 않도록 ANC320 계산 및 imipenem-cilastatin 조합 맥락 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/neutropenic-patients-with-cancer/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006208
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3110859/
