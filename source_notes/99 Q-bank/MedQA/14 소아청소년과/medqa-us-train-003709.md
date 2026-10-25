---
type: qbank
schema_version: 1
id: medqa-us-train-003709
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43d7f0e3ed493e32590e1d94c6961308aa771613ea2f7ef6fc55fb4ebac5355e
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "neonatal meningitis"
  - "group B Streptococcus"
  - "perinatal transmission"
  - "meningeal irritation"
question_type: mechanism
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug7IOd7JWEIOuHjOyImOunieyXvCAoTmVvbmF0YWwgTWVuaW5naXRpcykubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

만삭에 가정 질식분만으로 태어난 생후 6일 신생아가 고열, 수유 저하, 구토, 무기력으로 응급실에 왔다. 체온은 39.5°C이고 자극에 거의 반응하지 않았으며 목을 굽히면 다리가 굽혀졌다. 산전 진료가 충분하지 않았다. 이 감염의 가장 가능성 높은 감염원은?

## 선택지

A. 오염된 음식
B. 출산 중 감염
C. 어머니의 룸메이트
D. 수술로 인한 감염

## 해설

생후 6일 고열·수유 저하·기면과 수막자극 소견은 신생아 중증 감염/수막염을 시사한다. 선택지 중 분만 과정의 수직 전파(B)가 가장 적절하다. GBS와 대장균 등 여러 병원체가 가능하며 임상 소견만으로 모두 GBS라고 확정할 수 없다. 수술 병력은 제시되지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 신생아 수막염 병원체를 모두 GBS로 단정하지 않도록 구분하고 원문에 있는 가정 질식분만 경과를 복원했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003709
