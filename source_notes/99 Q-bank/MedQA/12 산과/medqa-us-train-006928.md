---
type: qbank
schema_version: 1
id: medqa-us-train-006928
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:28a3e6672cfa63220fd184276c8df1d7bda3b9839fba19dcec37a804d1a5b627
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 전 고혈압 관리"
  - "ACE 억제제 금기"
  - "라베타롤"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2FuZGVzYXJ0YW4ubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
---

# MedQA US 임상문제

## 문제

44세 고혈압 환자가 임신을 계획하고 있다. 리시노프릴을 복용 중이고 천식·서맥 등 베타차단제 금기는 없다. 혈압 치료는 계속 필요하다. 적절한 처방 조정은?

## 선택지

A. 리시노프릴을 칸데사르탄으로 바꾼다
B. 임신 기간 내내 리시노프릴을 그대로 쓴다
C. 임신 가능성이 있으면 혈압약을 모두 무조건 끊는다
D. 임신 전에 리시노프릴을 중단하고 라베타롤 등 적절한 약으로 바꾼다

## 해설


임신을 준비할 때 ACE 억제제·ARB 대신 임신 중 사용 가능한 약제로 계획적으로 바꾼다. 라베타롤이나 서방형 니페디핀 등을 동반질환과 혈압에 맞춰 선택한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006928
- https://www.nice.org.uk/guidance/ng133/chapter/recommendations
