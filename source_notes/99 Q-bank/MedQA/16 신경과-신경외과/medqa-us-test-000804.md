---
type: qbank
schema_version: 1
id: medqa-us-test-000804
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:a171787b9c65df89a6280057253640636724e95e137c0ce01ed19c55dc866e0e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "일과성 허혈발작"
  - "심방세동"
  - "뇌혈관 평가"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

75세 환자가 갑작스러운 구음장애와 팔 위약을 30분 겪었으나 지금은 회복됐다. 비조영 뇌 CT에서 출혈이 없다. 응급 평가 중 두개내·경부 동맥의 협착이나 폐색을 직접 확인할 검사는?

## 선택지

A. 두경부 CT 혈관조영술
B. 확산강조 뇌영상 단독
C. 경동맥 초음파만 시행
D. 경흉부 심초음파

## 해설

일과성 허혈 증상이 사라져도 조기 뇌졸중 위험이 있어 응급 평가한다. 두경부 CTA는 경부와 두개내 동맥을 확인하고, 확산강조 MRI는 작은 뇌경색을 확인하는 데 유용하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. TIA 후 신속 CTA A는 적절하지만 항상 가장 빠르고 정확하다는 과장 제거.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/acute-stroke-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000804
- https://www.ahajournals.org/doi/10.1161/STR.0000000000000418
