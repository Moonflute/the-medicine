---
type: qbank
schema_version: 1
id: medqa-us-train-007345
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:24fb4deb8a311092d7472309249c7291a301e1022ddade3fbedcfd57532d5ce9
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "급성 호흡곤란 증후군"
  - "기계환기"
  - "산소화"
  - "PEEP"
question_type: management
difficulty: complex
answer: C
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

이전에 건강했던 25세 여자가 점점 악화되는 호흡곤란으로 입원했다. 미열이 있다. 입원 당시 혈압은 100/70 mmHg, 심박수 111회/분, 호흡수 20회/분, 체온 38.1℃(100.6℉), 실내 공기 산소포화도 90%이다. 진찰에서 양쪽 폐의 수포음과 수포성 호흡음 감소가 보인다. 흉부 단순촬영에서 양쪽 하엽이 혼탁하다. 적절한 치료에도 호흡상태가 악화되어 중환자실로 옮겨 기계환기를 시행했다. 다음 중 어떤 인공호흡기 설정을 조절하면 산소화만 영향을 받는가?

## 선택지

A. 일회호흡량과 호흡수
B. 일회호흡량과 흡입산소분율
C. 흡입산소분율과 호기말양압
D. 흡입산소분율과 호흡수

## 해설


산소화는 흡입산소분율(FiO2)만 조절하면 변한다; 일회호흡량·호흡수·PEEP는 환기와 관련된다. 따라서 FiO2와 PEEP를 조절하면 산소화에만 영향을 준다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007345
