---
type: qbank
schema_version: 1
id: medqa-us-train-002479
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ea72cd7491304cbc939d8b13ae4e0af271c9f1582bf03fd7a3b7341677abdfa0
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "circumferential full-thickness burn"
  - "escharotomy"
  - "vascular compromise"
  - "compartment pressure"
  - "compartment syndrome"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-uzteqwlSDqtaztmo0g7Kad7ZuE6rWwIChBYmRvbWluYWwgQ29tcGFydG1lbnQgU3luZHJvbWUpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZldGlyYWNldGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaWRhem9sYW0ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 환자의 왼쪽 하퇴에 다리 둘레 전체를 둘러싼 깊은 전층 화상이 있다. 부종이 늘며 발가락이 차고 발목 아래 도플러 혈류가 약해졌다. 단단한 화상 가피로 인한 혈류 장애를 바로 풀어줄 처치는?

## 선택지

A. 석고로 더 단단히 고정
B. 수포 배액만 시행
C. 응급 가피절개술
D. 보존 치료를 하며 맥박이 돌아오는지 관찰

## 해설

환상 전층 화상에서 비탄성 가피가 부종을 압박해 혈류가 줄면 가피절개로 감압한다. 가피를 풀어도 깊은 구획압 상승이 남으면 근막절개가 필요한지 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 델타압25를 혈압25 이상이라는 임계값으로 잘못 설명한 오류를 수정했다. 환상 화상의 외부 조임 해소 B와 깊은 구획증후군의 근막절개를 구별한다.
- 공식/학회 근거: https://ameriburn.org/wp-content/uploads/2019/08/2018-abls-providermanual.pdf
- 공식/학회 근거: https://www.boa.ac.uk/resource/boast-10-pdf.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002479
- https://www.phsa.ca/Documents/Trauma-Services/Escharotomy_Adult_Burn_Patients_May_2024.pdf
