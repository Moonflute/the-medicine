---
type: qbank
schema_version: 1
id: medqa-us-test-001122
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:604308c01ac72c6da1a73d486025d50d9ba534d3e14dc3e394359fb13352859f
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "핵간안근마비"
  - "내측종속 탈수초화"
  - "다발성 경화증"
question_type: mechanism
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
difficulty: complex
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

25세 여성이 3일간 간헐적으로 발생하는 통증성 복시로 진료를 받으러 왔다. 옆으로 볼 때만 증상이 있고 10일 전 자전거에서 넘어졌지만 두부 CT는 정상이었다. 양쪽 눈의 내전 장애와 반대쪽 눈의 안진이 있었고 안저에서 양측 시신경유두 충혈이 보였다. 이 소견의 가장 가능성 높은 원인은?

## 선택지

A. 내측세로다발(MLF)의 탈수초화
B. 교뇌 압박 종양
C. 티아민 결핍에 의한 산화 손상
D. 뇌간 경색

## 해설

양쪽 주시에서 내전장애와 반대쪽 외전안진이 생기는 것은 양측 핵간안근마비이다. 내측세로다발(MLF)은 제6뇌신경핵과 반대쪽 제3뇌신경핵의 협동 안구운동을 연결하며, 젊은 환자의 양측 병변은 탈수초질환을 시사한다. 정답은 A이며, MLF는 개별 말초뇌신경이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. medial longitudinal fasciculus를 내측종속 신경으로 부른 해부학적 오역 수정. 양측 INO의 탈수초화 A 유지.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001122
