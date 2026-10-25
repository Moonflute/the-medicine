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
answer: B
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

20세 대학생 여성이 3주 동안 매우 슬프고 계속 울어야 한다며 내원했다. 3주 전 4년 동안 사귀던 남자친구가 떠났다. 식욕이 없고 체중이 2.3kg (5.1lb) 감소했다. 울음을 멈추거나 침대에서 일어날 수 없어 여러 수업을 빠졌다. 전 남자친구를 계속 생각한다. 이전 연애가 끝난 뒤에도 약 2개월 동안 비슷한 증상을 경험했다. 키는 158cm (5피트 2인치), 체중은 45kg (100lb), BMI는 18kg/m2이다. 체온은 36.1°C (97°F), 맥박은 분당 65회, 혈압은 110/60 mm Hg이다. 신체검사에서 이상은 없다. 정신상태검사에서 슬퍼 보이고 쉽게 운다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 사별
B. 우울한 기분을 동반한 적응장애
C. 급성 스트레스장애
D. 신경성 식욕부진증

## 해설

이별 후 3주 동안 정서적 고통과 학업 기능 저하가 있고 다른 선택지에 맞는 사별·외상성 사건·체중 증가 공포가 없어 우울 기분을 동반한 적응장애(B)가 가장 적절하다. 스트레스 시작 후 3개월 이내 발생이라는 조건과 스트레스/그 결과가 끝난 뒤 추가 6개월 넘게 지속하지 않는 조건을 구별한다. 단순히 전체 증상이 6개월 미만이라는 사실만으로 정하는 것은 아니며 스트레스 후에도 주요우울장애 등의 기준을 충족하면 별도로 감별해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 스트레스 이후 6개월 미만이면 곧 적응장애라는 잘못된 해설을 발생 시점·다른 장애 감별을 포함한 정의로 교정했다.
- https://www.ncbi.nlm.nih.gov/books/NBK519704/table/ch3.t19/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004643
