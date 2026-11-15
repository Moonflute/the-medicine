---
type: qbank
schema_version: 1
id: medqa-us-train-003078
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b0dbf0ce4808ac0e9ba67dec2992a9e81c6ce91e5802b50b95406fce4bc0960e
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "placental abruption"
  - "antepartum hemorrhage"
  - "preterm labor"
  - "vaginal delivery with stable fetus"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-2DnOuwmOyhsOq4sOuwleumrCAoUGxhY2VudGFsIEFicnVwdGlvbikubWQ
  - MTIg7IKw6rO8L-yhsOq4sCDsp4TthrUgKFByZXRlcm0gTGFib3IpLm1k
  - MTIg7IKw6rO8L-yhsOyCsCAoUHJldGVybSBiaXJ0aCkubWQ
difficulty: complex
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
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 39주 산모가 소량의 질출혈과 지속적인 자궁 압통으로 분만실에 왔다. 태반조기박리가 의심되지만 혈압은 안정적이고 태아 심박은 정상이다. 자궁경부는 완전히 열렸고 두위가 +3에 있다. 가장 적절한 분만 방법은?

## 선택지

A. 지속적으로 감시하며 임박한 질식분만을 진행
B. 태아 감시를 중단하고 자궁수축을 억제
C. 경부가 완전히 열려도 모든 경우 제왕절개부터 준비
D. 폐성숙 스테로이드가 끝날 때까지 분만을 미룸

## 해설

태반조기박리는 산모와 태아 상태에 맞춰 신속히 분만한다. 둘 다 안정적이고 질식분만이 임박했다면 감시하에 진행할 수 있다. 악화되거나 신속한 질식분만이 어렵다면 응급 수술을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 태르부탈린을폐성숙약으로오분류;안정박리의분만방법조건명시.
- https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/antepartum-haemorrhage-green-top-guideline-no-63/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003078
