---
type: qbank
schema_version: 1
id: medqa-us-train-006258
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a812d9040356bd605f3e117192be31c71d138427ad403f651723f8cc4b9c591
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "말라리아"
  - "임신 중 말라리아 예방"
  - "메플로퀸"
question_type: prevention
related_disease_slugs:
  - MDgg6rCQ7Je8L-unkOudvOumrOyVhCAoTWFsYXJpYSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 20주 여성이 열대열 말라리아가 흔하고 클로로퀸 내성이 있는 지역에 방문하려고 한다. 여행 연기는 불가능하고 메플로퀸 금기는 없다. 모기 회피와 함께 고려할 예방약은?

## 선택지

A. 독시사이클린
B. 메플로퀸
C. 프리마퀸
D. 프로구아닐 단독

## 해설

임신 중 말라리아 유행지역 여행은 가급적 미룬다. 불가피하고 클로로퀸 내성 지역이라면 지역별 감수성과 금기를 확인한 뒤 메플로퀸을 사용할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 메플로퀸의 임신 사용을 2기 이후로 한정한 오류 수정.
- https://www.cdc.gov/yellow-book/hcp/family-travel/pregnant-travelers.html
- https://wwwnc.cdc.gov/travel/destinations/traveler/none/mozambique

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006258
- https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/malaria.html
