---
type: qbank
schema_version: 1
id: medqa-us-train-006442
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b6736f3e67d5ee260af8e70fc29fcf41aea4402fa7200b5d7d3b913ebb346b28
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "경동맥동 과민증"
  - "반사성 실신"
  - "유발성 실신"
  - "Carotid sinus hypersensitivity"
related_disease_slugs: []
question_type: diagnosis
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 넥타이를 맬 때 반복해서 실신한다. 갑자기 쓰러졌다가 30초 이내에 혼란 없이 깨어난다. 기립 혈압과 평상시 심전도는 정상이다. 가장 가능성 높은 실신 기전은?

## 선택지

A. 심실 유출로의 고정된 폐쇄
B. 자세 변화에 따른 기립성 저혈압
C. 목 압박에 의해 유발되는 경동맥동 반사
D. 불안으로 인한 과호흡

## 해설

목을 누를 때 반복되는 짧은 실신은 경동맥동 반사로 인한 심박수 또는 혈압 저하를 시사한다. 평상시 심전도나 기립 혈압이 정상이어도 유발 상황에서 반사가 나타날 수 있다. 진단은 병력과 전문 평가를 종합한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 경동맥동 반사의 실신 C를 혈압변화가 거의 없다는 잘못된 기전에서 서맥/혈압저하로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006442
