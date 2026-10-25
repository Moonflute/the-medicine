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
question_type: management
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sCDruYTsl7wgKEFsbGVyZ2ljIFJoaW5pdGlzKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

35세 여자가 6개월 동안 지속된 콧물과 코막힘의 평가를 위해 내원했다. 소매점에서 일하며 강한 향수에 노출될 때마다 증상이 악화된다고 한다. 2개월 전 겨울이 시작된 이후 증상이 더 심해졌다. 발열, 오심, 천명, 가려움 또는 발진은 없다. 심각한 질환이나 알레르기 병력은 없고 복용 약물도 없다. 활력징후는 정상이다. 진찰에서 코점막 울혈, 편도 비대, 인두 후비루가 관찰되며 나머지 진찰은 정상이다. 이 환자에게 가장 적절한 다음 치료는 무엇인가?

## 선택지

A. 경구 페닐에프린
B. 경구 디펜히드라민
C. 비강 내 아젤라스틴
D. 경피적 알레르기 검사

## 해설

향수·찬 계절 같은 비특이적 자극에 반응하고 가려움이나 알레르기 병력이 없는 지속 비염은 비알레르기성/혈관운동성 비염에 합당하다. C, 비강 azelastine은 국소 H1 수용체 길항제인 항히스타민제이며 혈관운동성 비염 증상에 사용할 수 있다. 스테로이드가 아니다. 알레르기 검사를 모든 경우 먼저 시행할 필요는 없고 경구 진정성 항히스타민제나 충혈제거제보다 이 증례에 적합하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 아젤라스틴을 국소 스테로이드로 오분류한 오류를 H1 항히스타민제로 교정.
- 공식/학회 근거: https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/020114s028lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006955
