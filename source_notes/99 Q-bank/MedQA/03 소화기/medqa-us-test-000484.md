---
type: qbank
schema_version: 1
id: medqa-us-test-000484
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ef7eb8e70252bc2085ac7b74a97135e7a073a6d2be33743ee2d71540ed6d1943
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간성뇌증"
  - "저칼륨혈증"
  - "알코올성 간경변"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLEg64eM7KadIChIZXBhdGljIEVuY2VwaGFsb3BhdGh5KS5tZA
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: C
answer_change_reason: "혈당 59 mg/dL의 확인된 저혈당에 의식저하가 동반되어 즉각 포도당 치료가 필요하다. ADA 2026 저혈당/입원 진료 기준 및 ADA/EASD 2026 합의문에 근거하며, K 3.3 mEq/L의 경도 저칼륨 교정이 이를 앞설 근거는 없다. 원정답 C를 A로 변경한다."
---

# MedQA US 임상문제

## 문제

알코올성 간경변 병력이 있는 40세 남성이 의식 상태 변화로 응급실에 왔다. 며칠 전부터 혼돈이 시작되어 점점 악화되었다. 체온 98.8°F(37.1°C), 혈압 134/90 mmHg, 맥박 83회/분, 호흡 15회/분, 실내 공기 산소포화도 98%였다. 복부는 팽창되어 있으나 압통은 없었고 신경학적 진찰에서 혼돈과 날개짓 떨림이 있었다. 혈청 나트륨 139 mEq/L, 염소 100 mEq/L, 칼륨 3.3 mEq/L, 중탄산염 22 mEq/L, BUN 20 mg/dL, 포도당 59 mg/dL, 크레아티닌 1.1 mg/dL, 칼슘 10.2 mg/dL였다. 다음 중 가장 적절한 처치는?

## 선택지

A. 포도당
B. 락툴로스
C. 칼륨
D. 리팍시민

## 해설

의식저하 환자에서 혈당 59 mg/dL는 즉시 교정해야 하는 저혈당이다. 보기 중 가장 먼저 시행할 처치는 A, 포도당 투여다. 안전한 경구 섭취가 어려운 의식상태에서는 정맥 포도당 등 응급 저혈당 치료를 시행하고 혈당과 의식의 반응을 재평가한다.

간경변과 날개짓 떨림 때문에 간성뇌증도 의심되지만, 이를 이유로 확인된 저혈당 치료를 늦추지 않는다. 칼륨 3.3 mEq/L는 보충과 원인 평가가 필요할 수 있어도 현재 저혈당보다 먼저 처리해야 한다는 근거가 없다. 저혈당 교정 후에도 혼돈이 지속되면 간성뇌증과 유발요인 등을 평가하여 락툴로스 등 필요한 치료를 병행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 의식저하와 혈당 59 mg/dL에서 경도 저칼륨(K 3.3) 보충만 우선한 오류를 수정. 교정 가능한 저혈당을 즉시 치료하도록 C에서 A로 변경; 간성뇌증/전해질 평가 병행.
- https://doi.org/10.2337/dc26-s016
- https://doi.org/10.2337/dc26-s006
- https://diabetesjournals.org/care/article-pdf/doi/10.2337/dci26-0122/894606/dci260122.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000484
