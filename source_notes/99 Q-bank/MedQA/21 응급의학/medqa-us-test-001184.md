---
type: qbank
schema_version: 1
id: medqa-us-test-001184
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:0afe870aff43fa21f785bd866cdf24b3b9924ff1b35ed87ba088a4a03d2a1818
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "일산화탄소 중독"
  - "고압산소치료"
  - "겨울철 난방기 노출"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-ydvOyCsO2ZlO2DhOyGjCDspJHrj4UgKENhcmJvbiBNb25veGlkZSBQb2lzb25pbmcpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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

65세 여성이 일산화탄소에 노출된 뒤 혼돈과 보행실조를 보인다. 100% 산소를 투여하고 있지만 신경학적 이상이 지속된다. 추가로 긴급 협의할 처치는?

## 선택지

A. 헬리옥스
B. 니트로프루시드 정맥 주입
C. 활성탄 투여
D. 고압산소 치료

## 해설

지속하는 신경학적 이상은 고압산소 치료를 긴급히 검토할 근거다. 고압산소센터와 협의하는 동안 100% 산소 공급을 중단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 영어 원문의 얼음낚시·장작 조달 맥락 누락을 복원하고 정상 맥박산소측정으로 CO 중독을 배제할 수 없음을 명시. 신경학적 증상에서 고압산소 평가라는 B의 근거와 즉시 100% 산소 투여를 구분.
- 공식/학회 근거: https://www.cdc.gov/carbon-monoxide/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001184
- https://www.acep.org/siteassets/sites/acep/media/clinical-policies/final-cp-pdfs/carbonmonoxide3-cp.pdf
