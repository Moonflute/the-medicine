---
type: qbank
schema_version: 1
id: medqa-us-train-007778
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:842e2b9125ac385166ff2f655b8ad7f298fc6376d9c9c9f12404b85a66a558df
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "normal aging"
  - "mild cognitive impairment"
  - "Alzheimer disease"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qyveuPhCDsnbjsp4Ag7J6l7JWgIChNaWxkIENvZ25pdGl2ZSBJbXBhaXJtZW50KS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy4oO2VmOydtOuouCDsuZjrp6QgKEFsemhlaW1lcidzIERpc2Vhc2UpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

71세 남자가 건망증 때문에 딸과 함께 내원했다. 딸은 이미 말한 내용을 반복해서 말하게 된다고 한다. 최근에는 함께 약속한 점심 식사에도 오지 않았다. 딸의 어머니, 즉 환자의 아내가 알츠하이머병을 앓았고 처음에는 이렇게 시작했기 때문에 딸은 알츠하이머병을 걱정한다. 환자는 가끔 안경을 어디에 두었는지 잊지만 이는 새로운 일이 아니라고 한다. 수첩에 적지 않으면 약속을 잊기도 하지만 “생일은 항상 기억한다”고 말한다. 아내가 사망한 이후 모든 재정을 책임지고 있으며 딸은 그가 청구서를 제때 낸다고 확인한다. 혼자 요리하지만 가끔 “게을러서” 패스트푸드를 주문한다. 고혈압, 죽상경화증, 류마티스관절염 병력이 있고 아스피린, 리시노프릴, 아토르바스타틴, 메토트렉세이트를 복용한다. 3년 전 아내가 사망한 후 첫 1년 동안 우울증 치료를 받았다. 현재 우울감이나 자살 생각은 부인하지만, 함께 골프를 치던 사람들이 사망한 이후 죽음에 대해 더 많이 생각한다고 한다. 매일 저녁 맥주 한 잔을 마시고 사교적으로 시가를 피운다. 신체검사에서 손가락의 척측 편위, 악력 감소, 느리지만 안정적인 보행이 보인다. 5글자 단어를 거꾸로 말할 수 있고 5분 후 3개 항목 모두 기억한다. 다음 중 환자의 증상을 가장 잘 설명하는 진단은?

## 선택지

A. 알츠하이머병
B. 주요우울장애
C. 정상 노화
D. 혈관성 치매

## 해설

현재 금전 관리·요리 등 독립적인 기능이 보존되고 주의력과 지연회상도 유지되어, 제시된 선택지 중 정상 노화에 따른 건망증이 가장 적절하다. 이를 정식 진단인 경도인지장애와 같은 뜻으로 부르지 않는다. 혈관 위험요인이나 가족의 걱정만으로 치매를 확정하지 않으며 반복적 변화가 진행하면 추적 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007778

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 딸의 어머니(환자의 아내) 알츠하이머 병력을 환자의 어머니로 오역한 부분 교정. 정상 노화를 MCI 또는 혈관성 퇴행질환과 혼동하지 않도록 설명.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
