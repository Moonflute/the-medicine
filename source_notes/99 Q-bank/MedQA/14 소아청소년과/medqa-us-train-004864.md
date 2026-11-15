---
type: qbank
schema_version: 1
id: medqa-us-train-004864
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2e0f2b5baa6f67c4769c365326a246c703c7359b2424b605876879ab08aab9d7
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "수두"
  - "면역저하 소아"
  - "아시클로버"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IiY65GQIChWYXJpY2VsbGEpLm1k
difficulty: complex
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzoxMCDsooXslpEvRG94b3J1YmljaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

백혈병 항암치료 중인 5세 아이에게 발열과 빠르게 번지는 수포가 생겼다. 병변 검사에서 수두가 확인됐다. 입원·격리와 함께 사용할 치료는?

## 선택지

A. 대증치료만 시행
B. 수두 백신을 접종해 치료
C. 노출 예방용 면역글로불린만 투여
D. 정맥 아시클로버를 시작한다

## 해설

항암치료 중 발생한 수두는 중증·파종 위험이 높아 정맥 아시클로버 치료가 필요하다. 노출 후 예방과 증상이 있는 감염의 치료는 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 항암 중 수두의 acyclovir 투여 경로와 면역글로불린의 예방 역할을 명확화.
- https://www.cdc.gov/chickenpox/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004864
