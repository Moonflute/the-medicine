---
type: qbank
schema_version: 1
id: medqa-us-train-007394
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7d5f4a27878e474b1ba4f633932f74aa69328acf394bee7e1ed426e283e5f7cd
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "양극성 조증"
  - "리튬 독성"
  - "클로르탈리돈 상호작용"
  - "서맥"
  - "Lithium toxicity"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Jeh7Iqk7YOA7J24IOq4sO2YlSAoRWJzdGVpbiBBbm9tYWx5KS5tZA
  - MjEg7J2R6riJ7J2Y7ZWZL-umrO2KrCDspJHrj4UgKExpdGhpdW0gUG9pc29uaW5nKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2FwdG9wcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2hsb3J0aGFsaWRvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

리튬으로 안정적이던 환자가 클로르탈리돈을 시작한 뒤 구토와 굵은 손 떨림이 생기고 비틀거린다. 가장 적절한 초기 조치는?

## 선택지

A. 리튬의 부작용이 아닌 불안으로 보고 용량을 늘린다
B. 이뇨제만 바꾸고 리튬은 그대로 복용한다
C. 리튬을 보류하고 혈중 리튬·전해질·신기능과 심전도를 신속히 확인한다
D. 다음 달 외래까지 두 약을 그대로 복용한다

## 해설

티아지드계 이뇨제는 리튬의 신장 배설을 줄여 혈중농도를 올릴 수 있다. 구토와 굵은 떨림·운동실조는 독성의 경고 신호다. 농도와 신기능을 확인하고 중증도에 맞춰 응급 치료한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007394
- https://www.nice.org.uk/guidance/cg185/chapter/Recommendations
- https://pubmed.ncbi.nlm.nih.gov/25583292/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 리튬을 혈압강하제로 설명한 오류 삭제. 티아지드·ACE억제제·NSAID의 축적 위험과 서맥의 긴급 평가를 명시; 선지 문자 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b839ff4b-f62d-41ab-a823-550a756d58ec
