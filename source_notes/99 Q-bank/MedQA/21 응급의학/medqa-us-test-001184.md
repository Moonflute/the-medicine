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
answer: B
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

65세 여성이 호숫가 오두막에서 남편에게 혼돈, 오심, 두통, 초조 상태로 발견되어 응급실에 왔다. 남편이 얼음낚시를 하고 장작을 더 구하러 6시간 전 오두막을 떠날 때까지는 증상이 없었고 혈압약이 떨어져 복용하지 못했다. 혈압 154/92 mmHg, 맥박 110회/분, 산소포화도 98%였고 사람과 장소만 지남력이 있으며 5분 후 세 물건 중 하나만 기억하고 보행이 불안정했다. 가장 효과적인 처치는?

## 선택지

A. 정맥 니트로프루시드
B. 고압산소요법
C. 100% 산소요법
D. 헬리옥스 요법

## 해설

추운 시기의 오두막, 장작 사용을 시사하는 환경, 두통·오심·혼돈·기억장애·실조는 일산화탄소 중독을 의심하게 한다. 일반 맥박산소측정기 수치가 98%여도 일산화탄소헤모글로빈을 구별하지 못하므로 중독을 배제하지 못한다. 고농도 100% 산소를 즉시 투여하면서 노출력과 CO-oximetry를 확인하고, 이 환자처럼 신경학적 이상이 있으면 고압산소 치료 B를 긴급 검토한다. 모든 CO 노출에 고압산소가 일률적으로 필요한 것은 아니며, 본문에서 실제 저산소혈증이 측정되었다고 표현해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 영어 원문의 얼음낚시·장작 조달 맥락 누락을 복원하고 정상 맥박산소측정으로 CO 중독을 배제할 수 없음을 명시. 신경학적 증상에서 고압산소 평가라는 B의 근거와 즉시 100% 산소 투여를 구분.
- 공식/학회 근거: https://www.cdc.gov/carbon-monoxide/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001184
