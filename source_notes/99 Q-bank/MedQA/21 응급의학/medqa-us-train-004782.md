---
type: qbank
schema_version: 1
id: medqa-us-train-004782
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b705d06de5af496176a8f8dc80e0bd945f5aa8dbca6d70b0ed17ee9150c3a8e2
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "폐색전증"
  - "웰스 점수"
  - "수술 후 혈전 위험"
question_type: risk_factor
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
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

28세 여성이 6시간 동안 지속된 발열, 기침과 호흡곤란으로 응급실에 왔다. 한 시간 전 가래에 피가 섞인 것을 보았다. 코막힘이나 콧물, 재채기, 천명, 흉통과 두근거림은 없다. 만성 호흡기·심혈관 질환이나 암 병력도 없고 과거 폐색전증이나 심부정맥혈전증도 없다. 체온은 38.3°C (101°F), 맥박은 분당 108회, 혈압은 116/80 mm Hg, 호흡수는 분당 28회이다. 폐 청진에서 오른쪽 유방 아래 부위에 국소 수포음이 들리고 왼쪽 다리가 부으며 종아리 압통이 있다. 왼발을 발등굽힘하면 종아리 통증을 호소한다. 첫 호흡곤란 환자에게 수정 웰스 점수 체계를 적용할 때 폐색전증의 임상 확률을 높이는 위험인자는 무엇인가?

## 선택지

A. 최근 90일 이내 경구피임약 사용
B. 30일 내 2시간 여행력
C. 최근 30일 내 수술력
D. 1년 이상 흡연력

## 해설

제시된 선지 중 최근 수술(C)은 Wells PE 점수에 포함되는 항목이다. 표준 척도는 최근 4주 수술/3일 초과 부동을 사용하므로 문항의 '30일'은 근사 표현이다. 경구피임약은 실제 VTE 위험인자이지만 Wells 항목은 아니며, 단순히 임상적으로 중요하지 않다는 뜻은 아니다. 점수 하나만으로 PE를 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Wells 점수에 포함되는 위험인자와 점수 외 실제 VTE 위험을 구별.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng158/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004782
