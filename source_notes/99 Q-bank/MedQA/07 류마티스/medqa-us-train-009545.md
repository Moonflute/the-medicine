---
type: qbank
schema_version: 1
id: medqa-us-train-009545
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1d25e163d76aae737fe5a3863875f3419039deb541bdfee2975eb39de31844c0
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "acute rheumatic fever"
  - "급성 류마티스열"
  - "migratory polyarthritis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
question_type: prevention
difficulty: complex
answer: A
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

14세 남자가 급성 류마티스열과 승모판염 치료 후 회복했다. 페니실린 알레르기는 없다. 재발과 판막 손상 진행을 막기 위한 퇴원 후 계획은?

## 선택지

A. 장기 벤자틴 페니실린 G 근육주사 예방요법
B. 이번 항생제 치료가 끝나면 예방은 하지 않는다
C. 인후통이 생길 때만 임의로 남은 항생제를 먹는다
D. 장기 아스피린만 복용한다

## 해설


급성 류마티스열을 앓은 뒤에는 재발을 막기 위한 항생제 예방이 필요하다. 벤자틴 페니실린 G 근육주사가 우선이며, 기간은 심장 침범과 판막 상태에 따라 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009545 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 정상심폐진찰에 심잡음을 창작한 부분 제거; GAS 후 이동성관절염·피하결절 근거와 확진요건 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/diagnosing-acute-rheumatic-fever.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009545
- https://www.who.int/publications/i/item/9789240100077
