---
type: qbank
schema_version: 1
id: medqa-us-train-000007
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eab6a9961c6553479b81a5fa13d8ffd53a5f3aa506f58bfe0ec985812361ff8f
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "자간전증"
  - "고혈압"
  - "부종"
  - "단백뇨"
question_type: investigation
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDUg7Iug7J6lL-uLqOuwseuHqC5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 초산부(primigravida)가 정기 산전 진찰을 위해 의사를 찾아왔다. 그녀는 초음파 검사로 확인된 바 34주 임신 중이다. 그녀는 특별한 불편감은 없지만, 2주 전에 새로 산 신발이 더 이상 맞지 않는다고 말한다. 임신 과정은 순조로웠고 권장되는 산전 관리를 잘 따랐다. 특이 병력은 없다. 3주 전 마지막 방문 이후 15파운드(약 6.8kg) 체중이 증가했다. 활력 징후는 다음과 같다: 혈압 148/90 mmHg; 심박수 88회/분; 호흡수 16회/분; 체온 36.6℃ (97.9℉). 4시간 후 재측정한 혈압은 151/90 mmHg이다. 태아 심박수는 151회/분이다. 신체 검진상 양쪽 하지에 2+ 함요 부종(pitting edema)이 현저하다. 다음 중 어떤 검사가 이 환자의 예상되는 상태를 확인할 수 있는가?

## 선택지

A. 빌리루빈 평가
B. 응고 검사
C. 감별 백혈구 수치(differential leukocyte count)
D. 24시간 소변 단백

## 해설

20주 이후 반복 확인된 고혈압으로 전자간증을 평가해야 하며, 선택지 중 24시간 소변 단백 정량(D)이 단백뇨 여부를 확인한다. 부종과 급격한 체중 증가는 의심 단서지만 진단 기준은 아니며 본문에 단백뇨 결과는 아직 없다. 현행 기준에서는 단회뇨 단백/크레아티닌 비도 사용할 수 있고, 장기 손상이 있으면 단백뇨 없이도 전자간증을 진단할 수 있다. 혈소판·신장·간기능 및 모체·태아 상태도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 단백뇨를 측정전 소견처럼 창작한 해설 수정. D 유지, 부종은비특이·24시간뇨만필수아님.
- https://kansaspqc.kdhe.ks.gov/wp-content/uploads/2025/09/ACOG-Gestation-HTN-and-Preeclampsia-Practice-Bulletin.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000007
