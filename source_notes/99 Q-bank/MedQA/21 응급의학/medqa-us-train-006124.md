---
type: qbank
schema_version: 1
id: medqa-us-train-006124
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:58c4f23da64921b5f66b3f05f023af1ca793ecece1d99adb99a315ba2d3bf606
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "펜시클리딘 중독"
  - "격앙 상태"
  - "할로페리돌 D2 길항"
question_type: mechanism
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaWRhem9sYW0ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남성이 사회 모임에서 공격적인 행동과 의식 변화로 경찰에 의해 응급실에 왔다. 현장에서 펜시클리딘이 발견되었고 병력 청취는 어렵지만 시각적 환각이 있다. 혈압은 155/95 mmHg, 맥박은 분당 103회, 호흡수는 분당 20회, 산소포화도는 99%이며 기도·호흡·순환은 유지된다. 폭력적이고 옷을 벗으려 하여 여러 직원이 침대에 억제했다. 혈당은 93 mg/dL이다. 정맥로 확보가 어려워 근육 내 미다졸람을 투여했으나 여전히 초조하다. 다음 중 최선의 대체 진정제 작용기전은 무엇인가?

## 선택지

A. GABA-A 수용체 염소통로 개방 지속시간 증가
B. 경쟁적 오피오이드 수용체 길항
C. D2 수용체 길항
D. μ-오피오이드 수용체 부분 작용

## 해설

미다졸람은 GABAA 수용체 작용을 강화하는 벤조디아제핀이며, PCP의 주요 작용은 NMDA 수용체 길항이다. 진정 후에도 위험한 흥분과 정신병적 증상이 지속될 때 보기 C의 도파민 D2 수용체 길항 작용을 갖는 항정신병약을 고려할 수 있다. 이는 GABAA 수용체를 차단하여 PCP 중독을 치료한다는 뜻이 아니다. 약제 선택 시 체온, 심전도와 QT 간격, 발작 위험 및 호흡 상태를 평가하고 지속적으로 관찰해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. PCP 흥분에 대한 GABAA 길항 설명을 교정한다. C의 D2 길항 기전은 유지하되 벤조디아제핀과 항정신병약의 역할·안전 조건을 구별한다.
- 공식/학회 근거: https://www.acep.org/siteassets/new-pdfs/clinical-policies/severe-agitation-cp.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006124
