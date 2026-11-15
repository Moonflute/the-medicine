---
type: qbank
schema_version: 1
id: medqa-us-train-006955
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fd6c0d47c40b735449921d10fbf83307a9fdd01ab66e0ef1da92f7315643a52b
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "비알레르기성 비염"
  - "혈관운동성 비염"
  - "후비루"
  - "Allergic rhinitis"
question_type: diagnosis
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sCDruYTsl7wgKEFsbGVyZ2ljIFJoaW5pdGlzKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUGhlbnlsZXBocmluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 환자가 향수나 찬 공기에 노출될 때 맑은 콧물이 반복된다. 코·눈이 가렵지 않고 계절에 따른 차이도 없다. 알레르기 검사에서 관련 항원 감작이 확인되지 않는다. 가장 가능성 높은 진단은?

## 선택지

A. 알레르기비염
B. 급성 세균성 부비동염
C. 비알레르기비염
D. 약물성 비염

## 해설

찬 공기나 강한 냄새 같은 비특이적 자극 뒤 수양성 콧물이 반복되고 코·눈 가려움이나 감작 근거가 없으면 비알레르기비염을 의심한다. 비충혈제 남용은 따로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 아젤라스틴을 국소 스테로이드로 오분류한 오류를 H1 항히스타민제로 교정.
- 공식/학회 근거: https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/020114s028lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006955
- https://pubmed.ncbi.nlm.nih.gov/32707227/
