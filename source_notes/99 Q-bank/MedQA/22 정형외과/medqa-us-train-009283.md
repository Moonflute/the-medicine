---
type: qbank
schema_version: 1
id: medqa-us-train-009283
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6472259a202e0281e3ea77f8ba100e25360722469e7d41a91fbd4e6b4e8d894
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "Baker cyst"
  - "베이커 낭종"
  - "meniscal tear"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 남성이 무릎 뒤 안쪽에 만져지는 덩이로 왔다. 무릎을 펴면 팽팽하고 굽히면 작아진다. 관절통은 있었지만 종아리 전체 붓기는 없다. 가장 가능성 높은 진단은?

## 선택지

A. 베이커 낭종
B. 오금동맥류
C. 표재성 혈전정맥염
D. 슬개전 윤활낭염

## 해설

관절 안의 활액이 무릎 뒤 윤활낭으로 모이면 베이커 낭종이 생긴다. 무릎을 굽혀 낭종 긴장이 줄어드는 소견이 단서다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 식도이완불능/내시경 해설은 다른 증례. Baker 낭종과 반월상연골 파열 관련성 설명. 원정답 D 유지.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/bakers-cyst-popliteal-cyst/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009283
