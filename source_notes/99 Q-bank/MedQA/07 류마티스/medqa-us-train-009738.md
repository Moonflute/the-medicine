---
type: qbank
schema_version: 1
id: medqa-us-train-009738
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a24d7ef9cc2e47a9c628386e1525637c9965e14ed3a3a4571d07356906f23c9c
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "히드랄라진 유발 루푸스"
  - "약물유발 루푸스"
  - "심낭염"
  - "drug-induced lupus"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwLyjquInsgqzspp3tm4TqtbApLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

42세 여성이 히드랄라진을 시작한 지 수개월 뒤 양쪽 손 관절염과 심낭염이 생겼다. 항핵항체와 항히스톤 항체가 양성이고, 요검사와 신기능은 정상이다. 약물 유발 루푸스가 의심될 때 우선 조치는?

## 선택지

A. 히드랄라진을 중단하고 장기 침범과 경과를 평가한다
B. 같은 약을 유지하고 항히스톤 항체만 추적한다
C. 히드랄라진을 증량한다
D. 원인약을 유지하면서 장기 고용량 면역억제를 시작한다

## 해설


증상과 약 복용의 시간 관계가 맞으면 의심 약을 중단한다. 항히스톤 항체는 단서일 뿐 단독 확진 검사가 아니며, 신장·폐 침범이 있으면 다른 약물 관련 혈관염도 살핀다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009738 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: hydralazine-DIL anti-histone A의 연관은 유지하되 ANA음성이 비전형임과 항체 단독확정 한계를 추가.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009738
- https://www.ncbi.nlm.nih.gov/books/NBK441889/
