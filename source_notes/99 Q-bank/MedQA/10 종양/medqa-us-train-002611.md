---
type: qbank
schema_version: 1
id: medqa-us-train-002611
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1e9fd6f1b9af16b127784343652455734292206222336c27de9de7b4a56d769e
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "fibroadenoma"
  - "benign breast mass"
  - "mobile rubbery breast lesion"
related_disease_slugs:
  - MTMg67aA7J246rO8L-yErOycoOyEoOyihSAoRmlicm9hZGVub21hKS5tZA
question_type: management
difficulty: standard
answer: B
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

29세 여성의 유방 종괴가 3개월 사이 2.5 cm에서 4.5 cm로 커졌다. 중심침생검에서 섬유상피성 병변이 확인됐으나 엽상종양을 배제할 수 없다. 다음 조치는?

## 선택지

A. 정기 검진만 유지
B. 절제생검
C. 유방 전체 방사선치료
D. 타목시펜 투여 후 재평가

## 해설


빠르게 커지고 중심침생검으로 엽상종양을 배제할 수 없는 섬유상피성 병변은 절제해 전체 조직을 평가한다. 영상과 병리가 일치하는 단순 섬유선종의 관리와 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002611 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 섬유선종 진단은 유지하며 지방괴사 감별에 중요한 원문 외상력과 종괴 위치·안정성을 복원했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002611
- https://pubmed.ncbi.nlm.nih.gov/41123921/
