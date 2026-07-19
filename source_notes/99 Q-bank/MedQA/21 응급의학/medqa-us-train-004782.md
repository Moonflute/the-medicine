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
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
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


웰스 점수에서 최근 30일 이내 수술력은 폐색전증 위험을 크게 높이는 요인이다. 따라서 최근 수술이 가장 중요한 위험인자이다. 다른 선택지는 위험도에 크게 기여하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004782
