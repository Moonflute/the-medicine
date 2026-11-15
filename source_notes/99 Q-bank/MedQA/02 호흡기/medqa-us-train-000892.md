---
type: qbank
schema_version: 1
id: medqa-us-train-000892
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:38280b288497a91c77fd402bdf840be4c5ead2e5e25e3cd68e84814da0937c1c
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "moderate persistent asthma"
  - "asthma"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 중증 천식 악화로 응급실에서 반복 흡입 치료를 받고 있다. 호흡수는 분당 34회로 여전히 빠르다. 여러 소견 중 환기가 나빠지고 있을 가능성을 가장 강하게 시사하는 것은?

## 선택지

A. 대화가 가능해지고 산소포화도가 개선된다
B. 최대호기유량이 점차 증가한다
C. 치료 뒤 천명과 호흡수가 함께 줄고 의식은 명료하다
D. PaCO₂가 점차 올라가면서 동맥혈 pH가 떨어진다

## 해설


심한 천식 악화 초반에는 과호흡 때문에 PaCO₂가 낮기 쉽다. 호흡곤란이 지속되는데 PaCO₂가 올라가고 산증이 나타나면 호흡근 피로와 환기부전을 의심해 기도 확보 필요성을 신속히 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 천식 악화에서 CO2저류를 동반한 호흡성 산증은 호흡피로/위중한 환기부전 신호 D. PEF>70%와 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000892
- https://new.lungkorea.org/board/guide/view/14959
- https://ginasthma.org/2026-gina-strategy-report/
