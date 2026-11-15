---
type: qbank
schema_version: 1
id: medqa-us-train-002340
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5a3bc225f78980a58fb5875e7801c968b550b7327aa2a00114cf5a049c3ad18
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "polycystic ovary syndrome"
  - "hirsutism"
  - "insulin resistance"
  - "dyslipidemia"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-uLpOuCrSDrgpzshowg7Kad7ZuE6rWwIChQb2x5Y3lzdGljIE92YXJ5IFN5bmRyb21lKS5tZA
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
difficulty: complex
answer: C
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

32세 다낭성난소증후군 환자의 BMI는 32 kg/m²다. 75 g 당부하검사 2시간 혈당이 165 mg/dL이고 신기능은 정상이다. 식사·운동 치료와 함께 대사 이상 개선에 고려할 약은?

## 선택지

A. 스피로놀락톤
B. 레트로졸
C. 메트포르민
D. 복합피임약만 사용

## 해설

체중이 높거나 내당능장애가 있는 다낭성난소증후군 환자에서는 생활습관 관리와 함께 메트포르민을 고려할 수 있다. 다모·월경 조절이나 난임 치료를 위한 약과 목적이 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: PCOS체중관리만으로모든증상치료를대체하지않고 당대사검사방식정리.
- https://integration.asrm.org/practice-guidance/practice-committee-documents/recommendations-from-the-2023-international-evidence-based-guideline-for-the-assessment-and-management-of-polycystic-ovary-syndrome/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002340
- https://doi.org/10.1210/clinem/dgad463
