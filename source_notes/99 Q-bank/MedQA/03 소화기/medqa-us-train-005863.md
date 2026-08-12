---
type: qbank
schema_version: 1
id: medqa-us-train-005863
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:882538a885a6e9e04260e63896414b95faa58b33b4b44c04babc6618b217c978
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 췌장염"
  - "Ranson 기준"
  - "백혈구 증가"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: prognosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

담도산통 병력이 있는 45세 남성이 하루 동안 지속된 조절되지 않는 오심, 구토 및 등으로 방사되는 복통으로 내원했다. 체온은 99.7°F(37.6°C), 혈압은 102/78 mmHg, 맥박은 분당 112회, 호흡수는 분당 22회이다. 복부검사에서 불수의적 방어와 우상복부 및 명치 부위 압통이 있다. 백혈구 18,200/μL, 알칼리성 인산분해효소 650 U/L, 총 빌리루빈 2.5 mg/dL, 아밀라아제 500 U/L, 리파아제 1,160 U/L이다. 다음 중 어떤 검사 결과가 사망률 증가와 관련되는가?

## 선택지

A. 백혈구 수
B. 총 빌리루빈
C. 아밀라아제
D. 리파아제

## 해설


Ranson 점수에서 백혈구 수는 초기 중증도 평가 항목이며, 백혈구 >16,000/mm³은 사망률 증가와 직접적으로 연관된다. 따라서 백혈구 수가 사망률 증가와 가장 관련된 검사이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005863
