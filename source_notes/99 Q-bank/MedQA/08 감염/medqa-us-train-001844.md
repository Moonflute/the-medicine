---
type: qbank
schema_version: 1
id: medqa-us-train-001844
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ff0527e56df1b4fb9448f65604c2922615e64fb640bc16aa540389371807f521
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Lyme disease"
  - "Lyme carditis"
  - "Borrelia burgdorferi"
related_disease_slugs:
  - MDgg6rCQ7Je8L-udvOyehOuzkSAoTHltZSBEaXNlYXNlKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

미국 북동부 여행 뒤 가운데가 옅은 홍반이 서서히 커졌던 환자가 어지럼으로 왔다. 심전도에 2도 방실차단이 보인다. 라임 심장염이 강하게 의심될 때 검사와 함께 할 처치는?

## 선택지

A. 경구 독시사이클린만 처방하고 당일 귀가시킨다
B. 입원해 심전도를 연속 감시하고 정맥 세프트리악손을 시작한다
C. 혈청 항체검사가 확정될 때까지 항생제를 보류한다
D. 가역 원인을 치료하기 전에 영구 심박동기를 일률적으로 삽입한다

## 해설


라임 심장염의 2도 이상 방실차단은 악화할 수 있어 입원 감시와 정맥 세프트리악손으로 치료한다. 증상과 차단 정도에 따라 일시 심박조율을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001844 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 진드기 노출 지역·유주성홍반·방실차단에 Borrelia 스피로헤타 B의 연결이 맞는 기초 병인 문항임을 확인.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001844
- https://www.cdc.gov/lyme/hcp/clinical-care/lyme-carditis.html
