---
type: qbank
schema_version: 1
id: medqa-us-train-004865
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e4b3cdfaaef753ba29efe00ef1891efbe776c4f9a09c6017346603816fa7feb5
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "둔상 복부 외상"
  - "출혈성 쇼크"
  - "FAST 초음파"
related_disease_slugs:
  - MTEg7Jm46rO8L-uRlOyDgSDrs7XrtoDsmbjsg4EgKEJsdW50IEFiZG9taW5hbCBUcmF1bWEpLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

교통사고로 복부를 다친 17세 남성이 혈압 82/52 mmHg, 맥박 124회/분이다. 초기 소생과 출혈원 평가를 동시에 진행 중이며 아직 복강 내 출혈은 확인되지 않았다. 침상에서 신속히 할 검사는?

## 선택지

A. 조영 복부 CT로 이동
B. 복부·골반 MRI
C. 복부 단순 X선
D. 외상 초음파(FAST)

## 해설


불안정한 둔상 환자에서 FAST는 침상에서 복강 내 자유액을 빠르게 찾는다. 양성이며 쇼크가 지속되면 즉시 출혈 조절을 추진한다. 음성이어도 복강·골반 등 다른 출혈원을 계속 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-004865`와 직접 대조했다.
- 판정: 불안정한 둔상 환자의 복강 출혈 신속 평가 FAST A가 선지 중 다음 단계. 원문과 연결 유지하되 대량 수액량의 최신 적절성까지 승인한 것은 아님.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004865
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7106618/
