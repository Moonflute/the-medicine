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

48세 환자가 1년 넘게 스포츠 도박을 줄이려 했으나 반복해서 실패했다. 잃은 돈을 되찾으려고 다시 베팅하고 빚을 숨기며 직장을 잃었다. 기분이 들뜨거나 수면 욕구가 줄어드는 시기와는 무관하다. 진단은?

## 선택지

A. 도박장애
B. 양극성장애의 조증 삽화
C. 적응장애
D. 강박장애

## 해설

손실을 만회하려는 반복 도박, 통제 실패 및 재정·직업 기능의 손상은 도박장애를 시사한다. 도박이 조증 때만 발생한 경우와 구분하며, 부채와 자살 위험도 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000742
- https://www.nice.org.uk/guidance/ng248/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 손실을 되찾으려는 도박 지속이라는 원문 단서 복원 및 선지 문자 참조 제거.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
