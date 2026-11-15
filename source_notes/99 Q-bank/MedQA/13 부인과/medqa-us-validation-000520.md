---
type: qbank
schema_version: 1
id: medqa-us-validation-000520
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:30d6c79da54fc80a6a6bb2e1d6df58700ae6ec4389b63367f1262be9fb8795bf
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "질 내 이물"
  - "소아 질분비물"
  - "질 세척"
  - "Vaginal foreign body"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 여아에게 한 달째 악취가 나는 혈성 질분비물이 있다. 질 입구 가까이에 부드러운 종이 조각이 보이고, 심한 출혈이나 복통은 없다. 가장 적절한 처치는?

## 선택지

A. 소아 진료에서 부드럽게 제거하거나 세척하고 필요시 전문 진찰을 의뢰한다
B. 메트로니다졸만 투여하고 재검하지 않는다
C. 질 입구에서 보이지 않을 때까지 면봉으로 밀어 넣는다
D. 다른 평가 없이 국소 에스트로겐을 처방한다

## 해설

악취성 혈성 분비물은 소아 질 이물을 의심하게 한다. 제거가 어렵거나 깊으면 소아부인과에 의뢰한다. 병력과 안전도 함께 평가하며 정상 외관만으로 학대를 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 소아 질 이물의 식염수 세척 A 유지. 정상 처녀막만으로 학대 가능성을 배제하지 않도록 보완.
- https://www.seslhd.health.nsw.gov.au/sites/default/files/groups/POWHED/docs/Tintinalli_Summary/Obs_Gynae/VULVOVAGINITIS.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000520
- https://www.rch.org.au/clinicalguide/guideline_index/Vulval_and_Vaginal_Conditions/
