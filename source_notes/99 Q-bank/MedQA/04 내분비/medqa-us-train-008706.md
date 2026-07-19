---
type: qbank
schema_version: 1
id: medqa-us-train-008706
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ec2b8dc0d15808c7ec7e9334bf4b97419c8fa41e7197d9b632d46104971f4624
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic ketoacidosis"
  - "hyperkalemia"
  - "transcellular potassium shift"
question_type: mechanism
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

52세 여성이 4일 동안 쇠약, 복통, 가래를 동반한 기침으로 남편과 함께 응급실에 내원했다. 지난 2일 동안 소변량이 늘었고 오늘 아침 오심과 구토를 5회 했다. 제1형 당뇨병과 고혈압이 있으며 인슐린과 리시노프릴을 복용한다. 최근 며칠 동안 약을 잊고 복용하지 않았다고 한다. 체온 38.4°C(101.1°F), 맥박 134회/분, 호흡수 31회/분, 혈압 95/61mmHg이다. 점막이 건조하고 피부 탄력이 감소되어 있다. 복부에 광범위한 압통이 있으나 방어와 반발통은 없고 장음은 정상이다. 혈청 Na⁺ 139mEq/L, K⁺ 5.3mEq/L, Cl⁻ 106mEq/L, 포도당 420mg/dL, 크레아티닌 1.0mg/dL이다. 소변에서 혈액 음성, 포도당 4+, 케톤 3+이다. 실내 공기 동맥혈가스는 pH 7.12, pCO₂ 17mmHg, pO₂ 86mmHg, HCO₃⁻ 12mEq/L이다. 다음 중 칼륨 증가의 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. 신장의 칼륨 흡수 증가
B. 근육세포 붕괴
C. 세포외 칼륨 이동
D. 반복적인 구토

## 해설


DKA에서 혈청 K⁺는 정상·고칼륨이지만 실제는 세포외 이동으로 인한 것이며, 인슐린 투여 시 급격히 감소한다. 따라서 현재 고칼륨은 세포외 이동에 의한 것이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008706
