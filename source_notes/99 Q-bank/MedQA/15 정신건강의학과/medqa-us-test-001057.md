---
type: qbank
schema_version: 1
id: medqa-us-test-001057
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:88c6447f0c2bf83e66aa095117d2df10a8f0e0e35e7a190744c744b35c841d2b
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "클로자핀"
  - "무과립구증"
  - "전혈구검사 모니터링"
  - "Agranulocytosis"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
difficulty: simple
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

클로자핀을 투여 중인 환자에게 새로 38.7℃ 발열과 인후통이 생겼다. 지난주 혈액검사는 정상이었다. 약물 관련 중증 합병증을 놓치지 않기 위해 우선 할 검사는?

## 선택지

A. 혈청 프로락틴
B. 감별계산을 포함한 혈구검사로 절대호중구 수 확인
C. 청력검사
D. 공복 인슐린 농도

## 해설

클로자핀 투여 중 발열·인후통은 중증 호중구감소증 가능성을 확인해야 하는 신호다. 이전 수치가 정상이었어도 감염과 호중구 수를 신속히 평가한다. 투약 지속 여부는 허가사항과 검사 결과에 따라 판단한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001057
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=200307798

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 전혈구검사 정답 유지. ANC 포함과 2025 FDA REMS 폐지 후에도 임상 모니터링 권고가 유지됨을 구분.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.fda.gov/drugs/drug-safety-and-availability/fda-removes-risk-evaluation-and-mitigation-strategy-rems-program-antipsychotic-drug-clozapine
