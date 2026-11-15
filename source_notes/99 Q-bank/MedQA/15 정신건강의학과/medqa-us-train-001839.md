---
type: qbank
schema_version: 1
id: medqa-us-train-001839
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dda0bb96dcca90e2ddaa50f6b2e879ff2b8124f1cfeca4a85df9a377e01bcc16
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "functional abdominal pain"
  - "school avoidance"
  - "cognitive behavioral therapy"
  - "Functional abdominal pain"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

9세 아이가 기능성 복통으로 진단받았다. 성장과 진찰은 정상이고 혈변이나 체중 감소는 없지만, 통증을 걱정해 자주 결석한다. 통증 대처와 일상 기능 회복에 도움 되는 치료는?

## 선택지

A. 광범위 식품 알레르기 검사 후 음식 제한
B. 복부 CT를 정기적으로 반복
C. 복통이 완전히 사라질 때까지 등교 중단
D. 기능성 복통에 맞춘 인지행동치료

## 해설

기능성 복통에서는 증상을 인정하면서 일상활동을 회복하는 것이 중요하다. 인지행동치료는 통증 대처와 학교생활 회복에 활용할 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001839
- https://pubmed.ncbi.nlm.nih.gov/40444524/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. CBT 원정답 유지. 유기적 원인 완전 배제 및 CBT의 보편적 최상위 효과로 과장하지 않도록 수정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
