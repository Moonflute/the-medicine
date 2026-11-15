---
type: qbank
schema_version: 1
id: medqa-us-train-001446
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7ec693375665c3adfe2b7854671f8c063e17167a09b1413f5347f0d1ef5c8e34
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "acute otitis media"
  - "penicillin allergy"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KSR7J207Je8IChPdGl0aXMgTWVkaWEpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3세 아이가 고막 팽윤을 동반한 급성 중이염과 양쪽 화농성 결막염으로 내원했다. 페니실린 알레르기는 없고 경구약을 먹을 수 있다. 항생제를 시작한다면 가장 적절한 경구약은?

## 선택지

A. 아목시실린/클라불란산
B. 아목시실린
C. 아지트로마이신
D. 세팔렉신

## 해설

화농성 결막염이 중이염에 동반되면 베타락탐분해효소를 생성하는 비피막형 헤모필루스 인플루엔자를 고려한다. 아목시실린 단독보다 아목시실린/클라불란산이 적절하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: AOM의 보기 중 아지스로마이신 B 유지. 항생제 뒤 두드러기 이력을 부정하고 아지스로마이신을 보편적 1차약으로 둔 오류 수정.
- https://cps.ca/en/documents/position/acute-otitis-media

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001446
- https://pubmed.ncbi.nlm.nih.gov/22876048/
- https://www.cdc.gov/antibiotic-use/hcp/clinical-care/pediatric-outpatient.html
