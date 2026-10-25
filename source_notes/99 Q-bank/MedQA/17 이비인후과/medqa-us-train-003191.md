---
type: qbank
schema_version: 1
id: medqa-us-train-003191
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:821784c7a34cd7e3d92ee1328935ce642a3efb5d30fc62a22ea48ddc75d1be94
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "otosclerosis"
  - "conductive hearing loss"
  - "Carhart notch"
  - "abnormal Rinne test"
question_type: diagnosis
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-ykkeydtOyXvCAoT3RpdGlzIG1lZGlhKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여성이 1년 동안 양쪽 귀에서 간헐적으로 윙윙거리는 소리가 나 내원했다. 때때로 저절로 호전되는 경미한 어지럼증이 있고 제1형 당뇨병을 15년 앓았으며 허리 통증 에피소드가 있다. 트롬본 연주자로 교향악단에서 일한다. 이경검사에서 고막은 정상이고 양쪽 귀에서 골전도가 공기전도보다 크며 웨버검사에서 편위가 없다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 약물 유발 이독성
B. 노인성 난청
C. 이경화증
D. 당뇨병성 귀병증

## 해설

정상 고막에 양측 골전도 우세(Rinne 음성)가 있어 양측 전음성 난청을 시사한다. 젊은 성인의 이경화증에서는 등골의 고정으로 이러한 양상이 나타날 수 있으므로 C가 가장 적절하다. 양측 대칭 손상이면 Weber 편위가 없을 수 있다. Carhart notch는 이경화증의 청력검사 단서가 될 수 있지만 이 문항에는 실제 청력도 결과가 제시되지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 이경화증 C는 유지하되 본문에 없는 Carhart notch를 관찰된 소견처럼 인용하지 않도록 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003191
