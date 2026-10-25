---
type: qbank
schema_version: 1
id: medqa-us-train-004800
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ba611ffcab68c2cb99670ffff1c91e1f82e6c3720cdf81073f16051179da272b
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "알파-1 항트립신 결핍증"
  - "폐기종"
  - "간세포암 위험"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLjtj6zslZQgKEhlcGF0b2NlbGx1bGFyIENhcmNpbm9tYSkubWQ
question_type: association
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

40세 남성이 2년 동안 점점 심해지는 호흡곤란으로 내원했다. 10년 동안 매일 담배 반 갑을 피웠지만 8년 전 금연했다. 맥박은 분당 72회, 혈압은 135/75 mm Hg, 호흡수는 분당 20회이다. 신체검사에서 흉곽의 전후 직경이 증가되어 있고 흉부 청진에서 호흡음이 감소되어 있다. 흉부 X선에서 늑간 간격이 넓어지고 횡격막이 편평하며 양쪽 폐기저부가 과투과성이다. 이 환자 상태로 인해 가장 위험이 증가하는 질환은 무엇인가?

## 선택지

A. 항중성구세포질항체 양성 혈관염
B. 간세포암
C. 폐쇄세기관지염
D. IgA 신병증

## 해설


알파‑1 항트립신 결핍으로 인한 폐기종은 간세포암 위험을 크게 증가시킨다. 따라서 가장 위험이 높은 질환은 간세포암이다. 다른 선택지는 연관성이 낮다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 적은 흡연력·기저부 우세 폐기종은 A1AT결핍을 시사하며 간세포암 B 위험과 연결.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004800
