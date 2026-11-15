---
type: qbank
schema_version: 1
id: medqa-us-test-000220
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9c5333bf30dc31e3458ebff955722b5ee45a44d9f1220a8e6c3ee50feaf11d7c
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "낭성섬유증"
  - "CFTR"
  - "기관지확장증"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4sOq0gOyngCDtmZXsnqXspp0gKEJyb25jaGllY3Rhc2lzKS5tZA
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 여아가 지난 1년간 폐렴으로 세 차례 입원했다. 걸쭉한 가래가 반복되고, 평소 기름지고 악취 나는 변을 보며 체중이 잘 늘지 않는다. 호흡기 증상과 흡수장애를 함께 설명하는 질환은?

## 선택지

A. 낭성섬유증
B. 원발성 섬모운동이상증
C. 선천성 심실중격결손
D. 재발성 흡인성 폐렴

## 해설

낭성섬유증은 점액이 끈끈해져 반복 호흡기 감염이 생기고 췌장 외분비기능부전으로 지방변과 성장부진이 나타날 수 있다. 원발성 섬모운동이상증도 기도 감염을 일으키지만 지방 흡수장애를 함께 설명하기 어렵다. 땀 염소 검사 등을 통해 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. CFTR 용어 오기를 교정하고 감염/지방흡수장애를 연결하는 기본 기전 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000220
- https://www.cff.org/medical-professionals/cf-diagnosis-clinical-care-guidelines
