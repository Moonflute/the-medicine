---
type: qbank
schema_version: 1
id: medqa-us-train-008376
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:31f1cf4c4b38f6ca064a27cc6b5c44ff5bd6031319f7f5d31e07aed28f8c2b62
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "anabolic steroid use"
  - "male infertility"
  - "testicular atrophy"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남자가 18개월 동안 피임 없이 규칙적으로 성관계를 했지만 임신이 되지 않아 아내와 함께 내원했다. 아내는 가임성이 확인되었다. 환자는 13세에 사춘기가 시작되었고 10년 전 클라미디아 감염을 아지스로마이신으로 치료받았다. 전문 사이클 선수로 매일 3~4시간 훈련하며 국가대표 준비로 스트레스가 많고 식단에 매우 신경 쓴다. 체온 36.5°C(97.7°F), 맥박 50회/분, 혈압 154/92 mm Hg이다. 운동선수 체형과 얼굴·등·가슴의 염증성 구진, 작은 고환이 있다. 불임의 가장 가능성 높은 원인은?

## 선택지

A. 단백동화 스테로이드 사용
B. 마찰로 인한 열
C. 신경성 식욕부진
D. 칼만증후군

## 해설

염증성 여드름, 운동선수 체형과 작은 고환은 A, 외인성 단백동화 안드로겐 사용을 시사한다. 외인성 안드로겐은 LH/FSH 분비를 억제하고 고환 내 testosterone과 정자형성을 감소시켜 고환 위축·난임을 일으킬 수 있다. 정상 사춘기 시작과 현재 virilization은 선천성 GnRH 결핍을 덜 지지한다. 본문에 고지혈증 검사 결과는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 본문에 없는 고지혈증을 제거하고 anabolic steroid의 시상하부-뇌하수체-성선 축 억제로 불임을 설명.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008376
