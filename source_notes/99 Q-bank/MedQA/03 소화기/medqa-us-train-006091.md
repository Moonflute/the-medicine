---
type: qbank
schema_version: 1
id: medqa-us-train-006091
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9f430dc3cb2da602223c80899e76678ffa44d9bdd52101eacc08ca33b7cb24e5
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "기계식 심장판막"
  - "와파린 중단 및 헤파린 브리징"
  - "내시경 전 항응고 관리"
  - "Mechanical prosthetic heart valve"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: D
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

66세 남성이 철결핍성 빈혈로 내시경 평가를 의뢰받았다. 2개월 동안 식욕부진과 체중 감소가 있었다. 3년 전 관상동맥우회술과 기계식 대동맥판막 치환술을 받았고 12년간 당뇨병과 고혈압이 있다. 와파린, 리시노프릴, 암로디핀, 메트포르민, 아스피린 및 카르베딜롤을 복용한다. 혈압은 115/65 mmHg, 맥박은 분당 68회, 호흡수는 분당 14회, 체온은 36.8°C(98.2°F), 혈당은 220 mg/dL이다. 결막은 창백하고 심장검사에서 경동맥 맥박 직전에 금속성 클릭이 들린다. 내시경 전에 약물치료를 어떻게 변경하는 것이 가장 적절한가?

## 선택지

A. 아스피린을 클로피도그렐로 변경
B. 리시노프릴을 로사르탄으로 변경
C. 메트포르민을 엠파글리플로진으로 변경
D. 와파린을 헤파린으로 변경

## 해설


기계식 심장판막 환자는 내시경 전 와파린을 중단하고 헤파린으로 브리징해야 출혈 위험을 최소화한다. 와파린을 그대로 유지하면 내시경 시 출혈 위험이 높아진다. 따라서 와파린을 헤파린으로 교체하는 것이 적절하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006091
