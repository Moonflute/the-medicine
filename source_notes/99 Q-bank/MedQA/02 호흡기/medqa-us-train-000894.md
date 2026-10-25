---
type: qbank
schema_version: 1
id: medqa-us-train-000894
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3ed623c06b0740eeae8268168d85cbed57df8cbe93ad42a395cca1aff0b0bcc5
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "asthma"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvQnVkZXNvbmlkZS5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvU2FsbWV0ZXJvbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 남아가 정기 검진을 위해 부모와 함께 소아과에 내원하였다. 아버지는 아들이 숨쉬기 힘들어하는 모습을 여러 번 관찰했다고 말한다. 이러한 증상은 밖에서 친구들과 놀 때 더 두드러진다. 증상은 봄과 겨울철에 심해지며, 최근에는 거의 매주 한 번씩 이러한 증상이 나타난다. 증상이 나타날 때 아이는 주로 쌕쌕거림(wheezing)과 기침을 하며, 마치 무언가가 숨쉬는 것을 방해하는 것처럼 숨이 차 보인다. 이러한 증상이 야간 수면에 영향을 주지는 않는다. 호흡 곤란이 일상 활동을 제한하지는 않으며, 증상이 나타날 때마다 휴식을 취하면 가라앉는다. 아이에게 다른 특이 병력은 없으며 현재 복용 중인 약물도 없다. 신체 검진상 유의미한 소견은 없다. 소아과 의사가 진료실에서 호기 유속(expiratory flow rate)을 세 번 측정하여 확인한 결과 약 85%로 추정되었다. 다음 중 소아과 의사가 이 환자에게 가장 먼저 처방할 가능성이 높은 약물은 무엇인가?

## 선택지

A. 흡입용 살메테롤(salmeterol)
B. 흡입용 알부테롤(albuterol)
C. 고용량 부데소나이드(budesonide)
D. 경구용 프레드니손(prednisone)

## 해설


증상이 일상 활동을 제한하지 않고, 휴식 시 완화되며 폐기능 검사가 80~85% 수준인 경증 발작성 천식이다. 첫 번째 단계 치료는 증상이 나타날 때 즉시 사용 가능한 빠른 작용 흡입제(albuterol)이다. 따라서 가장 먼저 처방할 약물은 알부테롤이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 5세의 드문 주간 증상·야간각성/활동제한 없음에서는 선택지 중 필요시 구제 SABA B가 적합. 6세 이상 치료체계를 무조건 적용하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000894
