---
type: qbank
schema_version: 1
id: medqa-us-validation-000334
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:24fd5e6aeec97f93819cdbaa5344b697cbe9be51cf5764a33a8cc2d43242bd89
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "일산화탄소 중독"
  - "자동차 배기가스 노출"
  - "고압산소 치료"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-ydvOyCsO2ZlO2DhOyGjCDspJHrj4UgKENhcmJvbiBNb25veGlkZSBQb2lzb25pbmcpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 남성이 두통, 메스꺼움, 어지러움으로 응급실에 왔다. 집에서 자동차를 수리하던 중 어지럽고 두통이 시작되었고 메스꺼움으로 진행되었다. 집 안에서 물을 마시자 호전되었지만 다시 자동차 작업을 시작하자 재발했다. 내원 시 대부분 호전되었으나 두통은 지속된다. 활력징후와 신경학적 진찰은 정상이다. 가장 적절한 다음 처치는?

## 선택지

A. 100% 산소
B. CT
C. 히드록소코발라민
D. 이부프로펜과 아세트아미노펜

## 해설

자동차 작업 중 반복되는 두통·어지럼·구역은 일산화탄소 노출을 의심하게 한다. 즉시 노출을 중단하고 100% 산소(A)를 공급하며 COHb와 임상 상태를 평가한다. 일반 맥박산소측정치가 정상이어도 일산화탄소 중독을 배제할 수 없다. 이 산소 치료가 반드시 고압산소 치료를 뜻하는 것은 아니며, 고압산소는 신경·심장 증상, 중증 산증, 임신 등 중증도와 적응증에 따라 별도로 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 일산화탄소 중독의 100% 산소 A를 유지하되 모든 환자에게 고압산소가 필수라는 오류를 교정한다.
- 공식/학회 근거: https://www.cdc.gov/carbon-monoxide/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000334
