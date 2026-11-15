---
type: qbank
schema_version: 1
id: medqa-us-test-001188
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f3f4f9aad8daf93b94d7368c1feeabb4e47ccdfdb33b16291bd8c10e19d56873
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "악성 고체온증"
  - "마취 합병증"
  - "단트롤렌"
  - "Malignant hyperthermia"
question_type: management
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

전신마취 중이던 15세 환자에게 호기말 이산화탄소가 갑자기 오르고 빈맥과 전신 근강직이 생겼다. 악성고열이 의심돼 유발 마취제를 중단하고 100% 산소 환기를 시작했다. 우선 투여할 약은?

## 선택지

A. 정맥 단트롤렌
B. 브로모크립틴
C. 시프로헵타딘
D. 날록손

## 해설

마취 중 호기말 이산화탄소의 설명되지 않는 상승과 강직은 악성고열의 초기 단서다. 고열이 확실해질 때까지 기다리지 말고 유발제 중단, 환기 보조와 함께 단트롤렌을 투여한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 악성고열증의 원인·시점을 탈수·저산소·수술 후로 잘못 적고 dantrolene을 다른 약명으로 혼동한 해설을 교체한다. 누락 정신과 약물력도 원문대로 복원한다.
- 공식/학회 근거: https://www.mhaus.org/healthcare-professionals/managing-a-crisis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001188
- https://www.emhg.org/recommendations-1/2024/11/4/recognising-and-managing-a-malignant-hyperthermia-crisis-v2024
