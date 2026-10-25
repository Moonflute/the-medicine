---
type: qbank
schema_version: 1
id: medqa-us-test-000633
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:6824d291b5d2a2ef8bdda9450a89f31752999ab63719b852e744dd47c319b79e
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심방 점액종"
  - "좌심방 종괴"
  - "폐울혈"
  - "atrial myxoma"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

41세 여성이 왼쪽으로 누우면 악화되는 호흡곤란으로 병원에 왔다. 약 10일 전 원인 모를 의식 소실이 있었다. 과거력과 가족력은 특이사항이 없었다. 왼쪽으로 누울 때 두드러지는 이완기 심잡음이 있었고 경정맥 팽창과 기침해도 사라지지 않는 미세 수포음이 들렸다. 흉부 X선에서 폐울혈, 2차원 심초음파에서 심방중격에 붙은 좌심방 종괴가 보였다. 가장 가능성 높은 진단은?

## 선택지

A. 류마티스열
B. 무해성 심잡음
C. 비세균성 혈전성 심내막염
D. 심방 점액종

## 해설


좌심방에 부착된 종괴와 폐울혈, 체위에 따른 호흡곤란은 심방 점액종을 특징짓는다. 이는 비세균성 혈전성 심내막염과 구별된다. 따라서 정답은 심방 점액종이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 자세에 따른 호흡곤란/이완기잡음·실신과 심방중격에 붙은 좌심방 종괴는 D 심방점액종에 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000633
