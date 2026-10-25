---
type: qbank
schema_version: 1
id: medqa-us-train-008510
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a9ff5302fd7cfd64bca8ed27b58e1509c1bf234d72c16703cf7ea39309fc9934
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "orthostatic proteinuria"
  - "transient proteinuria"
  - "glomerular basement membrane"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4sOumveyEsSDri6jrsLHrh6ggKE9ydGhvc3RhdGljIFByb3RlaW51cmlhKS5tZA
question_type: mechanism
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "기립성 단백뇨를 사구체 여과압 감소라는 확정 기전으로 설명한 오류 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

17세 남아가 추적 방문을 위해 내원했다. 이틀 전 정기 건강검진에서 소변 시험지검사상 단백뇨 3+가 확인되었다. 당시 환자는 일과로 피곤한 것 외에는 건강하다고 했다. 한 달 전 상기도 감염이 있었으나 발병 5일 이내에 저절로 호전되었다. 중대한 질환 병력은 없다. 사격장에서 인턴으로 일하며 평소 적절한 청력 보호구를 사용하지 않는다. 오늘 피곤해 보이고 이른 아침 진료에 대해 불평한다. 키 170cm(5피트 7인치), 체중 81.5kg(180파운드), BMI 28kg/m²이다. 체온 37°C(98.6°F), 맥박 72회/분, 혈압 118/70mmHg이다. 얼굴에 여드름이 있고 양측 경미한 감각신경성 난청이 있다. 그 외 검사는 정상이다. 검사 결과는 다음과 같다.
혈청 요소 8mg/dL, 크레아티닌 1.0mg/dL
소변 포도당 음성, 단백질 1+, 혈액 음성, 아질산염 음성, 백혈구 음성, pH 6.0, 비중 1.005
다음 중 이 환자 소견에 대한 가장 가능성 높은 설명은 무엇인가?

## 선택지

A. 장시간 서 있기
B. 사구체 상피하 면역복합체 침착
C. 사구체 기저막의 음전하 소실
D. 사구체 기저막의 분리

## 해설

건강한 청소년에서 활동 후 단백뇨가 많고 이른 아침에는 줄어드는 양상은 기립성 단백뇨를 시사한다. 확정하려면 첫 아침 소변 단백 정량과 활동 후 검체를 비교한다. 기립성 단백뇨의 기전은 단순한 여과압 감소로 단정할 수 없다. 혈뇨·신기능 저하가 없고 난청에는 소음 노출이라는 별도 설명이 있으나 아침에도 단백뇨가 지속되면 추가 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008510

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 기립성 단백뇨를 사구체 여과압 감소라는 확정 기전으로 설명한 오류 수정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
