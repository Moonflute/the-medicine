---
type: qbank
schema_version: 1
id: medqa-us-train-004290
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:70388bdb22b659d9ed309ee1d3e312983ba7b476f3d4be21e6fe12a74b51df19
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "헤로인 과다복용"
  - "호흡억제"
  - "오피오이드 중독"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: simple
answer: D
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

34세 남성이 의식이 없는 상태로 발견됐다. 호흡수는 분당 4회이고 양쪽 동공은 축동되어 있다. 이 소견을 가장 잘 설명하는 과다복용 약물군은?

## 선택지

A. 교감신경흥분제
B. 칸나비노이드
C. 항콜린제
D. 오피오이드

## 해설

의식저하, 현저한 호흡저하, 축동의 조합은 오피오이드 중독을 시사한다. 진찰만으로 헤로인 등 개별 약물을 특정할 수는 없다. 즉시 환기를 지원하고 오피오이드 길항제 투여를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 누락 사진의 동공 변화를 정상이라고 가정한 해설 제거. 심한 호흡억제와 의식저하를 근거로 D 유지.
- 공식/학회 근거: https://www.cdc.gov/stop-overdose/response/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004290
