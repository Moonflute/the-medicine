---
type: qbank
schema_version: 1
id: medqa-us-train-006979
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3468f98b0664809986f730c987f4a6b5cb63f91384de643927bfa412104e0b15
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "개방각 녹내장"
  - "시신경유두 함몰"
  - "안압"
  - "Infantile esotropia"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 환자는 통증 없이 주변 시야가 좁아진다. 전방각은 열려 있고 반복 안압은 15–17 mmHg다. 시신경테가 아래쪽에서 얇아졌고 대응하는 위쪽 활모양 시야결손이 반복된다. 가장 가능성 높은 진단은?

## 선택지

A. 정상안압 녹내장
B. 연령관련 황반변성
C. 급성 폐쇄각 녹내장
D. 탈수초성 시신경염

## 해설

안압이 통상적인 범위여도 시신경테 손상과 이에 대응하는 반복 시야결손이 있으면 정상안압 녹내장을 고려한다. 다른 시신경병증도 감별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 유두 함몰에 근거한 C는 유지하되 본문에 없는 시야 결손을 만들어 넣지 않고 함몰비만으로 확진하지 않음을 명시.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006979
- https://pubmed.ncbi.nlm.nih.gov/41665583/
