---
type: qbank
schema_version: 1
id: medqa-us-train-009656
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:07ed77910526c603907b0a3efc1889fe10b84fef5b1267d8755969cb2a611ef2
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "thiazide diuretic"
  - "티아지드 이뇨제"
  - "hyperuricemia"
  - "Hyperuricemia"
related_disease_slugs: []
question_type: management
difficulty: simple
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 남자가 일차성 고혈압 평가를 위해 심장내과 외래에 내원했다. 혈압 169/96 mmHg, 심박수 85회/분이며 히드로클로로티아지드를 시작했다. 티아지드계 이뇨제의 부작용은 무엇인가?

## 선택지

A. 고요산혈증
B. 저칼슘혈증
C. 저혈당
D. 고나트륨혈증

## 해설

티아지드계 이뇨제는 신장의 요산 배설을 감소시켜 고요산혈증(A)을 유발할 수 있다. 저나트륨혈증, 저칼륨혈증, 고칼슘혈증과 혈당 상승도 가능한 이상반응이다. 칼륨보존 이뇨제의 대표 전해질 이상은 고칼륨혈증이지 고나트륨혈증이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 티아지드의 고요산혈증 A는 유지하되 칼륨보존 이뇨제가 고나트륨혈증을 일으킨다는 오류 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009656
