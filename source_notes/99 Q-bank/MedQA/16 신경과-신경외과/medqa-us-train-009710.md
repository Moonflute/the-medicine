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
question_type: prevention
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsoITspp0gKEVwaWxlcHN5KS5tZA
difficulty: complex
answer: B
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

23세 여성이 국소 발작을 동반한 간질로 5년째 라모트리진 50 mg을 하루 세 번 복용하며 발작이 없다. 다른 질환이나 약물은 없고 경구피임약을 사용한다. 임신을 고려해 치료 조정에 대한 조언을 구한다. 어떤 변경이 필요한가?

## 선택지

A. 라모트리진을 하루 두 번 50 mg으로 감량
B. 항간질약은 변경하지 않고 엽산 5 mg 매일 권고
C. 항간질약은 변경하지 않고 비타민 K 100 μg 매일 권고
D. 변경이나 추가는 필요하지 않음

## 해설

임신 계획에서는 발작이 조절되는 lamotrigine을 임의로 감량·중단하지 않고 엽산을 추가하는 B가 보기 중 적합하다. 영국 NICE는 항발작약 복용 등 고위험군에서 임신 전~초기 5mg/일을 권고한다. AAN/AES/SMFM은 적어도 0.4mg/일을 권고하며 최적 고용량은 확정되지 않아 지역 지침과 개별 위험에 맞춘다. 피임약 중단 및 임신 중 청소율 변화가 lamotrigine 농도에 영향을 줄 수 있으므로 혈중농도·발작과 용량을 전문적으로 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 엽산 B를 유지하되 전세계적으로 5mg이 유일한 확정용량이라는 단정 제거. Lamotrigine·피임약/임신 변화에 따른 전문 감시 필요성 보완.
- 공식/학회 근거: https://www.nice.org.uk/guidance/NG247/chapter/recommendations
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC11175651/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009710
