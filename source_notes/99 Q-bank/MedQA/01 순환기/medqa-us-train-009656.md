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
question_type: adverse_effect
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

66세 남성이 고혈압 치료제를 추가하고 한 달 뒤 엄지발가락 관절이 붉게 부어 심하게 아프다. 관절액에서 바늘 모양의 요산 결정이 확인됐다. 다음 중 이번 통풍 발작 위험을 높일 수 있는 혈압약은?

## 선택지

A. 히드로클로로티아지드
B. 로사르탄
C. 암로디핀
D. 에날라프릴

## 해설

티아지드계 이뇨제는 콩팥의 요산 배설을 줄여 혈중 요산을 올리고 통풍을 악화시킬 수 있다. 반복 발작이 있으면 혈압과 동반질환을 고려해 대체 약제를 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 티아지드의 고요산혈증 A는 유지하되 칼륨보존 이뇨제가 고나트륨혈증을 일으킨다는 오류 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009656
- https://koreanhypertension.org/reference/guide?idno=10446&mode=read
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/
