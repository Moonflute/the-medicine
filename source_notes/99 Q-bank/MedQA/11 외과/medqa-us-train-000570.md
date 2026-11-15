---
type: qbank
schema_version: 1
id: medqa-us-train-000570
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1a66f3842cdd7c827ab7a6cdea137fff969ac32a1826b1e4bc56406ebacef3b5
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "second-degree burns"
  - "third-degree burns"
  - "inhalation injury"
related_disease_slugs:
  - MTEg7Jm46rO8L-2doeyehe2ZlOyDgSAoSW5oYWxhdGlvbiBCdXJuKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

밀폐된 공간에서 화재에 노출된 환자에게 얼굴 화상과 입안 그을음이 있다. 쉰 목소리가 심해지고 들숨 때 거친 소리가 난다. 맥박산소포화도는 96%다. 우선 처치는?

## 선택지

A. 전신 스테로이드를 준 뒤 기도 평가를 보류한다
B. 산소포화도가 정상 범위이므로 기도 부종이 생길 때까지 관찰한다
C. 우선 가슴 CT로 하기도 손상을 확인한다
D. 고농도 산소를 주면서 부종이 진행하기 전에 기관삽관한다

## 해설


진행하는 쉰 목소리와 들숨 잡음은 상기도 부종의 경고 신호다. 정상에 가까운 맥박산소포화도로 기도 위험이나 일산화탄소 노출을 배제할 수 없으므로 산소 공급과 조기 기도 확보를 우선한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-000570`와 직접 대조했다.
- 판정: 폐쇄공간 연기 노출·심한 안면화상·구강 그을음·의식저하로 C 유지. GCS 13 하나만으로 자동 삽관이라는 해석을 제거.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://ameriburn.org/wp-content/uploads/2020/04/1.-guidelines-for-austere-conditions-introduction-to-burn-disaster-airway-and-ventilator-2.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000570
- https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral
