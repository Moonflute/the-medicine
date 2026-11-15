---
type: qbank
schema_version: 1
id: medqa-us-train-009033
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f290d2b06361441e2d7b42b3114b56c61ddca91f045f185393d57f50159d4ec3
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "WAGR syndrome"
  - "Wilms tumor"
  - "11p13 deletion"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JyM66aE7Iqk7KKF7JaRIChXaWxtcyBUdW1vcikubWQ
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

선천성 양측 무홍채증과 잠복고환이 있는 영아에게 유전 평가를 계획한다. 윌름스종양 감시가 필요한 WAGR 스펙트럼 여부를 확인할 검사는?

## 선택지

A. PAX6 점변이만 확인하는 검사
B. WT1과 PAX6를 포함한 11p13 결실 검사
C. 11p15.5 메틸화 검사만 시행
D. FMR1 CGG 반복 수 검사

## 해설

WAGR은 PAX6와 WT1이 함께 결실된 경우에 무홍채증과 종양 위험이 동반된다. 염색체 마이크로어레이 등으로 결실 범위를 확인하면 단독 무홍채증과 구분하고 신장 종양 감시를 계획할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: WAGR의 비뇨생식기 이상을 근거 없는 무릎 결손으로 설명한 오류를 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009033
- https://pubmed.ncbi.nlm.nih.gov/41818601/
- https://pubmed.ncbi.nlm.nih.gov/39320341/
