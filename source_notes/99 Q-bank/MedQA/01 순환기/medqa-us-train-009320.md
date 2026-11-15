---
type: qbank
schema_version: 1
id: medqa-us-train-009320
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a7ccfead15814658ef1cc030b30b862994305bac15cf225953b3a03586d22d6
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "atrial fibrillation"
  - "심방세동"
  - "cardioembolic stroke"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
question_type: diagnosis
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 여성이 갑자기 오른쪽 얼굴이 처지고 팔에 힘이 빠져 뇌졸중 평가를 받고 있다. 맥박은 빠르고 매우 불규칙하며 심박마다 첫 심음의 세기가 달라진다. 심장성 색전의 단서가 될 부정맥의 심전도 양상은?

## 선택지

A. 뚜렷한 P파 없이 RR 간격이 불규칙함
B. 규칙적인 좁은 QRS 빈맥과 일정한 RR 간격
C. PR 간격이 점차 길어진 뒤 QRS가 한 번 빠짐
D. 연속된 정상 P파마다 같은 간격으로 QRS가 나타남

## 해설

심방세동에서는 일관된 P파가 없고 심실 반응 간격이 불규칙하다. 심방세동은 색전성 뇌졸중의 원인이 될 수 있지만, 뇌졸중 평가와 급성 재관류 판단을 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: AF가 신경 결손 뒤에 발생한 것처럼 쓴 인과 방향을 심장성 색전 원인으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009320
