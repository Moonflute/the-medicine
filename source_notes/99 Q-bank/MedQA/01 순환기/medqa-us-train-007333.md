---
type: qbank
schema_version: 1
id: medqa-us-train-007333
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0b1a098a95ecd00f39dfcc8e2bd663cfb4b6b025de814dc95a112dc4ebe21273
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심장 잡음"
  - "무증상 심장 소견"
  - "운동선수 선별"
  - "Innocent heart murmur"
related_disease_slugs: []
question_type: prognosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

건강한 20세 아프리카계 미국인 남자가 대학 미식축구 선수 등록을 위한 스포츠 신체검사를 받으러 내원했다. 현재 건강 문제는 없고 최근 질병이나 부상도 없다. 흉통과 심계항진은 없으며 실신한 적도 없다. 2년 전 충수염으로 수술받았다. 어머니는 건강하고 가족력은 특이사항이 없다. 아버지는 53세에 심근경색을 앓았고 친삼촌은 원인 불명의 돌연사로 35세에 사망했다. 체온은 37.1°C(98.8°F), 심박수 78회/분, 혈압 110/66 mmHg, 호흡수 16회/분이다. 키가 크고 체형은 균형 잡혀 있다. 흉벽 이상은 없고 폐는 깨끗하다. 양쪽 상지와 하지의 맥박은 2+로 규칙적이며 심첨박동은 이동하지 않았다. 왼쪽 쇄골중간선 제5늑간에서 심장을 청진할 때 다음과 같은 심음이 들린다. 이 환자의 심장 소견에서 가장 가능성 높은 결과는 무엇인가?

## 선택지

A. 무증상
B. 감염성 심내막염
C. 심방세동
D. 돌연심장사

## 해설


청년 운동선수에게서 발견되는 무증상 심음은 대개 정상 변이이며, 추가 검사는 필요하지 않다. 다른 선택지는 증상이 없으므로 부적절하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007333
