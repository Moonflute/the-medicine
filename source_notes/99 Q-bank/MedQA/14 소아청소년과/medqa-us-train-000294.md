---
type: qbank
schema_version: 1
id: medqa-us-train-000294
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:49e457c4fee334dac6b16204e8bf877a5b33079163af471de4ac2ef83b65709e
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "anemia of prematurity"
question_type: mechanism
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
difficulty: complex
answer: D
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

생후 3주 된 여아가 무호흡 발작을 보입니다. 지난 이틀 동안 점점 기면 상태가 심해졌으며, 지난 하루 동안 각각 10초간 지속되는 무호흡 발작을 두 번 경험했습니다. 환아는 재태 연령 31주에 1600g(3파운드 8온스)으로 태어났습니다. 아프가 점수(Apgar score)는 1분에 4점, 5분에 7점이었습니다. 복용 중인 약물은 없습니다. 체온은 36.7°C, 맥박은 분당 185회, 호흡은 분당 60회로 불규칙하며, 혈압은 70/35 mmHg입니다. 창백해 보입니다. 신체 검진상 이상 소견은 없습니다. 검사실 검사 결과 혈색소(hemoglobin) 6.5 g/dL, 망상적혈구 수(reticulocyte count) 0.5%, 평균 적혈구 용적(MCV) 92 μm3입니다. 백혈구 수, 혈소판 수, 총 빌리루빈 및 간접 빌리루빈은 모두 정상 범위 내에 있습니다. 이 환아의 빈혈에 대한 가장 가능성 높은 기전은 무엇입니까?

## 선택지

A. δ-아미노레불린산 합성효소(δ-aminolevulinic acid synthase) 결함
B. 골수 억제
C. 포도당-6-인산 탈수소효소(G6PD) 결핍
D. 에리스로포이에틴(erythropoietin) 생성 장애

## 해설


조산아는 신생아기에 신장 기능이 미숙해 적절한 에리트로포이에틴(EPO) 생산이 감소한다. EPO 결핍은 적혈구 생성 저하를 일으켜 저혈색소와 낮은 망상적혈구 수를 초래한다. 따라서 이 환아의 빈혈은 EPO 생성 장애가 가장 가능성 높은 기전이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000294
