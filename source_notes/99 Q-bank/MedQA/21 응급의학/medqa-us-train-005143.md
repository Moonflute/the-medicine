---
type: qbank
schema_version: 1
id: medqa-us-train-005143
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:69b0688971269d28fc32212efe6754dfd8eb45167e0c50f9e194204d41ad3664
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "악성고열증"
  - "마취 유발 근강직"
  - "단트롤렌"
  - "Malignant hyperthermia"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

정형외과 수술을 위해 전신마취에서 회복 중이던 34세 여자가 2시간 후 발열, 저작근 강직과 개구장애가 발생했다. 체온 40.3°C, 혈압 78/50 mmHg, 맥박 128회/분, 호흡수 42회/분이며 혈청 칼륨 6.5 mEq/L, 동맥혈 pH 7.01, PCO₂ 78 mmHg이다. 재삽관 후 가장 적절한 약물치료는?

## 선택지

A. 사이프로헵타딘
B. 단트롤렌
C. 라베탈롤
D. 로라제팜

## 해설

마취 후 고열·저작근 강직·고탄산혈증·산증·고칼륨혈증은 악성고열을 시사한다. Dantrolene(B)은 골격근의 과도한 근소포체 칼슘 방출을 억제하는 약이며 베타차단제가 아니다. 유발 마취제 중단, 100% 산소 환기, 냉각과 산증·고칼륨혈증 치료를 함께 신속히 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Dantrolene을 베타차단제로 설명한 중대한 오류 교정.
- 공식/학회 근거: https://www.mhaus.org/healthcare-professionals/managing-a-crisis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005143
