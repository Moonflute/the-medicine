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

정신병적 증상을 동반한 주요우울장애로 sertraline과 haloperidol을 복용 중인 15세 남아가 8시간 동안 심한 복통과 녹색 구토를 하여 응급실에 왔다. 급성 충수염으로 응급 복강경 충수절제술을 시행했으며 충수는 괴사되고 천공되어 골반에 고름이 있었다. 충수 기저부를 결찰한 직후 근육경직과 심한 발한, 체온 39.1°C(102.4°F), 맥박 130회/분, 호기말 CO₂ 85 mmHg가 발생했다. 가장 적절한 치료는?

## 선택지

A. 단트롤렌
B. 브로모크립틴
C. 시프로헵타딘
D. 외과적 색전절제술

## 해설

마취 중 갑자기 발생한 근강직·빈맥·고체온과 현저한 호기말 CO₂ 상승은 악성고열증을 강하게 시사한다. 감수성 환자에서 휘발성 마취제·succinylcholine 등이 유발할 수 있고, dantrolene(A)이 근소포체 칼슘 방출을 억제한다. 유발제를 중단하고 100% 산소 환기·냉각 등 소생과 함께 신속히 투여한다. Dantrolene은 desipramine과 다른 약이며 탈수·저산소가 정의적 유발 원인은 아니다. Haloperidol·sertraline 병력도 감별에 고려하되 수술 중 CO₂ 급상승·강직의 시간 양상이 중요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 악성고열증의 원인·시점을 탈수·저산소·수술 후로 잘못 적고 dantrolene을 다른 약명으로 혼동한 해설을 교체한다. 누락 정신과 약물력도 원문대로 복원한다.
- 공식/학회 근거: https://www.mhaus.org/healthcare-professionals/managing-a-crisis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001188
