---
type: qbank
schema_version: 1
id: medqa-us-train-003608
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cfbde9d9b20107b25dbc0d61ea58a85875e58ae96ac1ff13702d3f45b1dddcc2
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "granulomatosis with polyangiitis"
  - "PR3-ANCA"
  - "pulmonary-renal syndrome"
  - "pauci-immune glomerulonephritis"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
  - MDUg7Iug7J6lL-2PkOyLoOyepSDspp3tm4TqtbAgKFB1bG1vbmFyeS1SZW5hbCBTeW5kcm9tZSkubWQ
question_type: diagnosis
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

42세 여성이 24시간 동안 두 차례 객혈을 보였다. 6개월간 심한 부비동염과 피가 섞인 콧물이 있었고, 결막 충혈과 비중격 궤양이 보였다. 소변에서 혈뇨, 단백뇨, 이형 적혈구와 많은 적혈구 원주가 관찰되었다. 다음 중 가장 가능성 높은 항체는?

## 선택지

A. 항CCP 항체
B. 항사구체기저막 항체
C. 항골수세포형과산화효소 항체
D. 항단백분해효소3 항호중구세포질항체

## 해설


반복 부비동염·혈성 비루·비중격 궤양에 객혈과 이형 적혈구/적혈구 원주를 동반한 사구체신염이 있어 GPA를 강하게 시사한다. 선택지 중 PR3-ANCA(D)가 가장 잘 연관된다. anti-GBM 병은 폐-신장 증후군을 일으킬 수 있으나 육아종성 상기도 병변을 잘 설명하지 못한다. ANCA는 임상상과 함께 해석하며 항체만으로 진단을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003608 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 코전증이라는 오탈자를 바로잡고 폐-신장 증후군과 상기도 병변의 PR3 연관을 명확히 했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003608
