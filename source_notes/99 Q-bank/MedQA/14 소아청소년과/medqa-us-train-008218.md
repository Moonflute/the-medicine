---
type: qbank
schema_version: 1
id: medqa-us-train-008218
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:62a0704c0331fade1a4bb8718769b0f33c646381e352da63034e46e7aca04fdc
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "child sexual abuse"
  - "sexualized behavior"
  - "trauma"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yEseunpOqwnOqwkOyXvC5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7JWE64-Z7ZWZ64yAIOuwjyDruYTsmrDrsJzsoIEg7IaQ7IOBLm1k
difficulty: standard
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

9세 여아가 건강검진을 위해 내원했다. 발달은 정상이나 최근 반 친구의 성기를 만지고 장난감을 삽입하려다 발견되었다. 무슨 일이 있었는지 묻자 수줍어 대답하지 못한다. 최근 가족과 함께 저소득 공공주택으로 이사했고 어머니는 아이가 논쟁적이며 소리를 지르고 화장실에 자신을 가두는 일이 많아졌다고 한다. 가장 가능성 높은 진단은?

## 선택지

A. 적응장애
B. 주의력결핍 과잉행동장애
C. 성조숙증
D. 성적 학대

## 해설

나이에 맞지 않는 침습적 성행동과 행동 변화는 성적 학대(D) 가능성을 포함한 전문 평가가 필요하다. 그러나 특정 행동만으로 학대를 확정할 수 없고 빈곤·주거 형태는 진단 근거가 아니다. 비유도적 면담·안전 평가 및 의심 시 신고·전문 연계를 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 빈곤·이사 자체를 성학대 증거로 쓰고 행동을 곧 확진으로 단정하는 오류를 교정.
- https://publications.aap.org/pediatrics/article-lookup/doi/10.1542/peds.2013-1741

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008218
