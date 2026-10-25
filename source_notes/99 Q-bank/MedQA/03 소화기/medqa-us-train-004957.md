---
type: qbank
schema_version: 1
id: medqa-us-train-004957
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4856f85c15d3315f123f2cc00222c9d7a9fce13361d40e188d00d3c8f91ba6d7
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간경변"
  - "티록신결합글로불린"
  - "간 합성기능 저하"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: mechanism
difficulty: complex
answer: D
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

64세 남자가 20년 넘게 진료를 받지 않다가 최근 악화된 피로와 쇠약, 식욕감소, 복부팽만, 쉽게 멍이 드는 증상으로 내원했다. 과거 알코올중독과 정맥주사 약물 사용력이 있고 현재 하루 한 갑 흡연한다. 백혈구 4,100/mm³, 혈색소 9.6 g/dL, 혈소판 87,000/mm³, PT 21초, INR 1.8, 총 빌리루빈 3.2 mg/dL, AST 225 U/L, ALT 103 U/L, 알부민 2.6 g/dL, T4 3.1 μg/dL, TSH 3.4 μU/mL이다. 이 환자의 낮은 혈청 티록신의 원인은?

## 선택지

A. 신증후군에 의한 티록신결합글로불린 소변 소실
B. 급성 간염으로 인한 티록신결합글로불린 증가
C. 일시적 중추성 갑상샘저하증(비갑상샘질환 증후군)
D. 간 합성기능 저하

## 해설

간경변의 낮은 albumin·긴 INR 등은 간 합성능 저하 D를 지지한다. 제시된 것은 총 T4이며 결합단백(TBG) 감소로 낮아질 수 있다. 결합단백 감소만으로 유리 T4도 반드시 감소한다고 추론할 수 없고 정상 TSH와 함께 실제 갑상선 기능을 해석해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 간합성 감소에서 total T4와 free T4를 혼동한 설명 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004957
