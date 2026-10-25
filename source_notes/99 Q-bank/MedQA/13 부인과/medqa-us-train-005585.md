---
type: qbank
schema_version: 1
id: medqa-us-train-005585
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:60464d8e6db30f54c5ac14a446f75356fee4f9f452872a8bdd9b10a78736c5b2
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "사춘기 무배란성 월경"
  - "초경 후 월경불규칙"
  - "정상 사춘기 발달"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

14세 여아가 어머니와 함께 소아과를 방문했다. 어머니에 따르면 아이는 6개월 전에 초경을 시작했다. 환자는 첫 월경 이후 10~40일 간격으로 월경을 했으며, 월경량은 매우 적을 때부터 매우 많고 증상이 심할 때까지 다양했다고 한다. 그 외에는 학교생활을 잘하고 육상부 활동을 하며 최근 남자친구가 생겼다. 체온은 98.1°F(36.7°C), 혈압은 97/58 mmHg, 맥박은 분당 90회, 호흡수는 분당 14회, 실내 공기에서 산소포화도는 99%이다. 신체검사에서 비만한 소녀인 것 외에는 이상이 없다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 정상적인 사춘기 발달
B. 다낭성 난소 증후군
C. 임신
D. 월경전 불쾌 장애

## 해설

초경 후 6개월에는 성선축 성숙 과정의 무배란으로 월경 간격·양이 변동할 수 있어 제시된 선지 중 정상 사춘기 발달(A)이 가장 적합하다. 비만만으로 PCOS를 진단할 수 없다. 다만 매우 잦거나 심한 출혈, 빈혈·어지럼 또는 지속적 기능 저하가 있다면 정상 발달이라고 일괄 치부하지 않고 출혈 정도와 다른 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초경후변동A유지하되매우짧은주기·심한출혈까지무조건정상이라는안심오류방지.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005585
