---
type: qbank
schema_version: 1
id: medqa-us-train-008373
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:11c39084c2e24cadf871789dda19d7fec30555da800fae130c4c48ca7c2e0e34
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "inferior myocardial infarction"
  - "right coronary artery"
  - "bradycardia"
question_type: diagnosis
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

64세 남자가 갑작스러운 흉통과 구토로 응급실에 왔다. 오심과 발한도 지속된다. 고혈압과 제2형 당뇨병이 있고 40년간 하루 반 갑 이상을 피웠다. 혈압 80/50 mm Hg, 맥박 50회/분, 호흡수 20회/분, 체온 37.2°C, 산소투여 전 산소포화도 99%이다. 심전도 소견이 제시되어 있다. 이 환자의 심장 혈류에서 가장 가능성 높은 폐색 부위는?

## 선택지

A. 우관상동맥
B. 좌전하행동맥
C. 좌주관상동맥
D. 폐색 없음

## 해설


우관상동맥 폐색은 inferior MI와 동반된 서맥(동방결절 손상) 및 저혈압을 일으킨다. 제시된 심전도와 임상 양상이 우관상동맥 폐색을 가장 시사한다. 따라서 정답은 A이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008373
