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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4년 전 조현병을 진단받은 29세 남성이 약물 상담을 위해 추적 진료를 받으러 왔다. 여러 항정신병약을 시도했지만 음성 증상이 치료되지 않아 2주 전 클로자핀으로 변경했고 호전되었다고 한다. 현재 약물을 계속 복용하려면 지금 어떤 검사실 검사를 시행해야 하는가?

## 선택지

A. 세극등검사
B. 심전도
C. 프로락틴 농도
D. 전혈구검사

## 해설

클로자핀은 중증 호중구감소증 위험이 있어 절대호중구수(ANC)를 포함한 혈액검사 모니터링이 필요하다. 투여 2주째인 이 환자에서 제시된 검사 중 전혈구검사(백혈구 감별계산/ANC 포함)가 적절하다. 미국 FDA의 클로자핀 REMS 프로그램은 2025년 폐지됐지만, 이는 ANC 임상 모니터링 권고의 폐지를 뜻하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001057

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 전혈구검사 정답 유지. ANC 포함과 2025 FDA REMS 폐지 후에도 임상 모니터링 권고가 유지됨을 구분.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.fda.gov/drugs/drug-safety-and-availability/fda-removes-risk-evaluation-and-mitigation-strategy-rems-program-antipsychotic-drug-clozapine
