---
type: qbank
schema_version: 1
id: medqa-us-train-005385
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3caf6b3cb5615efb5858c3a5e32d9bdf1fc5fe48867a758ce55fedcc26e05f65
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "특발성 다모증"
  - "5α-환원효소"
  - "디하이드로테스토스테론"
  - "idiopathic hirsutism"
related_disease_slugs: []
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9UZXN0b3N0ZXJvbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여자가 8년 동안 윗입술과 복부에 짙은 털이 점점 많아져 내원했다. 월경은 규칙적이고 DHEA-S, 17α-하이드록시프로게스테론과 테스토스테론은 정상이나 디하이드로테스토스테론이 상승되어 있다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 5α-환원효소 활성 증가
B. 21-수산화효소 결핍
C. 말초 인슐린 저항성
D. 난소 과립막-난포막 세포 종양

## 해설

5α-reductase는 testosterone을 DHT로 전환한다. 정상 testosterone·DHEAS·17OHP에 비해 높은 DHT와 규칙월경의 만성 다모증은 말초 효소활성 증가 A에 부합한다. DHT를 다시 DHT로 바꾸는 반응이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 5α-reductase 기질을 DHT가 아니라 testosterone으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005385
