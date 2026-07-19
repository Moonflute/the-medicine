---
type: qbank
schema_version: 1
id: medqa-us-train-001944
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5d09540ff4922383cfe36c66049fd5a92b6181d85c5026a0815e73c25b65bd4
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "infective endocarditis"
  - "splenic abscess"
  - "intravenous drug use"
question_type: diagnosis
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

25세 남성이 발열과 복통으로 응급실에 왔다. 일주일간 발열과 함께 통증이 악화되었고 정맥 약물 남용과 패혈성 쇼크로 여러 번 입원한 병력이 있다. 체온 102°F (38.9°C), 혈압 94/54 mmHg, 맥박 133/min, 호흡 22/min, 산소포화도 100%이다. 왼쪽 상흉골연에 심잡음이 있고 복부에서 왼쪽 상복부 압통이 있다. 혈색소 15 g/dL, 헤마토크릿 44%, 백혈구 16,700/mm^3, 혈소판 299,000/mm^3이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 게실염
B. 간농양
C. 장간막 허혈
D. 비장농양

## 해설


IV 약물 사용자는 감염성 심내막염 위험이 높으며, 좌측 비장에 농양이 동반될 수 있다. 비장 농양은 감염성 심내막염과 연관된 혈류성 전파로 발생한다. 따라서 가장 가능성 높은 진단은 비장 농양이다. 간농양은 우측에, 장간막 허혈은 복통 양상이 다르다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001944
