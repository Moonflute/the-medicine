---
type: qbank
schema_version: 1
id: medqa-us-train-008913
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f85ab8f3e00a2f479097f7ccd6933dc17736db4e46f033c009e6e552bac19452
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertensive emergency"
  - "papilledema"
  - "hypertensive retinopathy"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MTgg7JWI6rO8L-qzoO2YiOyVleunneunieuzkeymnSAoaHlwZXJ0ZW5zaXZlIHJldGlub3BhdGh5KS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 여성이 갑자기 시작된 광범위하고 둔하며 욱신거리는 두통 4시간 후 응급실에 내원했다. 흐린 시야, 오심, 한 차례 구토도 있다. 고혈압과 제2형 당뇨병이 있으며 히드로클로로티아지드, 리시노프릴, 아토르바스타틴, 메트포르민을 복용한다. 30년 동안 하루 한 갑을 피웠고 매일 와인 1~2잔을 마신다. 체온 36.6°C(97.9°F), 맥박 90회/분, 호흡수 14회/분, 혈압 185/110mmHg이다. 안저검사에서 양측 시신경유두 경계가 흐려져 있고 그 외 신체·신경학적 검사는 정상이다. 혈액검사와 전해질, BUN, 크레아티닌은 정상이며 소변검사에서 단백 2+만 보인다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 허혈성 뇌졸중
B. 지주막하 출혈
C. 특발성 두개내압 상승
D. 고혈압성 응급

## 해설

심한 고혈압과 두통, 시야 흐림, 양측 시신경유두 부종은 고혈압성 응급(D)을 의심하게 한다. 다른 두개내 원인도 평가하면서 감시하에 혈압을 조절해야 한다. 급격하게 정상 범위까지 낮추는 것이 목표는 아니며, 동반 장기손상에 맞춰 저관류를 피하도록 단계적으로 치료한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 고혈압성 장기손상 D의 치료를 무조건 급속 정상화로 오용하는 문장을 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008913
