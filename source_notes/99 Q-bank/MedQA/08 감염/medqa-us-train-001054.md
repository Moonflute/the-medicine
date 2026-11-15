---
type: qbank
schema_version: 1
id: medqa-us-train-001054
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c5582ae365e818cef0e0599d6d5d6bf6a18e6c0e49869416c614d9e2c349bd1d
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Nocardiosis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uFuOy5tOultOuUlOyVhOymnSAoTm9jYXJkaW9zaXMpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRXJ5dGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

신장이식 후 면역억제제를 복용하는 환자의 폐와 뇌 병변에서 노카르디아가 확인됐다. 뇌에 농양이 있고 감수성 최종 결과는 아직 나오지 않았다. 적절한 초기 항생제 전략은?

## 선택지

A. 폐렴용 아지트로마이신 단독으로 전환한다
B. 뇌 침범이 있어도 트리메토프림/설파메톡사졸 저용량 단독으로만 치료한다
C. 트리메토프림/설파메톡사졸을 포함해 예상 감수성과 중추신경계 침투를 고려한 병합요법을 시작한다
D. 감수성이 모두 나올 때까지 항생제를 보류한다

## 해설


뇌 침범을 동반한 파종성 노카르디아증은 중증 감염이다. 보통 초기에는 활성 약제 두 가지 이상을 병용하고 균종·감수성, 신기능과 치료 반응에 맞춰 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001054 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CNS 침범 파종 Nocardia에 TMP-SMX 단독이 완결 치료라는 오해를 방지; 항산 염색·전이 표현 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/abs/10.1111/ctr.13509

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001054
- https://pubmed.ncbi.nlm.nih.gov/30817024/
