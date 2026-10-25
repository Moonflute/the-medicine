---
type: qbank
schema_version: 1
id: medqa-us-train-009122
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9378e61b42c8d728637ce7ff7427d4e5099365211d3130dcddb4fd79e1ec86f9
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute pancreatitis"
  - "급성 췌장염"
  - "Ranson criteria"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: prognosis
difficulty: complex
answer: B
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

57세 남자가 10시간 전부터 갑자기 시작되어 등으로 방사되는 복통, 오심 및 여러 차례의 구토로 응급실에 입원했다. 특별한 과거력은 없지만 매일 밤 술을 마신다고 한다. 체온 37.5°C, 호흡수 20회/분, 맥박 120회/분, 혈압 120/76 mmHg이다. 창백해 보이고 눈이 움푹 들어가 있으며 심한 상복부 압통과 옆구리 변색이 있다. 초기 검사에서 백혈구 10,000/mm³, 혈소판 140,000/mm³, 혈당 160 mg/dL, 혈청 LDH 500 IU/L, AST 400 IU/dL, 아밀라아제 500 IU/L, 리파아제 300 IU/L이다. 다음 조합 중 이 환자의 중증도를 가장 잘 예측하는 것은 무엇인가?

## 선택지

A. 혈당, LDH, AST
B. 나이, LDH, AST
C. 백혈구 수, 혈소판 수, AST
D. AST, 아밀라아제, 리파아제

## 해설


정답 B. 전통적 알코올성 급성 췌장염 Ranson 입원 시 기준에는 나이 >55세, LDH >350 U/L, AST >250 U/L, WBC >16,000/µL, 혈당 >200 mg/dL가 포함된다. 이 사례에서 의도된 세 항목은 나이 57세, LDH 500, AST 400이다. AST 단위는 원문에 IU/dL로 기재되어 있어 통상적 IU/L 표기와 불일치함을 유의한다. 입원 후 48시간의 다른 기준을 이 수치만으로 추가하지 않으며, amylase/lipase의 높이 자체는 중증도 점수가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009122 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Ranson 입원 시 기준과 48시간 추적 기준을 구분. AST의 원문 단위 이상은 확인 없이 수치로 보정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009122
