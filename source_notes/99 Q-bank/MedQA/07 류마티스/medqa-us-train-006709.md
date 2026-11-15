---
type: qbank
schema_version: 1
id: medqa-us-train-006709
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:461eeadb58a24b357fa9c87b14fe0684097f69b886f41bba0241511c2ae4973c
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "결절성 다발동맥염"
  - "B형간염 관련 혈관염"
  - "중간 크기 동맥염"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

만성 B형간염이 있는 50세 남성에게 내장 허혈이 의심되는 식후 복통, 새 고혈압과 한쪽 발처짐이 생겼다. 복부 혈관 영상에서 신장·장간막 중간 크기 동맥에 여러 미세동맥류가 보이고 소변에 적혈구 원주는 없다. 진단은?

## 선택지

A. 다카야수 동맥염
B. 현미경적 다발혈관염
C. 결절성 다발동맥염
D. 항사구체기저막 질환

## 해설


중간 크기 동맥의 미세동맥류, 장간막 증상과 다발단일신경병증은 결절성 다발동맥염을 지지한다. 신장 침범은 주로 동맥 허혈·고혈압이며 사구체신염이 전형적이지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006709 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HBV·전신 염증·하지궤양·고혈압과 ANCA 음성의 중간동맥 혈관염은 PAN C를 지지한다. 원문·해설 직접 대조; PAN의 신장침범을 사구체신염으로 일반화하지 않는다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006709
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12323812/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13430407/
