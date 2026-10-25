---
type: qbank
schema_version: 1
id: medqa-us-validation-000742
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8dee03bc46ca69cc347e36736ea9518cb1cb1814e6f60e39471a870d513d074c
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "도박장애"
  - "행동중독"
  - "기능 손상"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
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
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 남성이 4개월간 점점 심해지는 불안, 슬픔, 과민성과 함께 대부분의 시간을 스포츠 베팅에 쓰고 가족에게 돈을 빌리며 직장을 잃었다. 잃은 돈을 다시 따면 증상도 좋아질 것이라 기대한다. 가장 가능성 높은 진단은?

## 선택지

A. 도박장애
B. 알코올 금단
C. 양극성 II형 장애
D. 적응장애

## 해설

도박에 몰두하고 돈을 빌리며 일·가족 기능이 손상되고 손실을 도박으로 되찾으려는 양상은 도박장애를 시사한다. 제시된 선택지 중 이에 해당하며 전체 기준과 기간, 조증과의 관계 및 물질 사용을 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000742

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 손실을 되찾으려는 도박 지속이라는 원문 단서 복원 및 선지 문자 참조 제거.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
