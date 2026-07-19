---
type: qbank
schema_version: 1
id: medqa-us-train-000888
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3bf749c6984ce3be5f8e601228d74e948c35f010176fa250c70f003419cb17c4
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "Fanconi anemia"
question_type: diagnosis
difficulty: complex
answer: A
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

4세 남아가 반복적인 코피로 인해 어머니와 함께 소아과에 내원하였다. 어머니는 아이가 지난 2주 동안 5번의 코피를 흘렸으며, 각각 15분에서 20분 동안 지속되었다고 보고하였다. 환아는 만삭아로 태어났으며 폐렴 치료로 두 번 입원한 적이 있다. 심각한 질환의 가족력은 없다. 환아의 키는 8백분위수, 체중은 30백분위수이다. 활력 징후는 정상 범위 내에 있다. 신체 검진상 작고 마른 체격이며, 등 상부에 두 개의 평평하고 짙은 갈색의 과색소침착 부위가 있고 왼쪽 둔부에도 유사한 변색이 관찰된다. 양측 내사시(esotropia)가 있다. 검사실 검사 결과 혈색소 농도 9.3 g/dL, 평균 적혈구 용적(MCV) 107 μm3, 백혈구 수 3,800/mm3, 혈소판 수 46,000/mm3이다. 이 환아의 상태에 대한 가장 가능성 있는 근본 원인은 무엇인가?

## 선택지

A. DNA 교차결합 복구 결함
B. WAS 단백질 돌연변이
C. 최근 NSAID 사용력
D. 바이러스 감염 후 자가면역 반응

## 해설


다발성 선천성 결함(피부 색소 침착, 성장 지연, 혈소판 감소)과 거대 적혈구는 DNA 교차결합 복구 결함인 Fanconi 빈혈을 특징짓는다. 이는 가장 일치하는 근본 원인이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000888
