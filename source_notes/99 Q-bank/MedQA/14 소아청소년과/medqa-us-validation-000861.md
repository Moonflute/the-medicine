---
type: qbank
schema_version: 1
id: medqa-us-validation-000861
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:66419c7d22f7400eb979f1c50df9e3c89e319e5f8bff4d290667541f12168efa
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "급성 중이염"
  - "고막 팽창"
  - "아목시실린"
  - "Acute otitis media"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KSR7J207Je8IChPdGl0aXMgTWVkaWEpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

18개월 아이가 어제부터 미열과 가벼운 귀 통증이 있다. 이경검사에서 양쪽 고막이 뚜렷하게 팽륜했다. 화농성 결막염과 최근 항생제 사용, 페니실린 알레르기는 없다. 첫 경구 항생제는?

## 선택지

A. 아목시실린
B. 아지트로마이신
C. 클린다마이신
D. 경구 시프로플록사신

## 해설

24개월 미만에서 급성 중이염이 확실하면 항생제 치료를 한다. 비중증이고 최근 항생제 사용이나 화농성 결막염이 없다면 아목시실린을 우선한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 3세에게1세 이하 원칙만 제시한 설명을 실제 통증 지속·AOM 기준으로 교정.
- https://www.cdc.gov/antibiotic-use/hcp/clinical-care/pediatric-outpatient.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000861
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3410229/
- https://jkms.org/DOIx.php?id=10.3346%2Fjkms.2012.27.8.835
