---
type: qbank
schema_version: 1
id: medqa-us-train-008514
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ec8acf77c7d3552b9462bbbad19ce53079d660d9b0745394a506b99521597e6e
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "adnexal mass"
  - "ovarian cancer"
  - "pelvic ultrasound"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yDge2UvOyEsSDrgpzshozslZQgKEVwaXRoZWxpYWwgT3ZhcmlhbiBDYW5jZXIpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG92YXN0YXRpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

폐경한 62세 여성이 다른 이유로 시행한 질식 초음파에서 한쪽 난소에 2.5 cm 낭종이 발견됐다. 얇고 매끈한 벽의 단방성 무에코 낭종으로 고형부·유두 돌기·복수는 없다. 증상과 유전 고위험 병력은 없다. 적절한 관리는?

## 선택지

A. 즉시 난소절제술
B. MRI를 3개월마다 반복
C. 정기 영상 추적을 일률적으로 예약하지 않는다
D. 낭종을 흡인해 세포검사를 시행한다

## 해설

폐경 후라도 확실한 무증상 단순 단방성 낭종이 3 cm 이하이면 RCOG 개정 지침상 일상적 영상 추적이 필요 없다. 고형부, 격벽, 복수 또는 새 증상이 있는 경우와 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 부속기 종괴의 골반 초음파 D 유지. 폐경 후 종괴에서 CA125를 반드시 초음파 이후로만 미룬다는 설명 수정.
- https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/ovarian-cysts-in-postmenopausal-women-green-top-guideline-no-34/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008514
- https://www.rcog.org.uk/gtg34/
- https://pubs.rsna.org/radiographics/doi/full/10.1148/radiol.230685
