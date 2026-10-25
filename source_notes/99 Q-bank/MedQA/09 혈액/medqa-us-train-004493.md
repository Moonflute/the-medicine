---
type: qbank
schema_version: 1
id: medqa-us-train-004493
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fbc5203c5137dcb27f1a1e7c5ab855b76276249276b929b7979b23a547f4de28
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "골수이형성증후군"
  - "고리철적모세포"
  - "급성 골수성 백혈병"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
  - MDkg7ZiI7JWhL-qzqOyImO2YleyEseydtOyDgSDspp3tm4TqtbAgKE15ZWxvZHlzcGxhc3RpYyBTeW5kcm9tZSwgTURTKS5tZA
question_type: prognosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

이전에 건강했던 75세 여성이 지난 6주 동안 지속된 피로와 운동능력 저하로 내원했다. 간헐적으로 어지럼증도 있다. 흡연과 음주는 하지 않으며 매일 종합비타민을 복용한다. 창백해 보인다. 신체검사에서 매끈한 간이 늑골연 아래 1cm 만져지고 비장은 만져지지 않는다. 검사 결과는 다음과 같다.
헤모글로빈 9.8 g/dL
MCV 104 fL
망상적혈구 0.2%
엽산 21 ng/mL (정상 2~20)
비타민 B12 789 pg/mL (정상 200~900)
말초혈액도말에서 적혈구 크기 불균일이 보이고 골수흡인검사에서 고리철적모세포가 보인다. 이 환자에게 가장 발생할 가능성이 높은 질환은 무엇인가?

## 선택지

A. 세자리 증후군
B. 만성 림프구성 백혈병
C. 버킷 림프종
D. 급성 골수성 백혈병

## 해설


고령의 저망상적혈구성 거대적혈구 빈혈과 ring sideroblasts는 MDS를 의심하게 한다. 나열된 후속 질환 중 AML D로의 진행이 관련된다. 다만 ring sideroblasts는 다른 후천/가역 원인에서도 가능하고 MDS의 실제 진행 위험은 모세포 비율·핵형·분자변이 등으로 평가한다. 이 소견만으로 모든 환자가 고위험이거나 반드시 AML로 진행한다고 할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004493 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MDS 관련 AML 진행 위험 D 유지; ring sideroblasts가 곧 모든 환자에서 최고위험이라는 일반화 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004493
