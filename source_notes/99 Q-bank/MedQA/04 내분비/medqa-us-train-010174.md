---
type: qbank
schema_version: 1
id: medqa-us-train-010174
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:39c1e575a8d5f91e173e2d6b70a2f36484aad9ca3b5e5ee7f9df5ef9b4cd89a6
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "중추성 요붕증"
  - "데스모프레신"
  - "수분 제한검사"
related_disease_slugs:
  - MDQg64K067aE67mEL-ykkey2lOyEsSDsmpTrtpXspp0gKENlbnRyYWwgRGlhYmV0ZXMgSW5zaXBpZHVzKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EZXNtb3ByZXNzaW4ubWQ
---

# MedQA US 임상문제

## 문제

60세 남성이 일주일 동안 피로하고 몸 상태가 이상해 응급실에 내원했다. 감염 접촉력이나 증상을 설명할 만한 선행 사건은 없다. 당뇨병, 고혈압, 박출률이 보존된 울혈성 심부전 병력이 있다. 체온 36.7°C, 혈압 125/65 mmHg, 맥박 분당 90회, 호흡수 분당 14회, 실내 공기 산소포화도 100%이다. 혈색소 12 g/dL, 헤마토크릿 36%, 백혈구 6,500/mm³, 혈소판 197,000/mm³, Na⁺ 147, Cl⁻ 105, K⁺ 4.1, HCO₃⁻ 26 mEq/L, BUN 21 mg/dL, 포도당 100 mg/dL, 크레아티닌 1.1 mg/dL, Ca²⁺ 10.1 mg/dL, AST 12, ALT 10 U/L이다. 소변은 맑고 비중 1.003이다. 입원해 수분 제한검사를 시행했지만 소변검사 결과는 변하지 않았다. 다음 중 가장 적절한 처치는?

## 선택지

A. 데메클로사이클린
B. 데스모프레신
C. 저장성 수액
D. 두부 CT

## 해설


정답 B. 고Na와 매우 묽은 소변이 수분제한에도 지속되면 요붕증을 고려한다. 다음 desmopressin 투여 후 소변 삼투질농도/양의 반응을 비교해 중추성 ADH 결핍과 신성 저항성을 구분할 수 있다. 수분제한 무반응만으로 중추성이라고 확진하면 안 되며 실제 다뇨량과 혈장/소변 삼투질농도도 확인한다. 필요 수분 보충과 Na 추적을 병행하고 진단 없이 장기 고정 처방하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010174 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수분제한 무반응만으로 중추성 DI 확진 불가. Desmopressin B는 감별 반응 관찰 단계로 설명, 신성 DI와 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niddk.nih.gov/health-information/kidney-disease/diabetes-insipidus

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010174
