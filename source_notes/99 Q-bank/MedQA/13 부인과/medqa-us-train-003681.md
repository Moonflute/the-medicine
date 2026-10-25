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
answer: D
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

19세 여성이 수일간 악화된 하복부 골반통과 질 분비물로 응급실에 왔다. 혈압은 84/66 mmHg, 맥박은 121회/분, 체온은 39.5°C였고 다량의 황록색 질 분비물과 심한 자궁경부 움직임 압통이 있었다. 추정 진단에 대한 가장 적절한 확정적 치료는?

## 선택지

A. 레보플록사신과 메트로니다졸 14일
B. 세프트리악손 근육주사 1회
C. 탐색적 개복술
D. 클린다마이신과 겐타마이신 14일

## 해설

발열·화농성 분비물·자궁경부 움직임 압통은 중증 PID이며 저혈압에는 즉시 소생과 입원 치료가 필요하다. 보기 중 클린다마이신과 겐타마이신(D)은 권고되는 정주 요법이다. 호전 뒤 경구 전환하여 총 14일 치료하며 농양 동반 시 혐기성균 치료를 유지한다. 농양 파열이나 수술적 감염원 제거 필요성은 신속히 평가하되, 본문에 없는 파열을 창작해 개복술 C를 정답으로 삼지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원정답 C는 농양 파열·복막염 등의 근거 없이 개복술을 강제한다. 중증 PID의 입원 정주 항생제 조합 D로 교정하고 원정답을 보존한다.
- https://www.cdc.gov/std/treatment-guidelines/pid.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003681
