---
type: qbank
schema_version: 1
id: medqa-us-train-001388
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:98fe44f9cf63a60cd44b999bd706f00e92e607fa4bc37d8c58d01057b867f226
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "type 2 diabetes mellitus"
  - "metformin"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: simple
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
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvR2x1Y2Fnb24ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

49세 남성이 제2형 당뇨병으로 새로 진단됐다. HbA1c 8.7%, 개인 목표는 6.5% 미만이다. 체중 감소나 케톤혈증은 없고 신기능은 정상이다. 생활습관 교정과 함께 적절한 약물 치료 전략은?

## 선택지

A. 상태와 선호를 고려해 서로 다른 계열 약의 초기 병용을 고려한다
B. HbA1c가 10%에 이를 때까지 약물치료를 미룬다
C. 모든 새 진단 환자에게 식사 인슐린부터 시작한다
D. HbA1c가 목표보다 높아도 반드시 1년간 단독요법만 쓴다

## 해설


목표와의 차이가 큰 경우 환자 상태와 약제 특성을 고려해 초기 병용요법을 사용할 수 있다. 인슐린 결핍이나 심한 고혈당 증상이 없다면 HbA1c 수치만으로 모든 환자에게 인슐린을 먼저 쓰지는 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 생활교정 후 HbA1c8.1/혈당270이며 특별한 동반질환·대사위기 자료 없음. 제시된 초기 약물 중 metformin A가 합당하되 8% 숫자가 모든 환자의 단독요법을 강제하는 것은 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001388
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
