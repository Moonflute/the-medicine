---
type: qbank
schema_version: 1
id: medqa-us-train-004332
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a15bcdb37ccbbeb17ad6c7886cb633256e4d89d7ecce4da088bfe77423a66be9
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "제한기 소세포폐암"
  - "동시 항암방사선요법"
  - "에토포시드"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
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
---

# MedQA US 임상문제

## 문제

72세 남성이 제한병기 소세포폐암으로 백금제 기반 동시 항암방사선치료를 마쳤다. 영상에서 진행은 없고 면역치료 금기도 없다. 공고요법으로 고려할 약은?

## 선택지

A. 아테졸리주맙
B. 더발루맙
C. 오시머티닙
D. 페메트렉시드

## 해설


제한병기 소세포폐암이 백금제 기반 동시 항암방사선치료 이후 진행하지 않았다면 더발루맙 공고요법을 고려한다. 오시머티닙은 특정 EGFR 변이 비소세포폐암에서 쓰는 약이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004332 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Platinum 약물명 오류와 SCLC에는 수술이 불가능하다는 단정을 고치고 현행 후속 durvalumab을 구분했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/lung/hp/small-cell-lung-treatment-pdq
- https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-durvalumab-limited-stage-small-cell-lung-cancer

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004332
- https://www.fda.gov/drugs/cancer-approvals/fda-approves-durvalumab-limited-stage-small-cell-lung-cancer
- https://www.health.kr/drug/2020032400010
