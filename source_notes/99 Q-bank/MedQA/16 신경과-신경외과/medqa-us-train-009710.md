---
type: qbank
schema_version: 1
id: medqa-us-train-009710
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:76a45ed0c7edc1d76d7f6512597f9ab362bdafe6a40eafb9138cd39efb2c0b93
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "epilepsy in pregnancy"
  - "임신 중 간질"
  - "folic acid supplementation"
  - "Epilepsy"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsoITspp0gKEVwaWxlcHN5KS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MYW1vdHJpZ2luZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 환자가 라모트리진으로 수년째 국소발작 없이 지내며 임신을 준비한다. 임신 전 항발작약과 엽산에 대한 상담으로 적절한 것은?

## 선택지

A. 임신을 시도하기 전에 라모트리진을 임의로 끊는다
B. 태아에 더 안전하므로 발프로산으로 바꾼다
C. 임신 확인 뒤에만 엽산을 시작하고 약물 평가를 하지 않는다
D. 발작 조절을 유지하며 임신 전부터 엽산을 복용하고 약물 농도·발작을 추적한다

## 해설

발작이 잘 조절되는 약을 독단적으로 끊지 않는다. 임신 전부터 엽산을 권고하고, 라모트리진 농도가 임신 중 달라질 수 있어 임신 전 기준치와 경과를 활용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 엽산 B를 유지하되 전세계적으로 5mg이 유일한 확정용량이라는 단정 제거. Lamotrigine·피임약/임신 변화에 따른 전문 감시 필요성 보완.
- 공식/학회 근거: https://www.nice.org.uk/guidance/NG247/chapter/recommendations
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC11175651/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009710
- https://pubmed.ncbi.nlm.nih.gov/38748979/
