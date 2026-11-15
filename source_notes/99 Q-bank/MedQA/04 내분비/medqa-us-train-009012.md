---
type: qbank
schema_version: 1
id: medqa-us-train-009012
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1866053cc4a9a05466b987596ba9807a9c38db6a601052c8d93a82516c7160bd
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "MEN2A"
  - "medullary thyroid carcinoma"
  - "pheochromocytoma"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsho3sp4jslZQgKFRoeXJvaWQgTWVkdWxsYXJ5IENhcmNpbm9tYSkubWQ
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
question_type: investigation
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

병적 RET 변이가 있고 갑상선 수질암으로 갑상선절제술을 준비하는 32세 남성이다. 혈압은 정상이고 두통이나 두근거림은 없다. 수술 전 무증상 갈색세포종을 배제하기 위한 검사는?

## 선택지

A. 24시간 소변 분획 메타네프린
B. 24시간 소변 5-HIAA
C. 자정 타액 코르티솔
D. 공복 혈청 가스트린

## 해설


MEN2에서는 증상이 없더라도 갑상선 수술 전에 갈색세포종을 배제한다. 24시간 소변 분획 메타네프린이나 혈장 유리 메타네프린을 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009012 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고Ca/PTH는 부갑상선 과기능이며 RET+가족력의 MEN2A에서 pheo 수술전 검사 A를 별도로 설명; 멜라노카르시노마 오류 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4490627/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009012
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8090459/
