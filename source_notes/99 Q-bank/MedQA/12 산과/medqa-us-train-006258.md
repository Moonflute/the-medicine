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

32세 여성이 임신 20주(Gravida 2, Para 1)로 산전 진찰을 위해 내원했다. 특별한 증상은 없다. 첫 임신은 합병증 없이 질식 분만으로 아이를 출산했다. 엽산과 철분 보충제를 복용 중이다. 체온은 37°C(98.6°F), 맥박은 분당 98회, 호흡수는 분당 18회, 혈압은 108/76 mm Hg이다. 복부 진찰에서 자궁 크기는 임신 20주에 해당한다. 임신 2분기 초음파 검사에서는 이상이 없었다. 다음 달 할머니를 방문하기 위해 모잠비크로 여행할 예정이다. 다음 중 말라리아 노출 전 예방요법으로 가장 적절한 약물은?

## 선택지

A. 독시사이클린
B. 메플로퀸
C. 프리마퀸
D. 프로구아닐

## 해설

임신 중 말라리아 유행지역 여행은 가능한 연기한다. 불가피한 모잠비크 여행에서는 지역 내성·개인 금기를 확인하고 메플로퀸(B)을 예방약으로 사용할 수 있으며 임신 1기에도 사용 가능하다. 모기 회피를 병행한다. 독시사이클린·프리마퀸은 임신 중 부적절하고 프로구아닐 단독은 권장 예방요법이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 메플로퀸의 임신 사용을 2기 이후로 한정한 오류 수정.
- https://www.cdc.gov/yellow-book/hcp/family-travel/pregnant-travelers.html
- https://wwwnc.cdc.gov/travel/destinations/traveler/none/mozambique

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006258
