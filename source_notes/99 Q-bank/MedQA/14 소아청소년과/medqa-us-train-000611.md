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
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6riJ7ISxIOyEuOq4sOq0gOyngOyXvCAoQWN1dGUgQnJvbmNoaW9saXRpcykubWQ
difficulty: complex
answer: A
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

3개월 된 남아를 어머니가 2일간의 호흡 곤란으로 응급실에 데려왔다. 아이는 임신 35주에 태어났으나 그 외에는 건강했다. 어머니는 콧물과 함께 기침과 호흡 곤란을 관찰했다. 체온은 100°F(37.8°C), 혈압은 64/34 mmHg, 맥박은 140회/분, 호흡수는 39회/분이며, 실내 공기에서 산소 포화도는 93%이다. 폐 검진상 전반적인 호기성 천명음(expiratory wheezing)과 수포음(crackles), 늑간 함몰(intercostal retractions)이 관찰된다. 구강 점막은 건조해 보인다. 다음 중 가장 적절한 진단 검사는 무엇인가?

## 선택지

A. 추가 검사 불필요
B. 중합효소연쇄반응(PCR)
C. 객담 배양 검사
D. 바이러스 배양 검사

## 해설

콧물 뒤 기침, 천명·수포음과 함몰이 생긴 영아는 임상적으로 세기관지염을 진단할 수 있어 전형적 경과라면 선택지 A처럼 원인 바이러스 확인 PCR·배양을 일률적으로 시행하지 않는다. 검사하지 않았으므로 RSV가 원인이라고 확진할 수는 없다. 미숙아 병력, 산소포화도·호흡 노력과 수분 상태를 평가하고, 악화·비전형 경과나 다른 질환 의심이 있으면 추가 검사를 한다. ‘검사 불필요’는 필요한 관찰·지지치료까지 불필요하다는 뜻이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임상세기관지염A의무검사원칙을비전형·악화시평가와구별. 바이러스미검사상태에서RSV확진하지않음.
- https://www.rch.org.au/clinicalguide/guideline_index/Bronchiolitis/
- https://cps.ca/en/documents/position/bronchiolitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000611
