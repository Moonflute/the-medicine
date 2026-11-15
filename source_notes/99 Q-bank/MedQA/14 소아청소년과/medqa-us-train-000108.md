---
type: qbank
schema_version: 1
id: medqa-us-train-000108
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:29df966876093e1ce839035c5953e2c8bd9443bc0164a597b6af00e950deb536
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "DiGeorge syndrome"
  - "truncus arteriosus"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCA7Iq07IOYIOustO2YleyEseymnSAoRGlHZW9yZ2UgU3luZHJvbWUpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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

총동맥간증과 구개열이 있는 신생아가 손발을 오므리며 반복 경련한다. 혈당은 정상이고 이온화 칼슘이 0.72mmol/L이며 심전도에서 QT가 길다. 기도와 호흡을 안정시킨 뒤 바로 교정할 치료는?

## 선택지

A. 경구 칼시트리올만 투여
B. 정맥 포도당 단독 투여
C. 신생아 선별검사 결과가 나올 때까지 대기
D. 심전도 감시하 정맥 글루콘산칼슘

## 해설

경련과 QT 연장이 있는 중증 저칼슘혈증은 정맥 칼슘으로 즉시 치료한다. 이 환아의 심장·구개 소견과 저칼슘혈증은 22q11.2 결실 및 부갑상샘기능저하의 단서다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: DiGeorge의 저칼슘 신경근 과민성 C 유지. 단일 대동맥을 총동맥간으로 정확히 명명.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000108
- https://pubmed.ncbi.nlm.nih.gov/36729053/
