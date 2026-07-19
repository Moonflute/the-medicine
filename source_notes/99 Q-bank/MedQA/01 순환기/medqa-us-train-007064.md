---
type: qbank
schema_version: 1
id: medqa-us-train-007064
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:82663567c4f2be48c24226596446a7a711388103ce0a36e0478314bcec737894
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "감염성 심내막염"
  - "대동맥판막 역류"
  - "물망치 맥박"
  - "정맥주사 약물 사용"
question_type: diagnosis
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

34세 남자가 응급실로 이송되었다. 과거 아편유사제 과다복용으로 입원한 적이 여러 번 있지만, 오늘은 발열, 오한, 심한 떨림, 권태감으로 내원했다. 활력징후는 체온 100.5°F(38.1°C), 맥박 105회/분, 혈압 135/60 mmHg, 호흡수 22회/분이다. 환자의 손에서 다음과 같은 소견이 관찰된다(그림 A와 B). 환자가 앉아 있을 때 심장박동마다 머리가 위아래로 움직인다. 다음 중 이 환자에게 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 제4늑간 쇄골중간선에서 들리는 전수축기 잡음
B. 오른쪽 제2늑간에서 들리는 거친 점증-감소형 수축기 잡음
C. 상지에 비해 하지에서 측정한 혈압 감소
D. 요골동맥을 촉진할 때 느껴지는 물망치 맥박

## 해설


심내막염에 의한 대동맥판 역류는 물망치맥박(맥동이 뚜렷하고 강함)과 연관된다. 환자의 발열·오한·심장 박동마다 머리 움직임은 대동맥판 역류에 따른 맥동 전이 현상이다. 따라서 물망치맥박이 가장 가능성 높은 소견이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007064
