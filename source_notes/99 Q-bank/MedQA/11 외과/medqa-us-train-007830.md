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
question_type: investigation
difficulty: standard
answer: B
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

갑상샘 수술 후 환자에게 쉰 목소리와 힘없는 기침이 생겼다. 의료진이 원인이 아직 확인되지 않았다고 설명했다. 숨참이나 목의 급격한 부종은 없다. 성대 운동을 확인할 다음 검사는?

## 선택지

A. 갑상샘기능검사
B. 굴곡 후두내시경
C. 목 단순 X선
D. 발성 변화가 6개월 지속된 뒤에만 검사

## 해설


갑상샘 수술 후 새 음성 변화가 나타나면 후두내시경으로 성대 움직임을 확인한다. 삽관 자극 등 다른 원인도 있으므로 쉰 목소리만으로 반회후두신경의 영구 손상을 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007830 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 모든 반회후두신경 손상을 곧 과실이라고 일반화하지 않고 이 사례의 의심 오류·가능 위해에 대한 정직한 설명 D를 유지했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://code-medical-ethics.ama-assn.org/ethics-opinions/promoting-patient-safety

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007830
- https://doi.org/10.21053/ceo.2021.00633
