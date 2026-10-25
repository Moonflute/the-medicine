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

65세 여성이 8개월 동안 점점 심해지는 음식 삼킴 곤란과 흉골 뒤 불편감으로 내원했다. 때때로 목에 ‘음식이 걸리는’ 느낌이 있고 식사 중 목에서 ‘꼬르륵 소리’가 난다. 소화되지 않은 음식 조각을 가끔 토해내며 입에서 나쁜 맛과 구취가 난다. 발열이나 체중 감소는 없다. 지난 7년 동안 매년 멕시코를 방문했다. 니페디핀으로 치료 중인 레이노병이 있고 아버지는 위암으로 사망했다. 20년 동안 하루 반 갑의 담배를 피웠지만 25년 전에 끊었다. 활력징후와 진찰은 정상이다. 혈색소 14 g/dL, 백혈구 9,800/mm³, 혈소판 215,000/mm³이고 심전도는 허혈 소견 없는 동성 리듬이다. 다음 중 진단을 가장 잘 확인하는 검사는?

## 선택지

A. 바륨 식도조영술
B. 혈청검사와 PCR
C. 식도위십이지장내시경
D. 식도 pH 모니터링

## 해설


정답 A. 고령자의 경부 음식 걸림, 꼬르륵 소리, 소화되지 않은 음식 역류와 구취는 Zenker 게실에 부합한다. 바륨 식도조영으로 인두식도 경계의 게실과 그 형태를 확인할 수 있다. 이는 일반적인 모든 식도운동장애를 바륨검사만으로 확진한다는 뜻이 아니다. 멕시코 방문력이나 Raynaud 병력만으로 다른 질환으로 결론내리지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010097 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Zenker 게실의 특이적 역류·구취·경부 꼬르륵 소리를 바륨검사 A에 연결; 모든 운동장애가 바륨만으로 확진된다는 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.sages.org/wp-content/uploads/2020/01/The-SAGES-Manual-of-Foregut-Surgery.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010097
