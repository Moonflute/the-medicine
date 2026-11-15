---
type: qbank
schema_version: 1
id: medqa-us-train-010097
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4693e369658508a4d6af33eb96b05cf8a4b4d88edf07c88b15f4d700b801f388
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "젠커 게실"
  - "연하곤란"
  - "바륨 식도조영술"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_soKDsu6Qg6rKM7IukIChaZW5rZXIncyBEaXZlcnRpY3VsdW0pLm1k
question_type: investigation
difficulty: complex
answer: A
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
---

# MedQA US 임상문제

## 문제

65세 여성이 목에 음식이 걸리고 삼킬 때 목에서 소리가 난다. 식사 몇 시간 뒤 소화되지 않은 음식이 입으로 올라오고 구취가 생겼다. 의심되는 구조 이상을 확인할 검사는?

## 선택지

A. 바륨 식도조영술
B. 고해상도 식도 내압검사
C. 24시간 식도 pH 검사
D. 위배출 신티그래피

## 해설


경부 이물감, 구취, 오래 전에 삼킨 음식의 역류는 젠커 게실의 단서다. 바륨 조영으로 인두식도 이행부에서 주머니 모양으로 돌출된 병변을 확인할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010097 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Zenker 게실의 특이적 역류·구취·경부 꼬르륵 소리를 바륨검사 A에 연결; 모든 운동장애가 바륨만으로 확진된다는 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.sages.org/wp-content/uploads/2020/01/The-SAGES-Manual-of-Foregut-Surgery.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010097
- https://www.esge.com/assets/downloads/pdfs/guidelines/2020_a_1171_3174.pdf
