---
type: qbank
schema_version: 1
id: medqa-us-train-003623
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:042e2437071cb97c8781fabb6725ed228d8d679d691d98be5cec0c7a842125c9
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "orbital floor fracture"
  - "blowout fracture"
  - "diplopia"
  - "conservative management"
  - "Orbital floor fracture"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 남성이 야구공에 왼쪽 눈을 맞은 뒤 안와 통증과 경한 복시로 응급실에 왔다. 왼쪽 안와 바닥에 0.4 cm의 전위되지 않은 선형 골절이 있고 위쪽을 볼 때 움직임이 제한되었다. 내원 시 맥박은 53회/분이며 양안 시력은 5/20이었다. 다음 중 이 상태에 대한 가장 정확한 설명은?

## 선택지

A. MRI가 환자 상태 평가에 가장 좋은 방법이다
B. 안구운동이 자연적으로 호전될 가능성이 낮다
C. 초기에는 코르티코스테로이드와 관찰로 보존적 관리가 가능하다
D. 3일 이내 수술하면 안구함몰을 예방할 수 있다

## 해설

작고 전위되지 않은 안와바닥 골절에서 경미한 운동 제한은 부종이 가라앉으며 호전될 수 있어 C의 초기 관찰을 고려할 수 있다. 단기 corticosteroid는 금기가 없을 때 선택적으로 부종 감소를 위해 고려하는 것이지 모든 골절의 필수 치료는 아니다. 심한 근육 포착, 심한 통증, 지속 복시나 안구심장반사에 의한 서맥·오심 등이 있으면 조기 수술 평가가 필요하다. 원문의 맥박 53/분은 이러한 임상 평가에서 확인해야 하며, 단지 골절이 작다는 이유로 위험을 무시할 수 없다. 추적 안과 재평가가 필요하고 호전을 일률적으로 보장하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 경미한 비전위 골절의 초기 보존적 관리 C는 유지하되 중증 포착 배제·재평가 조건을 명시하고 원문 맥박·시력 누락 복원.
- 공식/학회 근거: https://eyewiki.aao.org/Orbital_Floor_Fractures
- 공식/학회 근거: https://surgeryreference.aofoundation.org/cmf/trauma/midface/orbit-floor/observation

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003623
