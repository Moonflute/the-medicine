---
type: qbank
schema_version: 1
id: medqa-us-test-000935
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:71c9c7f1534088594a52a69f8580e77377c5e55250f79b0f282d190c743b2c24
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "위선암"
  - "호스피스"
  - "완화의료"
question_type: ethics
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

76세 남성이 6개월간 소화불량과 체중 감소로 진료를 받으러 왔다. 중증 질환 병력이나 복용약은 없었다. 내시경과 생검에서 위선암이 확인되었다. 추가 검사와 병기 설정 전에 결과를 설명하자 환자는 화학요법, 방사선치료, 수술 등 생명 연장 치료를 모두 거부하고 의료비 부담이 크지 않은 적절한 완화의료를 원했다. 호스피스 자격에 대해 가장 적절한 다음 단계는?

## 선택지

A. 생명 연장 치료를 시험한다
B. 치료하지 않았을 때의 기대수명을 판단한다
C. 전이 여부를 확인한다
D. 이미 호스피스 자격이 있으므로 추가 단계가 필요 없다

## 해설


호스피스 자격은 기대수명 ≤6개월이며, 치료를 거부한 경우 환자의 예상 생존 기간을 판단해 자격을 확인한다. 위암 말기 환자가 모든 연명 치료를 거부했으므로, 먼저 기대수명을 평가하는 것이 다음 단계이다. 전이 여부 확인은 이미 치료 거부 상황에서 우선순위가 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000935
