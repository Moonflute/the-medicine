---
type: qbank
schema_version: 1
id: medqa-us-train-002838
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3da6aef798f56c3476b22cd48d1c0358e841b6c65bf40b856aafcaa64cf7b2d6
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "necrotizing fasciitis"
  - "Fournier gangrene"
  - "soft tissue gas"
  - "urgent surgical debridement"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-q0tOyCrOyEsSDqt7zrp4nsl7wgKE5lY3JvdGl6aW5nIEZhc2NpaXRpcykubWQ
  - MDgg6rCQ7Je8L-q0tOyggOuzkSAoR2FuZ3JlbmUpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 여성이 발열과 혼란으로 이웃에 의해 응급실에 이송되었다. 10년간 당뇨병과 치질 병력이 있고 인슐린과 메트포르민을 복용한다. 혈압은 90/70 mmHg, 맥박 115회/분, 호흡수 21회/분, 체온 39.5°C이다. 심폐 진찰에는 다른 이상이 없다. 혈청 크레아티닌은 2.5 mg/dL이다. MRI에서 피하 연조직 부종과 가스가 보인다. 정맥 수액으로 소생시키고 광범위 경험적 정맥 항생제를 투여했다. 다음 중 가장 적절한 관리의 다음 단계는?

## 선택지

A. 고용량 정맥 스테로이드
B. 영상 유도 바늘 흡인
C. 수술적 변연절제
D. 현재 추가 관리가 필요하지 않다

## 해설

고열·의식변화·저혈압과 피하 연조직의 부종·가스는 괴사성 연조직감염을 강하게 의심하게 한다. 수액과 광범위 정맥 항생제에 더해 즉각적인 수술 탐색·변연절제(C)가 필요하다. 본문에는 회음부 위치가 명시되지 않아 Fournier 괴저라고 확정하지 않는다. 고용량 스테로이드나 바늘흡인은 괴사 조직 제거를 대체하지 못하며 이미 시행한 항생제만으로 관찰하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 부위가 제시되지 않은 괴사성 연조직 감염을 Fournier로 확정한 과잉 구체화를 제거했다. 쇼크·연조직 가스에 대한 긴급 변연절제 C는 유지한다.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002838
