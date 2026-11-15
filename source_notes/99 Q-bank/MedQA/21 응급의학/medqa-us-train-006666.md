---
type: qbank
schema_version: 1
id: medqa-us-train-006666
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:04abe250cf58bf2b5b38aebc05acf333d7aa4d35cd37852d3666b87d2b6a0cb0
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "연가양 흉곽"
  - "다발성 늑골 골절"
  - "외상성 호흡부전"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2dieu2gCDsmbjsg4EubWQ
difficulty: complex
answer: A
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

교통사고로 흉부를 다친 27세 남성이 100% 산소를 마스크로 투여해도 산소포화도 83%다. 호흡이 얕고 혼돈이 있으며, 들이쉴 때 오른쪽 흉벽 일부가 안쪽으로 들어간다. 진통과 초기 소생 뒤에도 같은 상태다. 우선할 호흡 처치는?

## 선택지

A. 양압환기를 동반한 기관내 삽관
B. 침상 개흉술
C. 흉부 CT
D. 오른쪽 제3~6번 갈비뼈 외과적 고정

## 해설

연가양 흉곽의 역설적 움직임과 폐좌상 가능성이 있다. 산소에 반응하지 않는 저산소혈증과 의식저하가 있으므로 기관삽관 후 양압환기가 필요하다. 늑골 고정술은 호흡 안정화보다 앞서지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 동요흉이 곧 기도 폐쇄라는 해설을 교정한다. 고농도 산소에도 심한 저산소혈증과 의식 변화가 있어 A가 필요하다는 근거를 명확히 한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006666
