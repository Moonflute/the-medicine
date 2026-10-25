---
type: qbank
schema_version: 1
id: medqa-us-train-006040
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b7aece5d9bde1171167b0aad45b6e3fea942a1dcac21da0af226eec3218e053f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "맥아들병"
  - "근육 포스포릴라아제 결핍"
  - "운동 유발 횡문근융해증"
question_type: diagnosis
related_disease_slugs:
  - MDUg7Iug7J6lL-2aoeusuOq3vOycte2VtOymnSAoUmhhYmRvbXlvbHlzaXMpLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 남아가 3개월 동안 지속된 심한 근육 경련과 통증으로 내원했다. 고등학교 미식축구팀 선발전에 참가하던 중 증상을 처음 느꼈다. 선발전 후 쉽게 피로해지고 10분 운동하면 심한 근육통과 부종이 생기지만 잠시 쉬면 호전되어 경기에 복귀할 수 있다. 2일 전 미식축구 후 적갈색 소변을 보았다. 가족력은 없고 건강해 보이며 활력징후와 신체·신경학적 검사는 정상이다. 혈청 크레아틴키나아제는 333 U/L이고 소변에서 혈액 2+, 단백 음성, 포도당 음성, 적혈구 음성, 백혈구 1~2/HPF이다. 다음 중 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 산성 말타아제 결핍
B. 디스트로핀 유전자 돌연변이
C. 중쇄 아실-CoA 탈수소효소 결핍
D. 근육 포스포릴라아제 결핍

## 해설

짧은 운동 후 근육통·경련과 휴식 후 호전되는 second-wind 양상, 적혈구 없이 소변 잠혈 양성인 미오글로빈뇨는 맥아들병을 시사한다. 근육 글리코겐 포스포릴라아제(D)는 글리코겐에서 포도당-1-인산을 떼어내는 효소이며 직접 ATP를 만드는 효소가 아니다. 결핍은 운동 중 에너지 공급을 제한하여 근육 손상을 일으킬 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 근육 포스포릴라아제를 직접 ATP 생성 효소로 잘못 정의한 해설을 글리코겐분해 단계로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006040
