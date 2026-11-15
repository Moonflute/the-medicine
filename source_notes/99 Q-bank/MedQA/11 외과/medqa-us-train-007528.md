---
type: qbank
schema_version: 1
id: medqa-us-train-007528
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7289573cb83257040463a9c06085dc2c4d2adb859829221d31954f7484e243f5
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "이차성 림프부종"
  - "유방암 수술 후 림프부종"
  - "혈관화 림프절 이식"
  - "비함요성 부종"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
difficulty: standard
answer: A
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

59세 여성이 유방암 수술과 액와 림프절 곽청 후 같은 쪽 팔이 수개월 동안 커지고 무거워졌다. 혈전과 암 재발은 평가에서 배제됐고 발열·발적은 없다. 일상생활을 방해하는 림프부종의 초기 치료는?

## 선택지

A. 압박·운동·피부관리를 포함한 림프부종 재활
B. 장기간 고리이뇨제 투여
C. 증상이 진행할 때마다 항생제 투여
D. 재활치료 없이 바로 혈관화 림프절 이식

## 해설


유방암 치료 관련 림프부종은 적절한 압박과 운동, 피부관리를 포함한 재활이 기본이다. 수술은 충분한 보존치료 후에도 증상이 남는 일부 환자에서 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007528 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 액와 림프절절제/방사선 후 만성 이차 림프부종에서 보존치료에 반응 없을 때 선택지 C 혈관화 림프절이식은 전문평가 후 가능한 수술 옵션이다. 원문·해설 대조 및 ISL 합의자료 확인.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://isl.arizona.edu/sites/default/files/2024-11/THE-DIAGNOSIS-AND-TREATMENT-OF-PERIPHERAL-LYMPHEDEMA-2023-CONSENSUS-DOCUMENT-OF-THE-INTERNATIONAL-SOCIETY-OF-LYMPHOLOGY.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007528
- https://pubmed.ncbi.nlm.nih.gov/39207406/
