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
answer: D
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

13세 아이가 눈 주변을 부딪친 뒤 위를 볼 때 복시와 심한 메스꺼움을 호소한다. 위를 보게 하면 맥박도 떨어진다. CT에서 안와 바닥 골절 사이에 하직근이 끼어 있다. 다음 조치는?

## 선택지

A. 다음 달까지 자연 호전을 기다린다
B. 프리즘 안경만 처방한다
C. 스테로이드만 쓰고 퇴원시킨다
D. 응급 전문 평가와 포착 해소 수술을 진행한다

## 해설

소아의 작은 안와 바닥 골절도 근육을 가둘 수 있다. 안구운동으로 유발되는 서맥·구역은 안구심장반사 단서이며, 포착을 신속하게 해소해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 경미한 비전위 골절의 초기 보존적 관리 C는 유지하되 중증 포착 배제·재평가 조건을 명시하고 원문 맥박·시력 누락 복원.
- 공식/학회 근거: https://eyewiki.aao.org/Orbital_Floor_Fractures
- 공식/학회 근거: https://surgeryreference.aofoundation.org/cmf/trauma/midface/orbit-floor/observation

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003623
- https://surgeryreference.aofoundation.org/cmf/pediatric-trauma/midface/orbital-floor/reconstruction
