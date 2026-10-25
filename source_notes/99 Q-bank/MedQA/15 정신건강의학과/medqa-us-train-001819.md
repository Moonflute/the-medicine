---
type: qbank
schema_version: 1
id: medqa-us-train-001819
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:51eb63c6bf338b68e730f0c16cc46a0108de58946829b02c83f35b2a0599f92c
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "substance intoxication"
  - "urine immunoassay"
  - "cannabis use"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uMgOuniCDqs4QgKENhbm5hYmlzKS5tZA
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

20세 대학생이 자동차 사고 후 응급실로 이송되었다. 일차 및 이차 평가에서 기도, 심혈관계 또는 운동기능에 중대한 이상은 없었다. 그러나 결막이 충혈되어 있고 의료진에게 공격적으로 행동한다. 약물 사용 여부를 확증하는 검사로 가장 적절한 것은 무엇인가?

## 선택지

A. 중합효소연쇄반응
B. 소변 면역분석
C. Western blot
D. 기체 크로마토그래피/질량분석 (GC/MS)

## 해설

원문은 초기 선별이 아니라 약물 사용의 확증 검사를 묻는다. 제시된 검사 중 GC/MS는 특정 약물·대사산물을 확인하는 확증 분석에 해당하고 소변 면역분석은 보통 선별검사이다. 분석 대상과 검출 창에 따라 한계가 있으므로 모든 약물을 검출하거나 현재 임상적 중독·사고 원인을 단독 확정한다고 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001819

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영문 confirm을 단순 '확인할 가장 적절한 검사'로 옮겨 선별검사와 혼동되는 문항 수정. GC/MS 정답 이유는 특이적 확증이며 무조건 가장 민감·모든 물질 검출이 아님.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
