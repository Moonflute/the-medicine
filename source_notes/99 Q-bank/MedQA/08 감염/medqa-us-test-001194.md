---
type: qbank
schema_version: 1
id: medqa-us-test-001194
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:8df38e1070ea44241b5f7563b9d0f6a45202ff55b6743bdba7b725abe44c4560
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV/AIDS"
  - "CD4 감소"
  - "기회감염 예방"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: prevention
difficulty: simple
answer: C
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1waG90ZXJpY2luQi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

HIV 환자의 CD4가 41/μL다. 치료 경험이 없지만 오늘부터 바이러스 억제가 기대되는 항레트로바이러스 치료를 시작하기로 했다. 발열·체중감소는 없다. 폐포자충 예방은 별도로 시작했다. 파종성 MAC의 일차 예방에 대한 판단은?

## 선택지

A. CD4가 50/μL 미만이면 항레트로바이러스 치료 여부와 무관하게 모두 아지트로마이신을 시작한다
B. MAC 감염 소견이 없어도 에탐부톨을 단독 투여한다
C. 효과적인 항레트로바이러스 치료를 즉시 시작하면 일률적인 MAC 예방 항생제를 추가하지 않는다
D. MAC 예방 항생제를 먼저 투여한 뒤 항레트로바이러스 치료는 6주 미룬다

## 해설


CD4가 50/μL 미만이어도 효과적인 항레트로바이러스 치료를 즉시 시작하면 MAC의 일차 예방을 일률적으로 시행하지 않는다. 치료를 시작하지 못하거나 바이러스가 억제되지 않으면 활동성 MAC을 배제한 뒤 예방을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001194 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ART 거부·CD4<50의 PCP/MAC 예방 C 유지. azithromycin을 항바이러스제라 부른 오류와 CD4만으로 일률 MAC예방하는 표현 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/disseminated

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001194
