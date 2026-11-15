---
type: qbank
schema_version: 1
id: medqa-us-train-007113
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cd92d85299d3c3483666f3bbb3b1b37fa03a1af0069ed4b5e4a7058a6696e0d4
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "대혈관 전위"
  - "청색증성 선천성 심장병"
  - "단일 제2심음"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64yA7ZiI6rSAIOyghOychCAoVHJhbnNwb3NpdGlvbiBvZiB0aGUgR3JlYXQgQXJ0ZXJpZXMpLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

완전 대혈관전위가 확인된 신생아에게 프로스타글란딘 E1을 투여했지만 산소포화도 62%와 산증이 지속된다. 심초음파에서 심방 사이 통로가 좁아 혈액 혼합이 부족하다. 즉시 고려할 중재는?

## 선택지

A. 풍선 심방중격절개술
B. 동맥관 코일 폐쇄술
C. 좌심실에 이식형 제세동기 삽입
D. 이뇨제만 쓰며 자연 호전을 기다림

## 해설

동맥관을 열어도 제한된 심방 교통으로 산소화가 불충분하면 풍선 심방중격절개술로 혈액 혼합을 개선한다. 근본 교정 전의 응급 중재다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미제공 X선에서 TGA를 관찰했다는 순환 해설을 임상 근거로 교체.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007113
- https://academic.oup.com/ejcts/article/51/1/e1/2895977
