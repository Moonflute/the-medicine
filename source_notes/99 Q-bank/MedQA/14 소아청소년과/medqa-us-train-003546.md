---
type: qbank
schema_version: 1
id: medqa-us-train-003546
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:013d3967411ddab08c817985f63de007a7e6f11ce67c04a682350c54c4e2c105
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "child abuse"
  - "occult rib fracture"
  - "skeletal survey"
  - "repeat imaging after 2 weeks"
question_type: investigation
related_disease_slugs:
  - MTEg7Jm46rO8L-qwiOu5hOu8iCDqs6jsoIggKFJpYiBGcmFjdHVyZSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7JWE64-Z7ZWZ64yAIOuwjyDruYTsmrDrsJzsoIEg7IaQ7IOBLm1k
difficulty: standard
answer: A
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

8개월 영아에서 병력과 맞지 않는 몸통 멍 때문에 신체학대가 강하게 의심된다. 처음 표준 골격 조사는 정상이었다. 아이의 안전 확보와 신고를 이미 진행 중이다. 숨은 골절을 확인할 후속 검사는?

## 선택지

A. 약 2주 뒤 추적 골격 조사
B. 6개월 뒤 골밀도 검사
C. 즉시 한 장의 전신 X선으로 재검
D. 정상 결과이므로 추가 골격 영상 없음

## 해설

어린 영아는 초기 영상에서 골절이 드러나지 않을 수 있다. 학대 의심이 높으면 약 10–14일 뒤 골격 조사를 반복해 골절의 치유 반응을 확인한다. 안전 조치를 그때까지 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초기 음성 골격조사 후 강한 학대 의심에서 약 2주 재검을 최신 AAP/ACR 근거로 확인하고 모든 안전 평가를 2주 미뤄도 된다는 오해를 방지했다.
- https://doi.org/10.1542/peds.2024-070074
- https://acsearch.acr.org/docs/69443/Narrative

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003546
- https://pubmed.ncbi.nlm.nih.gov/41860516/
