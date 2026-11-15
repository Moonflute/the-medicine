---
type: qbank
schema_version: 1
id: medqa-us-train-009796
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e2f3a7874433de0c034e7f0ef83f0cda4c295d4c04a0d2aa397797e4f09f17ce
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "연쇄상구균 인두염"
  - "편도 삼출"
  - "신속 항원 검사"
  - "Streptococcal pharyngitis"
question_type: investigation
related_disease_slugs:
  - MDgg6rCQ7Je8L-yCrOyKrOyVjOq3oCDsnbjrkZDsl7wgKFN0cmVwdG9jb2NjYWwgUGhhcnluZ2l0aXMpLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 아이에게 발열, 편도 삼출, 앞목 림프절 압통이 있다. 기침이나 콧물은 없다. A군 연쇄상구균 신속항원검사는 음성이다. 다음 검사는?

## 선택지

A. 인두 배양
B. 혈액 배양
C. 항스트렙톨리신 O 역가
D. 엡스타인–바 바이러스 항체

## 해설

소아에서 A군 연쇄상구균 인두염이 의심되는데 신속항원검사가 음성이면 인두 배양으로 확인한다. 항스트렙톨리신 O 역가는 급성 인두염을 확진하는 검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문 자체의 기침 있음/없음 모순을 표시하고 검사 전 항생제 확정 대신 GAS 확인 원칙 유지.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/scarlet-fever.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009796
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html
