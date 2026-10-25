---
type: qbank
schema_version: 1
id: medqa-us-train-003702
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bb64fd95c1d39d243b18b1b309bde79200d92e014fa9598a48c6a1f329434855
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "penetrating neck trauma"
  - "airway compromise"
  - "facial fractures"
  - "orotracheal intubation"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: D
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

27세 남성이 강도에게 폭행당하고 목과 등에 총상을 입은 채 응급실에 왔다. 목소리가 먹먹하고 말할 수 있지만 얼굴 골절 가능성이 있으며, 초기 소생술을 시작했다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 윤상갑상막 절개술
B. 후두마스크
C. 비기관 삽관
D. 구기관 삽관

## 해설

먹먹한 목소리와 관통 경부손상은 기도 악화 가능성을 우려하게 하므로 보기 중 숙련된 팀의 구기관삽관(D)으로 기도를 확보하는 계획이 적합하다. 심한 후두·기관 파괴나 삽관 불능에서는 수술적 기도가 필요할 수 있어 백업을 준비한다. 얼굴/두개저 손상이 의심되는 상황에서 맹목적 비기관삽관을 선택하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 경부 총상에서 구기관삽관이 언제나 가장 안전하다는 단정 교정.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003702
