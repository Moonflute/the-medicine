---
type: qbank
schema_version: 1
id: medqa-us-train-005810
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9e87633b416bd763cdee81ad54de2c685061440698af1f6a7bc5d221613f569c
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "강박장애"
  - "SSRI 불충분 반응"
  - "리스페리돈 보강요법"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qwleuwlSDsnqXslaAgKE9ic2Vzc2l2ZS1Db21wdWxzaXZlIERpc29yZGVyLCBPQ0QpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 의대생이 잠을 잘 수 없다며 학생보건센터를 방문했다. 매우 우수한 학생이지만 지난 몇 달 동안 실패에 대해 점점 더 집착하게 되었다. 밤에 10~15번씩 깨어 교과서에서 사실을 확인한다. 이런 생각과 행동을 억제하려 했으나 실패했고 극도로 불안하며 수면이 부족하다. 과거력은 없고 가족력으로 부모 중 한 명에게 투렛증후군이 있다. 인지행동치료를 시작하고 이 질환의 일차 약물도 복용했으나 8주 후에도 효과가 없다. 현재 치료에 추가하면 증상 호전에 도움이 될 수 있는 약물은 무엇인가?

## 선택지

A. 프로프라놀롤
B. 설트랄린
C. 페넬진
D. 리스페리돈

## 해설

침투적 실패 걱정과 반복 확인은 강박장애를 시사한다. 적정 SSRI와 노출 및 반응방지를 포함한 CBT에도 반응이 부족할 때 전문 치료에서 항정신병약 보강을 고려할 수 있어, 제시된 추가 약물 중 리스페리돈이 원문 선택이다. 다만 8주라는 기간만으로 충분한 치료 실패를 확정하지 않으며 용량·순응도와 보통 12주 정도의 충분한 약물 시도 및 다른 근거 기반 선택을 재평가한다. 설트랄린은 강박장애에 사용하는 SSRI이므로 부적절한 치료제라고 설명해서는 안 된다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005810

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 설트랄린을 강박장애에 부적절하다고 한 오류 제거. 8주만으로 무조건 리스페리돈 보강하는 것이 아니라 적정 용량·기간과 ERP 평가 이후 전문적 옵션으로 한정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg31/chapter/Recommendations
