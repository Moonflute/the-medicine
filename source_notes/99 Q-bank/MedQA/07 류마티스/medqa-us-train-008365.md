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
question_type: investigation
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

53세 남자가 한 달 동안 소량의 피가 섞인 가래를 동반한 기침, 피로, 근육통, 운동 시 호흡곤란으로 내원했다. 최근 2개월 동안 체중이 2 kg 감소했다. 체온 37.2°C, 맥박 98회/분, 호흡수 22회/분, 혈압 152/98 mm Hg이다. 양측 폐에서 미만성 수포음과 양측 하지에 눌러도 창백해지지 않는 홍반성 병변이 있다. 백혈구 12,300/mm³, 혈소판 400,000/mm³, ESR 83 mm/h, 크레아티닌 2.1 mg/dL, ANA 1:40, 소변 단백 3+, 혈액 2+, 적혈구 원주가 많다. 피부 생검에서 육아종 없는 세동맥 및 모세혈관 염증이 보인다. 추가 검사에서 가장 가능성 높은 소견은?

## 선택지

A. 항사구체기저막 항체
B. 혈청 크라이오글로불린 증가
C. 항미엘로과산화효소 항호중구세포질항체(MPO-ANCA)
D. B형간염 표면항원

## 해설


폐출혈 의심 증상과 사구체신염, 촉지자반 및 육아종 없는 소혈관 염증은 microscopic polyangiitis(현미경다발혈관염)를 시사한다. 보기 중 myeloperoxidase에 대한 ANCA(MPO-ANCA) C가 연관된다. ANCA 결과만으로 진단을 확정하지 않고 임상·조직을 함께 판단한다. MPO는 myeloperoxidase를 뜻하며 항미오페린이라는 항체는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008365 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 미세다공성 혈관염/항미오페린과 깨진 C선지를 microscopic polyangiitis·MPO-ANCA로 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008365
