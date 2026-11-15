---
type: qbank
schema_version: 1
id: medqa-us-train-004144
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:73c06636794bf08f541659c01fe67998de17ca6c304ff9c20e714bee389c0fe4
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "베커 근이영양증"
  - "디스트로핀"
  - "종아리 가성비대"
  - "Becker muscular dystrophy"
question_type: investigation
related_disease_slugs: []
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

유전자검사로 베커 근이영양증을 진단받은 11세 아이가 계단을 오르기 어려워한다. 숨참이나 흉통은 없다. 증상이 없어도 진단 시 필요한 평가는?

## 선택지

A. 심전도와 심장 영상으로 심근 기능을 평가한다
B. 증상이 생길 때까지 심장 평가는 하지 않는다
C. 골격근 생검만 반복한다
D. 혈청 CK가 떨어지면 심근병증은 없다고 판단한다

## 해설

디스트로핀병에서는 골격근 증상이 가벼워도 심근병증이 진행할 수 있다. 진단 시 심장 기능을 평가하고 결과에 따라 정기적으로 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Becker와 Duchenne를 구별하지 못하는 단순 디스트로핀 결핍 표현을 보정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004144
- https://doi.org/10.1161/CIR.0000000000000526
