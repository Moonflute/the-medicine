---
type: qbank
schema_version: 1
id: medqa-us-train-006590
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c4cc40fcd23e895d13cb37f1b1bf9dd4616db971021a6dec967f6219c3c41f26
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "신생아 저혈당"
  - "베크위드-비데만 증후군"
  - "거대아"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-qxsOuMgOyVhCAoTWFjcm9zb21pYSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIOyggO2YiOuLueymnSAoTmVvbmF0YWwgSHlwb2dseWNlbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv67Kg7YGs7JyE65OcLeu5hOuNsOunjCDspp3tm4TqtbAgKEJlY2t3aXRoLVdpZWRlbWFubiBTeW5kcm9tZSkubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

편측 과성장과 거대설로 베크위트–비데만 스펙트럼이 의심되는 생후 2일 신생아다. 수유가 안 되고 처지며 떨림이 있다. 즉시 잰 혈당이 28 mg/dL다. 먼저 할 처치는?

## 선택지

A. 정맥 포도당으로 신속히 교정하며 혈당과 원인을 평가
B. 모유수유만 시도하고 한 시간 뒤 혈당 재검
C. 유전자 검사 결과를 보고 포도당 투여 여부를 결정
D. 인슐린을 투여한다

## 해설

증상성 중증 신생아 저혈당에는 정맥 포도당이 필요하다. 원인 채혈은 치료를 지연하지 않는 범위에서 진행하고, 반복 저혈당이면 고인슐린혈증 등을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 저혈당의 핵심 원인을 모체 약물 사용으로 오연결한 해설을 Beckwith–Wiedemann 과인슐린혈증으로 교정.
- https://www.safercare.vic.gov.au/best-practice-improvement/clinical-guidance/neonatal/hypoglycaemia-in-neonates

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006590
- https://cps.ca/en/documents/position/newborns-at-risk-for-low-blood-glucose
