---
type: qbank
schema_version: 1
id: medqa-us-train-005447
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6087372dc1d0483c9b74ef94eace8c0e8dfe000d470b7cd0ea81cfaafa70703d
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신성 당뇨병"
  - "임신 중 고혈당"
  - "식이요법"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: A
answer_change_reason: "공복138 mg/dL·HbA1c7%는 명백한 당뇨 범위로 식이만 시작하는 원정답 A를 B로 교정."
---

# MedQA US 임상문제

## 문제

임신 26주인 27세 여자의 75 g 경구당부하검사에서 1시간 혈당 177 mg/dL, 2시간 167 mg/dL, 공복혈당 138 mg/dL, HbA1c 7%이다. 다음 중 적절한 초기 관리는?

## 선택지

A. 식이와 생활습관 수정
B. 인슐린
C. 글리부라이드
D. 시타글립틴

## 해설

공복혈당 138 mg/dL와 HbA1c 7%는 단순 경도 임신성 당뇨를 넘어 일반 당뇨 진단 범위이다. 식이·운동 상담과 함께 신속한 약물 조절이 필요하며 선택지 중 인슐린(B)이 적절하다. NICE도 진단 시 공복혈당 ≥7.0 mmol/L이면 인슐린을 즉시 시작하도록 권고한다. 생활습관만 시도하며 약물치료를 지연하는 A는 이 수치에 부적절하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 공복138 mg/dL·HbA1c7%는 명백한 당뇨 범위로 식이만 시작하는 원정답 A를 B로 교정.
- https://www.nice.org.uk/guidance/ng3/chapter/Recommendations
- https://doi.org/10.2337/dc26-s002

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005447
