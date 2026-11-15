---
type: qbank
schema_version: 1
id: medqa-us-train-006730
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ac1c88a77792f2a4b11c8a1c7ebc5e6d3546efd05ef6ce21a2a63c16fcfb70c2
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "급성 경막하혈종"
  - "뇌탈출"
  - "동측 편마비"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4ztg4jstpwgKEJyYWluIGhlcm5pYXRpb24pLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

와파린을 복용 중인 62세 환자가 낙상 뒤 혼수에 빠졌다. CT에서 큰 급성 경막하혈종과 정중선 이동이 있고 INR은 3.5다. 기도 확보와 응급 수술 준비를 진행하면서 시행할 항응고 역전은?

## 선택지

A. 정맥 비타민 K만 투여하고 효과를 기다린다
B. 프로타민을 투여한다
C. 4인자 프로트롬빈복합체와 정맥 비타민 K를 투여한다
D. 이다루시주맙을 투여한다

## 해설

와파린 관련 두개내출혈에서는 4인자 프로트롬빈복합체로 신속히 역전하고, 정맥 비타민 K로 효과를 유지한다. 응급 신경외과 처치를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 우측 경막하혈종과 같은 쪽 편마비 D의 근거를 Kernohan 절흔에 의한 반대쪽 대뇌각 압박으로 교정. 우반구 병변이 직접 우측 약화를 만든다는 오류 제거.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC3895529/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006730
- https://doi.org/10.1097/CCM.0000000000002057
- https://braintrauma.org/coma/guidelines/surgical
