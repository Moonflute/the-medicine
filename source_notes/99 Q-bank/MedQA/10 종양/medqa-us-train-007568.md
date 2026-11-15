---
type: qbank
schema_version: 1
id: medqa-us-train-007568
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:35c1631e39e459e9b46699a6224aa00094bb9fad13fedacad48f447e058f67f1
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "침윤성 유관암"
  - "액와림프절 미세전이"
  - "유방암 예후"
  - "림프절 상태"
related_disease_slugs:
  - MTMg67aA7J246rO8L-y5qOycpOyEsSDsnKDrsKnslZQgKEludmFzaXZlIEJyZWFzdCBDYW5jZXIpLm1k
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

56세 여성이 cT1N0 유방암으로 선행항암 없이 유방보존술을 받았다. 감시림프절 2개 중 1개에 전이가 있고 액와에 육안적 잔존암은 없다. 유방 전체 방사선치료를 받을 예정이다. 추가 액와 수술은?

## 선택지

A. 액와 림프절 곽청술
B. 추가 액와 수술 생략
C. 감시림프절 재생검
D. 전이된 쪽 유방 전절제술

## 해설


유방보존술과 전유방 방사선치료를 받는 임상적 액와 음성 조기 유방암에서 감시림프절 1~2개에만 전이가 있으면, 적절한 조건에서 추가 액와 곽청술을 생략한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007568 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 생검 확인된 액와림프절 미세전이는 제시 비교 중 주요 예후요인 B임을 현행 NCI와 대조.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/breast/hp/breast-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007568
- https://pubmed.ncbi.nlm.nih.gov/40209128/
