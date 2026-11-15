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
question_type: management
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

다발혈관염 동반 육아종증이 확인된 42세 환자가 폐포출혈과 빠르게 악화하는 사구체신염으로 입원했다. 주요 감염을 평가하고 장기 위협 혈관염의 관해 유도를 시작하려 한다. 적절한 치료는?

## 선택지

A. 저용량 메토트렉세이트 단독
B. 아자티오프린 단독
C. 혈장교환만 먼저 수 주간 시행
D. 글루코코르티코이드와 리툭시맙 또는 사이클로포스파미드 병용

## 해설


폐포출혈과 급속진행성 사구체신염을 동반한 ANCA 연관 혈관염은 즉각적인 관해 유도가 필요하다. 리툭시맙 또는 사이클로포스파미드를 글루코코르티코이드와 병용하며 추가 치료는 중증도에 따라 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003608 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 코전증이라는 오탈자를 바로잡고 폐-신장 증후군과 상기도 병변의 PR3 연관을 명확히 했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003608
- https://kdigo.org/guidelines/anca-associated-vasculitis/
