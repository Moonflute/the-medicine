---
type: qbank
schema_version: 1
id: medqa-us-train-003263
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:441e30426b3f1d3aa379ca63ad2c47b06c91f6ed86770be9c0a1a85ca565103f
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "elevated maternal serum AFP"
  - "open neural tube defect screening"
  - "second-trimester ultrasound"
  - "triple screen"
  - "open neural tube defect"
question_type: investigation
related_disease_slugs: []
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 17주 산모의 혈청 알파태아단백(AFP)이 2.9 MoM으로 높다. 산전 정밀 초음파는 아직 하지 않았다. 우선 평가는?

## 선택지

A. 융모막융모검사부터 시행
B. 비침습 산전검사(NIPT)로 신경관 결손 확진
C. 산모 혈청 hCG만 재측정
D. 초음파로 임신 주수·태아 수와 신경관 등 태아 구조를 확인

## 해설

AFP 상승은 개방성 신경관결손 등의 선별 소견이지 확진이 아니다. 먼저 주수와 태아 수를 확인하고 초음파로 척추와 복벽 등 구조를 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 고립성 MSAFP 상승의 다음 검사 C 유지. AFP만으로 NTD 확정 및 양수천자 불필요 단정을 삭제하고 원문에도 있는 엽산 400 mg 단위 오류를 400 µg으로 교정.
- https://www.exxcellence.org/list-of-pearls/elevated-maternal-serum-afp-msafp-during-the-second-trimester/
- https://www.cdc.gov/folic-acid/about/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003263
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7834900/
