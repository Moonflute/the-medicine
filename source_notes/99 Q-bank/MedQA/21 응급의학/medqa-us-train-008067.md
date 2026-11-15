---
type: qbank
schema_version: 1
id: medqa-us-train-008067
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:50078fd88990f35d5a49a3e1bad4b014977c71e3e975d9ed6a3fcb159dd1000b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "alcohol withdrawal seizure"
  - "generalized tonic-clonic seizure"
  - "lorazepam"
  - "Alcohol withdrawal seizure"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
---

# MedQA US 임상문제

## 문제

장기간 과음하던 환자가 입원으로 금주한 지 하루 뒤 손 떨림과 식은땀이 생겼고, 전신 강직간대발작을 했다. 기도와 순환을 안정시켰다. 발작 치료와 재발 예방에 사용할 약은?

## 선택지

A. 모르핀
B. 할로페리돌 단독
C. 로라제팜
D. 페니토인 단독

## 해설


알코올 금단 발작에서는 벤조디아제핀이 우선이다. 이후 발작 재발과 금단 섬망 가능성을 감시하며 다른 발작 원인도 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008067
- https://www.asam.org/quality-care/clinical-guidelines/alcohol-withdrawal-management
