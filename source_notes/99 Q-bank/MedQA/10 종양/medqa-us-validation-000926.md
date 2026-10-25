---
type: qbank
schema_version: 1
id: medqa-us-validation-000926
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:31c1dbd0ce6a34556a53c2f25185f5adc07adba672bcda729179083f72092413
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "대장 선암"
  - "철결핍성 빈혈"
  - "암배아항원"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: investigation
difficulty: complex
answer: A
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQmlzb3Byb2xvbC5tZA
---

# MedQA US 임상문제

## 문제

68세 여성이 피로, 운동 시 호흡곤란, 경련성 하복부 통증과 검은 변으로 진료를 받으러 왔다. 20년간 본태성 고혈압으로 비소프롤롤을 복용 중이다. 신체검사에서 창백해 보이며 혈색소 10 g/dL, MCV 70 fL, 혈청 페리틴 9 ng/mL이다. 대장내시경에서 상행결장의 용종성 종괴가 발견되었고 생검에서 저분화 선암이 확인되었다. 수술 전 병기 설정 후 복강경 절제술과 수술 후 화학요법을 계획하고 있다. 수술 후 추적관찰에 사용할 수 있는 검사는?

## 선택지

A. 암배아항원(CEA)
B. 골반 자기공명영상(MRI)
C. 경직장 내시경 초음파(TRUS)
D. 암항원 125(CA-125)

## 해설


대장암 근치치료 뒤 CEA A는 추적관찰에 사용하는 종양표지자다. 일련의 CEA 추이와 CT·대장내시경 등을 함께 사용하며, CEA가 모든 재발에서 상승하는 것은 아니고 상승만으로 재발을 확진할 수도 없다. CA-125는 이 상황의 표준 표지자가 아니며 골반 MRI·경직장 초음파를 모든 결장암 환자의 단독 추적법으로 적용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000926 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 대장암 절제 후 CEA A 유지하되 재발을 항상 민감하게 진단하는 단독검사라는 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng151/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000926
