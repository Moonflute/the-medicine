---
type: qbank
schema_version: 1
id: medqa-us-train-003183
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:50672c677fe074bf30ecc14fadfec56a97a227c60597ac76e615d68f87e4d187
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "generalized anxiety disorder"
  - "first-line SSRI"
  - "chronic excessive worry"
  - "paroxetine"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uylCDrtojslYgg7J6l7JWgIChHZW5lcmFsaXplZCBBbnhpZXR5IERpc29yZGVyKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

38세 여성이 불안으로 내원했다. 기억할 수 있는 한 오랫동안 특히 직장이나 사회적 상황에서 불안했고 조절하기 어려웠다. 수면 곤란, 과민성, 근육 긴장도 있으며 증상이 업무와 인간관계를 크게 제한한다. 다른 병력은 없고 흡연, 음주, 기분전환용 약물 사용도 부인한다. 다음 중 가장 가능성 높은 진단의 일차 치료로 가장 적절한 약물은?

## 선택지

A. 프로프라놀롤
B. 파록세틴
C. 알프라졸람
D. 루라시돈

## 해설

조절하기 어려운 지속적 걱정·과민·불면·근긴장과 기능장애는 범불안장애를 시사한다. 제시된 약물 중 SSRI인 파록세틴이 초기 약물 선택에 해당한다. 프로프라놀롤은 이 장애의 표준 장기치료가 아니고, 알프라졸람은 의존 위험 때문에 기본 장기치료로 삼지 않는다. 루라시돈은 항정신병약이며 H1 차단제로 분류해 비교하는 것은 맞지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003183

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 파록세틴 답 유지. 선지에 없는 H1차단제 설명과 선지 문자 참조를 제거하고 루라시돈을 정확히 분류.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg113/chapter/Recommendations
