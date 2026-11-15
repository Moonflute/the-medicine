---
type: qbank
schema_version: 1
id: medqa-us-train-004643
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:887baf70ac15b886b51ca5df8cc9ea9bb45d938535dfb6ce02f6e360e82dd6d7
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "적응장애"
  - "우울한 기분"
  - "스트레스 반응"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yggeydkSDsnqXslaAgKEFkanVzdG1lbnQgRGlzb3JkZXIpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

이별한 지 3주 된 환자가 그 일을 떠올리면 울고 수업에 집중하기 어렵다. 친구와 있을 때는 기분이 나아지고 좋아하는 활동은 즐긴다. 전반적인 우울 삽화나 조증의 기준은 충족하지 않고, 이런 반응으로 학업에 뚜렷한 지장이 생겼다. 가장 가능성 높은 진단은?

## 선택지

A. 우울 기분을 동반한 적응장애
B. 주요우울장애
C. 급성 스트레스장애
D. 지속성 우울장애

## 해설

확인 가능한 생활 스트레스 뒤 시작하고 기능 장애를 일으켰지만 다른 정신질환의 기준은 충족하지 않는 경우 적응장애를 고려한다. 스트레스가 있었다는 사실만으로 주요우울장애를 배제하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 스트레스 이후 6개월 미만이면 곧 적응장애라는 잘못된 해설을 발생 시점·다른 장애 감별을 포함한 정의로 교정했다.
- https://www.ncbi.nlm.nih.gov/books/NBK519704/table/ch3.t19/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004643
- https://pubmed.ncbi.nlm.nih.gov/36822730/
