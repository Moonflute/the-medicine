---
type: qbank
schema_version: 1
id: medqa-us-validation-000581
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0a4c51d8d01fae50a35f316d59294243893abe8cd10ce884242be6c4c8b39e1f
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "겐타마이신 이독성"
  - "전정기능 장애"
  - "양측 전정병증"
  - "Gentamicin ototoxicity"
question_type: diagnosis
related_disease_slugs: []
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

정맥 겐타마이신을 투여 중인 환자가 걸을 때 물체가 흔들려 보인다고 한다. 앉아 정면을 보면 괜찮지만, 양쪽 머리충동검사에서 교정 단속운동이 보인다. 가장 의심되는 원인은?

## 선택지

A. 한쪽 후반고리관 이석
B. 급성 중이염에 의한 전음성 난청
C. 발작 사이 메니에르병
D. 약물 유발 양측 전정기능 저하

## 해설

고개를 움직일 때 시야가 흔들리고 양쪽 전정안반사가 저하되면 양측 전정기능 장애를 의심한다. 겐타마이신은 가능한 원인이므로 약제를 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 머리 움직임에 물체가 흔들려 보이는 oscillopsia를 회전성 안구진동으로 잘못 번역한 해설 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000581
- https://pubmed.ncbi.nlm.nih.gov/29081426/
