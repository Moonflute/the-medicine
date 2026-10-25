---
type: qbank
schema_version: 1
id: medqa-us-train-002036
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:09e206c1f668b1d44e4b64117c3296d3114a67cc2c1448ac04da10d07420b4a8
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "citrate toxicity"
  - "hypocalcemia"
  - "massive transfusion"
question_type: adverse_effect
related_disease_slugs:
  - MDQg64K067aE67mEL-yggOy5vOyKmO2YiOymnSAoSHlwb2NhbGNlbWlhKS5tZA
difficulty: standard
answer: C
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

45세 남성이 차에 치여 의식이 없고 GCS 3점으로 응급실에 왔다. 수액과 혈액제제로 소생했고 골반 불안정성이 있어 바인더를 적용했다. 추가 소생 후 반응이 돌아와 통증을 호소했고 약물 투여와 소생을 계속했다. 한 시간 후 입 주위와 사지의 저림을 호소한다. 다음 중 현재 증상을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 저칼륨혈증
B. 약물 합병증
C. 수혈 합병증
D. 척수 외상

## 해설

혈액제제에 포함된 시트르산이 이온화 칼슘을 결합하면 특히 대량·빠른 수혈에서 저칼슘혈증이 생길 수 있다. 이온화 칼슘 저하는 신경근 흥분성을 높여 입주위·사지 저림과 경련을 일으키므로 수혈 합병증(C)이 가장 합당하다. 신경근 전도가 단순히 저하된다는 설명은 부정확하다. 실제로는 이온화 칼슘과 다른 전해질을 측정하고 소생 상태와 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 의식불명 GCS3 뒤 말로 저림을 호소하는 사이 누락된 원문의 의식 회복·추가 소생을 복원했다. 저칼슘을 신경근 전도 저하라고 한 기전도 과흥분성으로 수정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002036
