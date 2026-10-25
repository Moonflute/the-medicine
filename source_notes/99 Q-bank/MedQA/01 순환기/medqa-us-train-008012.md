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

65세 남자가 2개월 동안 지속된 어지럼으로 일차 진료를 받으러 왔다. 발이 휘청거리거나 좌우로 흔들리는 느낌과 간헐적인 회전성 어지럼이 있다. 손자와 앞마당에서 공놀이를 하던 중 처음 느꼈고, 개와 프리스비를 던질 때에도 확실히 발생한다. 이런 때만 어지럽고 몇 분 쉬면 사라진다. 메트포르민으로 치료 중인 제2형 당뇨병 외에는 병력이 없고 진료실 활력징후와 신체검사는 정상이다. 다음 중 가장 적절한 다음 검사는?

## 선택지

A. 비조영 두부 CT
B. 도플러 초음파
C. 심전도
D. 경흉부 심초음파

## 해설

공이나 원반을 던지는 상지 운동 중에만 어지럽고 쉬면 호전되는 양상은 쇄골하동맥 도류증후군을 의심하게 한다. B의 도플러 초음파로 쇄골하동맥과 척추동맥의 혈류 방향을 평가한다. 양팔과 다리 운동 모두가 증상을 유발한다고 원문에 제시된 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상 유발 활동을 원문에 없는 양팔·다리 운동으로 넓힌 해설을 상지 운동으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008012
