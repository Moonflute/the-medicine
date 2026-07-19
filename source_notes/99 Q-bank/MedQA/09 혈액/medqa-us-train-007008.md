---
type: qbank
schema_version: 1
id: medqa-us-train-007008
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8018578353b587ea517e5e4824a357831c1cd37684ae9cfe09c4a6ea3d8c89ef
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "혈우병 A"
  - "인자 VIII 결핍"
  - "혈관절증"
question_type: diagnosis
difficulty: simple
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

14세 남자가 왼쪽 무릎이 붓고 붉으며 아프다며 어머니와 함께 내원했다. 의사가 관절을 흡인했더니 선명한 혈액이 나왔다. 최근 무릎 외상은 없었다. 추가로 문진하자 어머니는 아들이 외상 없이도 여러 관절이 붓고 아팠던 적이 많다고 말한다. 치과를 다녀온 후 코피가 자주 나고 잇몸에서 피가 난 병력도 있다. 다음 중 가장 가능성 높은 기저 진단은 무엇인가?

## 선택지

A. 혈우병 A
B. 혈우병 B
C. 혈우병 C
D. 아동 학대

## 해설


반복적인 관절 출혈과 잇몸 출혈은 혈우병 A(제8인자 결핍)와 일치한다. 가장 확진적인 검사는 혈액 응고 검사와 제8인자 활성 측정이다. 따라서 정답은 A이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007008
