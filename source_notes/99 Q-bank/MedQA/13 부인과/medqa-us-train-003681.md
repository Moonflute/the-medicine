---
type: qbank
schema_version: 1
id: medqa-us-train-003681
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:af4573cdb0f0aec5b32a7383cac7152a240c16e413b1c95dce3dbab77ed6d61e
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "tubo-ovarian abscess"
  - "pelvic inflammatory disease"
  - "septic shock"
  - "exploratory laparotomy"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-qzqOuwmOuCtCDqsJDsl7wgKFBlbHZpYyBJbmZsYW1tYXRvcnkgRGlzZWFzZSkubWQ
  - MTEg7Jm46rO8L-2MqO2YiOyEsSDsh7ztgawgKFNlcHRpYyBTaG9jaykubWQ
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: C
answer_change_reason: "원정답 C는 농양 파열·복막염 등의 근거 없이 개복술을 강제한다. 중증 PID의 입원 정주 항생제 조합 D로 교정하고 원정답을 보존한다."
---

# MedQA US 임상문제

## 문제

난관난소농양으로 입원한 29세 여성이 적절한 정맥 항생제를 3일 사용했지만 고열과 통증이 지속된다. 7 cm 농양이 그대로 있고 혈압은 안정적이며 파열·복막염은 없다. 접근 가능한 농양에 대한 다음 처치는?

## 선택지

A. 항생제를 중단하고 경과 관찰
B. 단회 근육주사로 바꾸고 바로 퇴원
C. 정맥 항생제를 유지하며 영상 유도 배액을 고려
D. 고름을 배액하지 않고 진통제만 늘린다

## 해설

큰 난관난소농양이 충분한 항생제에 반응하지 않으면 감염원을 배액해야 할 수 있다. 안정적이고 접근 가능하면 영상 유도 배액을 고려하며, 파열이나 복막염이 있으면 응급 수술 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원정답 C는 농양 파열·복막염 등의 근거 없이 개복술을 강제한다. 중증 PID의 입원 정주 항생제 조합 D로 교정하고 원정답을 보존한다.
- https://www.cdc.gov/std/treatment-guidelines/pid.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003681
- https://pubmed.ncbi.nlm.nih.gov/30880246/
