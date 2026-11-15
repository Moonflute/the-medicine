---
type: qbank
schema_version: 1
id: medqa-us-test-000513
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:e33e4a6cea76236b28888da1f4a1832dbf033ff09789202bbaa0de562d8285dd
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "임신 중 갑상샘항진증"
  - "메티마졸"
  - "프로필티오우라실"
  - "Graves disease"
related_disease_slugs:
  - MDQg64K067aE67mEL-q3uOugiOydtOu4jOyKpOuzkSAoR3JhdmVzJyBEaXNlYXNlKS5tZA
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRoaW1hem9sZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9Qcm9weWx0aGlvdXJhY2lsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

그레이브스병으로 메티마졸을 복용하는 35세 여성이 임신 6주임을 확인했다. 유리 T4가 여전히 높아 임신 초기에도 항갑상선제가 필요한 상황이다. 적절한 처치는?

## 선택지

A. 메티마졸을 같은 용량으로 임신 내내 유지
B. 프로필티오우라실로 바꾸고 갑상선기능을 추적
C. 항갑상선제를 중단하고 방사성요오드 치료
D. 레보티록신으로 바꿈

## 해설

임신 초기에도 항갑상선 치료가 필요하면 메티마졸 관련 기형 위험을 줄이기 위해 프로필티오우라실을 선호한다. 최소 유효 용량을 사용하고 임신 중기 이후 간독성 등을 고려해 약제 계획을 재평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 초기 임신 PTU의 상대적 선호를 명확히 하고 모든 임신 기간 무위험이라는 인상을 제거.
- https://www.thyroid.org/hyperthyroidism-in-pregnancy/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000513
- https://doi.org/10.1177/10507256261445624
