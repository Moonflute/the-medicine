---
type: qbank
schema_version: 1
id: medqa-us-train-002715
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:15f3c0d6280d90f8b73900bb969b90bcbbf62bc14d43b0938d27352d90fc2ee5
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute hematogenous osteomyelitis"
  - "Staphylococcus aureus"
  - "distal femur osteomyelitis"
  - "pediatric bone infection"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6riJ7ISxIO2YiO2WieyEsSDqs6jsiJjsl7wgKEFjdXRlIEhlbWF0b2dlbm91cyBPc3Rlb215ZWxpdGlzKS5tZA
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
  - MDgg6rCQ7Je8L-qzqOyImOyXvCAoT3N0ZW9teWVsaXRpcykubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

7세 아이가 고열과 심한 허벅지 통증, 저혈압으로 왔다. MRI에서 원위 대퇴골 급성 골수염과 큰 골막하 농양이 보인다. 수액과 경험적 정맥 항생제를 시작한 뒤 추가할 처치는?

## 선택지

A. 정형외과에 즉시 협진해 농양 배액 및 변연절제를 평가한다
B. 혈액배양이 음성이면 배액 없이 항생제를 중단한다
C. 걸을 수 있을 때까지 소염제만 투여한다
D. 농양이 있어도 항생제 치료를 끝낸 뒤 수술을 논의한다

## 해설


패혈증을 동반한 소아 급성 혈행성 골수염에 배액 가능한 농양이 있으면 신속한 감염원 조절이 필요하다. 항생제와 소생술을 하면서 정형외과 평가를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002715 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 발열·보행 거부와 원위대퇴골 MRI 파괴 소견의 급성 혈행성 골수염에서 S. aureus C를 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002715
- https://www.idsociety.org/practice-guideline/bone-and-joint-infections---osteomyelitis/
