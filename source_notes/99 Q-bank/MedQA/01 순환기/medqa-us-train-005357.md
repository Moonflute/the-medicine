---
type: qbank
schema_version: 1
id: medqa-us-train-005357
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7441b17bccc7f4c7aaf8b542314b5d52d9f08820879e6f40705be894d0bc4040
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "변이형 협심증"
  - "프린츠메탈 협심증"
  - "관상동맥 경련"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uzgOydtO2YlSDtmJHsi6zspp0gKFZhcmlhbnQgQW5naW5hKS5tZA
question_type: management
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성이 새벽마다 안정 중 흉통이 반복된다. 통증 중 ST분절이 상승했다가 통증이 끝나면 정상화되고 연속 트로포닌은 정상이다. 조영술에서 고정된 중증 협착은 없고 관상동맥 연축이 확인됐다. 재발 예방의 첫 약물은?

## 선택지

A. 아스피린
B. 프로프라놀롤
C. 딜티아젬
D. 헤파린

## 해설


확인된 혈관연축 협심증의 예방에는 칼슘통로차단제가 기본이다. 질산염은 증상 완화 또는 추가 예방에 쓸 수 있다. 비선택적 베타차단제는 연축을 악화시킬 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반복 일시 ST상승·음성효소의 의심 연축성 협심증은 CCB+nitrate C에 부합.
- https://academic.oup.com/eurheartj/article/45/36/3415/7743115

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005357
- ESC 만성 관상동맥증후군 진료지침(2024): https://doi.org/10.1093/eurheartj/ehae177
