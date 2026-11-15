---
type: qbank
schema_version: 1
id: medqa-us-test-001258
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ce2efacdad072df6ad2c073a575908839bb28985ca85232e145c2bbf0a49ec18
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "대장 동정맥 기형"
  - "철결핍성 빈혈"
  - "무통성 혈변"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 혈액투석 환자가 반복되는 통증 없는 혈변과 철결핍빈혈로 진료받는다. 대장내시경에서 맹장 점막에 납작하고 선홍색인 병변이 있고, 여러 실핏줄이 거미 모양으로 퍼져 있다. 주변 점막에 염증이나 종괴는 없다. 가장 가능성 높은 출혈 원인은?

## 선택지

A. 궤양성 대장염
B. 출혈성 대장게실
C. 대장선암
D. 대장 혈관이형성

## 해설


경계가 비교적 뚜렷하고 작은 혈관이 방사상으로 모인 평평한 병변은 혈관이형성을 시사한다. 이 병변에서 간헐적 출혈과 철결핍빈혈이 생길 수 있다. 투석 중이라는 사실만으로 출혈원을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 노년·ESRD에서 반복 혈변과 소구성 빈혈은 angiodysplasia D를 지지. 게실염/염증성 대장염의 통증·염증 양상과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001258
- https://pubmed.ncbi.nlm.nih.gov/36735555/
