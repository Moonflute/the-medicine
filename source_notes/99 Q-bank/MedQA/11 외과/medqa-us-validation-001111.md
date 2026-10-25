---
type: qbank
schema_version: 1
id: medqa-us-validation-001111
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2809f272ab5c1e3bcfdc8df03039082487ad0ac293b0702257598e511fb8beca
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "파제트 골질환"
  - "고알칼리성 인산분해효소혈증"
  - "졸레드론산"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
question_type: management
difficulty: complex
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

52세 폐경 후 여성이 6개월간 점점 악화되는 저작 곤란과 두통·골반 및 허리 통증으로 진료를 받으러 왔다. 왼쪽 이마에 단단하고 움직이지 않는 1 cm 뼈성 종창, 양측 상악골 확장과 부정교합, 양측 혼합성 난청이 있다. 혈청 칼슘은9.5 mg/dL, 비타민 D는40 ng/mL(정상20–100)이다. 두개골 X선이 제시되어 있다. 혈청 알칼리성 인산분해효소는 1100 U/L이고 부갑상선호르몬은 300 pg/mL이다. 가장 적절한 다음 처치는?

## 선택지

A. 조혈모세포 이식
B. 경접형동 뇌하수체 절제술
C. 정맥 졸레드론산
D. 에스트로겐 대체요법

## 해설


두개/상악골 확대·난청·뼈 통증과 매우 높은 ALP는 Paget 골질환을 시사한다. 이는 증가하고 무질서한 골재형성 질환이지 골재형성이 억제되어 생기는 단순 골밀도 감소가 아니다. 증상성 활성 Paget병에서 금기가 없으면 골흡수 억제 bisphosphonate인 IV zoledronate(C)가 적절하다. 조골형성 촉진제가 아니다. 다만 PTH300 pg/mL은 전형적 Paget병만으로 설명되지 않아 재검·신기능 및 동반 부갑상선 문제를 평가하고, 투여 전 칼슘·비타민D·신기능을 확인한다. 누락 두개골 X선의 구체적 모양을 보았다고 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001111 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 골 재형성 억제·조골형성제라는 정반대 기전을 Paget병의 증가된 무질서 재형성과 bisphosphonate 골흡수 억제로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.endocrine.org/clinical-practice-guidelines/pagets-disease-of-bone

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001111
