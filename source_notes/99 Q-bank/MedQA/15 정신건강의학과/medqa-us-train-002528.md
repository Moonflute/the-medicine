---
type: qbank
schema_version: 1
id: medqa-us-train-002528
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:89d00067928b54c9e1e7d09edb9480dfb00d8fe1c3a290d10ae40615c0c45f75
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "clozapine"
  - "agranulocytosis"
  - "neutropenia"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-2YuOykkeq1rOqwkOyGjOymnSAoTmV1dHJvcGVuaWEpLm1k
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

클로자핀을 복용하는 38세 환자가 발열과 오한으로 내원했다. 체온 39.1°C, 혈압 88/56 mmHg, 절대호중구수 55/μL다. 즉시 할 처치는?

## 선택지

A. 클로자핀을 감량하고 다음 날 혈구검사를 반복한다
B. 클로자핀을 중단하고 경험적 정맥 항균제를 즉시 투여한다
C. 클로자핀을 중단하고 배양 결과가 나온 뒤 항균제를 시작한다
D. 클로자핀을 유지하고 과립구집락자극인자만 투여한다

## 해설


중증 호중구감소와 발열·저혈압은 감염 응급상황이다. 클로자핀을 중단하고, 배양을 채취하되 결과를 기다리지 않고 경험적 정맥 항균제를 시작한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002528
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=200307798
- https://www.idsociety.org/practice-guideline/neutropenic-patients-with-cancer/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영한 본문·선지·답 대조. 난치성 조현병과 현저한 호중구 감소·감염 맥락에서 클로자핀 이상반응 설명과 정답 일치.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
