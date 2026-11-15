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

40세 남성이 간경변으로 치료받던 중 혼돈과 날개떨림이 생겼다. 즉시 측정한 혈당은 49 mg/dL이다. 의식이 떨어져 안전하게 삼킬 수 없고 정맥로가 있다. 가장 먼저 할 처치는?

## 선택지

A. 정맥 포도당 투여
B. 경구 락툴로스 투여
C. 경구 칼륨제 투여
D. 경구 리팍시민 투여

## 해설

간경변 환자라도 의식저하와 저혈당이 확인되면 즉시 교정한다. 안전하게 삼키지 못하면 정맥 포도당을 투여하고 혈당과 의식을 재확인한다. 교정 뒤 혼돈이 지속되면 간성뇌증과 그 유발 요인을 추가로 평가한다.

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
- https://diabetes.or.kr/bbs/?code=guide&mode=view&number=2078
