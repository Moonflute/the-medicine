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

27세 여성이 임신 32주로 정기 산전 진찰을 받으러 왔다. 임신 기간 동안 진료를 잘 따랐다. 정맥 조영제·페니실린·콩에 아나필락시스 병력이 있다. 발작 장애로 발프로산을 복용했으나 임신 중 중단했고 현재 산전 비타민, 엽산, 철분, 어유를 복용한다. 이번 진료에서 경미한 빈혈과 암시야 현미경에서 특정 병원체 양성이 확인되었다. 예방접종은 최신이고 혈당은 117 mg/dL, 혈압은 145/99 mmHg이다. 가장 적절한 처치는?

## 선택지

A. 아지스로마이신과 세프트리악손
B. 세프트리악손
C. 인슐린, 운동, 엽산, 철분
D. 페니실린

## 해설

암시야에서 매독균이 확인된 임산부는 병기에 맞는 페니실린(D) 치료가 필요하다. 원문에는 페니실린 아나필락시스 병력이 있으므로 알레르기 전문팀의 감시하 탈감작 후 투여해야 한다. 곧바로 일반 주사해도 안전하다는 뜻이 아니다. 다른 항생제가 모두 태아 독성이어서가 아니라 임신 중 선천매독 예방 효능이 입증된 표준 치료가 페니실린이기 때문이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문의 페니실린 아나필락시스 병력 복원 및 탈감작 필수 설명.
- https://www.cdc.gov/std/treatment-guidelines/syphilis-pregnancy.htm
- https://www.cdc.gov/std/treatment-guidelines/penicillin-allergy.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008011
