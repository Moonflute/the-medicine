---
type: qbank
schema_version: 1
id: medqa-us-train-000422
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5fbe0eab613c96f4049bffc822c0caacc7ea86c34ebfedfcaa4f0b4183bf1b13
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "pernicious anemia"
  - "vitiligo"
  - "hyperthyroidism"
question_type: diagnosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

악성 빈혈(pernicious anemia)과 백반증(vitiligo)의 과거력이 있는 40세 여성이 더위를 참기 힘들고 잦은 두근거림을 주소로 내원하였다. 환자는 피임약을 복용하지 않으며 오늘 시행한 소변 임신 검사는 음성이다. 신체 검진상 환자는 반사 항진(hyper-reflexive)을 보이며 압통이 없는 대칭적으로 커진 갑상선이 관찰된다. 진단을 위해 갑상선 기능 검사를 처방하였다. 가장 예상되는 갑상선 기능 검사 결과는 무엇인가?

## 선택지

A. T4 상승, 유리 T4(free T4) 상승, T3 상승, TSH 상승
B. T4 상승, 유리 T4(free T4) 상승, T3 상승, TSH 감소
C. T4 감소, 유리 T4(free T4) 감소, T3 감소, TSH 감소
D. T4 정상, 유리 T4(free T4) 정상, T3 정상, TSH 상승

## 해설


갑상선 기능 항진증에서는 T4와 자유 T4, T3가 상승하고 TSH가 억제된다. 이는 자가면역성 갑상선 질환(Graves)과 일치한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000422
