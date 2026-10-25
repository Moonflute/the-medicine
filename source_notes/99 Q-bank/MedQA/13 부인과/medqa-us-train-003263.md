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
answer: C
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

임신 16주인 27세 초임부가 정기검진을 받으러 왔다. 동반 질환은 없고 주관적인 증상도 없지만 삼중 선별검사 결과를 걱정한다. 매일 엽산 400 µg과 철분 30 mg을 복용한다. 산모 혈청 알파태아단백은 2.9 MoM(정상 0.85~2.5), β-hCG 1.1 MoM, 비결합 에스트리올 1 MoM이었다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 양수천자
B. 인히빈 A 추가검사
C. 초음파검사
D. 융모막융모검사

## 해설

MSAFP 2.9 MoM은 선별검사 이상이지 신경관결손 확진이 아니다. 먼저 초음파로 임신 주수, 다태임신 및 태아 구조를 확인한다(C). 결과와 상담에 따라 양수 AFP 검사 등을 고려할 수 있으므로 침습 검사가 항상 불필요한 것은 아니다. 일상 예방용 엽산은 400 µg이며 원문의 400 mg 표기는 단위 오류다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 고립성 MSAFP 상승의 다음 검사 C 유지. AFP만으로 NTD 확정 및 양수천자 불필요 단정을 삭제하고 원문에도 있는 엽산 400 mg 단위 오류를 400 µg으로 교정.
- https://www.exxcellence.org/list-of-pearls/elevated-maternal-serum-afp-msafp-during-the-second-trimester/
- https://www.cdc.gov/folic-acid/about/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003263
