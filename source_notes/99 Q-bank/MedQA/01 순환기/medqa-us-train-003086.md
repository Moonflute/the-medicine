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

8세 여아가 매우 빠른 심장박동을 호소해 부모와 함께 응급실에 왔다. 이전에는 건강했고 최근 2년 동안 진료를 받은 적이 없다. 심박수는 198회/분이고 심전도는 심박수가 감소한 후 시행했으며 PR 간격이 짧고 QRS 복합체의 상승이 느리다. 앞가슴에서 3등급 범수축기 잡음이 들린다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 폐동맥판 협착
B. 삼첨판 폐쇄
C. 엡스타인 기형
D. 팔로사징

## 해설

짧은 PR·delta wave는 WPW형 preexcitation을 나타낸다. 부전도로와 연관성이 높은 선천성 판막기형은 Ebstein anomaly C이며 삼첨판엽의 심첨부 방향 변위와 삼첨판역류가 범수축기 잡음을 설명한다. WPW/SVT는 이 기형에 동반될 수 있으므로 두 진단을 서로 배타적으로 취급한 기존 설명은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: WPW와 Ebstein 연관을 부정하고 C가 아니라고 한 해설 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003086
