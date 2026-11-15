---
type: qbank
schema_version: 1
id: medqa-us-train-002800
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d65e06bbea19b064efff882c1dcca6b7c20324a1e655a7d5b914522c2629f9dc
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Paget disease of bone"
  - "increased bone turnover"
  - "cortical thickening"
  - "elevated alkaline phosphatase"
related_disease_slugs:
  - MTMg67aA7J246rO8L-2MjOygnO2KuOuzkSAoUGFnZXQncyBEaXNlYXNlKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
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

67세 남성이 점점 심해지는 골반 통증으로 내원했다. ALP는 730 U/L이고 GGT, 칼슘, 인은 정상이다. 골반 X선에서 한쪽 장골이 커지고 피질이 두꺼워졌으며 용해와 경화 소견이 섞여 있다. 가장 가능성 높은 진단은?

## 선택지

A. 파제트 골병
B. 비타민 D 결핍 골연화증
C. 원발성 골다공증
D. 대퇴골두 무혈성 괴사

## 해설

국소 골 확장·피질 비후와 용해·경화가 섞인 소견, 골성 ALP 상승은 파제트 골병을 시사한다. 진단 후 필요하면 골스캔으로 침범 범위를 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. Paget 소견의 골재형성 증가를 유지하되 PTH450이 단순 Paget의 전형적 정상 결과가 아니라 별도 평가가 필요한 점 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002800
- https://doi.org/10.1002/jbmr.3657
