---
type: qbank
schema_version: 1
id: medqa-us-validation-001200
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8c68516450cba62f8bd98fa393caecadafab9f44b1b907d599283a2ccef9fdae
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "이식 후 골다공증"
  - "글루코코르티코이드"
  - "압박골절"
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-qzqOuLpOqzteymneyEsSDsspnstpQg6rOo7KCIIChPc3Rlb3Bvcm90aWMgU3BpbmFsIEZyYWN0dXJlKS5tZA
question_type: diagnosis
difficulty: standard
answer: D
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

45세 남성이 간이식 뒤 글루코코르티코이드를 복용한다. 앉은 높이에서 넘어진 뒤 새 요추 압박골절이 확인됐다. 신기능과 칼슘은 정상이다. 골절을 해석하는 데 옳은 것은?

## 선택지

A. 50세가 되기 전에는 약한 충격에 의한 골절도 골다공증과 관련 없다
B. 이식 후 1년 이내에는 스테로이드가 골절 위험에 영향을 주지 않는다
C. T점수만으로 골다공증을 진단하고 다른 원인은 평가하지 않는다
D. 취약골절로 보고 이식·스테로이드 관련 골질환과 이차 원인을 평가한다

## 해설


이식 초기에 골소실과 골절 위험이 높을 수 있다. 50세 미만 남성은 골밀도 Z점수와 취약골절, 스테로이드 노출 및 다른 이차 원인을 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001200 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 3개월 이식 후 골소실을 장기간 복용으로 단정하지 않고45세 남성의 T-score 해석 한계를 구분했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://iscd.org/official-positions-2023/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001200
- https://doi.org/10.1097/lvt.0000000000000785
