---
type: qbank
schema_version: 1
id: medqa-us-train-008351
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:416dc928c2dd4abcdc6a3e236a19ce662ab2bb872ad621d0a7d7bcfed492fb4f
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "chalazion"
  - "persistent eyelid nodule"
  - "sebaceous carcinoma exclusion"
question_type: investigation
related_disease_slugs:
  - MTgg7JWI6rO8L-y9qeuLpOuemOuBvCAoY2hhbGF6aW9uKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

45세 남자가 6개월 동안 지속된 좌측 상안검의 서서히 커지는 결절로 내원했다. 온찜질에도 지속되며 눈꺼풀이 무겁고 시야가 약간 흐려진다. 좌측 상안검 중앙에 고무 같은 무통성 결절이 있고 눈꺼풀을 뒤집으면 더 잘 보인다. 가장 적절한 다음 처치는?

## 선택지

A. 눈꺼풀 위생
B. 냉동치료
C. 생검
D. 모스 미세도식수술

## 해설


지속적인 안검 결절은 악성 가능성을 배제하기 위해 조직검사가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 6개월 지속·점차 성장·온찜질 불응의 상안검 결절은 악성 모방병변 배제를 위한 조직검사 C가 제시된 선택지 중 적절. 영어/한글 본문·선지·해설을 개별 대조. 모든 단순 산립종에 자동 생검하라는 뜻은 아님.
- 공식/학회 근거: https://eyewiki.aao.org/Chalazion

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008351
