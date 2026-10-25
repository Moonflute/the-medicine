---
type: qbank
schema_version: 1
id: medqa-us-train-001264
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8bbb4c0c405ea461cdc034b4174ca463a6135edd3ac484492c22d1118fbd20d3
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "systemic lupus erythematosus"
  - "lupus nephritis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
  - MDUg7Iug7J6lL-ujqO2RuOyKpCDsvantjKXsl7wgKEx1cHVzIE5lcGhyaXRpcykubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

건강한 30세 여성이 6개월 동안 반복되는 햇빛 노출 후 얼굴 발진과 통증 없는 경구개 궤양으로 내원했다. 남성 파트너는 한 명이며 콘돔을 일관되게 사용하지 않는다. 어머니는 말기 신장질환으로 투석 중이다. 진찰에서 비순구를 침범하지 않는 나비 모양 발진과 경구개의 궤양 3개가 관찰된다. 백혈구 수는 3000/mm3, 혈소판 수는 70,000/mm3, 적혈구 침강속도는 80 mm/h이다. 항핵항체 역가는 1:320이고 항-Smith 항체는 양성이다. 소변검사에서 단백질은 3+이며 적혈구 원주는 없고 적혈구는 관찰되지 않으며 백혈구는 10–15/hpf이다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 피부 생검
B. 신장 생검
C. 아자티오프린
D. 병변 자극 검사(pathergy test)

## 해설


광과민성 나비발진·무통성 구강궤양·혈구감소와 항-Smith 양성은 SLE를 지지한다. 요단백 3+는 루푸스 신염을 의심하게 하므로 정량 단백뇨·신기능을 확인하고 신장 생검(B)으로 유형과 활동성·만성도를 평가한다. 현행 ACR은 단백뇨 >0.5 g/g 또는 설명되지 않는 신기능 저하에서 생검을 권고한다. 본문은 적혈구와 적혈구 원주가 음성이므로 혈뇨가 있다고 설명하지 않는다. 혈소판 70,000/mm³이므로 생검 전 출혈위험과 시행 가능성도 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001264 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 요검사에 없는 혈뇨를 추가한 오류를 제거하고 단백뇨에 따른 루푸스 신염 평가와 생검 전 출혈위험 평가를 명시했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.25528

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001264
