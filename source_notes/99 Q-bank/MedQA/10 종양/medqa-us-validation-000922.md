---
type: qbank
schema_version: 1
id: medqa-us-validation-000922
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:9f41ab4cf1ab6fe456de79c280c1af9eab7f4b674c7cc455cad96253a234ee60
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "갑상선암"
  - "유두갑상선암"
  - "뼈 전이"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmOyVlCAoVGh5cm9pZCBDYW5jZXIpLm1k
question_type: prognosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

35세 남성이 며칠 전 목 앞쪽에서 발견한 작은 종괴로 진료를 받으러 왔다. 통증이 없고 삼키는 데 영향을 주지 않으며 체중 변화도 없다. 15세 때 신경모세포종 치료를 위해 방사선에 노출된 병력이 있다. 오른쪽 갑상선엽에서 약 2.2 cm 크기의 단단하고 압통이 없는 결절과 경부 림프절병증이 만져진다. 다음 중 이 환자의 예후를 가장 나쁘게 만드는 요인은?

## 선택지

A. 나이
B. 뼈 전이
C. 여포성 조직학적 변이
D. 휘르틀세포 변이

## 해설


이 문항은 제시된 요인 중 무엇이 갑상선암의 예후를 더 나쁘게 하는지 묻는다. 골전이 B는 원격전이에 해당하여 나열된 다른 요인보다 불량 예후를 의미한다. 본문의 환자에게 실제 골전이가 확인되었다는 뜻은 아니며, 환자의 최종 병리·연령·전이 범위 등을 통합하여 위험도를 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000922 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 골전이는 실제 환자에게 확인된 소견이 아니라 가정한 예후인자라는 점을 명확히 하여 B 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000922
