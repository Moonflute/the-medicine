---
type: qbank
schema_version: 1
id: medqa-us-train-000119
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8cb950ae9df0b7daa98f3ca8e77a3fbb47559fa7f22a5ffdcce8ff640e90983f
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "복부 외상"
  - "저혈압"
  - "복부 경직"
  - "복부 압통"
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

67세 여성이 빨래를 널다가 집 2층에서 떨어졌습니다. 즉시 응급실로 이송되었으며 심한 복통을 호소했습니다. 환자는 불안해하며 손과 발이 만졌을 때 매우 차갑습니다. 골절, 표재성 피부 상처 또는 이물질 침투의 증거는 없습니다. 혈압은 102/67 mmHg, 호흡수는 19회/분, 맥박은 87회/분, 체온은 36.7°C (98.0°F)입니다. 복부 진찰에서 경직과 심한 압통이 나타납니다. 유치 도뇨관(Foley catheter)과 비위관(nasogastric tube)이 삽입되었습니다. 중심정맥압(CVP)은 5 cm H2O입니다. 과거력상 고혈압이 중요합니다. 이 환자의 평가를 위해 다음 중 가장 적절한 것은 무엇입니까?

## 선택지

A. 초음파
B. 복강 세척(Peritoneal lavage)
C. CT 스캔
D. 진단적 개복술(Diagnostic laparotomy)

## 해설


복부 경직·저혈압·정맥압 정상인 환자는 불안정 복부 외상으로 FAST(초음파) 검사가 가장 빠르고 비침습적인 초기 평가 방법이다. CT는 환자가 안정된 후에 시행한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000119
