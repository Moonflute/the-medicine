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
answer: A
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

25세 여자가 정신과 응급실에 신체 억제대를 한 채 내원했다. 자정에 델리 식당에 침입하려다 발견되었고, 운송 산업을 혁신할 아이디어가 있다고 주장한다. 폭력적이지는 않지만 매우 초조하고 자신의 아이디어에 대해 매우 빠르게 말한다. 쉽게 산만해지고 다른 아이디어도 많이 이야기한다. 우울증과 치료에 반응하지 않는 고혈압 병력이 있다. 카프토프릴, 이부프로펜, 멜라토닌을 복용한다. 현재 상태 때문에 신경학적 검사는 연기했다. 심폐검사는 정상이고 복부에서 양측 경미한 혈관 잡음이 들린다. 할로페리돌과 디펜히드라민을 투여받고 정신과 입원병동에서 하룻밤을 보냈다. 장기 치료를 시작하고 3일 후 퇴원했다. 일차진료 추적 방문에서 혈압은 150/100 mmHg였고 클로르탈리돈을 시작했다. 3일 후 혈압은 135/90 mmHg였으나 미세한 떨림과 빈뇨를 호소한다. 맥박은 47회/분이고 발열은 없다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 이뇨제를 변경한다
B. 카프토프릴 용량을 늘린다
C. 클로르탈리돈 용량을 늘린다
D. 신동맥 초음파

## 해설

조증 후의 장기 치료약으로 리튬을 추론하는 문항이며, 클로르탈리돈 같은 티아지드계 이뇨제는 리튬 청소율을 낮춰 독성 위험을 높일 수 있다. 따라서 제시된 선택지 중 이뇨제 변경을 고려한다. 카프토프릴과 이부프로펜도 리튬 상호작용을 평가해야 한다. 맥박 47회/분과 떨림·빈뇨가 있어 실제로는 리튬 농도·신기능·전해질 및 ECG를 신속히 확인하고 필요 시 리튬도 보류한다. 리튬을 혈압을 낮추기 위해 쓰는 약으로 설명하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007394

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 리튬을 혈압강하제로 설명한 오류 삭제. 티아지드·ACE억제제·NSAID의 축적 위험과 서맥의 긴급 평가를 명시; 선지 문자 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b839ff4b-f62d-41ab-a823-550a756d58ec
