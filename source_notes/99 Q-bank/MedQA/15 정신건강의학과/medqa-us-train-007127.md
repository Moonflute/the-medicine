---
type: qbank
schema_version: 1
id: medqa-us-train-007127
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a2c5e128ed111785282f015210f90aef34940da27b48c8814c16eed88862e2ec
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "월경전불쾌장애"
  - "황체기 증상"
  - "선택적 세로토닌 재흡수 억제제"
  - "Premenstrual dysphoric disorder"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yCrO2ajCDrtojslYgg7J6l7JWgIChTb2NpYWwgQW54aWV0eSBEaXNvcmRlcikubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 환자가 매일 증상을 기록했다. 두 주기 모두 월경 직전 과민과 우울, 집중 곤란 때문에 일에 지장이 컸지만 월경이 시작되면 사라졌다. 월경전불쾌장애로 진단했고 정서 증상에 약물치료를 원한다. 적절한 약은?

## 선택지

A. 나프록센
B. 알프라졸람을 매일 장기 복용
C. 플루옥세틴
D. 카르바마제핀

## 해설

월경전불쾌장애의 정서 증상에는 SSRI를 일차 약으로 고려한다. 증상이 뚜렷한 시기에만 쓰거나 계속 복용하는 방법을 증상과 선호에 따라 정할 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007127
- https://pubmed.ncbi.nlm.nih.gov/37973069/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 플루옥세틴 답 유지. CBT·금연·나프록센이 전혀 효과가 없다고 과도하게 배제한 해설 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
