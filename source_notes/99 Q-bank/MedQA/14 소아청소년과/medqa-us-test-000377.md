---
type: qbank
schema_version: 1
id: medqa-us-test-000377
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b3eae594a6cdbabca99a10faa97ebfaa2b3f3a56116a7facdd0f35ce104e022c
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "선천성 HIV 감염"
  - "면역결핍"
  - "구강 칸디다증"
question_type: investigation
related_disease_slugs:
  - MDgg6rCQ7Je8L-y5uOuUlOuLpOymnSAoQ2FuZGlkaWFzaXMpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

산모의 HIV 감염이 확인된 생후 3개월 영아를 평가한다. 영아의 HIV 항체 선별검사는 양성이었다. 영아 자신의 감염 여부를 확인할 검사는?

## 선택지

A. HIV 항체 검사를 한 번 더 해서 확진
B. CD4 세포 수만 측정
C. HIV RNA 또는 DNA 핵산검사
D. 산모를 재검하고 영아 검사는 만 2세까지 하지 않음

## 해설

18개월 미만에서는 산모에게서 받은 항체가 검출될 수 있어 항체 양성만으로 영아 감염을 확진하지 않는다. 바이러스 핵산 검사를 사용하며 양성은 별도 검체로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 면역결핍 징후 영아의 HIV NAT D 유지. 단일 검사 확진·선천성 감염 단정 한정.
- https://clinicalinfo.hiv.gov/en/guidelines/pediatric-arv/diagnosis-hiv-infection-infants-and-children?view=full

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000377
- https://clinicalinfo.hiv.gov/en/guidelines/perinatal/management-infants-diagnosis-hiv-infection-children?view=full
