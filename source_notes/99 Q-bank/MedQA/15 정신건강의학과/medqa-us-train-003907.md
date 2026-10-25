---
type: qbank
schema_version: 1
id: medqa-us-train-003907
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:78272873a0f23927fe8228e113a891d2f0af9d73d59fcbb5358da08871ff68ae
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "acute psychosis"
  - "agitation"
  - "substance-induced psychosis"
  - "urine toxicology"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남성이 FBI가 평생 자신을 따라다니고 웨이터가 자신을 감시하는 요원이라고 주장하며 난동을 부려 응급실에 왔다. 할로페리돌과 디펜히드라민을 투여했지만 계속 초조했고 골내 접근로를 확보했다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 자살사고 평가
B. 전혈구검사
C. 갑상샘자극호르몬 수치
D. 소변 독성검사

## 해설

새 정신병적 증상과 심한 초조에서 물질 유발 가능성을 평가하는 선택적 검사로 소변 독성검사(D)가 이 보기의 출제 의도다. 그러나 진정 후 초조가 남는다는 사실만으로 중독을 확정할 수 없고, 양성은 현재 원인임을 증명하지 않으며 음성도 모든 물질을 배제하지 못한다. 지속적인 불안정/초조에서는 안전 확보와 생리적 원인 평가가 우선이며 검사가 이를 지연시켜서는 안 된다. ACEP는 병력·진찰에 따른 검사를 권고하고 모든 정신과 환자에게 일률적 독성검사를 요구하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초기 진정에 반응하지 않는다고 물질중독을 확정하고 모든 정신병 환자에게 소변 독성검사를 일률 권고한 해설을 선택적 검사로 한정했다.
- https://www.acep.org/siteassets/sites/acep/media/clinical-policies/final-cp-pdfs/psychpatient-cp.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003907
