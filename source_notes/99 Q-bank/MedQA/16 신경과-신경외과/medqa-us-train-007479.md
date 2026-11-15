---
type: qbank
schema_version: 1
id: medqa-us-train-007479
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f5fd2a0c0cc9f0287fc5de7441165206463c7f24fa45e3aabbb815db4ddf124
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "편두통 전조"
  - "편두통 급성 치료"
  - "수마트립탄"
  - "박동성 두통"
  - "Migraine"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjrjrkZDthrUgKE1pZ3JhaW5lKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 환자가 반짝이는 지그재그 선이 20분간 보인 다음 한쪽 머리가 욱신거린다고 한다. 조짐 편두통으로 판단했다. 현재 에스트로겐 함유 복합 피임약을 복용한다. 피임 상담은?

## 선택지

A. 에스트로겐이 없는 피임 방법으로 전환을 상의한다
B. 비흡연자이므로 복합 피임약을 계속한다
C. 에스트로겐이 든 패치로 바꾸면 위험이 없다
D. 피임약과 저용량 아스피린을 함께 쓰면 위험을 없앨 수 있다

## 해설

조짐 편두통에서는 허혈성 뇌졸중 위험 때문에 에스트로겐 함유 복합 호르몬 피임을 피한다. 프로게스틴 단독이나 비호르몬 방법을 함께 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 편두통 급성 치료 D를 확인하되 모든 환자에서 트립탄이 가장 효과적이라는 과장 제거.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg150/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007479
- https://www.cdc.gov/contraception/hcp/usmec/combined-hormonal-contraceptives.html
