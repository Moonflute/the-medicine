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

4세 남아가 3일간 지속된 전신 발진으로 아버지와 함께 내원했다. 발진은 가렵지 않고 기침은 없다. 4일 동안 발열과 인후통이 있었다. 만삭에 태어나 건강했으며 6개월 전 편도염으로 에리트로마이신 치료를 받았다. 예방접종은 최신이다. 체온 38.5°C(101.3°F), 경부 림프절병증, 선홍색 혀, 삼출물 없는 편도 홍반이 있다. 발진 사진이 제시되어 있다. 가장 적절한 다음 처치는?

## 선택지

A. C-반응단백 상승 확인
B. 항연쇄상구균 용해소 역가 측정
C. 심초음파
D. 신속 연쇄상구균 항원검사

## 해설

발열·인후통·경부 림프절·선홍색 혀와 발진은 성홍열 가능성이 있어 신속 항원검사(D)가 적절하다. 3세 초과 소아에서 신속 항원이 음성이어도 의심되면 인두 배양으로 확인한다. 원문은 선홍색 혀만 명시하며 실제 사진이 없어 발진 촉감이나 흰 반점을 창작하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문에 없는 사과색 발진·혀 흰반점을 삭제하고 현행 연쇄상구균 검사 절차로 보정.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/scarlet-fever.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008198
