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
question_type: mechanism
related_disease_slugs:
  - MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k
difficulty: complex
answer: B
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

27세 남성이 난임으로 검사받았다. 근육을 늘리려고 외인성 안드로겐을 수개월간 사용했다. 고환은 작고 정자 수, LH, FSH가 모두 낮다. 정자 수가 감소한 기전은?

## 선택지

A. 정관의 기계적 폐쇄
B. 음성 되먹임에 의한 성선자극호르몬 분비 억제
C. 프로락틴 분비 증가가 반드시 동반
D. 고환 내 테스토스테론 과다에 의한 정자 배출 증가

## 해설

외인성 안드로겐은 LH와 FSH를 낮춰 고환 내 테스토스테론과 정자 형성을 떨어뜨릴 수 있다. 임신을 계획하는 남성에서 외인성 테스토스테론을 난임 치료로 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 본문에 없는 고지혈증을 제거하고 anabolic steroid의 시상하부-뇌하수체-성선 축 억제로 불임을 설명.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008376
- https://uroweb.org/guidelines/sexual-and-reproductive-health/chapter/male-infertility
