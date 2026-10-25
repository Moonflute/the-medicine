---
type: qbank
schema_version: 1
id: medqa-us-train-004615
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7f536ce06bfd2e93e0d1be1c623703de14a948ee23df244ca3cb424c55a11a6f
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유방 파제트병"
  - "유두 궤양"
  - "유방암"
related_disease_slugs:
  - MTMg67aA7J246rO8L-2MjOygnO2KuOuzkSAoUGFnZXQncyBEaXNlYXNlKS5tZA
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: diagnosis
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
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvU2FsYnV0YW1vbC5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvVGhlb3BoeWxsaW5lLm1k
---

# MedQA US 임상문제

## 문제

그 외에는 건강한 45세 여성이 2주 동안 왼쪽 유두가 가려워 진료를 받으러 왔다. 유두에 작은 수포로 시작해 유륜으로 퍼졌다. 통증이 있는 궤양으로 변했고 노랗고 물 같은 분비물이 나오며 가끔 피가 섞인다. 천식으로 테오필린과 흡입 살부타몰을 사용한다. 여동생은 1년 전 자궁내막암 진단을 받았다. 진찰에서 왼쪽 유두-유륜 복합체 전체를 침범한 진물 나는 궤양성 병변이 보인다. 유방 종괴, 피부 함몰이나 액와 림프절병증은 없다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 염증성 유방암
B. 유방염
C. 유방 농양
D. 유방 파제트병

## 해설


지속되는 한쪽 유두-유륜의 가려운 습진성·미란성 병변과 혈성 분비물은 유방 Paget병(D)을 의심하게 한다. 이는 유두 표피의 악성 Paget 세포와 관련된 유방암의 한 형태이며, 기저 DCIS 또는 침윤성 유방암을 동반할 수 있다. 만져지는 종괴나 액와 림프절병증이 없다고 양성 염증으로 분류하지 않는다. 유두 피부 생검과 유방 영상으로 진단·동반 병변을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004615 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 유방 Paget병을 양성 염증성 질환이라 한 중대한 오류를 악성 상피내/침윤 암 연관으로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/breast/breast-cancer-types/paget-disease-breast

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004615
