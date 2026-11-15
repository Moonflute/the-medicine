---
type: qbank
schema_version: 1
id: medqa-us-train-003850
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c6ab922d6d44ed891024849e08fd1da1e1bb314a3c287dd216cfdf7143a996ef
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "chemotherapy-induced nausea and vomiting"
  - "highly emetogenic chemotherapy"
  - "aprepitant"
  - "5-HT3 antagonist"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 고도 구토유발 항암요법 예방에 olanzapine을 포함한 4제로 교정."
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
curation_status: "revised"
curation_reason: "고도 구토유발 항암요법 예방에 olanzapine을 포함한 4제로 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

58세 유방암 환자가 구토 위험이 높은 독소루비신·사이클로포스파미드 항암을 시작한다. 당일 구토 예방에 NK1 길항제, 5-HT3 길항제, 덱사메타손을 계획했다. 금기가 없다면 보통 추가하는 약은?

## 선택지

A. 메토클로프라미드
B. 올란자핀
C. 로라제팜
D. 프로클로르페라진

## 해설

이 항암요법은 구토 위험이 높아 올란자핀을 포함한 4제 예방요법을 사용한다. 진정 위험, 상호작용과 환자별 금기는 함께 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 고도 구토유발 항암요법 예방에 olanzapine을 포함한 4제로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10739516/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003850

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
