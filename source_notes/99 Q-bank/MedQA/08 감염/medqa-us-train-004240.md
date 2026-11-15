---
type: qbank
schema_version: 1
id: medqa-us-train-004240
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9e65cef217c8f94b1e045e5a2e70bbf0bfb5444e078168cdc30d73c5162f458a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "뎅기열"
  - "뎅기출혈열"
  - "혈장 누출 증후군"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uOheq4sOyXtCAoRGVuZ3VlIEZldmVyKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

동남아 여행 후 뎅기열 확진을 받은 환자다. 열이 내리는 시기에 복통이 심해졌고, 혈소판은 감소하는 반면 헤마토크릿은 상승했다. 새 흉수가 보이고 혈압은 86/74mmHg다. 가장 적절한 판단은?

## 선택지

A. 해열됐으므로 회복기에 들어갔다
B. 혈소판 감소만 있는 비중증 뎅기열이다
C. 혈장 누출에 의한 쇼크를 동반한 중증 뎅기열이다
D. 경미한 탈수이므로 경구 수분만 권고한다

## 해설


해열 시점은 오히려 혈장 누출을 주의해야 할 시기다. 혈액농축, 새 흉수, 좁은 맥압과 쇼크는 중증 뎅기열을 시사해 즉각 평가와 치료가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004240 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 간 span15cm를 늑골연 아래15cm 촉지로 오역한 부분 교정; 혈장누출·쇼크의 중증 dengue B 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004240
- https://www.cdc.gov/dengue/hcp/clinical-signs/
