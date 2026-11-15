---
type: qbank
schema_version: 1
id: medqa-us-validation-001175
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:fdd11cd52fab9a22103c3633fbba433824ef8c0e3ba7a14fabdaf73c39866912
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "연쇄상구균 인두염"
  - "A군 연쇄상구균"
  - "신속 항원검사"
  - "Streptococcal pharyngitis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yCrOyKrOyVjOq3oCDsnbjrkZDsl7wgKFN0cmVwdG9jb2NjYWwgUGhhcnluZ2l0aXMpLm1k
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

11세 아이가 발열, 편도 삼출, 압통성 앞목 림프절을 보인다. 기침과 콧물은 없다. A군 사슬알균 신속항원검사가 음성일 때 다음 조치는?

## 선택지

A. 항스트렙톨리신 O 역가로 급성 인두염을 확진한다
B. 소아도 신속항원검사 음성이면 추가 확인 없이 배제한다
C. 인후 배양으로 음성 결과를 확인한다
D. 검사 결과와 관계없이 아지트로마이신을 시작한다

## 해설


전형적 소견이 있는 소아에서 신속항원검사가 음성이면 인후 배양으로 확인한다. 배양이 양성이면 적절한 항생제를 시작한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001175 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 소아 GAS 의심 인두염에서 RADT D 유지. 임상만 확진/경험적 penicillin 대신 검사하며 음성RADT의 소아 배양 확인을 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001175
