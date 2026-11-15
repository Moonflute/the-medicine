---
type: qbank
schema_version: 1
id: medqa-us-train-008012
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:087099235c75a1fe63fa0403eaea81b7015825a089f3a76a58cd9a644a8bc733
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "subclavian steal syndrome"
  - "vertebrobasilar insufficiency"
  - "Doppler ultrasound"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
question_type: investigation
difficulty: standard
answer: B
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

65세 남성이 오른팔을 반복해서 쓰면 어지럽고 시야가 흐려지며 오른팔도 쉽게 피로해진다고 한다. 오른팔 수축기혈압은 왼팔보다 30 mmHg 낮고 오른쪽 요골맥박이 약하다. 쇄골하동맥과 척추동맥의 혈류 방향을 평가할 첫 검사는?

## 선택지

A. 뇌 비조영 CT
B. 쇄골하동맥과 척추동맥 이중초음파
C. 24시간 활동심전도
D. 경흉부 심초음파

## 해설

팔 운동 때 유발되는 후순환 증상과 양팔 혈압 차이는 쇄골하동맥 도류를 시사한다. 이중초음파로 쇄골하동맥 협착과 같은 쪽 척추동맥의 역행성 혈류를 평가할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상 유발 활동을 원문에 없는 양팔·다리 운동으로 넓힌 해설을 상지 운동으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008012
- https://academic.oup.com/eurheartj/article/45/36/3538/7738955
