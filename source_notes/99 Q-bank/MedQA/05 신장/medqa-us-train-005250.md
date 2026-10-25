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
answer: "C"
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

61세 남자가 3시간 전 갑자기 시작된 왼쪽 옆구리 통증과 심한 메스꺼움으로 내원했다. 통증은 왼쪽 사타구니로 방사된다. 제2형 당뇨병으로 메트포르민과 글리부라이드를 복용하고, 만성 편두통에는 아세트아미노펜·아스피린·카페인 복합제를 복용한다. 소변은 콜라색이고 단백뇨 1+, 혈뇨 2+이며 정맥 신우조영술에서 신장의 고리 징후(ring sign)가 보인다. 가장 가능성 높은 원인은?

## 선택지

A. 신장결석
B. 신세포암
C. 신장 유두괴사
D. 다낭신

## 해설

당뇨병과 진통제 노출이 있는 환자에서 혈뇨·산통 및 유두 주위를 조영제가 둘러싸는 ring sign은 신장 유두괴사를 지지한다. 탈락한 유두가 요관을 막아 결석과 비슷한 통증을 낼 수 있다. 원문에는 진통제 과량 복용이 수치로 제시되지 않았으므로 남용을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 진통제 복용만으로 남용을 창작하지 않고 원문의 당뇨 위험인자·ring sign을 연결.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005250

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
