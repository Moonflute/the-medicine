---
type: qbank
schema_version: 1
id: medqa-us-train-002473
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8229eb828f87c1391038154dd9dcb41e20b61098bbd06a4dea264e4527ab7e84
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "laryngomalacia"
  - "infantile stridor"
  - "supraglottic collapse"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 6개월 남아가 정기검진을 위해 내원했다. 어머니는 고형식을 시작했고 아이가 엎드려 자면 숨을 더 잘 쉬는 것 같아 자주 그렇게 재운다고 한다. 바로 누우면 호흡이 더 힘들어지고 최근 악화된 것 같다. 체온 36.7°C, 혈압 75/55 mmHg, 맥박 115회/분, 호흡 24회/분, 산소포화도 98%이다. 신체검사에서 편안해 보이고 엎드리거나 앞으로 기울이면 호전되는 흡기성 천명이 들린다. 다음 중 호흡기 증상의 가장 가능성 높은 원인은?

## 선택지

A. 후두개염
B. 이물 흡인
C. 후두연화증
D. 후두기관염

## 해설

흡기성 협착음이 바로 누우면 심하고 자세에 따라 완화되는 경과는 후두연화증(C)에 부합한다. 흡기 시 성문상부의 연한 조직이 안쪽으로 무너져 내리는 기전이다. 다만 깨어 있을 때 자세에 따라 소리가 줄어든다는 사실과 안전한 수면 자세는 별개다. AAP의 일반 원칙은 매 수면 때 평평하고 단단한 면에 바로 눕혀 재우는 것이며 본문의 부모가 택한 엎드린 수면을 치료 권고로 받아들여서는 안 된다. 수면 중 호흡 어려움은 별도 진료로 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 자세에 따른 후두연화증 단서를 유지하되 사례의 엎드려 재우기를 안전한 수면 처방으로 오해하지 않도록 AAP 권고를 명시했다.
- https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022-Recommendations-for-Reducing-Infant-Deaths-in-the-Sleep-Environment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002473
