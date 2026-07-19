---
type: qbank
schema_version: 1
id: medqa-us-train-000300
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2176c0dbe78cd8b28bb1410849c22f9d956d689942f80262f85b1a23385b2bdd
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "rheumatoid arthritis"
  - "conjunctivitis"
  - "septic arthritis"
  - "Lyme arthritis"
  - "reactive arthritis"
  - "syphilitic arthritis"
question_type: diagnosis
difficulty: complex
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

17세 소년이 12일 동안 지속된 오른쪽 무릎의 통증과 부종이 심해져 내원하였다. 환자는 3주 전부터 배뇨 시 통증을 겪었다. 1주일 전에는 왼쪽 발목 관절에 통증과 부종이 있었으나 치료 없이 호전되었다. 어머니는 류마티스 관절염(rheumatoid arthritis)을 앓고 있다. 환자는 2명의 여성 파트너와 성생활을 하고 있으며 콘돔을 일관되게 사용하지 않는다. 환자는 불안해 보인다. 체온은 38°C, 맥박은 68회/분, 혈압은 100/80 mm Hg이다. 진찰 결과 양측 결막염(conjunctivitis)이 관찰된다. 오른쪽 무릎은 압통이 있고 발적과 부종이 있으며, 통증으로 인해 관절 가동 범위가 제한된다. 왼쪽 아킬레스건 부착 부위에 압통이 있다. 생식기 검사에서는 이상 소견이 없다. 검사실 검사 결과는 다음과 같다: 혈색소 14.5 g/dL, 백혈구 수 12,300/mm3, 혈소판 수 310,000/mm3, 적혈구 침강 속도(ESR) 38 mm/h. 혈청: 혈액요소질소(BUN) 18 mg/dL, 포도당 89 mg/dL, 크레아티닌 1.0 mg/dL. 소변: 단백질 음성, 혈액 음성, 백혈구 12–16/hpf, 적혈구 1–2/hpf. HIV에 대한 ELISA 검사는 음성이다. 관절천자(arthrocentesis)를 시행하였다. 활액(synovial fluid)은 혼탁하며 그람 염색은 음성이다. 활액 분석 결과 백혈구 수는 26,000/mm3이고 중성구는 75%이다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 화농성 관절염(Septic arthritis)
B. 라임 관절염(Lyme arthritis)
C. 반응성 관절염(Reactive arthritis)
D. 매독성 관절염(Syphilitic arthritis)

## 해설


요도염(또는 비특이적 요로증상), 결막염, 비대칭 관절염이 동반된 삼중증은 반응성 관절염의 특징이다. 관절액은 화농성 염증을 보이지만 그람 염색이 음성이며, 혈액 배양도 음성이다. 이는 화농성 관절염과 구별되는 핵심 포인트이다. 따라서 가장 가능성 높은 진단은 반응성 관절염이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000300
