---
type: qbank
schema_version: 1
id: medqa-us-train-002086
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:986f97f7e1a09dddd01d943ccca83e0b30b89fd5dde8000ea2ba48038c341763
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "dementia with Lewy bodies"
  - "alpha-synuclein"
  - "visual hallucinations"
  - "parkinsonism"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-ugiOu5hCDshozssrQg7LmY66ekIChEZW1lbnRpYSB3aXRoIExld3kgQm9kaWVzKS5tZA
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZvZG9wYS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

81세 남성이 길거리를 배회하는 모습으로 발견된 후 딸에 의해 내원했다. 딸은 지난 몇 달 동안 아버지가 친구와 가족에게 더 공격적으로 변했다고 말한다. 또한 딸의 아파트에서 낯선 사람 두 명을 본다고 주장한 일이 여러 차례 있었다. 때때로 몇 분 동안 멍하니 응시하며 말을 걸어도 반응하지 않는다. 고혈압과 고지혈증이 있고 10개월 전에 파킨슨병을 진단받았다. 현재 카비도파-레보도파, 히드로클로로티아지드, 아토르바스타틴을 복용한다. 체온 37°C, 맥박 99회/분, 혈압 150/85 mmHg이다. 혼란스러워하며 사람과 장소에는 지남력이 있지만 시간에는 없다. 오른쪽 상지에 안정 시 떨림이 있고 상·하지에 근육 경직이 있다. 도움 없이 걸을 수 있으나 보폭이 짧고 느리다. 정신상태검사에서 단기 기억 결손이 보인다. 다음 중 이 환자 상태의 가장 가능성 높은 기저 원인은?

## 선택지

A. 루이소체 침착
B. 혈관성 뇌경색
C. 전두측두엽 위축
D. 티아민 결핍

## 해설

인지 기능의 변동, 반복되는 생생한 환시와 파킨슨증이 함께 나타나므로 루이소체 질환이 가장 의심된다. 신경세포 내 비정상 α-시누클레인 응집체인 루이소체 침착(A)이 병리적 원인이다. 파킨슨증과 인지저하가 1년 이내에 나타나는 경과는 임상적으로 루이소체치매 쪽을 지지한다. 실제로는 레보도파 등 약물이나 섬망의 영향도 평가해야 하며 파킨슨 환자의 모든 환각을 루이소체치매로 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 파킨슨증 발병 10개월 이내의 인지저하·인지 변동·환시는 루이소체 질환 A를 지지한다. 모든 파킨슨 환자의 환각을 동일 원인으로 단정한 해설을 수정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002086
