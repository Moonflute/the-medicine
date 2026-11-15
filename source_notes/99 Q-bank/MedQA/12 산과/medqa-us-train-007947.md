---
type: qbank
schema_version: 1
id: medqa-us-train-007947
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6567251748654fbbc90833a5508693ab7f5d5d7e8ccf15d53d7559a6611c54a2
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "complete abortion"
  - "spontaneous abortion"
  - "empty uterus after bleeding"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-u2iOyZhOyghCDsnKDsgrAgKEluY29tcGxldGUgQWJvcnRpb24pLm1k
  - MTIg7IKw6rO8L-yekOyXsCDsnKDsgrAgKFNwb250YW5lb3VzIEFib3J0aW9uKS5tZA
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

임신 7주에 자궁내 임신낭과 배아를 확인했던 산모가 임신 8주에 출혈과 조직 배출을 겪었다. 통증과 출혈이 줄고 경부가 닫혔으며, 질식 초음파에서 임신낭과 잔류 조직은 보이지 않는다. 가장 가능성이 높은 진단은?

## 선택지

A. 계류유산
B. 절박유산
C. 완전유산
D. 불완전유산

## 해설

이전 자궁내 임신이 확인됐고 임신조직 배출 후 경부가 닫혔으며 잔류 조직이 없어 완전유산에 부합한다. 이전 임신 위치를 몰랐다면 빈 자궁만으로 완전유산을 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 출혈멈춤창작삭제. 감소하는통증/출혈과닫힌경부/빈자궁의완전유산B지지하되단독확진한계.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007947
- https://www.nice.org.uk/guidance/ng126/chapter/diagnosis-of-viable-intrauterine-pregnancy-and-of-tubal-ectopic-pregnancy
