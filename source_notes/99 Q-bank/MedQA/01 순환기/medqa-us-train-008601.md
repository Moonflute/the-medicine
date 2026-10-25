---
type: qbank
schema_version: 1
id: medqa-us-train-008601
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d7da924cb4c1fe2d8fa456adf146cd726990a2bb182a9e678ccf263fa67f04c9
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "transtheoretical model"
  - "smoking cessation"
  - "maintenance stage"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: prevention
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
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

45세 남성이 연례 검진을 위해 내원했다. 식이로 잘 조절되는 제2형 당뇨병이 있고 1년 전 심근경색으로 입원했다. 40갑년 흡연력이 있지만 심장에 흡연이 얼마나 해로운지 설명을 들은 뒤 줄이려 노력했고 지난 6개월 동안은 금연했다. 예전에는 직장과 가족 스트레스를 다루기 위해 흡연을 이용했지만, 지금은 직장 웰니스 세션에 참석하고 가족이 일어나기 전 매일 아침 명상한다. 다음 중 이 환자가 가장 가능성 높은 행동변화 단계는 무엇인가?

## 선택지

A. 유지 단계
B. 숙고 전 단계
C. 준비 단계
D. 행동 단계

## 해설


환자는 6개월간 금연을 유지하고, 흡연 재발 방지를 위한 지속적인 행동과 환경 관리가 이루어지고 있다. 이는 행동변화 모델의 유지 단계에 해당한다. 숙고 전·준비·행동 단계는 금연 시도 전이나 초기 단계에 해당한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 6개월 금연과 재발 방지 활동 지속은 변화단계 모델의 유지 A와 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008601
