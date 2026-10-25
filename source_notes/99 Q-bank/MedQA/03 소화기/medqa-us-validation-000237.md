---
type: qbank
schema_version: 1
id: medqa-us-validation-000237
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:d1807654b45dbf572a94d233cd03aa7b97e4dea9381c3b694e845c21e6defbf5
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 췌장염"
  - "Ranson 기준"
  - "사망 위험도"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: prognosis
difficulty: complex
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

59세 남성이 등으로 뻗치는 전반적인 복통, 메스꺼움, 구토로 응급실에 왔다. 활력징후는 체온 36.7°C, 혈압 126/74 mmHg, 심박수 74회/분, 호흡수 14회/분이었다. 입원 시 혈당 241 mg/dL, AST 321 IU/dL, 백혈구 21,200/mL였다. 중환자실에서 지지요법을 받은 지 3일 이내에 임상 상태가 호전되기 시작했다. 다른 관련 요인은 모두 음성이라고 할 때, Ranson 기준에 따른 전체 사망 위험은?

## 선택지

A. 20%
B. 40%
C. 80%
D. 100%

## 해설


정답 A. 전통적 알코올성 급성 췌장염 Ranson 입원 기준으로 나이 59세(>55), 혈당 241 mg/dL(>200), AST 321(통상 U/L 기준 >250), WBC 21,200(통상 /µL 기준 >16,000)이 의도된 네 항목이다. 나머지 요인이 음성이라는 전제에서 3–4점의 역사적 사망률 약 15%에 가장 가까운 선택지는 20%다. 원문 AST IU/dL와 WBC /mL는 통상 단위와 불일치하므로 그대로 문자적으로 점수를 확정할 수 없다는 한계가 있다. 개인 예후를 정밀하게 예측하는 확률로 해석하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000237 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Ranson의 나이 문턱은 >55이며 환자는 59세로 해당, 역사적 3–4점 위험에 가장 가까운 A 유지; 원문 검사단위 오류 한정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000237
