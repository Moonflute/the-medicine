---
type: qbank
schema_version: 1
id: medqa-us-train-002572
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0a8f53bbff07b6002cf18244f59dc0c594c59ce598ff3ce522f893215926a93f
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "blunt abdominal trauma"
  - "splenic injury"
  - "Kehr sign"
  - "abdominal CT"
question_type: investigation
related_disease_slugs:
  - MTEg7Jm46rO8L-uRlOyDgSDrs7XrtoDsmbjsg4EgKEJsdW50IEFiZG9taW5hbCBUcmF1bWEpLm1k
  - MTEg7Jm46rO8L-u5hOyepSDshpDsg4EgKFNwbGVuaWMgSW5qdXJ5KS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 남성이 암벽등반 중 약 10피트 높이에서 떨어진 지 5시간 후 왼쪽 어깨 통증으로 응급실에 왔다. 통증은 점점 심해졌고 왼쪽 어깨의 능동·수동 운동범위는 정상이다. 맥박 95회/분, 호흡수 16회/분, 혈압 114/70 mmHg이다. 왼쪽 상복부에 7/10 압통과 자발성 경직이 있고 혈액검사와 전해질은 정상이다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 최소 9시간 연속 활력징후 관찰
B. 복부 CT
C. 왼쪽 어깨 X선
D. 왼쪽 어깨 MRI

## 해설

낙상 후 왼어깨 자체 운동은 정상이지만 왼쪽 상복부 압통·방어가 있어 비장 손상에 의한 횡격막 자극과 연관 어깨통증(Kehr 징후)을 의심한다. 제시된 활력징후가 안정하여 복부 조영 CT(B)로 손상과 출혈을 평가하는 것이 적절하다. 정상 초기 혈색소만으로 급성 출혈이 배제되지는 않는다. 혈역학적으로 불안정하거나 명백한 복막염이 있으면 CT 때문에 소생·출혈 통제를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 복부 CT를 선택할 수 있는 안정한 활력징후가 번역에서 생략되어 복원했다. 비장 손상의 Kehr 연관통과 B를 설명하고 모든 외상에서 CT가 우선이라는 일반화를 피했다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002572
