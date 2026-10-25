---
type: qbank
schema_version: 1
id: medqa-us-train-007759
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d9a5b7d1d84705451df944c3da99665bf12e7915673262f10e70587932ba43bc
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "renal cell carcinoma"
  - "localized renal cancer"
  - "nephrectomy"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-y9qe2MpeyVlCAoUmVuYWwgQ2VsbCBDYXJjaW5vbWEpLm1k
question_type: management
difficulty: standard
answer: C
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

복부대동맥류가 의심되어 검사하던 57세 여성에서 우측 신장에 6×5 cm 크기의 고형 종괴가 발견되었다. 복부대동맥에는 이상이 없다. 환자는 건강하며 중대한 질환이나 약물 사용 병력이 없다. 25갑년의 흡연력이 있고 활력징후는 정상이다. 신체검사에서 이상은 없다. 종괴 생검에서 신세포암이 확인되었다. 조영증강 CT에서 반대쪽 신장, 림프절, 폐, 간, 뼈, 뇌에는 이상이 없다. 다음 중 관리에서 가장 적절한 다음 치료는?

## 선택지

A. 인터페론-α(IFN-α)
B. 인터류킨 2(IL-2)
C. 신절제술
D. 방사선치료

## 해설


원격전이 없는6cm 신장 국한 RCC에서는 외과적 종양절제 C가 적절하다. T1 종양에서는 기술적으로 가능하고 종양학적으로 안전하면 부분신절제를 우선 고려하여 신기능을 보존하며, 종양 위치·복잡도에 따라 근치 신절제술을 선택한다. 이 보기의 nephrectomy를 모든 경우에 전신장을 제거해야 한다는 의미로 해석하지 않는다. IFN/IL-2나 방사선은 이 수술가능 국소 종양의 우선 선택이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007759 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 국소6cm RCC의 외과치료 C 유지하되 항상 전신장 절제가 필요하다는 오해를 줄이고 부분신절제 가능성 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://uroweb.org/guidelines/renal-cell-carcinoma/chapter/disease-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007759
