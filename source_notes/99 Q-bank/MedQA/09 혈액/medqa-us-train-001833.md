---
type: qbank
schema_version: 1
id: medqa-us-train-001833
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fc0bece582f736dbbd974880031fc8005b7c8af6ed4c1a939d2f554569d938b6
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "chronic myeloid leukemia"
  - "Philadelphia chromosome"
  - "BCR-ABL"
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
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
  - ZHJ1ZzoxMCDsooXslpEvSW1hdGluaWIubWQ
---

# MedQA US 임상문제

## 문제

49세 남성이 11개월 동안 진행한 피로로 내원했다. 야간 발한, 체중 감소, 복통, 오심, 구토, 배변 습관 변화 또는 출혈은 없다. 특별한 과거력은 없다. 체온 37.0°C (98.6°F), 혈압 119/81 mm Hg, 맥박 83/min, 호흡 19/min이다. 복부 타진에서 경한 비장비대가 보인다. 백혈구 16,700/mm3이고 혈청 백혈구 알칼리성 인산분해효소(LAP) 점수가 낮다. 골수생검에서 과립구가 뚜렷하게 우세한 심한 과세포성이 보이며 세포유전검사에서 필라델피아(Ph1) 염색체가 확인이다. 다음 중 최선의 치료는 무엇인가?

## 선택지

A. Hydroxyurea
B. Interferon-α-2b
C. Cytarabine
D. Imatinib

## 해설


과립구 우세 백혈구증가, 낮은 LAP와 Philadelphia 염색체(BCR::ABL1 융합)는 CML을 지지한다. Imatinib은 BCR::ABL1 tyrosine kinase를 억제하는 약제로 보기 중 D가 적절하다. 실제 초기 TKI 선택은 위험도·동반질환·독성·치료목표에 따라 달라지며 imatinib만이 유일한 현행 선택은 아니다. Hydroxyurea는 필요 시 일시적 세포감소에 사용할 수 있으나 BCR::ABL1 표적 치료를 대체하지 못한다. 기존 SJS 설명은 이 사례와 무관하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001833 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CML 치료 문항에 TMP-SMX/SJS 및 유세포분석 해설이 붙은 오연결을 BCR::ABL1 TKI 설명으로 교체. Ph1은 유전자가 아니라 염색체 소견.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12310532/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001833
