---
type: qbank
schema_version: 1
id: medqa-us-train-002933
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:863730be5271c66ef827f805e47dc968a91da1575bebc87f4f0d2e54df9838b3
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "abdominal compartment syndrome"
  - "intra-abdominal hypertension"
  - "damage-control laparotomy"
  - "open abdomen"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-uzteqwlSDqtaztmo0g7Kad7ZuE6rWwIChBYmRvbWluYWwgQ29tcGFydG1lbnQgU3luZHJvbWUpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

복부 외상 수술 뒤 환자의 배가 단단하게 팽창했다. 새 핍뇨와 환기압 상승이 있고 복강내압은 26 mmHg로 지속된다. 초기 비수술 조치에도 장기 기능이 나빠진다. 다음 조치는?

## 선택지

A. 체액을 제한하며 다음 날까지 기다린다
B. 장기 기능과 무관하게 진통제만 추가한다
C. 수술 부위를 단단히 압박한다
D. 감압 개복술을 진행한다

## 해설

지속적인 복강내압 20 mmHg 초과에 새 장기기능 장애가 동반되면 복부 구획증후군이다. 비수술적 조치로 악화를 막지 못하면 감압 개복이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 복부 구획증후군의 감압 A 확인. 높은 CVP 자체가 순환혈량 충분의 증거가 아님을 보완.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC3680657/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002933
