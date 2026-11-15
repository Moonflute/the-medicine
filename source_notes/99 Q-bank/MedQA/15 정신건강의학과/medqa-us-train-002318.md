---
type: qbank
schema_version: 1
id: medqa-us-train-002318
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:30faa4f5f4ffc4f5a215de5f8588bc2e77cf9c1c5667ae8e4ab04b9f31b71d77
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "conversion disorder"
  - "psychogenic nonepileptic seizure"
  - "functional neurologic symptom disorder"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yghO2ZmCDsnqXslaAgKENvbnZlcnNpb24gRGlzb3JkZXIpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

24세 여성이 발작처럼 몸을 떠는 사건을 반복한다. 사건 사이 신경학적 진찰은 정상이고, 일반 뇌파에서 이상이 없었다. 기능성 발작과 뇌전증을 감별하기 위해 가장 직접적인 검사는?

## 선택지

A. 증상이 없는 시점의 일반 뇌파 반복
B. 발작 다음 날 혈청 프로락틴 측정
C. 기립경 검사
D. 평소와 같은 사건을 포착하는 비디오 뇌파검사

## 해설

평소와 같은 사건을 비디오 뇌파로 기록해 임상 양상과 뇌파를 함께 해석한다. 발작 사이 일반 뇌파가 정상이라는 사실만으로 뇌전증을 배제할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정상신경검사·의식보존이제시된것처럼창작한부분삭제. 양성기능성발작단서B와확진한계.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002318
- https://pubmed.ncbi.nlm.nih.gov/41370742/
