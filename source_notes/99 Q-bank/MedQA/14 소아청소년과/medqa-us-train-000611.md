---
type: qbank
schema_version: 1
id: medqa-us-train-000611
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e8f42b2aad8de42b71a794e1328b3776a57e634db306785e64c2a70e76cb34bd
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "bronchiolitis"
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

3개월 된 남아를 어머니가 2일간의 호흡 곤란으로 응급실에 데려왔다. 아이는 임신 35주에 태어났으나 그 외에는 건강했다. 어머니는 콧물과 함께 기침과 호흡 곤란을 관찰했다. 체온은 100°F(37.8°C), 혈압은 64/34 mmHg, 맥박은 140회/분, 호흡수는 39회/분이며, 실내 공기에서 산소 포화도는 93%이다. 폐 검진상 전반적인 호기성 천명음(expiratory wheezing)과 수포음(crackles), 늑간 함몰(intercostal retractions)이 관찰된다. 구강 점막은 건조해 보인다. 다음 중 가장 적절한 진단 검사는 무엇인가?

## 선택지

A. 추가 검사 불필요
B. 중합효소연쇄반응(PCR)
C. 객담 배양 검사
D. 바이러스 배양 검사

## 해설


3개월 영아의 저산소 호흡곤란, 호흡음, 전신 호흡기 증상은 RSV에 의한 세기관지염(bronchiolitis)과 일치한다. 진단은 임상소견만으로 충분하며, 추가 검사는 필요하지 않다. 따라서 가장 적절한 검사는 추가 검사 불필요이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000611
