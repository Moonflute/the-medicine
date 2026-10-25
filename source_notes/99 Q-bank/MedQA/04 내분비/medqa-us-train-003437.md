---
type: qbank
schema_version: 1
id: medqa-us-train-003437
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9efdf73c423bb481101c1ad3e5dd82f03095d007f8c3977f9882a2be92e26a26
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "primary hyperaldosteronism"
  - "aldosteronoma"
  - "hypokalemic metabolic alkalosis"
  - "hypertension"
related_disease_slugs:
  - MDQg64K067aE67mEL-yVjOuPhOyKpO2FjOuhoOymnSAoQWxkb3N0ZXJvbmlzbSkubWQ
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

30세 아프리카계 미국인 여성이 5주간 지속된 피로와 근력저하로 내원했다. 반복되는 두통과 심계항진이 있었고 고혈압과 주요우울장애의 병력이 있다. 혈압은 155/85 mmHg였다. 검사에서 Na+ 146, Cl- 105, K+ 3.0, HCO3- 30 mEq/L였으며 소변에는 혈액, 포도당, 단백이 없었다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 하제 남용
B. 알도스테론종
C. 갈색세포종
D. 쿠싱 증후군

## 해설


저칼륨혈증, 대사성 알칼리증, 고혈압이 동반된 경우 원발성 알도스테론증이 의심된다. 알도스테론 과다 분비는 신장에서 Na⁺ 재흡수를 증가시켜 K⁺와 H⁺를 배출한다. 따라서 가장 가능성 높은 진단은 알도스테론종이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 고혈압+저K+대사성알칼리증은 원발성 알도스테론증 의심, 선택지 B. 단측 adenoma 확진은 별도 기능/측별 평가 필요.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003437
