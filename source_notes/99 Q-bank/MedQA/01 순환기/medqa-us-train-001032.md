---
type: qbank
schema_version: 1
id: medqa-us-train-001032
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:432ecafe7610a4eee11069fcf8182e0ea4971ecb343edc3637e40feb65c8bf89
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "sudden cardiac arrest"
  - "hypertrophic cardiomyopathy"
question_type: diagnosis
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

이전에 건강하던 25세 남성이 축구 연습 중 쓰러진 지 30분 만에 응급실로 이송되었습니다. 그의 아버지는 36세에 급성 심정지로 사망했습니다. 환자의 상태는 양호해 보입니다. 맥박은 분당 73회, 혈압은 125/78 mm Hg입니다. 심장 검사 소견이 제시되었습니다. 심전도(ECG)상 측면 유도(lateral leads)에서 큰 R파와 V1 및 V2 유도에서 깊은 S파가 관찰됩니다. 추가 평가에서 가장 가능성이 높은 소견은 무엇입니까?

## 선택지

A. 대동맥 뿌리 확장(Aortic root dilatation)
B. 좌심실 편심성 확장(Eccentric left ventricular dilation)
C. 비대칭 중격 비대(Asymmetric septal hypertrophy)
D. 승모판 섬유소성 괴사(Mitral valve fibrinoid necrosis)

## 해설


좌심실 전벽 비대와 깊은 S파, 큰 R파는 비대칭 중격 비대를 의미한다. 이는 유전성 비대성 심근증(비대성 심근증)과 연관되며, 갑작스러운 심정지 위험이 높다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001032
