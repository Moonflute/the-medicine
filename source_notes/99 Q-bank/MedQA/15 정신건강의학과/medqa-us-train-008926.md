---
type: qbank
schema_version: 1
id: medqa-us-train-008926
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bf3720c699b987785653c2590dc7d463d5df0b4bebbe457400c97494d32062f5
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "opioid false positive"
  - "poppy seed ingestion"
  - "opioid intoxication"
question_type: other
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yVhO2OuOycoOyCrOygnCDspJHrj4UgKE9waW9pZCBQb2lzb25pbmcpLm1k
difficulty: standard
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 직장에서 요구한 소변 약물검사에 양성이 나온 이유를 모르겠다며 가정의학과에 내원했다. 특별한 과거력이나 복용약은 없고 흡연, 음주, 기분전환용 약물 사용을 부인한다. 최근 식단을 바꿔 2주 동안 케톤식이를 하면서 탄수화물 공급원으로 양귀비씨 베이글만 먹었다. 활력징후와 신체검사는 정상이다. 실제로 검사에서 양성이 나온 약물을 남용했다면 나타날 수 있는 신체 소견은 무엇인가?

## 선택지

A. 동공축소
B. 무한증
C. 빈호흡
D. 근육통

## 해설

양귀비씨 음식 섭취는 검사 조건에 따라 오피에이트 양성 해석에 영향을 줄 수 있다. 질문은 이 환자가 실제로 그 약물군을 남용·중독한 경우의 소견을 가정하므로, 제시된 선택지 중 오피오이드 중독의 동공축소가 적절하다. 음식 섭취 후 검사 양성만으로 이 환자의 남용이나 임상적 동공축소를 확정하는 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008926

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 양귀비씨 섭취 후 양성이 곧 임상 중독·동공축소를 뜻하는 듯한 설명을 원문의 가정적 오피오이드 중독 소견 질문으로 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.fda.gov/medical-devices/drugs-abuse-tests/drugs-abuse-home-use-test
