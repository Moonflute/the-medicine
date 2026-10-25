---
type: qbank
schema_version: 1
id: medqa-us-train-002345
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bc04eafc78148ddcb2805f3867145af030178d572db25f664f19c73c201525d9
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "hepatitis B vaccination"
  - "healthcare worker"
  - "occupational exposure"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
---

# MedQA US 임상문제

## 문제

39세 여성이 체중 증가로 가정의학과에 내원했다. 건강한 식사와 규칙적인 운동에도 대부분의 날 피곤하다. 23년간 하루 담배 반 갑을 피웠고, 적십자에서 사혈사로 일한다. 고지혈증으로 아토르바스타틴을 복용하고 예방접종 기록은 없다. BMI 33 kg/m², 혈압 128/78 mmHg이다. 다음 중 현재 적절할 수 있는 예방접종 권고는?

## 선택지

A. B형간염 예방접종
B. 저선량 흉부 CT
C. C형간염 예방접종
D. 대상포진 예방접종

## 해설


환자는 의료 종사자로서 혈액 매개 감염 위험이 높으며, B형 간염은 예방접종으로 효과적으로 차단된다. 다른 선택지는 현재 상황과 연관성이 낮다. 따라서 B형 간염 예방접종이 적절하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002345 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 39세 미접종 기록·혈액노출 직업에서 HepB vaccine A 유지. 19–59세 성인 접종 및 직업 위험을 공식 권고 대조.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hepatitis-b/hcp/vaccine-administration/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002345
