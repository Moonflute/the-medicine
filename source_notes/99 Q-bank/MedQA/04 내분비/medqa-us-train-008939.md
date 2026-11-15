---
type: qbank
schema_version: 1
id: medqa-us-train-008939
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d41e55f65f2743f3bac1da354a7c9a803eb2341557b7fddd9c1ca8df382b2a33
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic ketoacidosis"
  - "regular insulin"
  - "intravenous insulin"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmYXpvbGluLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvUG90YXNzaXVtQ2hsb3JpZGUubWQ
---

# MedQA US 임상문제

## 문제

정맥 인슐린으로 치료하던 성인 케톤산증 환자에서 케톤산증이 해소됐고 식사가 가능하다. 이번 입원 중 피하 기저 인슐린은 아직 맞지 않았다. 기저–식사 인슐린 요법으로 전환할 때 기저 인슐린 투여 시점은?

## 선택지

A. 정맥 인슐린 중단 4시간 뒤
B. 다음 날 공복 혈당 확인 후
C. 정맥 인슐린 중단 1~2시간 전
D. 식후 혈당이 다시 상승한 뒤

## 해설


정맥 인슐린은 중단하면 효과가 빠르게 사라진다. 피하 인슐린을 먼저 투여해 1~2시간 겹치면 반동성 고혈당과 케톤산증 재발을 줄일 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008939 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 경계 산염기 수치에서 확진을 과장하지 않고 IV regular C 및 소아 수액 선행/K 추적 원칙 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ispad.org/static/6dd62eae-c8cb-4b4a-84e1efc768505746/Ch11PediatricDiabetes.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008939
- https://doi.org/10.2337/dci24-0032
