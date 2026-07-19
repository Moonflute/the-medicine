---
type: qbank
schema_version: 1
id: medqa-us-train-008806
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9ff268f7e9016bd0f2c8a1e0d0bdbd28b6f82a818a0a7642e21c568e873b2d42
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "secondary adrenal insufficiency"
  - "glucocorticoid withdrawal"
  - "hyponatremia"
question_type: investigation
difficulty: complex
answer: D
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

69세 여성이 5일 동안 지속된 피로와 기면으로 응급실에 내원했다. 최근 3일 동안 쇠약과 오심도 있었다. 유육종증, 주요우울장애, 고혈압이 있고 5년 전 뇌졸중을 앓았다. 아스피린, 니페디핀, 프레드니솔론, 플루옥세틴, 로수바스타틴을 복용했지만 해외여행 때문에 7일 동안 약을 먹지 않았다. 체온 36.1°C(96.9°F), 맥박 95회/분, 혈압 85/65mmHg이다. 기면 상태지만 지남력은 정상이다. 다른 신체검사 이상은 없다. 혈색소 13.4g/dL, 백혈구 9,600/mm³이고 혈청 코르티솔과 ACTH가 모두 감소되어 있다. 다음 중 추가로 나타날 가능성이 높은 검사 이상은 무엇인가?

## 선택지

A. 고칼륨혈증
B. 고혈당
C. 저칼륨혈증
D. 저나트륨혈증

## 해설


코르티코스테로이드 장기 복용 중단으로 2차 부신피질 기능저하가 발생하면 ACTH와 코르티솔이 모두 감소한다. 부신피질 호르몬 결핍은 수분 저류 감소와 항이뇨 호르몬 억제로 저나트륨혈증을 초래한다. 따라서 저나트륨혈증이 추가로 나타날 가능성이 높다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008806
