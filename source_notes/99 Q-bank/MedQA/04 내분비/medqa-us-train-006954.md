---
type: qbank
schema_version: 1
id: medqa-us-train-006954
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:baf93d17f26b665dcbb57d9f4d4e881e3986f53c689321af3c39f9a275cf849a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "에스트로겐"
  - "티록신 결합 글로불린"
  - "총 T4 증가"
  - "경구피임약"
related_disease_slugs:
  - MTMg67aA7J246rO8L-qyveq1rO2UvOyehOyVvSAoT3JhbCBDb250cmFjZXB0aXZlcykubWQ
question_type: mechanism
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

에스트로겐 함유 경구피임약을 시작한 21세 여성의 총 T4는 높지만 TSH와 유리 T4는 정상이다. 갑상선중독증 증상은 없다. 이 결과를 설명하는 변화는?

## 선택지

A. 갑상선호르몬 생성의 자율 증가
B. TSH 분비 선종
C. 유리 T4 제거율 감소로 인한 유리 T4 증가
D. 티록신결합글로불린 증가

## 해설


경구 에스트로겐은 티록신결합글로불린을 늘릴 수 있다. 결합형이 늘어 총 T4는 높지만 유리 T4와 TSH가 정상이라면 이 소견만으로 갑상선기능항진증이라고 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: OCP estrogen에 따른 TBG증가는 총T4/T3상승과 정상유리호르몬 D의 결합단백기전을 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006954
