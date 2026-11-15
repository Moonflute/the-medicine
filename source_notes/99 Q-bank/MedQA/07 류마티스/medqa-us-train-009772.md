---
type: qbank
schema_version: 1
id: medqa-us-train-009772
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:50956b6827b9469edf88eb66edcb5e36f05a797f80dea1bd2511907444d50d10
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "항인지질 증후군"
  - "항카디오리핀 항체"
  - "반복 유산"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2VreyduOyngOyniCDspp3tm4TqtbAgKEFudGlwaG9zcGhvbGlwaWQgU3luZHJvbWUpLm1k
question_type: investigation
difficulty: complex
answer: C
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

임신 12주 이후 반복 임신 소실을 겪은 29세 여성의 첫 검사에서 항카디오리핀 항체가 중등도 역가로 검출됐다. 항인지질항체가 지속 양성인지 평가하려면?

## 선택지

A. 양성 검사 한 번으로 확정한다
B. 같은 날 한 번 더 검사하면 충분하다
C. 최소 12주 간격으로 재검하고 루푸스항응고인자·항β2 당단백I도 평가한다
D. 항핵항체만 다음 날 반복한다

## 해설


항인지질항체는 일시적으로 양성일 수 있어 최소 12주 간격의 지속성을 확인한다. 검사 결과를 임신 소실의 임상 정보와 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009772 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: anticardiolipin 단회로 APS가 확진된다는 오류를 지속양성·임상 맥락 및 검사panel로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://ard.bmj.com/content/82/10/1258

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009772
- https://doi.org/10.1136/ard-2019-215213
