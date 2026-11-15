---
type: qbank
schema_version: 1
id: medqa-us-validation-001258
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3cb9c4442c9903d66e6214d77547b5000aa285fbe3823f7ea9f1a793530ee86b
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "경막외혈종"
  - "측두골 골절"
  - "개두술"
question_type: management
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-y4oeuRkOqzqOqzqOygiCAoVGVtcG9yYWwgYm9uZSBmcmFjdHVyZSkubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 환자가 두부외상 직후 잠시 의식을 잃고 회복했다가 다시 급격히 악화했다. 기도는 확보했다. CT에서 35 mL의 렌즈 모양 경막외혈종과 정중선 이동이 있고, 혈종 쪽 동공이 확대됐다. 다음 처치는?

## 선택지

A. 연속 신경학적 진찰과 추적 CT만 시행한다
B. 덱사메타손을 먼저 투여하고 반응을 본다
C. 신경외과에서 즉시 수술로 혈종을 제거한다
D. 뇌 MRI로 혈종 경계를 확인한 뒤 수술 여부를 정한다

## 해설

큰 외상성 경막외혈종과 급격한 의식 저하·동공 비대칭은 뇌탈출 위험을 뜻한다. 응급 신경외과적 혈종 제거를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 외상후 악화와 단측 산동의 두개내압/탈출 기전을 교정. 누락 CT보다 임상 악화로 C 유지.
- 공식/학회 근거: https://ww2.facs.org/media/vgfgjpfk/best-practices-guidelines-traumatic-brain-injury.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001258
- https://braintrauma.org/coma/guidelines/surgical
