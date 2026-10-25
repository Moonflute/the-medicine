---
type: qbank
schema_version: 1
id: medqa-us-train-004911
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c94334d9a9851ef8f0355f37af1c02e8e7d0e718d97169090fb456808ca2d6ff
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "경추 손상"
  - "척수 손상"
  - "기도 보호를 위한 기관삽관"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-qyveu2gOyZuOyDgSAoQ2VydmljYWwgVHJhdW1hKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sspnsiJgg7Jm47IOBIChTcGluYWwgY29yZCB0cmF1bWEpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 남자가 절벽에서 얕은 수영장으로 머리부터 다이빙한 지 30분 후 응급실에 이송되었다. 경추 고정판과 단단한 경추보호대를 적용받았고 도착 시 의식이 없으며 통증에 네 팔다리를 움츠린다. 맥박 70회/분, 호흡수 8회/분, 혈압 102/70 mmHg, 실내 공기 산소포화도 96%이다. 동공은 같고 빛에 느리게 반응하며 이마에 3 cm 열상이 있고 경추에서 계단 변형이 만져진다. 다음 중 가장 적절한 처치는?

## 선택지

A. 척추 CT
B. 경추 X선
C. 신속 연속 기관삽관
D. 직장 긴장도 평가

## 해설

의식소실과 저호흡이 있어 영상검사보다 기도·환기 확보가 우선이다. 경추 움직임을 최소화하며 숙련된 팀이 신속연속기관삽관(C, rapid sequence intubation)을 시행한다. 이는 삽관을 여러 번 반복한다는 뜻이 아니라 유도·신경근차단을 사용하는 기도 확보 절차이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Rapid sequence intubation의 '연속' 오역 교정. 경추보호 하 기도/환기 우선순위를 확인.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004911
