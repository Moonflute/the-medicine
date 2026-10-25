---
type: qbank
schema_version: 1
id: medqa-us-train-005428
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d8c8f0cc0075c29a479afde7ed60c9c2ffe697cac2e9e94b85553b7c2c335cc3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "침윤성 유방암"
  - "액와 림프절 전이"
  - "유방암 예후인자"
related_disease_slugs:
  - MTMg67aA7J246rO8L-y5qOycpOyEsSDsnKDrsKnslZQgKEludmFzaXZlIEJyZWFzdCBDYW5jZXIpLm1k
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: prognosis
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
---

# MedQA US 임상문제

## 문제

80세 여자가 3개월 동안 30파운드 체중이 감소하고 피로가 악화되어 내원했다. 과거 자궁내막암으로 자궁절제술과 양측 난관난소절제술을 받았고, 왼쪽 유방의 단단하고 고정된 종괴와 액와 림프절병증이 있다. 유방촬영술에서 침상 종괴가 보이고 생검에서 ER/PR 및 HER2 양성이다. 다음 중 불량한 예후를 가장 잘 나타내는 지표는?

## 선택지

A. 액와 림프절병증
B. 고령
C. ER 양성
D. HER2/neu 양성

## 해설


액와림프절의 종양 침범 정도는 유방암의 주요 예후인자로, 보기 중 A가 가장 중요하다. 촉지되는 림프절병증은 전이를 의심하게 하지만 병리로 확인하여 병기를 정해야 한다. ER/PR, HER2, 종양 크기·등급 및 전신 전이도 예후와 치료에 중요하며 HER2 표적치료 시대에는 수용체 상태를 단순히 무시할 수 없다. 제공되지 않은 조직 사진의 세부 형태는 추정하지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005428 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 선택지상 액와림프절 침범 A의 중요성 유지하되 촉진 림프절만으로 전이를 확정하거나 다른 예후요인을 무시하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/breast/hp/breast-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005428
