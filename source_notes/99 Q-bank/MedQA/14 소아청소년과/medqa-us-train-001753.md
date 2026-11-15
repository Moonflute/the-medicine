---
type: qbank
schema_version: 1
id: medqa-us-train-001753
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ec2919f8d74c88b3ef9fefabefba6d144e97bdd85ab32ad0fc5558819dbf35c3
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "ventricular septal defect"
  - "membranous VSD"
  - "small VSD"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius7IukIOykkeqyqSDqsrDshpAgKFZlbnRyaWN1bGFyIFNlcHRhbCBEZWZlY3QpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 2개월 영아의 심초음파에서 작은 막주위 심실중격결손이 보인다. 수유와 체중 증가는 정상이고 좌심실 확장이나 대동맥판 역류는 없다. 다음 조치는?

## 선택지

A. 잡음이 크므로 즉시 수술로 닫는다
B. 심내막염 예방 항생제를 매일 투여한다
C. 성장과 대동맥판 이상을 확인하도록 소아심장 외래 추적을 계획한다
D. 작으므로 앞으로는 심장 추적을 하지 않는다

## 해설

작은 제한성 결손에서 증상이나 용적 과부하가 없으면 바로 닫지 않는다. 막주위 결손은 대동맥판 탈출·역류 같은 합병증을 확인하기 위해 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 무증상 작은 막성 VSD 외래 추적 C 유지. 작은 VSD를 비제한성으로 둔 병태생리 오류 교정.
- https://www.acc.org/latest-in-cardiology/articles/2023/05/30/10/47/clinical-practice-algorithm-for-the-follow-up-of-unrepaired-and-repaired-ventricular-septal-defects

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001753
- https://www.jacc.org/doi/10.1016/j.jacc.2025.11.020
