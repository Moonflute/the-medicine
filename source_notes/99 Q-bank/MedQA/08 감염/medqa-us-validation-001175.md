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
answer: D
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

11세 남아가 며칠 전 생일파티 후 시작된 인후통, 구역과 구토로 진료를 받으러 왔다. 콧물, 결막염, 기침, 근육통과 발진은 없고 발열이 있으며 전경부 림프절이 압통을 동반해 커져 있다. 인두에 염증과 삼출물, 연구개 점상출혈이 보인다. 가장 적절한 다음 처치는?

## 선택지

A. 아지트로마이신
B. 관찰
C. 페니실린 V
D. 신속 항원 검출검사

## 해설


발열, 압통성 전경부 림프절과 삼출성 인두염에 기침·콧물이 없어 GAS를 의심하지만 임상 소견만으로 확진할 수 없다. 선택지 중 신속 항원검사(D)가 적절하다. 소아에서 RADT가 음성이면 인후배양으로 확인하고, 양성 확인 시 적절한 항생제를 투여한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001175 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 소아 GAS 의심 인두염에서 RADT D 유지. 임상만 확진/경험적 penicillin 대신 검사하며 음성RADT의 소아 배양 확인을 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001175
