---
type: qbank
schema_version: 1
id: medqa-us-train-009362
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3b0bfb9500c826f05836fb774e5c426b5408008c9ea5663a257f282c369bfc4b
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Friedreich ataxia"
  - "프리드라이히 운동실조"
  - "GAA trinucleotide repeat expansion"
question_type: mechanism
related_disease_slugs: []
difficulty: complex
answer: A
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

11세 남아가 자주 넘어져 평가를 위해 내원했다. 어머니는 지난 몇 달 동안 걷기가 점점 어려워졌고 지난 2주간 고형식을 거부했다고 한다. 발달은 정상이었고 출생 이후 귀 감염이 여러 번 있었다. 체온 37°C, 맥박 90회/분, 혈압 120/80 mmHg이다. 진찰에서 양측 발이 안쪽으로 뒤집히고 망치발가락이 있으며 보행은 기반이 넓고 불규칙하다. 혈당은 300 mg/dL이다. 추가 검사에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. GAA 삼염기 반복 확장
B. 디스트로핀 단백질 소실
C. PMP22 유전자 중복
D. ATM 단백질 결함

## 해설

소아의 진행성 실조, 발 변형과 고혈당의 조합은 Friedreich 운동실조를 시사한다. 흔한 원인은 FXN 유전자의 GAA 반복 확장(A)으로 인한 frataxin 발현 감소이며 미토콘드리아 철-황 군집 대사 이상과 연결된다. Frataxin을 하나의 미토콘드리아 효소와 동의어로 설명하는 것은 부정확하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Friedreich 실조 A 유지. Frataxin을 단순 미토콘드리아 효소라고 한 설명 교정.
- 공식/학회 근거: https://medlineplus.gov/download/genetics/condition/friedreich-ataxia.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009362
