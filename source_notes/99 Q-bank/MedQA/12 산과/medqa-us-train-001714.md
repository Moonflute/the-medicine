---
type: qbank
schema_version: 1
id: medqa-us-train-001714
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:21a708b68eb4902410adfa2b3e6c3237658ddc1dcf2f77fd63b8ac024af01979
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "molar pregnancy"
  - "hydatidiform mole"
  - "theca lutein cysts"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-2PrOyDgeq4sO2DnCAoTW9sYXIgUHJlZ25hbmN5KS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

완전 포상기태를 흡인술로 제거한 환자가 추적 중이다. 혈청 β-hCG가 이후 3주 동안 매주 4회 측정에서 거의 같은 수준을 유지했다. 적절한 다음 조치는?

## 선택지

A. 한 번이라도 수치가 내려간 적이 있으므로 추적을 끝낸다
B. 임신성 영양막종양 가능성을 평가하도록 전문팀에 의뢰한다
C. 정상적인 경과이므로 수개월 뒤 한 번만 검사한다
D. 태아 심박을 확인하기 위해 비수축검사를 한다

## 해설


포상기태 제거 뒤 hCG가 연속 측정에서 3주 이상 정체하거나 상승하면 지속 임신성 영양막질환을 평가한다. 병기와 위험도를 확인해 치료를 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문·선지·A대조. hydatidiform mole의 수두양성임신 오역을 포상기태로 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001714
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12411817/
