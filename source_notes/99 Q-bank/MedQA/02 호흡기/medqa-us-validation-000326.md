---
type: qbank
schema_version: 1
id: medqa-us-validation-000326
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:626be631d7e72f535ece5f753ea99e83ab1b99f0fc0e8fc7615315a0efffeb99
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "황색포도상구균 괴사성 폐렴"
  - "인플루엔자 후 폐렴"
  - "폐공동"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yduO2UjOujqOyXlOyekCAoSW5mbHVlbnphKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: diagnosis
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

70세 남성이 거주하는 공동생활시설 직원과 함께 2일간의 발열, 생산성 기침, 피가 섞인 가래로 응급실에 왔다. 7일 전 근육통, 두통, 콧물이 생겼다가 처음 호전된 뒤 다시 악화되었다. 고혈압과 알츠하이머병이 있다. 도착 시 의식이 저하되어 있고 체온 39.8°C, 맥박 120회/분, 얕은 호흡 22회/분, 혈압 100/60 mmHg이며 산소 10 L/분 투여 중 산소포화도는 92%이다. 양쪽 폐에 산재한 수포음과 거친 호흡음이 들리고 흉부 X선에서 양측 폐 음영과 기저부에 여러 개의 작고 얇은 벽을 가진 낭성 공간이 보인다. 현재 상태의 가장 가능성 높은 원인은?

## 선택지

A. 황색포도상구균 감염
B. 아스페르길루스 푸미가투스 감염
C. 이물 흡인
D. 다발혈관염을 동반한 육아종증

## 해설

인플루엔자 유사 질환이 호전되다가 고열과 객혈, 심한 폐렴으로 재악화한 경과는 이차 세균성 폐렴을 시사한다. 얇은 벽의 다발성 기낭은 황색포도상구균의 괴사성 폐감염에서 나타날 수 있어 A가 적합하다. ‘황색포도상구균 폐렴보다 황색포도상구균 감염이 더 흔하다’는 기존 문장은 의미 없는 자기비교이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 황색포도상구균 감염을 같은 균의 괴사성 폐렴과 대조하는 자기모순을 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000326
