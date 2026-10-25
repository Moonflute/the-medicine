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
answer: C
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

5세 남아가 14시간 동안 전신의 심한 가려움 발진이 생겨 응급실에 왔다. 5일 전 양쪽 눈이 충혈되었으나 저절로 호전되었다. 급성 림프모구성 백혈병으로 빈크리스틴, 아스파라기나제, 덱사메타손, 독소루비신을 사용한 항암화학요법을 3주기 받았고 마지막 치료는 2주 전이었다. 얼굴, 몸통, 사지에 반점과 구진이 여러 차례 새로 생기며 긁은 자국과 딱지 병변도 있다. 다음 중 가장 적절한 치료는?

## 선택지

A. 면역글로불린 투여
B. 대증 치료
C. 아시클로버 투여
D. 페니실린 V 투여

## 해설

여러 단계의 새 발진과 가피는 수두를 시사한다. 항암화학요법 중인 면역저하 소아는 중증·파종 위험이 있어 acyclovir(C), 통상 정주 치료가 필요하다. 노출 후 면역글로불린 예방을 이미 발생한 수두의 항바이러스 치료와 혼동하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 항암 중 수두의 acyclovir 투여 경로와 면역글로불린의 예방 역할을 명확화.
- https://www.cdc.gov/chickenpox/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004864
