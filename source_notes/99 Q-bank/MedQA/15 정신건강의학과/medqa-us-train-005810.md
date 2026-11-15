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

강박장애 환자에게 노출 및 반응방지 치료와 충분한 용량·기간의 SSRI 두 종류, 클로미프라민을 차례로 시도했다. 순응도는 양호했지만 심한 증상이 남아 전문팀이 약물 보강을 고려한다. 근거가 있는 선택은?

## 선택지

A. 알프라졸람 장기 추가
B. 프로프라놀롤을 강박 증상의 보강제로 추가
C. SSRI 두 종류를 동시에 새로 시작
D. 저용량 리스페리돈 보강을 검토하고 효과와 부작용을 추적

## 해설

충분한 표준 치료에도 증상이 지속되는 일부 강박장애 환자에서 전문팀이 항정신병약 보강을 검토한다. 리스페리돈은 선택지 중 근거가 있으며, 초기 환자에게 그대로 적용하는 치료는 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005810

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 설트랄린을 강박장애에 부적절하다고 한 오류 제거. 8주만으로 무조건 리스페리돈 보강하는 것이 아니라 적정 용량·기간과 ERP 평가 이후 전문적 옵션으로 한정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg31/chapter/Recommendations
