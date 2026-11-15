---
type: qbank
schema_version: 1
id: medqa-us-train-005480
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5f588ab5ceb276dafaceae955289eb422f8e4c83272a7e277d9bd165035a61a9
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "파종성 Mycobacterium avium 복합체 감염"
  - "AIDS"
  - "아지스로마이신과 에탐부톨"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1waG90ZXJpY2luQi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRXRoYW1idXRvbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
---

# MedQA US 임상문제

## 문제

치료받지 않은 HIV 환자에게 발열, 체중감소와 간비장비대가 있다. CD4는 34/μL이고 혈액에서 마크롤라이드 감수성 Mycobacterium avium 복합체가 확인됐다. 항레트로바이러스 치료와 함께 항균요법의 기본 조합으로 적절한 것은?

## 선택지

A. 아지트로마이신과 에탐부톨
B. 아지트로마이신 단독
C. 이소니아지드와 피라진아미드
D. 리팜핀 단독

## 해설


파종성 MAC 감염에는 내성 발생을 줄이기 위해 마크롤라이드와 에탐부톨 등 최소 두 약을 병용한다. 중증도·내성 위험·약물 상호작용에 따라 추가 약제를 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005480 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 진행 AIDS 파종 MAC의 azithro+ethambutol D 유지; 항산균이라는 이유만으로 확진하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/disseminated

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005480
