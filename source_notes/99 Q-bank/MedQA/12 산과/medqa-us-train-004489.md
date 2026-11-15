---
type: qbank
schema_version: 1
id: medqa-us-train-004489
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2570f39cd5d1146f5dcc48bc3d2cf3536ef8ca7f2bf970c5d573586f8253be58
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "자궁 파열"
  - "이전 제왕절개"
  - "태아 선진부 하강 소실"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2ge2MjOyXtCAoVXRlcmluZSBSdXB0dXJlKS5tZA
difficulty: complex
answer: C
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

이전 제왕절개 흉터가 있는 만삭 산모가 질식분만을 시도하던 중 갑자기 심한 복통과 출혈을 보인다. 태아 심박수가 떨어지고 선진부가 0에서 −3으로 물러났다. 응급 처치는?

## 선택지

A. 진통 촉진을 위해 옥시토신을 늘린다
B. 자궁이완제를 투여한 뒤 외래 추적한다
C. 자궁 파열을 의심해 응급 개복·분만을 준비한다
D. 높아진 선진부를 흡입기로 끌어내린다

## 해설

이전 자궁 흉터, 갑작스러운 통증과 태아 심박 이상, 선진부 하강 위치 소실은 자궁 파열을 강하게 시사한다. 수혈과 소생을 준비하면서 응급 개복으로 분만하고 출혈을 조절한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: loss of station을단순하강정지로설명한오역수정. 0→-3으로선진부상승A.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004489
- https://doi.org/10.1002/ijgo.70406
