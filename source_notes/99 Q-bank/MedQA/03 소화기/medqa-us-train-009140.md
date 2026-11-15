---
type: qbank
schema_version: 1
id: medqa-us-train-009140
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f04e5c0687599deec0f1b248ff56029a4f0b4442560dfa39b78ee80a20c1038e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acetaminophen toxicity"
  - "아세트아미노펜 독성"
  - "acute liver failure"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_soITqsqnshLEg6rCE7Je8IChGdWxtaW5hbnQgSGVwYXRpdGlzKS5tZA
  - MjEg7J2R6riJ7J2Y7ZWZL-yVhOyEuO2KuOyVhOuvuOuFuO2OnCDspJHrj4UgKEFjZXRhbWlub3BoZW4gUG9pc29uaW5nKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
---

# MedQA US 임상문제

## 문제

57세 남성이 통증 때문에 아세트아미노펜이 든 진통제 두 종류를 수일간 겹쳐서 복용했다. 누적 복용량과 마지막 복용 시점은 불확실하다. 오심과 우상복부 통증이 있고 AST 1,110 U/L, INR 2.0이다. 추가 검사 결과를 기다리는 동안 시작할 치료는?

## 선택지

A. 활성탄 단독
B. 정맥 비타민 K 단독
C. 혈중 약물 농도가 나올 때까지 해독제 보류
D. N-아세틸시스테인

## 해설


여러 날에 걸친 아세트아미노펜 과량 복용이 의심되고 이미 간손상이 있으면 해독제 투여를 늦추지 않는다. 단회 급성 복용에 쓰는 시간–농도 노모그램으로 반복 복용을 평가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009140 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 약물 선택지에서 acetaminophen이 가능한 간독성 노출이지만 복용량·농도·뇌병증 없이 독성 또는 급성간부전 확진하지 않도록 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.aasld.org/sites/default/files/2022-07/AcuteLiverFailureUpdate201journalformat1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009140
- https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2808062
