---
type: qbank
schema_version: 1
id: medqa-us-train-003784
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bb33f5d04885fc68adff5c04b8e2e38424ea73ad28b5b7dcf2d8eac44a0c43f8
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Turner syndrome"
  - "short stature"
  - "coarctation or bicuspid aortic valve"
  - "aortic insufficiency"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YSw64SIIOymne2bhOq1sCAoVHVybmVyIFN5bmRyb21lKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCA7Iug7J6lIChTaG9ydCBTdGF0dXJlKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv6rCA7KGx7ISxIOuLqOyLoOymnSAoRmFtaWxpYWwgU2hvcnQgU3RhdHVyZSkubWQ
question_type: investigation
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

6세 여아가 핵형검사로 터너 증후군을 진단받았다. 심잡음이 없고 심혈관 증상도 없다. 진단 시 이첨대동맥판과 대동맥축착을 확인하기 위해 시행할 검사는?

## 선택지

A. 심전도만 시행
B. 트레드밀 운동부하검사
C. 경흉부 심장초음파
D. 24시간 홀터검사

## 해설

정상 진찰만으로 터너 증후군에 동반되는 선천성 심혈관 이상을 배제할 수 없다. 진단 시 경흉부 심장초음파를 시행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Turner의 이첨대동맥판/축착과 선택지 AR C를 연결하되 AR가 가장 흔한 합병증이라는 단정 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003784
- https://doi.org/10.1093/ejendo/lvae050
