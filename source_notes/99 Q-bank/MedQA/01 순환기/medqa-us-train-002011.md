---
type: qbank
schema_version: 1
id: medqa-us-train-002011
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3baf67eb04add6fa2022fc9c4a30766c596b5b243a28bd6112d10e8292dcff31
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "congenital long QT syndrome"
  - "exertional syncope"
  - "beta blocker"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4tCBRVCDspp3tm4TqtbAgKExvbmcgUVQgU3luZHJvbWUpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
---

# MedQA US 임상문제

## 문제

5세 남아가 축구를 하다 15초간 의식을 잃어 내원했다. 떨림, 혀 깨물기 또는 실금은 없었고 단순 열성경련 한 번 외에는 건강했다. 아버지가 34세에 원인 불명의 심장질환으로 급사했다. ECG에서 QTc 470 ms이다. 다음 중 가장 적절한 치료의 다음 단계는 무엇인가?

## 선택지

A. Propranolol
B. 이식형 심율동전환 제세동기
C. 황산마그네슘
D. Amiodarone

## 해설


QTc 470 ms는 선천성 장QT 증후군을 의미하며, 운동 중 실신은 위험한 토르사데스 발작을 암시한다. 1차 예방은 베타 차단제(프로프라놀롤) 투여로 심실성 부정맥을 억제한다. 따라서 다음 단계는 프로프라놀롤이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002011
