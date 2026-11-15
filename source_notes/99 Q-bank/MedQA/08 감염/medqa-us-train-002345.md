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
question_type: monitoring
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

채혈 업무를 시작하는 의료인이 B형간염 백신 기초접종을 마쳤다. 과거에 감염된 적은 없고 면역억제제를 사용하지 않는다. 이번 접종으로 보호 항체가 생겼는지 언제 무엇으로 확인하는가?

## 선택지

A. 마지막 접종 1주 뒤 HBeAg
B. 첫 접종 당일 HBsAg
C. 첫 접종 1주 뒤 IgM 항-HBc
D. 마지막 접종 1~2개월 뒤 정량 항-HBs

## 해설


혈액 노출 위험이 있는 의료인은 기초접종 마지막 회차 1~2개월 뒤 정량 항-HBs로 면역반응을 확인한다. 항-HBs 10mIU/mL 이상이면 보호 반응으로 본다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002345 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 39세 미접종 기록·혈액노출 직업에서 HepB vaccine A 유지. 19–59세 성인 접종 및 직업 위험을 공식 권고 대조.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hepatitis-b/hcp/vaccine-administration/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002345
- https://www.cdc.gov/hepatitis-b/hcp/infection-control/index.html
