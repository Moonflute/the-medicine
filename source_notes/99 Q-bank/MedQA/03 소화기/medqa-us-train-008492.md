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
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
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


정맥 약물·국제여행·성접촉은 바이러스성 간염 노출을 평가하는 직접적인 단서여서 선택지 중 상대적으로 관련성이 낮은 것은 흡연력(D)이다. 그렇다고 흡연이 간질환에 아무 영향도 없거나 일반 건강평가에서 흡연 병력을 생략한다는 뜻은 아니다. 음주·약물·대사질환 등 간효소 상승의 다른 원인도 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008492 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 간염 노출력 중심 선택지에서 상대적으로 직접성이 낮은 smoking D 유지. 흡연이 간효소에 전혀 영향 없고 병력을 생략해도 된다는 과도한 단정 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008492
