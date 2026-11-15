---
type: qbank
schema_version: 1
id: medqa-us-train-000497
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:da7848f020fe2ad6d2d20d7cbbe7a02e1dd1561c9af9830e284f0a38b1638379
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "false labor"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yhsOq4sCDsp4TthrUgKFByZXRlcm0gTGFib3IpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 36주 산모가 20~30분 간격의 불규칙한 자궁수축을 느낀다. 일정 시간 관찰해도 수축이 강해지지 않고 자궁경부는 닫혀 있다. 출혈과 파수는 없고 태아 감시는 정상이다. 가장 적절한 대응은?

## 선택지

A. 현재부터 옥시토신으로 진통을 촉진
B. 가진통으로 보고 경과와 재내원 기준을 설명한다
C. 자궁수축 억제제를 처방하고 정기 복용시킨다
D. 태아를 보호하기 위해 지금 제왕절개한다

## 해설

불규칙한 수축이 진행하지 않고 경부 변화가 없으면 가진통에 부합한다. 수축이 규칙적이고 강해지거나 양수 누출, 질출혈 또는 태동 감소가 있으면 바로 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 가진통 판단 근거 및 귀가 후 재평가 조건 명료화.
- https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000497
- https://www.nice.org.uk/guidance/ng25/chapter/recommendations
