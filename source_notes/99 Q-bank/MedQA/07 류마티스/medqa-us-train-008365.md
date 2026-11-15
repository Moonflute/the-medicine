---
type: qbank
schema_version: 1
id: medqa-us-train-008365
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e72504cd7bc9a902f07bcbd1e698b8c1137aec086c8f7c779e75308868f05aa5
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "microscopic polyangiitis"
  - "MPO-ANCA"
  - "pulmonary renal syndrome"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
  - MDUg7Iug7J6lL-2PkOyLoOyepSDspp3tm4TqtbAgKFB1bG1vbmFyeS1SZW5hbCBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

53세 남성이 객혈과 신기능 악화로 내원했다. 소변에 적혈구 원주가 있고 신장 생검에 면역침착이 거의 없는 괴사성 반월체 사구체신염이 있다. 파괴성 부비동 병변, 육아종, 천식이나 호산구증가는 없고 MPO-ANCA가 양성이다. 가장 가능성 높은 진단은?

## 선택지

A. 항사구체기저막 질환
B. 호산구성 육아종증 다발혈관염
C. 현미경적 다발혈관염
D. 결절성 다발동맥염

## 해설


폐출혈과 면역침착이 거의 없는 사구체신염, MPO-ANCA는 현미경적 다발혈관염을 지지한다. 항체만으로 결정하지 않고 조직과 장기 침범 양상을 함께 본다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008365 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 미세다공성 혈관염/항미오페린과 깨진 C선지를 microscopic polyangiitis·MPO-ANCA로 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008365
- https://kdigo.org/guidelines/anca-associated-vasculitis/
