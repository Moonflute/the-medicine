---
type: qbank
schema_version: 1
id: medqa-us-train-004502
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:15348e5dc3bba04e9a248fd2fc485dd5e5f92be41ca673308f64dc5a54689b43
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갈색세포종"
  - "MEN 2"
  - "갑상샘 수질암"
related_disease_slugs:
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsho3sp4jslZQgKFRoeXJvaWQgTWVkdWxsYXJ5IENhcmNpbm9tYSkubWQ
question_type: investigation
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

갑상선 수질암 가족력이 있는 43세 남성이 발작적으로 두통과 두근거림, 땀을 호소한다. 발작 때 혈압이 190/106 mmHg까지 올라간다. 갈색세포종을 평가할 첫 생화학 검사는?

## 선택지

A. 혈장 레닌과 알도스테론
B. 24시간 소변 유리 코르티솔
C. 혈청 카테콜아민 단회 측정
D. 혈장 유리 분획 메타네프린

## 해설

발작성 두통·심계항진·발한과 혈압 상승은 갈색세포종의 단서다. 혈장 유리 메타네프린 또는 24시간 소변 분획 메타네프린으로 평가한다. 단회 카테콜아민보다 발작 사이에도 검출에 유리하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 갑상샘수질암을 갈색세포종과 동일시한 오류. MEN2연관 pheo의 metanephrine D로 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12819074/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004502
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8090459/
