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

65세 남성이 한 시간 동안 지속된 중앙 흉통으로 응급실에 왔다. 통증은 둔하고 10점 만점에 8점이며 식은땀과 호흡곤란이 동반된다. 당뇨병, 고혈압 및 고지혈증이 있고 35년 동안 하루 한 갑씩 흡연했다. 3일 입원 후 아스피린, 클로피도그렐, 아테놀롤을 포함한 약을 처방받아 퇴원했고 한 달 후 운동부하검사를 권고받았다. 검사 전 심전도에서 하벽 유도에 Q파가 보이고 운동 3분 후 흉통이 점점 심해지며 혈압이 145/86에서 121/62 mmHg로 떨어졌지만 심전도 허혈 변화는 없다. 다음 중 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 심전도에 허혈 변화가 없으므로 운동을 계속
B. 한 달 후 운동부하검사 반복
C. 운동을 중단하고 관상동맥조영술 시행
D. 운동을 중단하고 약물 스트레스 검사 시행

## 해설

운동으로 흉통이 악화되고 수축기압이 떨어져 검사를 중단하고 고위험 허혈을 평가하는 C가 적절하다. ECG의 허혈변화가 없다는 이유만으로 안전하지 않다. 초기 입원 ECG 그림은 누락되어 있지만 현재 부하검사 중단 판단은 제공된 증상/혈압으로 가능하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 운동 중 흉통+수축기혈압 하강의 고위험 C를 ECG음성으로 무시하지 않도록 정리.
- https://www.jacc.org/doi/10.1016/j.jacc.2021.07.053

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006209
