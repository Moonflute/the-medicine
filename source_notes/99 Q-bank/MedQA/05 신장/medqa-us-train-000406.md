---
type: qbank
schema_version: 1
id: medqa-us-train-000406
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:92bde7c971b07a3b6c7b9d5e607154c5001795574c621adcd6faced48aa6c5d8
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "glomerulonephritis"
related_disease_slugs:
  - MDUg7Iug7J6lL-yCrOq1rOyytOyniO2ZmC5tZA
question_type: investigation
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
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

신장이식 후 타크로리무스를 복용하는 환자가 클래리스로마이신을 처방받은 지 4일 뒤 손떨림과 크레아티닌 상승을 보인다. 약물 상호작용에 의한 신독성이 의심된다. 우선 확인할 항목은?

## 선택지

A. 혈중 클래리스로마이신 최고농도
B. 혈청 갑상선자극호르몬
C. 타크로리무스 다음 복용 직전 전혈 최저농도
D. 소변 담즙산

## 해설

클래리스로마이신은 타크로리무스 대사를 억제해 농도를 높일 수 있다. 다음 투여 직전 농도와 신기능·전해질을 확인하고 이식팀과 약을 조정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: tacrolimus 신독성을 세뇨관 직접 독성 하나로 한정한 설명 보완.
- https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=10ceb3bc-11cc-13e4-e063-6394a90acce4

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000406
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3e8bc65e-8048-4073-8e45-570330603000
