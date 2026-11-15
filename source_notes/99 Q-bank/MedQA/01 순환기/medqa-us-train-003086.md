---
type: qbank
schema_version: 1
id: medqa-us-train-003086
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:572040e47344f0b8152675e015bb9007ed7ca4bd358169ed1b61f76359d68237
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Ebstein anomaly"
  - "Wolff-Parkinson-White pattern"
  - "tricuspid valve displacement"
  - "supraventricular tachycardia"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Jeh7Iqk7YOA7J24IOq4sO2YlSAoRWJzdGVpbiBBbm9tYWx5KS5tZA
  - MDEg7Iic7ZmY6riwL-uwnOyekeyEsSDsg4Hsi6zsi6TshLEg67mI66elIChQYXJveHlzbWFsIFN1cHJhdmVudHJpY3VsYXIgVGFjaHljYXJkaWEgKFBTVlQpLm1k
question_type: diagnosis
difficulty: standard
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

8세 여아가 갑작스러운 두근거림으로 왔다. 빈맥이 멎은 뒤 심전도에서 짧은 PR 간격과 델타파가 보인다. 왼쪽 아래 흉골연에서 흡기 때 커지는 범수축기 잡음이 들린다. 이 소견을 함께 설명하는 선천성 심장기형은?

## 선택지

A. 폐동맥판협착
B. 삼첨판폐쇄
C. 엡스타인 기형
D. 팔로사징

## 해설

엡스타인 기형에서는 삼첨판 일부가 심첨 쪽으로 내려가 삼첨판 역류가 생길 수 있다. 부전도로가 동반되는 경우가 있어 심실 조기흥분과 발작성 상심실빈맥을 설명한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: WPW와 Ebstein 연관을 부정하고 C가 아니라고 한 해설 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003086
- https://doi.org/10.1161/CIR.0000000000001402
