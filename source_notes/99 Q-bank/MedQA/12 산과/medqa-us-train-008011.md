---
type: qbank
schema_version: 1
id: medqa-us-train-008011
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0b929dc069ebbd76adf1164af8aebd295933549675d67966c62ed4a945c6fb94
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "maternal syphilis"
  - "dark-field microscopy"
  - "penicillin treatment in pregnancy"
  - "Syphilis"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISg7LKcIOunpOuPhSAoQ29uZ2VuaXRhbCBTeXBoaWxpcykubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 32주인 27세 여성에게 손바닥과 발바닥을 포함한 전신 발진이 생겼다. RPR과 트레포네마 검사가 모두 양성이어서 2기 매독으로 진단됐다. 이전에 페니실린을 맞고 아나필락시스를 겪었다. 적절한 치료는?

## 선택지

A. 아지스로마이신으로 대체한다
B. 독시사이클린으로 대체한다
C. 출산할 때까지 치료를 미룬다
D. 감시 가능한 환경에서 페니실린 탈감작 후 벤자틴 페니실린 G를 투여한다

## 해설

임신 중 매독은 산모 치료뿐 아니라 선천매독을 예방해야 하므로 병기에 맞는 페니실린 치료가 표준이다. 즉시형 중증 알레르기 병력이 있다면 전문팀이 감시하는 환경에서 탈감작한 뒤 투여한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문의 페니실린 아나필락시스 병력 복원 및 탈감작 필수 설명.
- https://www.cdc.gov/std/treatment-guidelines/syphilis-pregnancy.htm
- https://www.cdc.gov/std/treatment-guidelines/penicillin-allergy.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008011
- 질병관리청·대한요로생식기감염학회 성매개감염 진료지침(2023), 임신부 매독: https://stiguide.kr/pdf-files/
