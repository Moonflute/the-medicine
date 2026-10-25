---
type: qbank
schema_version: 1
id: medqa-us-train-007746
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b6926d4963a9050e2c4eb610a6cb628c1966802630984b5f821aa7fc48281329
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "olanzapine"
  - "metabolic adverse effects"
  - "dyslipidemia"
question_type: prognosis
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 여성이 남편이 이상한 행동을 알아차린 후 남편과 함께 내원했다. 남편은 8개월 전부터 혼잣말을 하는 것을 처음 보았고, 지난 6개월 동안 정부가 자신을 독살하려 한다는 두려움 때문에 포장식품을 먹지 않았다. 특별한 과거력은 없다. 대학 시절 마리화나를 피웠지만 이후에는 피우지 않았다. 안절부절못하는 모습이며 정신상태검사에서 정동이 둔화되어 있다. 말은 명료하지만 사고과정이 와해되어 있고 연상이완이 많다. 조현병으로 진단받아 올란자핀을 시작했다. 이 환자에게 가장 발생하기 쉬운 부작용은?

## 선택지

A. 발작
B. 이상지질혈증
C. 무과립구증
D. 미오글로빈뇨

## 해설


올란자핀은 대사 부작용이 흔하며, 제시된 선택지 중 중성지방 및 콜레스테롤 상승(이상지질혈증)이 상대적으로 흔한 대사 이상반응이다. 따라서 가장 발생하기 쉬운 부작용은 이상지질혈증이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007746

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 올란자핀 이상지질혈증 답 유지. 모든 부작용 중 최빈이라고 일반화하지 않고 제시 선택지 중 상대적으로 흔한 대사 이상으로 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
