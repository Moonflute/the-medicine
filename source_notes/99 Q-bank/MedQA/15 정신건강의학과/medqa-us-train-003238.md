---
type: qbank
schema_version: 1
id: medqa-us-train-003238
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:64a250dad81ecd04b111a631295fcfd0997e4e04d7eca259134d23b33a9e8805
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "bipolar I disorder"
  - "manic episode"
  - "valproate with renal disease"
  - "mood stabilizer"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOu2hCDslYjsoJXsoJwgKE1vb2QgU3RhYmlsaXplcnMpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Fc2NpdGFsb3ByYW0ubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남성이 2주 전 시작된 이상행동으로 아내와 함께 응급실에 왔다. 일주일 넘게 잠을 자지 않고 매일 밤 파티를 하며 직장을 빠지고 이탈리아 여행을 위해 모은 돈으로 자동차를 샀다. 주요우울장애와 전신홍반루푸스 병력이 있고 하이드록시클로로퀸을 복용한다. 평소 주당 맥주 2잔을 마시던 사람이 최근 2주 동안 하루 6~10잔을 마셨다. 초조하고 알록달록한 옷을 입었으며 말이 빠르고 사고 과정이 산만하다. CBC·전해질·간효소는 정상이지만 크레아티닌 1.8 mg/dL, 단백뇨와 백혈구 원주가 있고 독성검사는 음성이다. 다음 중 장기 치료로 가장 도움이 될 것은?

## 선택지

A. 변증법적 행동치료
B. 발프로산
C. 리튬
D. 에스시탈로프람

## 해설

수면 욕구 감소·과소비·과대성 등 조증 양상과 과거 우울 병력이 있어 양극성 장애의 기분조절 치료를 고려한다. 신기능 저하와 요이상은 리튬 축적·독성 위험을 높이므로 제시된 선택지 중 발프로산이 적절하다. 신기능 저하 정도와 무관하게 리튬이 항상 절대금기라는 뜻은 아니다. 발프로산도 간독성·혈액학적 부작용 등이 있고 최근 과음이 있어 간기능과 음주 문제를 함께 평가해야 하며, 신장에 무조건 안전한 약으로 설명하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003238

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문 평소 주당 맥주 2잔을 하루 2잔으로 오역한 부분 교정. 원문 정상 간효소 복원 및 신기능 저하에서 리튬 절대금기·발프로산 무조건 안전 단정 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b839ff4b-f62d-41ab-a823-550a756d58ec
