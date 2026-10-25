---
type: qbank
schema_version: 1
id: medqa-us-train-003089
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9a269a75b20a8f71c5eb36d4c5fc8727780bb01780abdf5e2b848153b36bb131
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "induction therapy"
  - "neoadjuvant treatment"
  - "metastatic breast cancer"
  - "preoperative radiation"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

44세 여성이 전이성 유방암으로 종양내과에서 치료받고 있다. 8개월 동안 심한 체중감소와 고정된 유방 종괴가 있었지만 진료를 거부하다 남편이 데려왔다. 수술이 예정되어 있고 악성세포를 파괴하기 위한 방사선치료의 초기 용량을 받았다. 다음 중 이 환자에게 시행된 치료는?

## 선택지

A. 보조요법
B. 유도요법
C. 유지요법
D. 구제요법

## 해설


수술 전 방사선 치료는 종양을 축소시켜 수술 가능성을 높이는 유도요법(Neoadjuvant therapy)이다. 환자는 전이성 유방암으로 수술이 예정돼 있으므로 방사선은 유도요법에 해당한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003089 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수술에 선행하는 초기 종양감소 치료를 induction/neoadjuvant B로 분류하는 용어 문항은 원문·해설과 일치한다. 전이성 유방암에서 이 수술/방사선 순서 자체를 일반적 표준으로 승인한 것은 아니다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003089
