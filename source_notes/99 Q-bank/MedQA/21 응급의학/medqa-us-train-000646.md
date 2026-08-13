---
type: qbank
schema_version: 1
id: medqa-us-train-000646
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5555e8f57440946cd3471244fb1eb1ddf997610dd3ab5757601ebe19284e152
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "atrial fibrillation"
  - "osteoarthritis"
  - "retroperitoneal hemorrhage"
question_type: management
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDcg66WY66eI7Yuw7IqkL-qzqOq0gOygiOyXvCAoT3N0ZW9hcnRocml0aXMpLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9UcmFuZXhhbWljQWNpZC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

72세 여성이 6시간 동안 심해지는 복통으로 응급실에 내원했다. 통증은 둔하고 복부 전반에 걸쳐 있으며 양측 하부 요추로 방사된다. 3주 전 심방세동(atrial fibrillation)을 진단받고 와파린(warfarin) 복용을 시작했다. 다른 약물로는 무릎 골관절염으로 매일 아세트아미노펜(acetaminophen) 1g을 복용 중이다. 맥박은 분당 87회, 혈압은 112/75 mmHg이다. 신체 검진상 양측 하복부에 압통이 관찰된다. 복부 CT 검사에서 후복막 종괴와 주변 구조물의 경계가 불분명한 소견이 확인되었다. 와파린 중단 외에, 가장 적절한 다음 치료 단계는 다음 중 무엇을 투여하는 것인가?

## 선택지

A. 신선동결혈장(fresh frozen plasma) 및 트라넥삼산(tranexamic acid)
B. 제8인자(Factor VIII) 및 폰 빌레브란트 인자(von Willebrand factor)
C. 피토나디온(phytonadione) 및 프로트롬빈 복합 농축액(prothrombin complex concentrate)
D. 프로타민 황산염(protamine sulfate) 및 하이드록시에틸 전분(hydroxyethyl starch)

## 해설


와파린 복용으로 INR이 상승해 후복막 출혈이 발생했으며, 급성 출혈 시에는 비타민 K(피토나디온)와 빠른 INR 감소를 위한 프로트롬빈 복합 농축액이 가장 효과적이다. 따라서 비타민 K와 PCC를 투여한다가 정답이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000646
