---
type: qbank
schema_version: 1
id: medqa-us-train-005308
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4dff1c36eed7efa00f699d098c87ee507012ce82ff2c79f15b7a877224c11f25
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "전신 코르티코스테로이드"
  - "스테로이드 단기 부작용"
  - "감정 불안정"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: adverse_effect
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
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

중등도 지속성 천식이 있는 25세 여자가 천식 악화로 산소, 알부테롤과 코르티코스테로이드를 투여받고 14일 프레드니손 감량요법으로 퇴원한다. 다음 중 이 짧은 스테로이드 과정에서 나타날 수 있는 부작용은?

## 선택지

A. 감정 불안정
B. 얼굴의 지방 축적
C. 쿠싱증후군
D. 무월경

## 해설


14일간의 프레드니손 단기 복용은 정서 변화, 불안, 과민성을 흔히 일으킨다. 얼굴 지방 축적·쿠싱증후군·무월경은 장기 고용량 스테로이드에서 나타난다. 따라서 짧은 과정에서 나타날 수 있는 부작용은 A, 감정 불안정이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 단기 prednisone의 정서불안정 A를 만성 Cushing성 지방재분포와 구별. 제시 taper를 새 권고로 검증한 것은 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005308
