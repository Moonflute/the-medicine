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

3 m 높이에서 떨어진 24세 남성의 왼쪽 어깨가 아프지만 움직임은 정상이다. 왼쪽 윗배에 압통이 있고 혈압 114/70 mmHg, 맥박 95회/분으로 안정적이다. 비장 손상이 의심될 때 적절한 검사는?

## 선택지

A. 왼쪽 어깨 MRI
B. 복부·골반 조영증강 CT
C. 외래 추적까지 관찰만 한다
D. 상부위장관 내시경

## 해설

왼쪽 상복부 둔상과 어깨 연관통은 비장 주변 출혈에 의한 횡격막 자극을 시사할 수 있다. 안정된 외상 환자에서는 복부 조영 CT로 장기 손상과 활동성 출혈을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 복부 CT를 선택할 수 있는 안정한 활력징후가 번역에서 생략되어 복원했다. 비장 손상의 Kehr 연관통과 B를 설명하고 모든 외상에서 CT가 우선이라는 일반화를 피했다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002572
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/
