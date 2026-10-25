---
type: qbank
schema_version: 1
id: medqa-us-train-000935
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:713c9cdf7934f28fb74eebd856df24f07bd1178a75e60070520b8c5e6af1e1fb
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "clavicle fracture"
  - "Clavicle fracture"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 소년이 미식축구 연습 중 부상을 입어 응급실에 내원했다. 환자는 넘어지면서 오른쪽 어깨의 가쪽(lateral aspect)으로 떨어졌다. 환자는 오른쪽 팔을 왼쪽 팔로 받치고 있으며, 오른쪽 팔은 몸 옆에 내전(adducted)된 상태이다. 빗장뼈(clavicle) 중간 3분의 1 지점을 직접 촉진했을 때 압통이 있다. 방사선 촬영 결과 빗장뼈 중간 3분의 1의 비전위 골절(non-displaced fracture)이 확인되었다. 현재 가장 적절한 치료는 무엇인가?

## 선택지

A. 압박 금속판을 이용한 관혈적 정복 및 내고정술
B. 골수강 내 못을 이용한 관혈적 정복 및 내고정술
C. 8자 붕대 고정(Figure-of-eight splinting)
D. 조기 가동(Mobilization)

## 해설

비전위 중간 쇄골골절에는 비수술적 보호 고정이 적절하다. 제시된 선지 중 C는 보존적 고정 방법이며 즉시 활동 재개나 불필요한 내고정보다 의도에 부합한다. 그러나 현행 AAOS는 대부분의 급성 쇄골골절 고정에서 편안함 등을 고려해 8자 보조기보다 단순 sling을 선호하며, 8자 붕대가 유일한 표준 치료라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 비전위 쇄골골절의 비수술 고정 C를 선지 내 선택으로 유지하지만 8자 붕대가 현대 표준·선호라고 가르치지 않는다.
- 공식/학회 근거: https://www.aaos.org/aaos-home/newsroom/press-releases/fact-sheet-cpg-for-the-treatment-of-clavicle-fractures/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000935
