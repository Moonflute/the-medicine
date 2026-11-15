---
type: qbank
schema_version: 1
id: medqa-us-train-002762
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e04f69aaf06ca6b535760806a91f35d20bfc8e979f28e0008143c86adcb99f37
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "inflammatory breast cancer"
  - "peau d'orange"
  - "breast mass"
  - "axillary lymphadenopathy"
related_disease_slugs:
  - MTMg67aA7J246rO8L-yXvOymneyEsSDsnKDrsKnslZQgKEluZmxhbW1hdG9yeSBCcmVhc3QgQ2FuY2VyKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
---

# MedQA US 임상문제

## 문제

56세 비수유 여성이 6주 전부터 왼쪽 유방이 빠르게 커지고 붉어졌다고 한다. 홍반과 오렌지 껍질 같은 부종이 유방의 절반 이상을 덮고 액와 림프절이 만져진다. 항생제로 호전되지 않았다. 특히 배제해야 할 진단은?

## 선택지

A. 유관 확장증
B. 염증성 유방암
C. 유두 파제트병
D. 국소 유방 농양

## 해설


짧은 기간에 생긴 광범위한 홍반과 피부 부종, 액와 림프절 비대는 염증성 유방암을 의심하게 한다. 비수유기이면서 항생제로 호전되지 않으면 영상과 조직검사로 침윤암을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002762 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Paget병을 감염/농양에 포함한 비교와 유두주위에만 국한한 설명을 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002762
- https://www.cancer.gov/types/breast/breast-cancer-types/inflammatory
