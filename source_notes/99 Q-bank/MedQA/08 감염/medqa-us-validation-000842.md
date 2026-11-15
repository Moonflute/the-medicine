---
type: qbank
schema_version: 1
id: medqa-us-validation-000842
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1d5e5b57676a7c235adc274916ffd5804e2eefc24e4b6709684f203e702ba451
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "바이러스성 뇌수막염"
  - "탈수"
  - "정맥 수액"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67CU7J2065-s7Iqk7ISxIOuHjOyImOunieyXvCAoVmlyYWwgTWVuaW5naXRpcykubWQ
question_type: management
difficulty: complex
answer: A
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
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
---

# MedQA US 임상문제

## 문제

60세 환자가 고열, 혼돈과 새로 발생한 국소 발작으로 왔다. 뇌 MRI에서 한쪽 측두엽 내측에 이상 신호가 있다. 뇌척수액 HSV PCR 결과를 기다리는 동안 시작할 치료는?

## 선택지

A. 정맥 아시클로버
B. 경구 발라시클로버
C. 정맥 간시클로버
D. PCR 양성이면 정맥 아시클로버

## 해설


발열, 의식 변화, 국소 발작과 측두엽 병변은 HSV 뇌염을 강하게 시사한다. PCR을 기다리며 치료를 미루지 말고 정맥 아시클로버를 시작한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000842 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: IV acyclovir 관련 결정성 신손상 예방 수액 A 유지. 누락 CKD·Cr1.8을 복원하고 혈압 유지 목적이나 무조건 대량 bolus로 설명하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=b1bb347d-74f4-4976-8450-a375a271718f

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000842
- https://doi.org/10.1111/ene.70647
