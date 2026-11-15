---
type: qbank
schema_version: 1
id: medqa-us-train-009973
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:73e2f0f0a4f329d042be9b70c851d2165ec825cdd530bee0ae86fbd103ebe832
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "세균성 장염"
  - "집단 발생"
  - "캄필로박터 감염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-y6hO2VhOuhnOuwle2EsCAoQ2FtcHlsb2JhY3RlcikubWQ
question_type: investigation
difficulty: complex
answer: D
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
---

# MedQA US 임상문제

## 문제

어린이집 같은 반 아이 여러 명이 발열과 혈성 설사로 내원했다. 누가 어떤 음식을 먹었는지는 아직 모른다. 수분 상태를 평가하면서 원인과 집단발생에 대응할 다음 조치는?

## 선택지

A. 대표 환자만 혈액검사를 하고 대변 검사는 생략한다
B. 아이마다 먹은 음식이 같다는 사실이 확정될 때까지 기다린다
C. 증상이 없는 원아까지 모두 경험적 항생제를 투여한다
D. 대변 검체를 채취해 원인을 검사하고 관할 보건소에 집단발생을 알린다

## 해설


발열과 혈변이 있고 집단발생이 의심되면 대변 검사를 통해 세균성 원인을 평가하고 보건소와 대응한다. 같은 반에서 발생했다고 해서 특정 음식이나 병원체가 확정되지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009973 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 유치원 유사 증상 집단 발생은 학교 세균 노출 C를 지지. Campylobacter의 흔한 사람 간 전파라고 잘못 설명하지 않고 Shigella 등 분변경구 집단감염을 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/shigella/prevention/preventing-shigella-infection-among-young-children.html
- https://www.cdc.gov/campylobacter/hcp/clinical-overview/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009973
- https://doi.org/10.3947/ic.2019.51.2.217
- https://www.idsociety.org/practice-guideline/infectious-diarrhea/
