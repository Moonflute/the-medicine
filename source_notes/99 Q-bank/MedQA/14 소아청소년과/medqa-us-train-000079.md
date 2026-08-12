---
type: qbank
schema_version: 1
id: medqa-us-train-000079
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e0ec33861a04aaff12063b91e3328023c114907290d9e4b4df45d5dedf107bfa
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "diabetic ketoacidosis"
question_type: mechanism
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
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

이전에 건강하던 10세 소년이 복통과 구역질이 시작된 지 5시간 만에 어머니와 함께 응급실에 내원했다. 지난 2주 동안 소년은 점진적인 복통과 4kg(8.8lb)의 체중 감소를 겪었다. 어머니는 아들이 이 기간 동안 평소보다 물을 더 많이 마셨다고 보고했다. 지난주에는 3세 때 이미 대소변 가리기를 완전히 마쳤음에도 불구하고 야뇨증이 세 번 있었다. 체온은 37.8°C(100°F), 맥박은 128회/분, 호흡은 35회/분, 혈압은 95/55 mm Hg이다. 소년은 기면 상태로 보인다. 신체 검진상 깊고 힘든 호흡과 건조한 점막이 관찰된다. 복부는 부드러우며, 압통이 전반적으로 있으나 근육 방어(guarding)나 반발 압통(rebound tenderness)은 없다. 혈청 검사 결과는 다음과 같다: Na+ 133 mEq/L, K+ 5.9 mEq/L, Cl- 95 mEq/L, HCO3- 13 mEq/L, 요소 질소(Urea nitrogen) 25 mg/dL, 크레아티닌 1.0 mg/dL. 소변 검사지(dipstick)에서 케톤과 포도당 양성 반응을 보였다. 추가 평가에서 가장 가능성이 높은 것은 무엇인가?

## 선택지

A. 총 체내 칼륨 감소
B. 총 체내 나트륨 증가
C. 동맥 pCO2 증가
D. 과혈량증(Hypervolemia)

## 해설


DKA에서 세포외액이 감소하면 전체 체내 칼륨이 감소하지만 혈청 칼륨은 산증과 이동으로 상승한다. 따라서 혈청 칼륨이 높아 보이지만 실제 총 체내 칼륨은 감소한다. 가장 가능성 높은 현상은 총 체내 칼륨 감소이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000079
