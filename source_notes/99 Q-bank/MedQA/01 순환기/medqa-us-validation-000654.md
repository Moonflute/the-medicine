---
type: qbank
schema_version: 1
id: medqa-us-validation-000654
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:447b33c729c8af4972462a0068b6f0abf0b815edcf93c2bf3e53d5a696585649
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심장압전"
  - "심낭염"
  - "심근경색 후 증후군"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwLyjquInsgqzspp3tm4TqtbApLm1k
question_type: mechanism
difficulty: complex
answer: B
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

급성 심근경색으로 관상동맥우회술을 받은 지 2주 후 62세 남성이 발열, 찌르는 흉통, 피로로 진료를 받으러 왔다. 통증은 누우면 악화되고 앞으로 기대면 호전되며 흡기 시 혈압이 떨어지고 경정맥 팽창과 작은 심음, 하지 부종이 있다. 이 증상의 가장 가능성 높은 원인은?

## 선택지

A. 평균 대동맥압 증가
B. 좌심실 이완기 충만 감소
C. 심실상성 부정맥
D. 우심실 수축력 감소

## 해설


심근경색 후 발생한 심낭염(드레슬러 증후군)으로 심낭에 액체가 차면 좌심실 이완기 충만이 감소해 흉통·저혈압·정맥압 상승이 나타난다. 이는 좌심실 이완기 충만 감소에 해당한다. 평균 대동맥압 증가는 해당되지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 심장손상 후 심낭염에 기이맥·경정맥압 상승·약한 심음은 심낭삼출에 의한 이완기 충만 제한 B에 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000654
