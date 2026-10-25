---
type: qbank
schema_version: 1
id: medqa-us-train-000710
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6c89026b0f9fbbf3fb20942c51f451558adcf73c436d8bb5a9106f71eb0207cd
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "cannabinoid hyperemesis syndrome"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-q4ieyEsSDspJHrj4Ug7LSd66GgIChHZW5lcmFsIE1hbmFnZW1lbnQgb2YgQWN1dGUgUG9pc29uaW5nKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 구역과 구토를 주소로 응급실에 내원하였다. 최근 질병, 환자와의 접촉, 평소 식단 외의 음식 섭취는 없다고 한다. 환자는 마리화나를 하루에 최소 3회 흡연한다고 보고하였다. 체온은 97.7°F(36.5°C), 혈압은 90/74 mmHg, 맥박은 100회/분, 호흡수는 10회/분, 실내 공기에서의 산소포화도(SpO2)는 94%이다. 결막 충혈이 관찰된다. 기초 대사 검사 결과는 다음과 같다. 혈청: Na+: 132 mEq/L, Cl-: 89 mEq/L, K+: 2.9 mEq/L, HCO3-: 30 mEq/L, BUN: 35 mg/dL, 포도당: 80 mg/dL, 크레아티닌: 1.5 mg/dL, 마그네슘: 2.0 mEq/L. 환자는 계속해서 구토와 헛구역질을 반복하고 있다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 소변 독성 검사 시행
B. 온단세트론(ondansetron) 경구 투여 및 경구 수액 요법 시행
C. 온단세트론(ondansetron) 및 칼륨이 포함된 등장성 식염수 투여
D. 온단세트론(ondansetron) 및 포도당이 포함된 1/2 생리식염수 투여

## 해설

지속 구토와 저혈압, 저염소·저칼륨·알칼리증 및 BUN/크레아티닌 상승은 체액·전해질 소실을 시사한다. 주어진 선택지에서는 등장성 식염수와 칼륨 보충을 포함한 C가 적절하다. 등장성은 0.9% 식염수이며 3% 식염수가 아니다. 대마 관련 구토증후군을 고려하되 다른 원인도 배제한다. 신기능·소변량을 확인하며 칼륨을 보충하고, 저칼륨 상태에서 온단세트론의 QT 연장 위험을 고려해 전해질 교정·ECG 확인을 우선한다. 대마 관련 구토는 통상 항구토제에 잘 반응하지 않을 수 있어 불응 시 전문 지침에 따라 치료한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 선지 C의 등장성 식염수를 3% 고장성 식염수로 바꾼 해설의 안전성 오류를 바로잡았다. 저칼륨에서 항구토제의 QT 위험도 명시했다.
- 공식/학회 근거: https://rcem.ac.uk/wp-content/uploads/2024/02/RCEM_Cannabinoid_Hyperemesis_Syndrome_v5.0.pdf
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=cf10d256-dd89-4a91-a3ed-81db505a79c2&version=17

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000710
