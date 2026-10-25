---
type: qbank
schema_version: 1
id: medqa-us-train-004103
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43a3ff7b02a761f38686ebc60431b3b78b14ac314df9245da21d9be65344acf4
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "영아 발달"
  - "대근육운동 지연"
  - "발달 이정표"
question_type: 임상증례 객관식
related_disease_slugs: []
difficulty: standard
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

6개월 남아가 영유아 건강검진을 위해 내원했다. 만삭에 태어났고 임신 중 난산이 있었다. 심각한 질환의 가족력은 없다. 도움을 받으면 똑바로 앉을 수 있지만 엎드린 자세에서 바로 누운 자세로 뒤집지 못한다. 붙잡고 일어설 수 있고 딸랑이를 잡아 한 손에서 다른 손으로 옮길 수 있으며 옹알이를 한다. 부모 외의 사람이 안거나 놀아주면 운다. 거울에 비친 자신의 모습을 만진다. 활력징후와 신체검사는 정상이다. 머리둘레 40백분위수, 키 30백분위수, 체중 40백분위수이다. 다음 중 지연된 발달 이정표는 무엇인가?

## 선택지

A. 인지 발달
B. 미세운동
C. 대근육운동
D. 언어 발달

## 해설

6개월에 엎드린 자세에서 바로 눕는 뒤집기는 기대되는 대근육 이정표이다. 이를 아직 수행하지 못하므로 보기 중 C를 평가 대상으로 삼는다. 도움받아 앉는 것 자체는 이 시기에 가능하며, 한 가지 이정표만으로 영구적 발달장애를 확진하지 않고 발달 선별·추적 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 보조 앉기의 모순 번역과 뒤집기 발달 시기 설명을 교정.
- https://www.cdc.gov/act-early/milestones/6-months.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004103
