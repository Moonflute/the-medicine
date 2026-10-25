---
type: qbank
schema_version: 1
id: medqa-us-train-000432
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c6b0764b38f0ce897069412c0952cd4cdee4afcbe5045b1639a123ee30c2e221
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "antisocial personality disorder"
  - "conduct disorder"
question_type: prognosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2SiO2WiSDsnqXslaAgKENvbmR1Y3QgRGlzb3JkZXIpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

12세 소년이 행동 문제로 부모에 의해 내원하였습니다. 환자는 끊임없이 부모와 말다툼을 하고 모든 요청을 노골적으로 거부합니다. 학교에서는 의도적으로 지각하고 교사에게 반항하는 것으로 알려져 있습니다. 환자에게 추가 질문을 한 결과, 부모를 괴롭히기 위해 흡연을 시작하는 등 최근의 행동들에 대해 알게 되었습니다. 또한 환자가 진료 중인 의사에게도 무례하게 행동하는 것을 관찰하였습니다. 이후 환자가 학교에서 또래들과 뚜렷한 이유 없이 매주 싸움을 벌인다는 사실도 알게 되었습니다. 또한 지난주에는 동네 고양이를 야구 방망이로 때려 죽이려 하는 모습이 목격되었습니다. 환자는 최근 개조된 제2차 세계 대전 이전의 주택에서 부모와 함께 살고 있습니다. 신체 검진 결과는 정상입니다. 검사실 수치는 다음과 같습니다. Na: 140 mmol/L, K: 4.5 mmol/L, Cl: 100 mmol/L, Glucose: 80 mg/dL, Ca: 10 mmol/L, Mg: 3 mEq/L, Cr: 0.8 mg/dL, BUN: 10 mg/dL, 혈청 납: < .01 µg/dL, Hb: 15 g/dL, Hct: 45%, MCV: 95, 소변 독성 검사: 음성. 환자가 진료실을 나갈 때 진료실 사탕 그릇에 있는 사탕을 모두 훔치는 것을 목격하였습니다. 환자는 전반적으로 자신의 행동에 대해 전혀 개의치 않는 것으로 보입니다. 이 환자에게 가장 가능성이 높은 설명은 무엇입니까?

## 선택지

A. 이 환자는 권위적인 인물들에게 계속 반항하더라도 정상적으로 기능할 가능성이 높다
B. 이 환자는 반사회적 인격 장애(antisocial personality disorder)를 앓고 있으며 성인이 되면 수감될 가능성이 높다
C. 환자의 증상은 반사회적 인격 장애로 진행될 수 있다
D. 강력한 D2 길항제가 1차 약물 치료이다

## 해설

싸움·동물 학대·절도 등 타인의 권리를 침해하는 행동은 단순 반항성보다 품행장애를 시사한다. 일부 환자는 성인이 되어 반사회성 인격장애로 이어질 수 있지만 진행이 필연적인 것은 아니다. 12세에서 성인 반사회성 인격장애로 확진하거나 미래 수감을 단정하지 않는다. 원문 검사표의 칼슘 10 mmol/L는 통상적 단위·수치와 맞지 않는 원자료 이상이며, 임의로 정상 검사값으로 교체하지 않았다. 이 문항의 행동·예후 선택에는 칼슘 수치를 근거로 사용하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000432

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 공격·동물 학대·절도에서 품행장애와 성인 반사회성 인격장애 진행 가능성 해설 유지. 원문 칼슘 10 mmol/L 단위 이상을 실제 정상값으로 임의 변경하지 않고 한계 표시.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
