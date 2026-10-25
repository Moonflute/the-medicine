---
type: qbank
schema_version: 1
id: medqa-us-train-009143
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4471ed5effcd8eb6db09ebc57692308ec7e4b1c0078b56de5d3b0acc37f7b3d2
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "ACE inhibitor-induced angioedema"
  - "ACE 억제제 유발 혈관부종"
  - "angioedema"
related_disease_slugs: []
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

63세 아프리카계 미국인 남자가 얼굴 부종과 호흡곤란으로 응급실에 내원했다. 과거력으로 고혈압과 이상지질혈증이 있다. 몇 주 전 리시노프릴과 아토르바스타틴을 새로 시작했다. 아버지는 뇌졸중 합병증으로 80세에 사망했고 어머니는 요양원에 있다. 혈압 135/92 mmHg, 심박수 101회/분, 호흡수 21회/분, 체온 37.0°C(98.6°F)이다. C1 에스터레이스 억제제 수치는 정상이다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 경화부종
B. 단독(erysipelas)
C. 약물 유발 혈관부종
D. 접촉피부염

## 해설


ACE 억제제 복용 후 급성 얼굴·기도 부종은 C1 에스터레이스 억제제 수치가 정상이어도 발생한다. 이는 브래디키닌 축적에 의한 혈관 투과성 증가가 원인이다. 따라서 가장 가능성 높은 진단은 약물 유발 혈관부종이다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-009143`와 직접 대조했다.
- 판정: 리시노프릴 시작 후 혈관부종 C 유지. 원문 자체의 32.0°C(98.6°F) 불일치를 환산값 37.0°C로 고치고 Erysipelas를 단독으로 교정.
- 추가 주의: 영어 원문에도 32.0°C (98.6°F)로 단위 불일치가 있다. 98.6°F의 정확한 환산값 37.0°C를 사용했으며 저체온 사례로 재설계하지 않았다.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9023902/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009143
