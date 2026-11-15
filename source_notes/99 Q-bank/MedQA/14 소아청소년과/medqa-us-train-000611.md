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
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6riJ7ISxIOyEuOq4sOq0gOyngOyXvCAoQWN1dGUgQnJvbmNoaW9saXRpcykubWQ
difficulty: complex
answer: D
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

재태 35주에 태어난 생후 5주 영아가 콧물과 기침으로 왔다. 보호자가 집에서 아이의 숨이 멈추고 입술이 파래지는 것을 두 번 봤다. 응급실에서는 산소포화도가 96%이고 수포음이 양쪽에 들린다. 가장 적절한 다음 조치는?

## 선택지

A. 산소포화도가 정상이므로 퇴원시킨다
B. 바이러스 검사 결과가 음성이면 퇴원시킨다
C. 분무 살부타몰을 한 번 주고 반응을 본 뒤 퇴원시킨다
D. 입원해 호흡과 산소화, 무호흡 재발을 감시한다

## 해설

어린 영아의 세기관지염에서는 무호흡이 생길 수 있다. 진찰 당시 산소포화도가 정상이더라도, 관찰된 무호흡과 청색증이 있으면 입원 평가와 감시가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임상세기관지염A의무검사원칙을비전형·악화시평가와구별. 바이러스미검사상태에서RSV확진하지않음.
- https://www.rch.org.au/clinicalguide/guideline_index/Bronchiolitis/
- https://cps.ca/en/documents/position/bronchiolitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000611
- https://www.nice.org.uk/guidance/ng9/chapter/recommendations
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6736
