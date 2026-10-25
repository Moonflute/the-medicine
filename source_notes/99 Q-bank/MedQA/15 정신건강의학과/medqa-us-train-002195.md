---
type: qbank
schema_version: 1
id: medqa-us-train-002195
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5b787696fab9e8132a7b76dede6dd68d3fad0361aefe2c926a9f0afc4ef5e79a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "tardive dyskinesia"
  - "dopamine D2 blockade"
  - "fluphenazine"
  - "risperidone"
question_type: adverse_effect
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
  - MjEg7J2R6riJ7J2Y7ZWZL-2VnOuereyGkOyDgSAoQ29sZCBJbmp1cnkpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 남성이 2주 전부터 입술을 무의식적으로 오므리고 손과 다리를 움직이는 증상으로 내원했다. 움직임 때문에 걷거나 직장에서 일하기 어렵다. 조울증으로 플루페나진 치료를 받고 있으며 3개월 전 조증 삽화로 입원해 약물 용량을 조정했다. 이후 우울한 기분, 에너지 증가, 과민성, 식사나 수면 패턴 변화는 없었다. 자살 또는 타살 사고도 없다. 체온 37.2°C, 맥박 75회/분, 혈압 126/78 mmHg이다. 반복적인 입술 오므리기와 춤추는 듯한 손발 움직임이 보이지만 말이 빠르지 않고 정동은 적절하다. 플루페나진을 리스페리돈으로 바꾸자 증상이 호전되었다. 다음 중 이 호전을 설명하는 기전은?

## 선택지

A. 아세틸콜린 길항작용 감소
B. 아세틸콜린 작용제 효과 감소
C. 도파민 길항작용 감소
D. 히스타민 작용제 효과 감소

## 해설

입술 오므리기와 춤추는 듯한 팔다리 불수의운동은 도파민 수용체 차단제 노출 후 발생한 지연성 운동이상증을 시사하며 섬망이 아니다. 원문은 플루페나진에서 리스페리돈으로 교체 후 호전된 사례를 제시해 상대적으로 감소한 도파민 길항 효과를 정답으로 삼는다. 다만 리스페리돈도 D2 차단과 지연성 운동이상증 위험이 있고, 모든 용량에서 D2 차단이 약하거나 교체만으로 반드시 호전되는 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002195

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. '섬망성 운동'을 지연성 운동이상증으로 교정. 약물 교체 후 호전을 모든 리스페리돈 용량의 약한 D2 차단·치료 보장으로 일반화하지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
