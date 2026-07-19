---
type: qbank
schema_version: 1
id: medqa-us-train-008492
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e0b9a2c93d0fbe8454d020a27fdccc5833aa5183806a6c813f459baadf577fca
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "elevated transaminases"
  - "hepatitis evaluation"
  - "liver disease history"
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

고혈압과 천식 병력이 있는 46세 여성이 건강 유지 방문을 위해 일차진료를 받으러 왔다. 현재 불편한 증상은 없고 전반적으로 매우 건강하다고 느낀다. 의사가 시행한 정기 혈액검사에서 트랜스아미나제가 상승해 있었다. 의사는 다음 중 어느 항목을 제외한 모든 항목에 대해 추가 병력을 확인해야 하는가?

## 선택지

A. 정맥 약물 사용
B. 해외 여행
C. 성생활 방식
D. 흡연력

## 해설


트랜스아미나제 상승은 간 손상을 시사하므로 알코올, 약물, 바이러스 등 모든 위험 요인을 확인해야 한다. 흡연은 간 효소에 직접적인 영향을 주지 않으므로 제외하고, 나머지 항목(정맥 약물, 해외 여행, 성생활)은 모두 간 질환 위험 요인이 될 수 있다. 따라서 흡연력만 제외하면 된다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008492
