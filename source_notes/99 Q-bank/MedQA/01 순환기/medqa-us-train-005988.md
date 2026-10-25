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

32세 여성이 새로 발생한 좌측 팔 통증으로 내원했다. 이전에는 건강했으나 2개월 동안 미열, 야간 발한 및 어지럼증이 반복되었다. 매장 보조원으로 일하며 선반에 물건을 놓을 때 왼팔이 아프다. 종합비타민 외에는 약을 복용하지 않는다. 우측 팔 혈압은 126/72이지만 좌측에서는 측정할 수 없고 좌측 요골맥박도 만져지지 않는다. 좌측 쇄골하 부위에 잡음이 들린다. 대퇴 및 족부 맥박은 정상이고 복부 잡음은 없다. 좌측 손은 차갑지만 다른 허혈 소견은 없다. 다음 중 상태의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 쇄골하동맥 도루 증후군
B. 레이노 현상
C. 가와사키병
D. 대동맥 축착

## 해설

좌쇄골하 협착은 팔 운동성 허혈과 팔맥박/혈압 감소를 만들며 근위부 병변이면 척추동맥 역류에 따른 도루 A가 가능하다. 젊은 여성의 미열·야간발한은 Takayasu 등 대혈관염 원인도 시사한다. 역류 자체는 혈류영상으로 확인해야 하며 단순 맥박소실만으로 확진되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 쇄골하 도루 A의 기전을 설명하되 젊은 여성 전신염증의 대혈관염 가능성과 확인 필요 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005988
