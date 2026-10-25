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

생후 2주 된 신생아가 추적 진료를 위해 내원했다. 만삭으로 태어났고 임신은 순조로웠다. 어머니는 아기가 잘 먹고 소변도 충분히 본다고 한다. 건강해 보이며 키는 60백분위수, 체중은 40백분위수이다. 체온 37.3°C (99.1°F), 맥박 130/min, 호흡 49/min, 혈압 62/40 mm Hg이다. 왼쪽 세 번째 늑간에서 떨림이 만져진다. 왼쪽 하부 흉골연에서 5/6등급 범수축기 잡음이 들린다. 심초음파에서 3-mm 막성 심실중격결손이 보인다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. Amoxicillin 치료
B. Prostaglandin E1 치료
C. 외래 추적관찰
D. 심장 카테터 삽입

## 해설

작은 VSD는 보통 제한성으로 단락량이 적고 큰 압력차 때문에 잡음이 클 수 있다. 무증상이고 성장·수유가 양호하여 외래 추적(C)이 적절하다. 막성 결손은 대동맥판 등 합병증 감시가 필요하므로 크기가 작다는 이유로 모든 추적을 중단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 무증상 작은 막성 VSD 외래 추적 C 유지. 작은 VSD를 비제한성으로 둔 병태생리 오류 교정.
- https://www.acc.org/latest-in-cardiology/articles/2023/05/30/10/47/clinical-practice-algorithm-for-the-follow-up-of-unrepaired-and-repaired-ventricular-septal-defects

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001753
