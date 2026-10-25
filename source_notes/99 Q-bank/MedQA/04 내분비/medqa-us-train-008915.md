---
type: qbank
schema_version: 1
id: medqa-us-train-008915
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ac1c99e7e82ec2a981c16dda33d0537270bf4af602ea3ce8ac1cf40519194dad
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "levothyroxine in pregnancy"
  - "hypothyroidism"
  - "dose adjustment"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
---

# MedQA US 임상문제

## 문제

32세 여성이 약물에 대한 상담을 위해 내원했다. 최근 임신 사실을 알고 약을 바꿔야 하는지 묻는다. 갑상선기능저하증으로 레보티록신을 복용하며 다른 약은 없다. 소변 임신검사는 양성이다. 임신 중 약물에 대해 어떻게 권고해야 하는가?

## 선택지

A. 즉시 약을 중단한다
B. 약물 용량을 30% 늘린다
C. 다른 약으로 변경한다
D. 태아 위험과 산모 이득을 평가해 결정한다

## 해설


정답 B. 이미 LT4로 치료 중인 갑상선기능저하 환자는 임신 확인 시 보통 약25%(선택지의 약30%) 초기 증량을 고려하고 담당의에게 즉시 알려 검사와 개별 조정을 받는다. 2026 ATA는 임신 전 TSH·용량에 따라 과치료 가능성도 고려하도록 한다. 임신 전반부에는 대개 약4주 간격으로 갑상선 기능을 추적하며 모든 환자에게 동일 비율을 끝까지 고정하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008915 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 임신 LT4 증량 B는 약25%(20–30%)의 초기 근사치이며 2026 ATA의 과치료 위험·추적 원칙 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://journals.sagepub.com/doi/pdf/10.1177/10507256261445624?download=true

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008915
