---
type: qbank
schema_version: 1
id: medqa-us-train-008258
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1996244cace3378c58a7cbb989fb979b0dedb2e5ddc10181fbd4548a020ffa5f
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "terminal depression"
  - "hospice care"
  - "methylphenidate"
  - "Depression"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uFuOuFhOq4sCDsmrDsmrjspp0gKEdlcmlhdHJpYyBEZXByZXNzaW9uKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GZW50YW55bC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NZXRoeWxwaGVuaWRhdGUubWQ
---

# MedQA US 임상문제

## 문제

말기 유방암으로 가정 호스피스를 받던 84세 여성이 자살 시도 직후 응급실에 왔다. 신체 상태는 안정됐지만 여전히 죽고 싶다고 말한다. 즉시 우선할 조치는?

## 선택지

A. 빠른 약효를 기대해 메틸페니데이트를 처방하고 귀가시킨다
B. 안전한 환경에서 환자를 보호하고 정신건강·완화의료 팀과 함께 즉시 평가한다
C. 말기 환자의 결정이므로 위험 평가 없이 존중한다
D. 기존 호스피스 진료일까지 가족이 지켜보도록 안내한다

## 해설


호스피스 치료 중이라도 최근 자살 시도와 지속적인 자살 의도가 있으면 즉시 안전을 확보하고 위험과 의사결정능력, 통증·섬망·우울 등 교정 가능한 요인을 평가한다. 가정 돌봄 계획은 그 결과에 맞춰 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008258 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 말기암 psychostimulant A의신속증상조절 의도는유지하되부작용없는표준/자살시도즉시평가누락을교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/about-cancer/coping/feelings/depression-hp-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008258
- https://www.nice.org.uk/guidance/ng225/chapter/recommendations
