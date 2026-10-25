---
type: qbank
schema_version: 1
id: medqa-us-train-006006
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c6d9e6c98b0e781b51f98c3f866cdaa85487564e6720fbaecc5584ef5e4e3680
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "파킨슨병"
  - "안정 시 떨림"
  - "항콜린제"
  - "Parkinson disease"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjIztgqjsiqgg7Kad7ZuE6rWwIChQYXJraW5zb25pc20pLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 남성이 우측 손 떨림으로 일차진료를 받으러 왔다. 몇 달 전 우측 손에서 떨림이 시작되었고 좌측 손에도 생길까 걱정한다. 가만히 앉아 있거나 TV를 볼 때 심하고 일상 활동을 하면 호전된다. 고혈압, 고지혈증 및 당뇨병 병력이 있으며 히드로클로로티아지드, 리시노프릴 및 아토르바스타틴을 복용한다. 회계사로 일하고 주 1~2회 맥주를 마신다. 15갑년 흡연력이 있으나 10년 전 금연했다. 신체검사에서 4~5Hz의 양측 손떨림이 있고 손가락-코 검사에서 호전된다. 상지는 수동운동 시 경한 저항을 보이고 반사는 모두 2+이다. 보행 이상은 없고 MMSE는 29/30이다. 다음 중 어떤 약물 계열을 시작해야 하는가?

## 선택지

A. 항콜린제
B. 아세틸콜린에스터라제 억제제
C. 베타차단제
D. 나트륨 통로 길항제

## 해설

안정 시 떨림과 경직은 파킨슨병을 시사한다. 비교적 젊고 인지기능이 보존된 떨림 우세 환자에서 항콜린제(A)를 선별적으로 고려할 수 있다. 이는 파킨슨병 전체에 가장 효과적이거나 보편적인 일차 치료라는 뜻은 아니다. 운동 증상 전반에는 levodopa가 더 효과적이며, 치료는 기능 영향과 부작용 위험에 맞춘다. 항콜린제는 혼동·기억력 저하·환각·변비·요폐 등의 위험 때문에 특히 고령자나 인지장애 환자에서 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 떨림 우세·인지 정상 환자의 보기 중 A 유지. 항콜린제를 파킨슨병 전반의 가장 효과적인 일차약으로 설명한 오류 교정.
- 공식/학회 근거: https://www.ninds.nih.gov/current-research/focus-disorders/parkinsons-disease-research/parkinsons-disease-challenges-progress-and-promise
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng71/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006006
