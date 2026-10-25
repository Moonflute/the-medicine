---
type: qbank
schema_version: 1
id: medqa-us-train-009365
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:05651f19b1ab869992222bcfd6f33e407f3ee89f92ea726c884aa82fb2bf4d69
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "bipolar mania"
  - "양극성 조증"
  - "lithium embryopathy"
  - "Ebstein anomaly"
question_type: prognosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Jeh7Iqk7YOA7J24IOq4sO2YlSAoRWJzdGVpbiBBbm9tYWx5KS5tZA
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 여성이 새벽 3시에 거리에서 암 치료법을 발견했다고 소리치며 돌아다니다가 발견되었다. 정신과 선별진료에서 쉬지 않고 빠르게 말하며 과학에 기여할 것이라고 자랑한다. 의사가 말을 끊으려 하자 화를 내며 지난주 자신의 ‘업적’을 소리친다. 노벨상으로 큰돈을 받을 것이라며 새 차와 다이아몬드 귀걸이를 샀다고 한다. 임신 8주이며 태아가 ‘역사의 흐름을 바꿀 것’이라고 말한다. 3개월 전 자살사고와 우울증으로 입원했고 안정화 후 플루옥세틴을 처방받았지만 지금은 뇌를 ‘독살할’ 수 있는 약을 복용한 적이 없다고 부인한다. 소변 임신검사는 양성이다. 이 환자의 자살 관련 사망률을 줄이는 약물로 예상되는 약물의 태아 이상반응은 무엇인가?

## 선택지

A. 지연성 운동이상증
B. 태아 우심실의 심방화
C. 체중 감소
D. 스티븐스-존슨 증후군

## 해설

조증과 과거 우울·자살위험의 양극성 장애 맥락에서 원문이 추론하게 하는 약물은 리튬이다. 임신 초기 리튬 노출과 관련해 우려하는 태아 심장기형 중 Ebstein 기형은 삼첨판의 심첨부 변위와 우심실 일부의 우심방화를 특징으로 한다. 이를 단순 심방형성이라고 부르거나 가장 흔한 태아 독성이라고 단정하지 않는다. 실제 임신 중 처방은 절대 위험과 모체 재발·자살 위험, 대안을 전문적으로 함께 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009365

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. Ebstein 우심실 우심방화를 단순 심방형성/가장 흔한 태아 독성으로 설명한 오류 교정. 리튬 추론과 원정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=049902a9-3af1-4863-994e-15f36e7a9793&type=display
- https://academic.oup.com/eurheartj/article/42/6/563/5898606
