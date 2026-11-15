---
type: qbank
schema_version: 1
id: medqa-us-validation-000635
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:86f01d6b9ef4031cdc733e412cde849b311e07c77d47f3f9671b14b5d998184b
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "경부안면부 방선균증"
  - "황 과립"
  - "Actinomyces"
  - "Actinomycosis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uwqeyEoOq3oOymnSAoQWN0aW5vbXljb3NpcykubWQ
question_type: diagnosis
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

치과 수술 몇 주 뒤 턱 아래에 단단한 덩어리가 생겼다. 피부까지 이어진 여러 누공에서 노란 과립이 섞인 분비물이 나온다. 가장 가능성 높은 진단은?

## 선택지

A. 급성 치성 농양
B. 경부안면부 방선균증
C. 결핵성 경부 림프절염
D. 이차 감염된 새열낭종

## 해설


치과 시술 뒤 조직 경계를 넘는 만성 경결과 다발성 누공, 황색 과립의 조합은 방선균증을 시사한다. 단순 급성 치성 농양과 달리 서서히 퍼질 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000635 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 치성 턱 경결·배농로·sulfur granule은 cervicofacial actinomycosis이며 penicillin C 적응증을 허가정보로 확인.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9e58122f-5c75-4905-a774-d3a4dae4ff8c

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000635
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4094581/
