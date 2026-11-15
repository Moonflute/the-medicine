---
type: qbank
schema_version: 1
id: medqa-us-train-000599
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3b7f9fb42c05d76e46506e4eaed9f0df0ce5be01ceef9d670c540e2b31816823
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Colonic ischemia"
  - "Acute mesenteric ischemia"
  - "Peptic ulcer disease"
  - "Irritable bowel syndrome"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_quInshLEg7J6l6rCE66eJIO2XiO2YiCAoQWN1dGUgTWVzZW50ZXJpYyBJc2NoZW1pYSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qs7zrr7zshLEg7J6lIOymne2bhOq1sCAoSUJTKSAoSXJyaXRhYmxlIEJvd2VsIFN5bmRyb21lIChJQlMpKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

급성 심근경색 후 심인성 쇼크로 승압제를 쓰던 74세 환자가 심한 복통과 젖산 상승을 보인다. CT 혈관조영에서 장간막 동맥 주간부는 열려 있지만 여러 분지가 가늘고 소장 일부의 조영증강이 떨어진다. 가장 가능성 높은 진단은?

## 선택지

A. 상장간막동맥 색전성 폐색
B. 비폐쇄성 장간막 허혈
C. 장간막 정맥 혈전증
D. 급성 대장 가성폐색

## 해설


쇼크와 혈관수축 상태에서는 큰 장간막 혈관이 막히지 않아도 장 혈류가 줄 수 있다. 심한 통증과 젖산 상승, 열려 있는 주간부와 좁아진 분지, 장벽 조영 감소를 함께 보아 비폐쇄성 장간막 허혈을 의심한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 최근MI/동맥경화 위험과 진찰 압통에 비해 심한 급성 배꼽통증·혈변은 AMI B. 대장허혈보다 소장혈류 위기의 맥락을 지지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000599
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9762570/
