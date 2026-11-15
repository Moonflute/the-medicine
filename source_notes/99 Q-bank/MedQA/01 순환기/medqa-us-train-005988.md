---
type: qbank
schema_version: 1
id: medqa-us-train-005988
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5cccfb3bf8a632b34f8116d2b0a1e2d4fbb052a7894fc5d1c4f8b8b244d36e5c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "쇄골하동맥 도루 증후군"
  - "대동맥궁 혈관염"
  - "좌측 쇄골하동맥 협착"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
question_type: diagnosis
difficulty: standard
answer: A
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

58세 여성이 왼팔을 반복해서 쓰면 팔에 힘이 빠지고 어지럽다고 한다. 오른팔 혈압 138/78 mmHg, 왼팔 106/70 mmHg이고 좌측 요골맥박이 약하다. 도플러에서 좌측 척추동맥 혈류가 거꾸로 흐른다. 가장 가능성 높은 진단은?

## 선택지

A. 쇄골하동맥 도루 증후군
B. 레이노 현상
C. 팔의 심부정맥혈전증
D. 대동맥 축착

## 해설

좌측 척추동맥 기시부보다 몸통 쪽의 쇄골하동맥 협착이 있으면 팔로 향하는 혈류 일부가 척추동맥을 역방향으로 흐를 수 있다. 팔을 쓸 때의 허혈 증상, 양팔 혈압 차이와 혈류 역전이 단서다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 쇄골하 도루 A의 기전을 설명하되 젊은 여성 전신염증의 대혈관염 가능성과 확인 필요 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005988
