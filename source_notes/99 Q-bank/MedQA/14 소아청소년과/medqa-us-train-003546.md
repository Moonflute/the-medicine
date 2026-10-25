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
question_type: diagnosis
related_disease_slugs:
  - MTEg7Jm46rO8L-qwiOu5hOu8iCDqs6jsoIggKFJpYiBGcmFjdHVyZSkubWQ
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

6개월 남아가 술을 마시는 아버지에게 등을 세게 맞은 뒤 응급실에 왔다. 아이는 탈수되고 지저분하며 보채고, 왼쪽 견갑골 주변을 만지면 즉시 울었다. 후방 갈비뼈 골절이 강하게 의심되었지만 초기 골격 조사는 정상이었다. 아동학대가 우려되는 이 환자에서 다음 진단 평가 단계로 가장 선호되는 영상검사는?

## 선택지

A. 베이비그램
B. 병상 초음파
C. 자기공명영상
D. 2주 후 골격 조사 반복

## 해설

학대가 강하게 의심되는 6개월 영아에서 초기 골격조사가 음성이어도 약 10~14일 뒤 재검하면 치유 반응으로 잠복 골절을 찾을 수 있어 D가 적절하다. AAP 2025 임상보고와 ACR 2025 개정 기준이 이 접근을 지지한다. 베이비그램 한 장은 적절한 다중 영상 골격조사를 대신하지 못한다. 재검 시점은 현재 안전 확보나 급성 손상에 대한 다른 필요한 평가를 그때까지 미루라는 뜻이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초기 음성 골격조사 후 강한 학대 의심에서 약 2주 재검을 최신 AAP/ACR 근거로 확인하고 모든 안전 평가를 2주 미뤄도 된다는 오해를 방지했다.
- https://doi.org/10.1542/peds.2024-070074
- https://acsearch.acr.org/docs/69443/Narrative

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003546
