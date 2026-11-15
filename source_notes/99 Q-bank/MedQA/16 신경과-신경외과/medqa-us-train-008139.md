---
type: qbank
schema_version: 1
id: medqa-us-train-008139
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1fc475fc3885bd21c4376d91f6c6e47b39244182a5625da60a0cbf045beff69e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "migraine without aura"
  - "acute migraine treatment"
  - "triptan"
  - "migraine"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjrjrkZDthrUgKE1pZ3JhaW5lKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 환자가 반복되는 편두통의 평소와 같은 발작으로 내원했다. 치료 초기에 나프록센을 복용해도 통증이 계속된다. 심뇌혈관질환이나 조절되지 않는 고혈압은 없다. 발작 치료에 사용할 약은?

## 선택지

A. 수마트립탄
B. 프로프라놀롤
C. 토피라메이트
D. 아미트립틸린

## 해설

단순 진통제에 충분히 반응하지 않는 편두통 발작에서는 금기를 확인하고 트립탄을 사용할 수 있다. 나머지 약은 예방에 사용하는 선택지다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 트립탄 D 유지. D2 차단제는 편두통 급성 치료에 전혀 적합하지 않다는 오류 제거.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg150/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008139
- https://www.nice.org.uk/guidance/cg150/chapter/recommendations
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=201900721
