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
question_type: diagnosis
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLEg64eM7KadIChIZXBhdGljIEVuY2VwaGFsb3BhdGh5KS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rj4XshLEg6rCE7Je8IChUb3hpYyBIZXBhdGl0aXMpLm1k
difficulty: complex
answer: D
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

인플루엔자로 열이 나던 13세 아이가 아스피린을 복용한 며칠 뒤 반복 구토와 의식 저하를 보인다. 혈당이 낮고 암모니아와 간효소가 높다. 특히 의심할 합병증은?

## 선택지

A. 급성 담낭염
B. 당뇨병성 케톤산증
C. 길랭–바레 증후군
D. 라이증후군

## 해설

바이러스 질환 중 아스피린을 복용한 소아의 급성 뇌병증과 간 기능 이상은 라이증후군을 의심하게 한다. 급성 간부전과 저혈당의 다른 원인도 응급 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 라이증후군의 간 미토콘드리아 손상을 복합체 I의 단일 억제로 단정한 오류를 제거했다.
- https://www.ncbi.nlm.nih.gov/sites/books/NBK548900/
- https://pubmed.ncbi.nlm.nih.gov/8819478/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009750
- https://www.healthychildren.org/english/health-issues/conditions/abdominal/pages/reye-syndrome.aspx
