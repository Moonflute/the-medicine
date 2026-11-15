---
type: qbank
schema_version: 1
id: medqa-us-train-009195
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b00ae26520a1b40133aaa78f292e3b37a5baf2437ecffc0ace525886dad45b0a
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "primary amenorrhea"
  - "일차성 무월경"
  - "hypogonadotropic hypogonadism"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-ustOyblOqyvSAoQW1lbm9ycmhlYSkubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

14세 여아에게 유방 발달과 초경이 없다. 최근 두통이 진행하고 양옆 시야가 좁아졌다. 에스트라디올과 FSH·LH가 모두 낮고 임신검사는 음성이다. 원인 확인을 위해 우선 할 영상검사는?

## 선택지

A. 난관 조영 검사
B. 안장부 조영 MRI
C. 골반 조영 CT
D. 손목 골연령 촬영만 시행

## 해설

낮은 성선자극호르몬은 중추성 사춘기 지연을 시사한다. 진행하는 두통과 양측 시야 변화가 있으면 시신경 교차를 압박하는 안장부 병변을 영상으로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 13세 유방 발달 부재와 낮은 성선자극호르몬·두통에서 중추성 평가 MRI C 유지. 초경 부재만으로 병적이라고 한 설명 보완.
- https://www.asrm.org/practice-guidance/practice-committee-documents/current-evaluation-of-amenorrhea/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009195
- https://onlinelibrary.wiley.com/doi/10.1111/cen.15097
