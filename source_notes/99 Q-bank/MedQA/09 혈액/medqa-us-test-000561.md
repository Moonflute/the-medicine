---
type: qbank
schema_version: 1
id: medqa-us-test-000561
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:a828f4e82da4f177bdfebab9a2a3c0fa155f9a28208deaa932804c199a126844
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "와파린과 비타민 K 상호작용"
  - "완전 채식"
  - "INR 감소"
related_disease_slugs: []
question_type: monitoring
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

수개월간 와파린 복용량과 INR이 안정적이던 환자가 매일 녹색 잎채소 주스를 새로 마시기 시작한 뒤 INR이 1.5로 떨어졌다. 복약 누락은 없다. 적절한 교육과 대응은?

## 선택지

A. 앞으로 비타민 K가 든 음식은 모두 영구적으로 금지한다
B. 식단으로 생긴 변화이므로 INR을 더 이상 재지 않는다
C. INR과 무관하게 와파린을 스스로 두 배로 복용한다
D. 비타민 K 섭취량을 일정하게 유지하고 INR을 다시 확인해 용량을 조정한다

## 해설


와파린 치료 중에는 비타민 K 섭취량이 갑자기 바뀌지 않도록 한다. 녹색 채소를 무조건 피할 필요는 없고, 식단을 바꿨다면 INR을 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000561 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 채식 변경 후 INR 저하 A 유지. 비타민K 감소가 와파린 효과를 낮춘다는 정반대 기전 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cuh.nhs.uk/patient-information/oral-anticoagulant-therapy-with-warfarin-phenindione-or-acencoumarol/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000561
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72d3ea20-27e4-4368-a666-a9b76530dbb9
