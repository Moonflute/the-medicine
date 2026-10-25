---
type: qbank
schema_version: 1
id: medqa-us-train-000384
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:392187a6f530d50ccecbe60a8a831ea25c7709ba555649f63ae6e0fe20c9d5e9
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "third-degree burn"
  - "euthyroid sick syndrome"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsp4jtmZgubWQ
question_type: management
difficulty: complex
answer: A
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

45세 남성이 주택 화재 후 응급실로 이송되었습니다. 초기 안정화 후, 환자는 3도 화상 치료를 위해 중환자실(ICU)로 이송되었습니다. 입원 2일째에 정기적인 혈액 검사를 시행하였고, 결과는 아래와 같습니다. 간호사에 따르면 환자는 전날과 비교하여 안정적인 상태를 유지하고 있습니다. 체온은 99°F(37°C), 혈압은 92/64 mmHg, 맥박은 98회/분, 호흡은 14회/분, 산소포화도(SpO2)는 98%입니다. 신체 검진상 환자는 반응이 없으며 몸통과 하지 전반에 걸쳐 광범위한 화상을 입은 상태입니다. 헤모글로빈: 13 g/dL, 헤마토크릿: 36%, 백혈구 수: 10,670/mm^3(정상 감별계산), 혈소판 수: 180,000/mm^3. 혈청: Na+: 135 mEq/L, Cl-: 98 mEq/L, K+: 4.7 mEq/L, HCO3-: 25 mEq/L, BUN: 10 mg/dL, 포도당: 123 mg/dL, 크레아티닌: 1.8 mg/dL, 갑상선자극호르몬(TSH): 4.3 µU/mL, 트리요오드티로닌(T3): 48 ng/dL, 티록신(T4): 10 ug/dL, Ca2+: 8.7 mg/dL, AST: 89 U/L, ALT: 135 U/L. 이 환자를 위한 최선의 치료 방침은 무엇입니까?

## 선택지

A. 화상 상처에 대한 지속적인 관리
B. 즉각적인 프로프라놀롤(propanolol) 투여
C. 정기적인 레보티록신 나트륨(levothyroxine sodium) 주사
D. 정맥 내 세프트리악손(ceftriaxone) 및 반코마이신(vancomycin) 투여 시작

## 해설


심한 화상이라는 중증 질환 중 T3만 낮고 T4가 보존되며 TSH가 뚜렷하게 상승하지 않은 양상은 비갑상선질환증후군(저T3 증후군)에 부합한다. 이 검사치만으로 갑상선호르몬을 보충하지 않고 기저 화상에 대한 지속적 치료를 시행하므로 A가 적절하다. 화상 관리는 창상뿐 아니라 기도·순환·수분전해질·신장기능·영양·감염 평가를 포함한다. 의식저하를 낮은 T3로만 설명하거나 새 감염의 근거 없이 항생제를 시작해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000384 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 해설에서 빠진 핵심 저T3 비갑상선질환증후군을 설명하고 화상 소생·장기평가보다 창상만 우선한다는 오해를 제거했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://journals.sagepub.com/doi/abs/10.1089/thy.2014.0028

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000384
