---
type: qbank
schema_version: 1
id: medqa-us-train-006209
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b5f81bf58d7aed39e678479faefff9102ac7a871a32fe7d670f589d458f4b6b7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "운동 중 협심증"
  - "관상동맥질환"
  - "관상동맥조영술"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRlbm9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 운동부하검사 중 점점 심해지는 가슴 통증을 호소한다. 운동 강도가 올라가는 동안 수축기 혈압이 145에서 121 mmHg로 낮아졌고 뚜렷한 ST분절 변화는 없다. 검사실의 즉각적인 대응은?

## 선택지

A. 목표 맥박까지 검사를 계속한다
B. 운동 강도만 낮춰 검사 기록을 마친다
C. 운동을 중단하고 혈역학 및 허혈을 즉시 재평가한다
D. 회복기 혈압은 재지 않고 다음 날 검사를 반복한다

## 해설

운동 중 악화하는 흉통과 수축기 혈압 하강은 위험 신호다. 뚜렷한 ST분절 변화가 없어도 검사를 중단하고 환자 상태를 평가한다. 후속 관상동맥 검사는 안정화와 위험 평가에 따라 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 운동 중 흉통+수축기혈압 하강의 고위험 C를 ECG음성으로 무시하지 않도록 정리.
- https://www.jacc.org/doi/10.1016/j.jacc.2021.07.053

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006209
