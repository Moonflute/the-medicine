---
type: qbank
schema_version: 1
id: medqa-us-train-008944
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:89eb0f575976f7ce6664b449f1f514faac85815f725e7da2dee74e71cd7e4f53
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "primary open-angle glaucoma"
  - "optic disc cupping"
  - "latanoprost"
  - "Primary open-angle glaucoma"
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xhdGFub3Byb3N0Lm1k
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL1RpbW9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 환자가 개방각 녹내장으로 진단됐다. 안압은 27 mmHg이고 치료할 시신경 손상과 시야결손이 있다. 2도 방실차단이 있다. 점안제를 선택한다면 어느 약이 더 적절한가?

## 선택지

A. 라타노프로스트
B. 티몰롤
C. 아트로핀
D. 트로피카미드

## 해설

라타노프로스트는 방수 유출을 늘리는 점안 치료다. 티몰롤은 점안제라도 전신 흡수되므로 2도 방실차단에서 피한다. 레이저 섬유주성형술도 환자에 따라 고려할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Latanoprost B의 약물 선택은 유지하고 2도 방실차단에서 timolol 금기 및 SLT와 LPI 차이를 보완.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng81/chapter/Recommendations
- 공식/학회 근거: https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/020963s015lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008944
- https://pubmed.ncbi.nlm.nih.gov/41665583/
