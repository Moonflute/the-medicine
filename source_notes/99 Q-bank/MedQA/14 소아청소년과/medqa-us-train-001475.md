---
type: qbank
schema_version: 1
id: medqa-us-train-001475
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8dc845b4b52e056c8e7e03ca9d5072ccef9096470af528ec08ec074def69cad5
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "12-month immunization"
  - "measles mumps rubella vaccine"
  - "normal development"
question_type: prevention
related_disease_slugs: []
difficulty: complex
answer: B
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

건강한 12개월 영아가 월령별 접종을 받아 왔지만 MMR을 맞은 적은 없다. 금기나 특별한 노출은 없다. 국내 표준 일정에 맞는 안내는?

## 선택지

A. 만 2세까지 MMR을 미룬다
B. 생후 12–15개월에 1차, 만 4–6세에 2차 접종한다
C. 12개월에 한 번만 접종하면 정기 접종은 끝난다
D. 만 4–6세에 1차, 청소년기에 2차 접종한다

## 해설

국내 일반 소아의 MMR 정기접종은 12–15개월과 만 4–6세에 총 두 번이다. 노출 후 또는 유행 지역 여행에 쓰는 가속접종 일정은 다를 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 12개월 MMR A 유지. 다른 예방접종이 모두 끝났다는 오류 수정.
- https://www.cdc.gov/measles/hcp/vaccine-considerations/index.html
- https://www.cdc.gov/rotavirus/hcp/vaccine-considerations/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001475
- https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=1107&menuLv=1
