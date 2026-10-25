---
type: qbank
schema_version: 1
id: medqa-us-train-007770
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:79e998d0cbb1015c37c9fa00cc03c9728d20a83a99a2290dbe76bc1d76d0e616
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute pancreatitis"
  - "Ranson criteria"
  - "mortality risk"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: prognosis
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

59세 남자가 전반적인 복통, 오심, 구토로 응급실에 왔다. 입원 시 혈당 2,410 mg/dL, AST 321 IU/L, 백혈구 21,200/mL였다. 중환자실에서 지지요법을 받은 지 3일 이내에 임상 상태가 호전되기 시작했다. 다른 관련 요인은 모두 음성이라고 할 때, Ranson 기준에 따른 이 환자의 전체 사망 위험은?

## 선택지

A. 15%
B. 40%
C. 80%
D. 100%

## 해설


입원 시 확인 가능한 Ranson 항목은 나이 >55세, glucose >200mg/dL, AST >250의 3가지다. 백혈구 21,200을 통상 /µL 값으로 의도했다면 1점이 더해져 4점이지만 원문의 /mL 단위는 확인이 필요하다. 다른 항목은 모두 음성이라고 했으므로 LDH나 48시간 칼슘·산소·BUN 등을 임의 가산하지 않는다. 역사적인 Ranson 3–4점 범주의 사망률 약15%(A)를 묻는 문항이며 현 환자의 확정 예후로 해석하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007770 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문은 다른 위험인자 모두 음성인데 없는 48시간 항목을 더한 계산 오류 교정. Ranson3–4점의 역사적 약15% A 유지; 원문 WBC/mL·AST 단위 불명확성 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007770
