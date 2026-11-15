---
type: qbank
schema_version: 1
id: medqa-us-train-005276
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:26a2337600b474451f1a245d0cc7d4fa6236aa2c8c160c924424a0efdcfd7a6b
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "결핵성 수막염"
  - "항결핵제 간독성"
  - "간기능 모니터링"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rj4XshLEg6rCE7Je8IChUb3hpYyBIZXBhdGl0aXMpLm1k
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
---

# MedQA US 임상문제

## 문제

38세 환자가 2주 동안의 두통과 발열 끝에 의식이 저하됐다. 뇌척수액에서 결핵균 핵산증폭검사가 양성이다. 항결핵 치료에 함께 시작할 약물은?

## 선택지

A. 아시클로버
B. 메로페넴
C. 덱사메타손
D. 레베티라세탐

## 해설


결핵성 수막염에서는 신경계 합병증과 사망 위험을 줄이기 위해 항결핵제에 코르티코스테로이드를 병용한다. 발작이 없는 환자에게 항경련제를 일괄 투여하는 것이 핵심은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005276 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항결핵 약물의 간독성 감시 B 유지; 치료 반응 확인 C도 필요없다는 해설 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/
- https://www.ncbi.nlm.nih.gov/books/NBK614844/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005276
- https://www.kdca.go.kr/kdca/2861/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGa2RjYSUyRjU1JTJGMjI4MTc4JTJGYXJ0Y2xWaWV3LmRvJTNG
