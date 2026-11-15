---
type: qbank
schema_version: 1
id: medqa-us-train-008198
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2be31c43c3d2d0b6fbb829b510c0ffe1eb8da62f7081991ab19a72ea0f256eda
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "scarlet fever"
  - "streptococcal pharyngitis"
  - "rapid antigen detection test"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISx7ZmN7Je0IChTY2FybGV0IEZldmVyKS5tZA
  - MDgg6rCQ7Je8L-yCrOyKrOyVjOq3oCDsnbjrkZDsl7wgKFN0cmVwdG9jb2NjYWwgUGhhcnluZ2l0aXMpLm1k
difficulty: complex
answer: D
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 남아가 발열과 인후통, 가렵지 않은 전신 발진으로 내원했다. 기침은 없고 경부 림프절이 커져 있으며 혀는 선홍색이고 편도는 붉다. 성홍열이 의심될 때 원인균을 확인할 초기 검사는?

## 선택지

A. C-반응단백 상승 확인
B. 항연쇄상구균 용해소 역가 측정
C. 심초음파
D. 신속 연쇄상구균 항원검사

## 해설

발열, 인후통과 선홍색 혀에 전신 발진이 동반되면 A군 사슬알균 감염을 의심한다. 인두 검체의 신속 항원검사가 초기 검사로 적절하다. 소아에서 의심이 지속되고 신속검사가 음성이면 배양으로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문에 없는 사과색 발진·혀 흰반점을 삭제하고 현행 연쇄상구균 검사 절차로 보정.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/scarlet-fever.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008198
