---
type: qbank
schema_version: 1
id: medqa-us-train-006903
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2a1521b6191a1882e31f7651abedcdda91ee2575de1c499886b12d20309a8dfb
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "주요우울장애"
  - "불면증"
  - "미르타자핀"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: complex
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaXJ0YXphcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 3개월 동안 악화되는 불면과 불안으로 내원했다. 몇 주 후 중요한 대학 시험이 있어 매일 많은 시간을 공부해야 한다. 상황이 급하지만 집중할 수 없고 불안하고 과민하며 거의 모든 활동에 흥미를 잃었다. 잠들기 어렵고 밤에 여러 번 깨며 생산성이 크게 떨어지고 하루 종일 피곤하다. 환청이나 비정상적 사고 같은 정신병적 증상은 없다. 낮 동안 더 효과적으로 기능할 수 있도록 잠을 잘 자는 데 도움이 되는 치료를 원하며, 무쾌감·과민성·불안은 스스로 다룰 수 있다고 한다. 다음 중 우려를 가장 효과적으로 해결할 접근은?

## 선택지

A. 정신치료만 시행
B. 리스페리돈 시작
C. 미르타자핀 용량 조절
D. 광선치료

## 해설

불면뿐 아니라 흥미 상실·집중 저하·피로·과민 등 우울 증상도 함께 평가해야 한다. 제시된 선택지 중 미르타자핀은 항우울 효과와 진정 작용을 함께 고려할 수 있어 원문 정답이다. 이미 복용 중이라는 정보는 없으므로 임의로 현재 용량이 부족하다고 단정하지 않는다. 단순 만성 불면의 보편적 일차 약으로 해석하거나 CBT-I보다 항상 우월하다고 설명하지 않으며, 주간 졸림·체중 증가 등은 상담한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006903

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 단순 불면증에서 미르타자핀이 수면위생·광선치료보다 우월하다는 근거 없는 해설 교정. 동반 우울 양상과 항우울 치료의 선택 맥락 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.cancer.gov/publications/dictionaries/cancer-drug/def/mirtazapine
- https://doi.org/10.7326/M15-2175
