---
type: qbank
schema_version: 1
id: medqa-us-train-008429
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a926383fd6ffc68b2f770f8d54d35fdbbc46f3f464cfcbe9a5a53ed893eeda55
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertensive emergency"
  - "acute coronary syndrome"
  - "labetalol"
question_type: management
difficulty: standard
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

51세 남성이 혈압 201/111mmHg로 응급진료센터에 내원했다. 심한 두통과 흉통을 호소한다. 신체검사에서 심음은 규칙적이고 양쪽 폐음은 깨끗하다. 심전도에서 허혈성 변화가 관찰된다. 이 환자의 고혈압에 대한 가장 적절한 치료는 무엇인가?

## 선택지

A. 경구 베타차단제 투여—첫 1시간 동안 평균동맥압을 25% 이하로 낮춘다
B. 정맥 라베탈롤 투여—혈압이 정상 범위가 될 때까지 반복 투여한다
C. 정맥 라베탈롤 투여—첫 1시간 동안 평균동맥압을 50% 이하로 낮춘다
D. 정맥 라베탈롤 투여—첫 1시간 동안 평균동맥압을 25% 이하로 낮춘다

## 해설


고혈압 위기에서 목표는 평균동맥압(MAP)을 25% 이하로 급격히 낮추는 것이며, 라베탈롤은 베타·알파 차단제로 정맥 투여 시 MAP을 25% 이하로 감소시키는 것이 권장된다. 따라서 라베탈롤을 정맥 투여해 MAP을 25% 이하로 낮춘다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008429
