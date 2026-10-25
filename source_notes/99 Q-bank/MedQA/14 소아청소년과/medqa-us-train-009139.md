---
type: qbank
schema_version: 1
id: medqa-us-train-009139
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8cc958dd0e5a225ab845dddfc81f6cdcd4bfdcf30c53b43c3de2c8db522773fd
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "pertussis"
  - "백일해"
  - "conjunctival hemorrhage"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cx7J287ZW0IChQZXJ0dXNzaXMpLm1k
difficulty: standard
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
  - ZHJ1ZzowOCDqsJDsl7wvVG9icmFteWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 여아가 2일간 지속된 양쪽 눈의 충혈과 이물감으로 내원했다. 시력 저하는 없다. 어머니는 이 기간에 아이가 심한 기침 발작을 했고 이어서 고음의 흡기음이 났다고 한다. 지난 1주일 동안 미열과 콧물이 있었다. 출생 시 받은 예방접종 외에는 접종받지 않았다. 체온은 37.7°C이다. 진찰에서 결막 출혈과 점상출혈이 보이고 구인두는 정상이다. 가장 적절한 약물치료는 무엇인가?

## 선택지

A. 국소 아지트로마이신
B. 경구 아지트로마이신
C. 인공눈물
D. 국소 토브라마이신

## 해설

미접종 소아의 발작성 기침과 흡기 whoop은 백일해를 시사한다. 결막출혈·점상출혈은 심한 기침 압력으로 생길 수 있으며 눈에 바르는 항생제로 원인을 치료하지 못한다. 보기 중 경구 azithromycin(B)이 적절한 권장 macrolide이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 기침에 따른 결막하출혈을 결막염으로 혼동한 설명 교정.
- https://www.cdc.gov/pertussis/hcp/clinical-care/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009139
