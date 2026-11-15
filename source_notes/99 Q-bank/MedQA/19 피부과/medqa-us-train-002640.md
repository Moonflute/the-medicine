---
type: qbank
schema_version: 1
id: medqa-us-train-002640
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:64a2aaff336cc21059152f442e873e0ae28535146e9502d99d9c9640da7a3d04
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "bullous pemphigoid"
  - "subepidermal blister"
  - "linear IgG and C3 deposition"
  - "Bullous pemphigoid"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남성이 몇 달간 가려운 뒤 몸통과 팔에 팽팽한 물집이 다수 생겼다. 구강 점막은 정상이다. 병변 주변 피부의 직접면역형광에서 예상되는 소견은?

## 선택지

A. 기저막을 따라 선형 IgG와 C3 침착
B. 표피 세포 사이 그물 모양 IgG 침착
C. 진피 유두의 과립형 IgA 침착
D. 혈관벽의 IgA 침착

## 해설

수포성 유사천포창은 노년층에서 심한 가려움과 팽팽한 수포를 보인다. 표피 아래에 수포가 생기고 직접면역형광에서는 기저막을 따라 선형 IgG/C3가 보인다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 노인의 소양·팽팽한 수포 및 선형 IgG/C3 C는 맞고 수포성 유사천포창을 구진-수포증으로 잘못 번역한 해설을 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002640
