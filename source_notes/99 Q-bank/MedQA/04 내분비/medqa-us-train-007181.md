---
type: qbank
schema_version: 1
id: medqa-us-train-007181
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d9f49772fc40db73fb457e6f0a41294053bcea445e5ed9f357509f30d83adbeb
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "하시모토 갑상선염"
  - "무증상 갑상선 자가면역"
  - "정상 갑상선 기능"
question_type: investigation
difficulty: complex
answer: B
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

25세 여자가 일반 검진을 위해 일차진료의에게 내원했다. 기말고사 기간이라 최근 약간 피로하지만 그 외에는 건강하다. 어머니와 언니가 갑상선기능저하증을 앓고 있다. 피로, 체중 증가, 추위 불내성, 변비, 과다하거나 불규칙한 월경, 머리카락·피부·손발톱 상태 변화는 부인한다. 신체검사는 정상이다. 검사 결과는 다음과 같다.
헤모글로빈 14 g/dL, 헤마토크릿 40%, 백혈구 수 5,500/mm³(감별 정상), 혈소판 수 188,000/mm³
혈청 나트륨 139 mEq/L, 염소 102 mEq/L, 칼륨 4.4 mEq/L, 중탄산염 24 mEq/L, BUN 20 mg/dL, 포도당 99 mg/dL, 크레아티닌 0.8 mg/dL, 칼슘 10.2 mg/dL
항갑상선 과산화효소 항체 양성
AST 12 U/L, ALT 10 U/L
이 환자에서 가장 가능성 높은 검사 결과는 무엇인가?

## 선택지

A. TSH 증가와 T4 증가
B. TSH 정상과 T4 정상
C. TSH 정상과 T4 감소
D. TSH 감소와 T4 증가

## 해설


항갑상선 과산화효소 항체 양성은 하시모토 갑상선염을 의미하지만 대부분 무증상이며 TSH와 T4가 정상인 경우가 흔하다. 따라서 TSH 정상·T4 정상이 가장 가능성 높은 검사 결과이다

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007181
