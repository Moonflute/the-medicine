---
type: qbank
schema_version: 1
id: medqa-us-train-002154
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5150b1f66de3e776b8d64ad698ec19d71800dbbb5423a4c0cb35e6806c09cbf1
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute rheumatic fever"
  - "streptococcal pharyngitis"
  - "rheumatic carditis"
  - "penicillin"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yCrOyKrOyVjOq3oCDsnbjrkZDsl7wgKFN0cmVwdG9jb2NjYWwgUGhhcnluZ2l0aXMpLm1k
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

15세 여아가 4일간의 권태감, 관절통, 팔꿈치 위 결절성 종창, 미열, 가슴과 왼쪽 어깨의 발진으로 내원했다. 2주 전 인후통이 있었고 점차 호전되었지만 검사를 받지는 않았다. 약 1주 후 추적 진료를 받았으며, 이때 심장검사에서 왼쪽 옆으로 누운 자세에서 심첨부에 가장 잘 들리는 방사 없는 후기 이완기 잡음이 들렸다. 다음 중 이 환자 치료에서 가장 적절한 단계는?

## 선택지

A. 페니실린 치료
B. 증상 완화를 위한 NSAID
C. 대동맥판막 치환술
D. 승모판막 성형술

## 해설


선행 인두염 뒤 관절증상·피하결절·발진·심잡음은 급성 류마티스열과 심장 침범을 시사한다. 선행 연쇄상구균 박멸을 위한 penicillin A와 이후 이차예방을 계획한다. NSAID는 관절통 등 염증 증상 완화에 사용할 수 있으나 항균 예방을 대신하지 않는다. 심초음파로 판막 및 심장 침범을 평가하며 이 자료만으로 즉시 판막 수술을 선택하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002154 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 류마티스열의 균 박멸 및 이차예방을 위한 penicillin A 유지; NSAID·심장평가를 대체하는 유일 치료라는 해석 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://professional.heart.org/en/science-news/-/media/PHD-Files-2/Science-News/Clinical-Update-Slides/2021-AHA-Clinical-Update-Valvular-Heart-Disease-PDF.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002154
