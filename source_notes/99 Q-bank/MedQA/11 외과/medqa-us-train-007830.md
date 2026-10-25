---
type: qbank
schema_version: 1
id: medqa-us-train-007830
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:298a3341374ab898fad458ca67a1aced70e346935f1e73a1a898ede74b3e2224
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "recurrent laryngeal nerve injury"
  - "thyroidectomy complication"
  - "disclosure of medical error"
related_disease_slugs:
  - MTEg7Jm46rO8L-q4sO2DgCDsiJjsiKAg7ZuEIO2VqeuzkeymnSAoT3RoZXIgUG9zdG9wZXJhdGl2ZSBDb21wbGljYXRpb25zKS5tZA
question_type: ethics
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

75세 남자가 갑상선 결절 치료를 위한 갑상선절제술을 받았다. 갑상선 일부를 절제하고 목을 봉합했다. 마취에서 깨어난 후 환자는 “쉰 목소리”를 호소한다. 활력징후는 정상이고 절개 부위 통증은 경미하다. 외과의는 반회후두신경을 손상했을 가능성이 높다고 판단한다. 환자에게 어떻게 설명해야 하는가?

## 선택지

A. “수술 중 실수가 있었지만 환자에게 해를 끼치지는 않았습니다.”
B. “수술이 예상보다 오래 걸렸지만 모든 것이 잘 되었습니다.”
C. “수술은 성공적이었고 합병증은 발생하지 않았습니다.”
D. “수술 중 실수가 있었고 환자에게 해를 끼쳤을 수 있습니다.”

## 해설


외과의가 수술 중 신경 손상을 의심한다면 알려진 사실과 불확실성, 가능한 위해를 정직하게 설명하는 D가 적절하다. 쉰목소리의 원인·성대운동을 평가하고 치료 및 추적계획도 안내한다. 아직 확인되지 않은 영구 손상을 단정하거나 모든 신경 손상이 곧 부주의/과실이라고 일반화하지 않는다. 반대로 합병증이 없었다거나 해가 전혀 없다고 숨겨서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007830 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 모든 반회후두신경 손상을 곧 과실이라고 일반화하지 않고 이 사례의 의심 오류·가능 위해에 대한 정직한 설명 D를 유지했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://code-medical-ethics.ama-assn.org/ethics-opinions/promoting-patient-safety

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007830
