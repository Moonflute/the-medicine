---
type: qbank
schema_version: 1
id: medqa-us-train-009443
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c6889bbdd8cd0f7931fb12b46b80ebf52d291bad157e4790ac2571d0468eb108
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "exercise-induced bronchoconstriction"
  - "운동 유발 기관지수축"
  - "asthma"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 여아가 3개월 동안 반복되는 호흡곤란, 비생산성 기침, 흉부 압박감으로 내원했다. 주로 운동 중 발생하고 휴식하면 저절로 호전된다. 건강해 보이며 맥박 63회/분, 호흡수 15회/분, 혈압 102/70 mmHg, 실내 공기 산소포화도 98%이다. 신체검사와 흉부 X선은 정상이다. 폐활량검사에서 FEV1:FVC 85%, FEV1은 예측치의 85%이다. 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 운동 전 알부테롤
B. 프레드니손 치료
C. 유전자검사
D. 심초음파

## 해설

운동 중 반복되는 기침, 흉부 압박감과 호흡곤란은 운동유발 기관지수축을 시사한다. 제시된 선택지 중 운동 전 흡입 알부테롤(A)이 증상 예방에 적합하다. 기초 FEV1 85%만으로 확진하지 않으며 필요하면 운동유발검사 등으로 확인한다. 천식이 동반되거나 증상이 반복되면 ICS 포함 치료 필요성도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정상에 가까운 기초 FEV1만으로 운동유발 기관지수축을 확진한 설명을 한정.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009443
