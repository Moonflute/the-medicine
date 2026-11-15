---
type: qbank
schema_version: 1
id: medqa-us-train-005250
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7b73c30255fcefe6185d98b905bdd6761d5a8b838c92dfe8a7395a0df5cf66d9
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "신장 유두괴사"
  - "진통제 남용"
  - "혈뇨"
related_disease_slugs:
  - MDUg7Iug7J6lL-2YiOuHqC5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: "content-reviewed"
medical_reviewed_at: 2026-10-25
curation_status: "revised"
curation_reason: "진통제 복용만으로 남용을 창작하지 않고 원문의 당뇨 위험인자·ring sign을 연결."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

당뇨병이 있는 61세 남성이 만성 두통으로 진통제를 자주 복용한다. 갑작스러운 옆구리 산통과 혈뇨가 생겼다. CT 요로조영 배설기에서 조영제가 신장 유두의 탈락 부위를 둘러싸는 고리 모양이 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 요관결석
B. 신세포암
C. 신장 유두괴사
D. 다낭성 신장질환

## 해설

당뇨병과 장기간 진통제 노출은 신장 유두괴사의 위험요인이다. 탈락한 유두가 요관을 막으면 결석처럼 산통을 유발할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 진통제 복용만으로 남용을 창작하지 않고 원문의 당뇨 위험인자·ring sign을 연결.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005250
- https://doi.org/10.1148/rg.266065039

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
