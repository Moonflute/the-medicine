---
type: qbank
schema_version: 1
id: medqa-us-train-005160
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c0908e4f9c5ef8aea7e4a5e3786682d89b95993b530f76dcf66b3a8e00e18bf2
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "만성 골수성 백혈병"
  - "BCR-ABL"
  - "t(9;22) 필라델피아 염색체"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChDTUwpIChDaHJvbmljIE15ZWxvaWQgTGV1a2VtaWEpLm1k
question_type: management
difficulty: complex
answer: D
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
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvSW1hdGluaWIubWQ
---

# MedQA US 임상문제

## 문제

5세 아프리카계 미국인 남아가 한 달 동안 피로와 야간발한, 3 kg 체중감소로 내원했다. 양측 경부 림프절병증과 빈혈, 혈소판감소가 있고 PCR에서 9;22 염색체 전좌가 확인되었다. 다음 중 가장 적절한 약물치료는?

## 선택지

A. 하이드록시유레아
B. 혈소판 수혈
C. 클라드리빈
D. 이마티닙

## 해설


5세의 림프절병증·빈혈·혈소판감소와 t(9;22)는 BCR::ABL1 양성 ALL을 의심하게 한다. 선택지 중 imatinib D가 해당 융합 kinase를 표적한다. 실제로는 면역표현형 등으로 진단을 확정하고 소아 Ph+ ALL 프로토콜에서 TKI를 화학요법 등과 결합하며 imatinib 단독을 모든 소아 ALL의 완전한 표준 치료라고 해석하지 않는다. 혈소판 수혈은 특정 출혈/예방 필요에 따른 지지요법이지 BCR::ABL1 표적치료의 대체가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005160 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 소아 Ph+ ALL의 imatinib D 선택 유지; CML과 혼동하거나 TKI 단독이 전체 표준 치료라는 설명 보정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/leukemia/hp/child-all-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005160
