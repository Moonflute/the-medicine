---
type: qbank
schema_version: 1
id: medqa-us-train-007614
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bde2f5c8f5f75dccfb9b25deb434bf7d228b8302a67e3fa4d69387f45641d88e
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "온난 자가면역 용혈성 빈혈"
  - "IgG 직접 항글로불린 양성"
  - "세팔렉신 유발 용혈"
  - "프레드니손"
question_type: management
difficulty: complex
answer: B
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

27세 남자가 일주일 전부터 시작된 심한 피로로 내원했다. 10일 전 봉와직염으로 경구 세팔렉신 치료를 마쳤다. 복용 약물은 없다. 체온은 37.5°C(99.5°F), 맥박 95회/분, 혈압 120/75 mmHg이다. 공막 황달과 피부·구강점막 창백이 보이고 비장 끝이 왼쪽 늑골연 아래 1cm에서 만져진다. 검사에서 헤모글로빈 10.5 g/dL, 헤마토크릿 32%, 망상적혈구 5%, LDH 750 IU/L, 합토글로빈 소실, 직접 항글로불린검사에서 IgG 양성이다. 말초혈액도말에서 구형적혈구가 보인다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 비장절제술
B. 경구 프레드니손
C. 혈장교환
D. 정맥 면역글로불린

## 해설


직접 Coombs 양성, 고 LDH, 망상적혈구, 구형적혈구는 온난 자가면역 용혈성 빈혈을 시사한다. 1차 치료는 고용량 프레드니손이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007614
