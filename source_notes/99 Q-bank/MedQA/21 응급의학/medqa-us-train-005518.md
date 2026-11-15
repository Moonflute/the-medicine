---
type: qbank
schema_version: 1
id: medqa-us-train-005518
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8355491a65231635bddb151c587c0c4763d7ba5002064b195b4a48af143e80b7
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "독성쇼크증후군"
  - "비강 패킹"
  - "황색포도상구균 독소"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTmFmY2lsbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

비강 패킹을 한 지 이틀 된 환자가 고열, 전신 홍반과 쇼크로 내원했다. 소생과 정맥 항생제를 시작했다. 독성쇼크증후군에서 감염원 조절을 위해 바로 해야 할 일은?

## 선택지

A. 비강 패킹을 제거한다
B. 해열될 때까지 패킹을 둔다
C. 항균제로 패킹을 적신다
D. 배양 결과가 나올 때까지 제거를 미룬다

## 해설

독성쇼크가 의심되면 소생과 항생제뿐 아니라 원인으로 의심되는 패킹을 신속히 제거해야 한다. 패킹 제거가 쇼크 치료나 다른 감염원 평가를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 의심 TSS에서 패킹 제거 C를 확인하되 원인 제거가 소생/항생제보다 단독 우선이라는 해설 교정.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005518
