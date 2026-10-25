---
type: qbank
schema_version: 1
id: medqa-us-train-007648
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b52f194c0a802cae538b1ff3c2eb7f783a56028dc6a0dda126802c07147a7817
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "disruptive mood dysregulation disorder"
  - "temper outbursts"
  - "irritability"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2MjOq0tOyggSDquLDrtoQg7KGw7KCIIOu2gOyghCDsnqXslaAgKERpc3J1cHRpdmUgTW9vZCBEeXNyZWd1bGF0aW9uIERpc29yZGVyKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 여아가 행동 문제를 걱정한 부모와 함께 내원했다. 일주일에 6~7회 성질을 부리며, 5분에서 30분 정도 또는 지칠 때까지 지속된다. 아버지는 “일이 뜻대로 되지 않으면” 다른 사람에게 소리를 지르고 화가 나서 물건을 던진다고 한다. 이러한 발작은 6세 반에 시작되었고 발작 사이에도 지속적으로 과민하다. 지난 1년 동안 신체적 공격성으로 학교에서 세 번 정학을 받았지만 성적은 영향을 받지 않았다. 불안하고 안절부절못하는 모습이다. 신체검사는 정상이다. 정신상태검사에서 비협조적이며 질문에 답하지 않는다. 이 아동의 가장 가능성 높은 진단은?

## 선택지

A. 소아 양극성장애
B. 품행장애
C. 파괴적 기분조절곤란장애
D. 간헐적 폭발장애

## 해설

일주일에 여러 차례 심한 분노 폭발과 그 사이에도 지속되는 과민성이 1년 넘게 나타나고 학교·가정 기능에 영향을 주어 파괴적 기분조절곤란장애(DMDD)에 부합한다. 증상은 적어도 12개월 지속되어야 하며 이 기간에 3개월 이상 연속으로 증상이 없어서는 안 된다. 3개월만 지속되면 진단된다는 기존 설명은 잘못이다. 삽화성 조증이나 폭발 사이의 지속 과민성이 필수적이지 않은 간헐적 폭발장애와 구별한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007648

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. DMDD 지속기간을 3개월 이상으로 잘못 설명한 오류를 12개월 이상으로 교정. 발작 사이 지속 과민과 반복 폭발의 구별 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nimh.nih.gov/health/publications/disruptive-mood-dysregulation-disorder
