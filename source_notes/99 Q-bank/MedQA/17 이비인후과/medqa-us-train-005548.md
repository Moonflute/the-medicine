---
type: qbank
schema_version: 1
id: medqa-us-train-005548
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:daf3ddcdc3292086342d4786177af6bc2504d3c4b73bfb4e060d301a859cd4e8
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "이하선 선양낭성암"
  - "안면신경 손상"
  - "아랫입술 마비"
question_type: diagnosis
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-uyqOuniOu5hCAoQmVsbCdzIHBhbHN5KS5tZA
  - MTcg7J2067mE7J247ZuE6rO8L-uLpO2YleyDmOyihSAoUGxlb21vcnBoaWMgQWRlbm9tYSkubWQ
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

이하선 수술 뒤 환자가 아래 치아를 드러내려 할 때 수술한 쪽 아랫입술만 잘 움직이지 않는다. 이마에 주름을 만들거나 눈을 감는 힘은 정상이다. 어느 신경 분지의 손상인가?

## 선택지

A. 삼차신경의 하악분지
B. 설인신경의 혀 분지
C. 안면신경의 변연하악분지
D. 설하신경의 말단분지

## 해설

이하선 주위를 지나는 안면신경의 변연하악분지는 아랫입술을 움직이는 근육을 지배한다. 분지 손상은 국소적인 아랫입술 비대칭을 일으킨다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 이하선 수술 후 하순 마비는 하악신경 V3의 감각 손상이 아니라 안면신경 변연하악가지의 운동 손상임을 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005548
