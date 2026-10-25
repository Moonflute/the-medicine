---
type: qbank
schema_version: 1
id: medqa-us-train-001237
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8b76ff89420756225e76613c5ecbc165703b2244446be36f8e3956a25982b0ab
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "foreign body aspiration"
  - "peanut aspiration"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6riw64-EIOuCtCDsnbTrrLwgKEZvcmVpZ24gQm9keSBBc3BpcmF0aW9uKS5tZA
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3세 여아가 갑자기 발생한 호흡곤란으로 부모와 함께 응급실에 왔다. 부모는 아이가 침대에 누워 텔레비전을 보고 있다가 갑자기 숨을 헐떡이기 시작했다고 응급의에게 말한다. 부모는 아이를 안아 응급실로 데려올 때 옆에 땅콩 한 그릇이 놓여 있는 것을 보았다. 호흡수는 분당 25회, 맥박은 분당 100회, 혈압은 90/65 mm Hg이다. 현재 신체 진찰 소견은 겉보기에는 정상이다. 산소 투여를 시작하고 흉부 X선 촬영을 위해 보낸다. 병력과 신체 진찰 소견에 근거할 때, 현재 증상의 원인은 X선에서 다음 중 어느 부위에서 관찰될 것인가?

## 선택지

A. 우상엽 첨부 분절
B. 좌상엽 첨부 분절
C. 우하엽 상분절
D. 우하엽 후분절

## 해설

정답은 C이다. 누워 있던 중 흡인하면 중력 의존 부위인 하엽 상분절과 상엽 후분절 등이 영향을 받을 수 있으며 제시된 보기에서는 우하엽 상분절 C가 적합하다. 기도 직경이 작아서 모든 이물이 이곳에만 머문다는 뜻은 아니다. 땅콩은 방사선투과성이라 흉부 X선에서 이물 자체가 보이지 않을 수 있고 공기포획·무기폐 같은 간접 소견을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 앙와위 흡인의 중력 의존 분절을 설명하고 땅콩을 방사선불투과성이라고 가정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001237
