---
type: qbank
schema_version: 1
id: medqa-us-train-005071
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f33d13872ec34e21e5362014a2046cb65d630b7b2d5e2bf766d637b5cd051b95
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "패혈성 관절염"
  - "급성 단일관절염"
  - "관절액 분석"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
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

38세 남자가 2일 동안 점점 심해지는 왼쪽 무릎 통증과 부종으로 내원했다. Ibuprofen을2일간 복용해도 호전되지 않았다. 2개월간 아침에20분 지속되는 등 통증·경직이 있고 제2형 당뇨병, BMI31.5kg/m²이며 누나는 RA가 있다. 4일 전 야구를 하다 무릎을 긁었고, 체온은 39°C, 백혈구 13,500/mm³, ESR 70 mm/h이다. 왼쪽 무릎이 붉고 부어 있으며 운동 범위가 제한되어 있다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 골주사
B. 왼쪽 무릎 MRI
C. 혈액 배양검사
D. 왼쪽 무릎 관절천자

## 해설


급성 단일 관절염에서 감염성 원인을 배제하기 위해 관절액 분석이 필요하다. 관절천자는 원인 규명과 치료 방향 결정에 필수적이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005071 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 열성 단관절염의 관절천자 D는 유지하고 감별에 필요한 원문 당뇨·염증성 등통증 병력을 복원했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9901514/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005071
