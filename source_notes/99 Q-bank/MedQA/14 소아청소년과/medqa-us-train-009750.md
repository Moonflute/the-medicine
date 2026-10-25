---
type: qbank
schema_version: 1
id: medqa-us-train-009750
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1e42e3ca18883416b37e07de2a21ff48d7b7fd83349797bf77cbe84fac58977f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "라이 증후군"
  - "아스피린"
  - "간 미토콘드리아 손상"
question_type: mechanism
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLEg64eM7KadIChIZXBhdGljIEVuY2VwaGFsb3BhdGh5KS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rj4XshLEg6rCE7Je8IChUb3hpYyBIZXBhdGl0aXMpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 13세 남아가 오늘 아침부터 여러 차례 구토하여 부모와 함께 응급실에 왔다. 오심과 심한 두통을 호소한다. 지난 4일 동안 발열, 콧물, 인후통이 있었다. 어머니가 류마티스관절염에 사용하는 진통제를 아이에게 투여했다. 외상은 없었다. 지난달 가족과 멕시코를 여행했다. 키는 연령의 85백분위수, 체중은 25백분위수이다. 아이는 쇠약해 보인다. 체온 38°C, 맥박 분당 90회, 호흡수 분당 18회, 혈압 100/60 mmHg이다. 정신상태검사에서 정신운동성 초조와 기면이 번갈아 나타난다. 양측 시신경유두 부종이 관찰된다. 혈청 요소질소 30 mg/dL, 포도당 70 mg/dL, AST(GOT) 60 U/L, ALT(GPT) 60 U/L이다. 실내 공기에서 시행한 동맥혈가스분석의 pH는 7.30이다. 다음 중 이 환자 증상의 가장 가능성 높은 원인은?

## 선택지

A. A형 간염 바이러스 감염
B. 간 미토콘드리아 손상
C. 부동액 섭취
D. 췌장 베타세포의 자가면역 파괴

## 해설

바이러스 전구증상 뒤 진통제 노출을 시사하는 병력, 구토·의식 변화·유두부종과 간효소 상승은 라이증후군의 출제 의도에 부합한다. 간 미토콘드리아 기능 손상(B)이 지방산 대사와 에너지 대사 장애에 관여하며 뇌부종/뇌병증을 동반할 수 있다. 본문은 약물명을 명시하지 않아 아스피린 복용이 확인된 사실인 것은 아니며, 이를 복합체 I만 억제하는 단일 기전으로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 라이증후군의 간 미토콘드리아 손상을 복합체 I의 단일 억제로 단정한 오류를 제거했다.
- https://www.ncbi.nlm.nih.gov/sites/books/NBK548900/
- https://pubmed.ncbi.nlm.nih.gov/8819478/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009750
