---
type: qbank
schema_version: 1
id: medqa-us-train-002047
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fd8f6301dcf7b1d1eed535f5be25e8d99b98c2516a9bd002255ccd265042b118
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "meningococcal meningitis"
  - "Neisseria meningitidis"
  - "bacterial meningitis"
  - "rifampin prophylaxis"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
  - MDgg6rCQ7Je8L-yImOunieyVjOq3oCAoTWVuaW5nb2NvY2N1cykubWQ
question_type: prevention
difficulty: complex
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

고열, 자반과 관류 저하가 있는 아이에서 침습성 수막구균 감염을 의심한다. 소생술과 경험적 항생제를 시작했다. 병원 내 초기 격리 방법은?

## 선택지

A. 표준주의만 시행한다
B. 공기주의를 치료 종료까지 유지한다
C. 표준주의에 비말주의를 병행하고 유효 항생제를 시작한 뒤 24시간까지 유지한다
D. 접촉주의만 시행하고 기침이 멎으면 해제한다

## 해설


침습성 수막구균 감염 의심 환자는 표준주의와 비말주의를 적용한다. 효과적인 항생제 투여를 시작하고 24시간이 지날 때까지 유지하며 밀접 접촉자는 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002047 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수막구균 의심의 접촉자 rifampin 및 세균성 수막염 경험적 ceftriaxone/vancomycin D 유지; 확정 수막구균에도 vancomycin이 항상 필요하다는 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/surv-manual/php/table-of-contents/chapter-8-meningococcal-disease.html
- https://www.ncbi.nlm.nih.gov/books/NBK614844/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002047
- https://kdca.go.kr/bbs/kdca/55/304967/download.do
