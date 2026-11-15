---
type: qbank
schema_version: 1
id: medqa-us-train-006876
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aadbbfdd387152c71cf95d70e6067ea119ed88c7f9bb3428b9e9e6cc3df9fc2d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "혈관미주신경성 실신"
  - "경련성 실신"
  - "상황성 실신"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2YiOq0gOuvuOyjvOyLoOqyveyEsSDsi6Tsi6AgKFZhc292YWdhbCBTeW5jb3BlKS5tZA
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 덥고 사람이 많은 경기장에서 오래 서 있다가 메스꺼움과 식은땀을 느낀 뒤 수 초간 의식을 잃었다. 팔이 두어 번 짧게 움찔했지만 곧 혼란 없이 회복했다. 기립 혈압과 심전도는 정상이고 운동 중 실신이나 젊은 돌연사 가족력은 없다. 가장 적절한 관리는?

## 선택지

A. 반사성 실신으로 설명하고 전구증상 대처와 재평가 기준을 안내한다
B. 팔이 움직였으므로 항경련제를 바로 시작한다
C. 영구 심박동기 삽입을 준비한다
D. 기질적 심장질환 소견이 없어도 응급 관상동맥조영을 시행한다

## 해설

오래 서 있던 중 식은땀과 메스꺼움이 선행하고 곧바로 명료해진 경과는 혈관미주신경성 실신을 지지한다. 실신 중 짧은 근간대 움직임이 나타날 수 있다. 고위험 단서가 없는 경우 전구증상 때 앉거나 눕는 법과 재평가 기준을 설명한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저위험상황실신 A는 유지하되 짧은경련이간질확진이라는오해와 모든실신추가검사불요의일반화 방지.
- https://academic.oup.com/eurheartj/article/39/21/1883/4939241

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006876
