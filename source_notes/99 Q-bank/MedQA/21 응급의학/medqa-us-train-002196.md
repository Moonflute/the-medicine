---
type: qbank
schema_version: 1
id: medqa-us-train-002196
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9b21f5dce622856e7a7b6398b31aca3aee0f0cc040aa3a0c70fe8f2ec3215332
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "surgical site infection"
  - "postoperative fever"
  - "wound infection"
question_type: diagnosis
related_disease_slugs:
  - MTEg7Jm46rO8L-yImOyIoCDtm4Qg67Cc7Je0IChQb3N0b3BlcmF0aXZlIEZldmVyKS5tZA
  - MTEg7Jm46rO8L-ywveyDgSDqsJDsl7wgKFdvdW5kIEluZmVjdGlvbikubWQ
difficulty: complex
answer: D
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

37세 여성이 발열과 복통으로 응급실에 왔다. 혈압 130/74 mmHg, 맥박 98회/분, 체온 101.5°F(38.6°C), 호흡 23회/분이다. 4일 전 복강경 담낭절제술을 받았고 그 외에는 건강했다. 네브래스카에서 가족을 방문 중이며 오늘 아침 12시간 운전 후 도착했다. 신체검사에서 복부 절개 부위의 홍반과 흰색 분비물, 오른쪽 상복부 압통이 보인다. 다음 중 발열의 가장 가능성 높은 원인은?

## 선택지

A. 폐무기폐
B. 잔류 담석
C. 요로감염
D. 수술 상처 감염

## 해설

복강경 수술 후4일째 절개부 발적과 흰 분비물, 압통은 수술 상처 감염(D)을 직접 시사한다. 수술 후 발열의 원인을 날짜만으로 확정하거나 48–72시간 이내라면 가장 흔히 상처 감염이라고 일반화하지 않는다. 현재는 절개부의 실제 국소 감염징후가 무기폐·요로감염·잔류 담석보다 더 직접적인 근거다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수술 후 4일째의 국소 농성 상처 소견을 48–72시간 발열의 가장 흔한 원인이라는 시간표로 설명한 오류를 수정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002196
