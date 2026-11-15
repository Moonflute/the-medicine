---
type: qbank
schema_version: 1
id: medqa-us-train-001461
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0b2262fa6b763c1f0f0f4c5029c26333a71e4fa1fabd2eb5c2488c783ebd5b49
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "pelvic inflammatory disease"
  - "gonorrhea"
  - "chlamydia"
  - "HIV screening"
related_disease_slugs:
  - MTMg67aA7J246rO8L-qzqOuwmOuCtCDqsJDsl7wgKFBlbHZpYyBJbmZsYW1tYXRvcnkgRGlzZWFzZSkubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
---

# MedQA US 임상문제

## 문제

하복부 통증과 자궁경부 움직임 통증이 있는 비임신 환자가 골반염으로 진단됐다. 활력징후가 안정적이고 농양이 없어 외래 치료가 가능하다. 세프트리악손·독시사이클린에 혐기성균 치료를 위해 더할 약제는?

## 선택지

A. 아지트로마이신
B. 메트로니다졸
C. 플루코나졸
D. 아시클로버

## 해설


골반염 외래 치료는 세프트리악손, 독시사이클린과 메트로니다졸을 병용한다. 메트로니다졸은 혐기성균 범위를 보완한다. 중증이거나 난관난소농양이 있으면 입원 필요성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001461 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PID의 HIV 검사 D 유지하되 현재의 metronidazole 포함 요법과 고열 시 입원평가 누락을 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/pid.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001461
