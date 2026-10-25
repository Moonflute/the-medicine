---
type: qbank
schema_version: 1
id: medqa-us-train-001153
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6710937ceb69f94bb0a7dd2b9359a0f85f5f4df96b9abbd94c83954e791ad10
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "dental avulsion"
  - "Dental avulsion"
question_type: management
related_disease_slugs: []
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 자전거에서 떨어지는 것이 목격되었다. 환자는 자전거를 타고 가다 연석에 부딪혀 난간에 얼굴을 부딪혔다. 환자는 의식을 잃지 않았으며 현장에서 걸어 다닐 수 있는 상태였다. 환자의 입안에 피가 나고 있었고, 치아 하나가 보도에서 발견되었다. 환자는 지역 응급실로 이송되었다. 다음 중 이 환자의 치아를 운반하는 가장 좋은 방법은 무엇인가?

## 선택지

A. 우유에 담가서
B. 생리식염수에 담가서
C. 물에 담가서
D. 생리식염수에 적신 거즈에 싸서

## 해설

성인의 탈락 영구치는 가능한 빨리 재식할수록 치주인대세포 보존에 유리하다. 즉시 재식할 수 없어 운반하는 경우, 제시 선지 중 우유에 담그는 A가 물·건조 또는 거즈 보관보다 적절하다. 우유의 적절한 삼투압과 pH가 세포 생존을 돕고 건조를 막으며, 저산성으로 만들어야 한다는 뜻은 아니다. 치근을 문지르지 말고 치관을 잡아 신속히 치과로 이송한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 탈락 치아 보관을 저산성 환경으로 설명한 오류를 치주인대세포의 적절한 삼투압·pH와 건조 방지로 교정했다. 운반 선지 A는 유지한다.
- 공식/학회 근거: https://costr.ilcor.org/document/storage-of-an-avulsed-permanent-tooth-prior-to-reimplantation-task-force-systematic-review

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001153
