---
type: qbank
schema_version: 1
id: medqa-us-train-000618
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:30c78a9b9f163a03a2f1bb1744467f2a7cd2e4a38bb70808e8c3605ebe800ef7
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "osteosarcoma"
  - "septic arthritis"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rOo7Jyh7KKFIChPc3Rlb3NhcmNvbWEpLm1k
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmYXpvbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2세 아이가 고열과 심한 한쪽 고관절 통증으로 걷지 못한다. 초음파에서 관절에 액체가 있고, 아이는 처지며 관류가 나쁘다. 세균성 고관절염을 의심해 곧바로 수액과 혈액배양을 진행했다. 관절액 채취까지 시간이 걸린다면 다음 조치는?

## 선택지

A. 정맥 경험적 항생제를 바로 시작하고 관절 검체 채취와 배농을 신속히 준비한다
B. 배농과 관절액 배양 결과가 모두 끝날 때까지 항생제를 미룬다
C. 일과성 고관절 활막염으로 보고 소염제만 준다
D. 외래 경구 항생제만 시작하고 이틀 뒤 재평가한다

## 해설

전신 상태가 나쁜 소아의 세균성 관절염은 검체 채취가 어려워도 항생제를 지연하지 않는다. 혈액배양을 가능하면 먼저 얻고 정맥 항생제를 시작하며 관절 검체 채취와 배농을 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 급성 세균성 고관절염의 배액+항생제 B 유지. 배액과 항생제를 불필요하게 순차화하거나 MRSA 위험을 배제하지 않도록 보완.
- https://www.idsociety.org/practice-guideline/acute-bacterial-arthritis-in-pediatrics2/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000618
- https://pubmed.ncbi.nlm.nih.gov/37941444/
