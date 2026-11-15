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
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

68세 환자가 같은 윗눈꺼풀 위치에서 산립종으로 두 번 치료받았지만 결절이 반복됐다. 이번에는 속눈썹도 빠지고 눈꺼풀 가장자리가 불규칙하다. 다음 조치는?

## 선택지

A. 온찜질만 다시 수개월 한다
B. 항히스타민 점안을 시작한다
C. 일반 산립종으로 보고 배액만 반복한다
D. 안과에서 조직검사로 피지샘암 등 종양을 배제한다

## 해설


같은 위치에서 반복되는 결절에 속눈썹 소실과 형태 변화가 있으면 종양을 의심한다. 일반 산립종처럼 계속 치료하지 말고 조직 진단을 진행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 6개월 지속·점차 성장·온찜질 불응의 상안검 결절은 악성 모방병변 배제를 위한 조직검사 C가 제시된 선택지 중 적절. 영어/한글 본문·선지·해설을 개별 대조. 모든 단순 산립종에 자동 생검하라는 뜻은 아님.
- 공식/학회 근거: https://eyewiki.aao.org/Chalazion

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008351
- https://www.aao.org/eyenet/article/diagnosis-management-of-sebaceous-carcinoma-of-eye
