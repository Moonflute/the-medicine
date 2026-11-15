---
type: qbank
schema_version: 1
id: medqa-us-train-009011
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7ad4870368e17a4c6d0024d0ccc4d6dc42c7d9abb2a1a50707ec955ceccf7420
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "acute otitis media"
  - "Streptococcus pneumoniae"
  - "amoxicillin"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KSR7J207Je8IChPdGl0aXMgTWVkaWEpLm1k
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3세 아이의 급성 중이염에 아목시실린을 적정 용량으로 투여한 지 72시간이 지났다. 발열과 이통이 계속되고 같은 쪽 고막이 여전히 팽륜해 있다. 귀 뒤는 붓거나 아프지 않다. 다음 경구 항생제는?

## 선택지

A. 아목시실린을 같은 용량으로 계속한다
B. 클린다마이신 단독
C. 아목시실린-클라불란산
D. 아지트로마이신

## 해설

아목시실린을 적절히 투여한 뒤 48–72시간이 지나도 증상과 중이염 소견이 지속되면 진단과 합병증을 재평가하고 아목시실린-클라불란산으로 바꾼다. 증상 없이 삼출만 남은 경우는 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 급성 중이염 약물 선택과 진단기준·관찰 대상을 구별.
- https://www.cdc.gov/antibiotic-use/hcp/clinical-care/pediatric-outpatient.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009011
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3410229/
- https://pubmed.ncbi.nlm.nih.gov/22876048/
