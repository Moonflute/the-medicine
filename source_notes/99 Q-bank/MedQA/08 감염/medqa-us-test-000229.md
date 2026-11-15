---
type: qbank
schema_version: 1
id: medqa-us-test-000229
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9faac156e3f4b893207a8e0ad379747761c10851d0121bf7e997724ae01460d9
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "치쿤구니야"
  - "여행자 감염병"
  - "바이러스성 발열"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
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
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

동남아 여행에서 돌아온 환자에게 발열, 발진과 양쪽 손목·손가락 관절통이 생겼다. 치쿤구니야가 의심되지만 혈소판이 낮고 뎅기열 검사는 아직 결과가 나오지 않았다. 우선 사용할 해열진통제는?

## 선택지

A. 이부프로펜
B. 아세트아미노펜
C. 아스피린
D. 나프록센

## 해설


치쿤구니야가 의심돼도 뎅기열을 배제하기 전에는 출혈 위험을 줄이기 위해 아스피린과 다른 비스테로이드성 소염제를 피하고 아세트아미노펜을 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000229 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 관절통이 두드러진 여행후 발열에서 치쿤구니야 A 유지. 살충제 매개라는 명백한 오류를 Aedes 모기 매개로 교정, 음성 지혈대 검사로 뎅기 배제하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/chikungunya/causes-and-spread/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000229
- https://www.cdc.gov/chikungunya/hcp/treatment-prevention/index.html
