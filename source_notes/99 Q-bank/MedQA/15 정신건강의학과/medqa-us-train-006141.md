---
type: qbank
schema_version: 1
id: medqa-us-train-006141
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7656dbb2a8579f274c4021b5dce18798cb150621b0cee7af22ed14fdfb303163
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경성 식욕부진증"
  - "중증 저체중"
  - "영양 재활"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEseyLneyaleu2gOynhOymnSAoQW5vcmV4aWEgTmVydm9zYSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 환자가 수개월간 음식 섭취를 제한한 뒤 쓰러졌다. 맥박 39회/분, 혈압 86/50mmHg, 체온 35.6℃다. 신경성 식욕부진증이 의심된다. 다음 조치는?

## 선택지

A. 귀가해 식사일지를 쓰게 하고 2주 뒤 다시 본다
B. 외래에서 항우울제를 먼저 시작한다
C. 입원해 신체 상태를 안정시키고 심전도·전해질을 감시하며 영양을 회복시킨다
D. 심리치료를 시작하고 맥박은 한 달 뒤 다시 잰다

## 해설


실신과 뚜렷한 서맥·저혈압·저체온은 의학적 불안정의 단서다. 체중이나 BMI 하나로 입원을 판단하지 않는다. 입원하면 전해질과 재급식 합병증을 감시하며 영양을 회복한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006141
- https://www.nice.org.uk/guidance/ng69/chapter/recommendations
- https://pubmed.ncbi.nlm.nih.gov/36722117/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. BMI 16.4를 극심한 등급으로 암기하지 않도록 표현 교정. 맥박39·저체온의 의학적 불안정성과 영양재활 원정답은 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
