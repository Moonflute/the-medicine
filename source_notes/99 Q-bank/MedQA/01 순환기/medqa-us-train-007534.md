---
type: qbank
schema_version: 1
id: medqa-us-train-007534
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1ba81754da6fd118f77c313e037d749cc9856edb679abf57b41c39f120fcaf1f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "아스피린 유발 위장관 출혈"
  - "철결핍성 빈혈"
  - "심근경색 후 약물"
  - "빈혈"
question_type: mechanism
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

60세 남자가 3주 전 퇴원 후 일차진료의를 방문했다. 흉통으로 입원했으며 I, aVL, V6 유도에서 ST 상승이 확인되었다. 심장도관검사와 풍선 혈관성형술을 받고 적절한 약물을 처방받아 퇴원했다. 이번 방문에서 지난 일주일 동안 체력이 떨어졌다고 한다. 평소 3마일 조깅을 할 수 있었지만 현재는 계단을 오르면 지치고 흉통은 없다. 체온은 98.6°F(37°C), 혈압 101/62 mmHg, 맥박 59회/분, 호흡수 18회/분이다. 왼쪽 상부 흉골연에서 2/6등급 초기 수축기 잡음이 들리고 심와부를 누르면 약간 불편하다. 검사에서 헤모글로빈 8 g/dL, 헤마토크릿 25%, 백혈구 수 11,000/mm³, 혈소판 수 400,000/mm³, BUN 45 mg/dL, 크레아티닌 1.1 mg/dL이다. 다음 중 현재 증상에 가장 기여하는 약물은 무엇인가?

## 선택지

A. 아스피린
B. 아토르바스타틴
C. 푸로세미드
D. 리시노프릴

## 해설


환자는 빈혈(Hb 8 g/dL)과 위장관 출혈 위험이 높은 아스피린 복용 중이다. 아스피린은 위점막을 손상시켜 출혈성 빈혈을 유발할 수 있다. 따라서 현재 빈혈에 가장 크게 기여하는 약물은 아스피린이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007534
