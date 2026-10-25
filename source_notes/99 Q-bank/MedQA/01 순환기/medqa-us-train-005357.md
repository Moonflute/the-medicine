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
explanation_status: machine-generated
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

42세 여자가 반복되는 흉통과 턱으로 방사되는 압박감으로 내원했다. 심전도에서 ST분절 상승이 보이나 심근효소는 반복해서 정상이다. 다음 중 의심되는 질환에 허용되는 치료요법은?

## 선택지

A. 질산염만 투여
B. 아스피린과 클로피도그렐
C. 칼슘통로차단제와 질산염
D. 아스피린, 클로피도그렐, 베타차단제와 질산염

## 해설


프린츠메탈 협심증은 관상동맥 경련에 의한 일시적 ST 상승이며, 칼슘채널 차단제와 질산염이 경련을 완화한다. 따라서 가장 적절한 치료는 칼슘통로 차단제와 질산염이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반복 일시 ST상승·음성효소의 의심 연축성 협심증은 CCB+nitrate C에 부합.
- https://academic.oup.com/eurheartj/article/45/36/3415/7743115

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005357
