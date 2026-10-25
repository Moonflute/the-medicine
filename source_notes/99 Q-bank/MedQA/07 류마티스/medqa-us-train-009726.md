---
type: qbank
schema_version: 1
id: medqa-us-train-009726
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:075ec8f8117f9232d545b8f976d773d450ae1da2340447a0e4c54b0cce0f53b8
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "ankylosing spondylitis"
  - "강직성 척추염"
  - "enthesitis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

34세 남자가 7개월 동안 악화된 허리와 목 통증으로 내원했다. 아침에 심하고 농구를 하면 호전되며 최근 2개월 동안 운동 시 호흡곤란이 있다. 천장관절 압통, 제한된 운동 범위, 흉곽 확장 감소, 백혈구 14,000/mm³, ESR 84 mm/시간이 있다. 척추 X선에서 천장관절 미란과 경화, 척추 전만 소실이 보인다. 추가 검사에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 허벅지 전외측 감각이상
B. 손발톱 함몰과 손발톱 바닥 분리
C. 아킬레스건 부착부 압통
D. 양측 손가락 척측편위

## 해설


34세 남성의 운동으로 호전되는 염증성 요통, 천장관절염과 흉곽 확장 감소는 axial spondyloarthritis를 시사한다. Enthesitis가 흔한 연관 소견으로 Achilles tendon 부착부 압통 C가 가장 부합한다. 환자는 청소년이 아니며 손톱병변은 PsA에서 더 전형적이고 척측편위는 오래된 RA와 연관된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009726 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 34세를 청소년이라 부른 연령 오류 교정; Achilles enthesitis C 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009726
