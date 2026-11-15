---
type: qbank
schema_version: 1
id: medqa-us-train-007515
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:062c46c94729162452ad84084b83f5c65ccd3502422de008143a51c04cc95e1e
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁내막 과형성"
  - "비정형 없는 단순 과형성"
  - "프로게스틴 치료"
  - "폐경 후 출혈"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-u5hOygleyDgSDsnpDqtoEg7Lac7ZiIIChBYm5vcm1hbCBVdGVyaW5lIEJsZWVkaW5nKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

폐경 후 출혈을 평가한 62세 여성의 자궁내막 생검에서 비정형 없는 증식증이 확인됐다. 수술보다 약물 치료를 원하고 자궁강 변형이나 장치 삽입 금기는 없다. 1차 치료와 추적은?

## 선택지

A. 질 에스트로겐을 투여하고 증상만 확인
B. 레보노르게스트렐 자궁내장치를 사용하고 자궁내막 생검으로 추적
C. 아로마타제 억제제를 투여하고 초음파만 추적
D. 생검이 비정형이 아니므로 추가 평가 없이 퇴원

## 해설


비정형이 없는 증식증에서 레보노르게스트렐 자궁내장치는 우선 약물 치료다. 사용이 어렵다면 연속 경구 프로게스틴도 가능하며, 추적 생검으로 반응을 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007515
- https://www.rcog.org.uk/media/knmjbj5c/gtg_67_endometrial_hyperplasia.pdf
