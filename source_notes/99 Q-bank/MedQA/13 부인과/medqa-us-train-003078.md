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

임신 35주인 37세 여성(임신 3회, 출산 2회)이 한 시간 전 시작된 하복부와 허리 통증, 질 출혈로 응급실에 왔다. 산전 진료를 받지 않았고 이전 임신과 질식분만은 합병증이 없었다. 20년 동안 하루 한 갑의 담배를 피우다가 임신 중에는 이틀에 반 갑으로 줄였다. 맥박 80회/분, 호흡수 16회/분, 혈압 130/80 mmHg이다. 자궁은 압통이 있고 2분마다 규칙적인 고긴장 자궁수축이 느껴진다. 외음부와 질 입구, 양쪽 허벅지 안쪽에 어두운 피가 보인다. 태아는 두정위이며 태아 심박수 158회/분으로 반응성이 있고 감속은 없다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 질식분만
B. 계획 제왕절개
C. 베타메타손 투여
D. 테르부탈린 투여

## 해설

통증성 출혈·긴장 자궁은 태반조기박리를 시사한다. 산모·태아가 안정적이고 질식분만이 가능하면 감시하 A를 진행할 수 있지만 출혈·경부·태아 상태에 따라 응급수술로 전환한다. 테르부탈린은 수축억제제이고 베타메타손이 폐성숙 약물이다. 필요한 분만을 스테로이드 완료 때문에 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 태르부탈린을폐성숙약으로오분류;안정박리의분만방법조건명시.
- https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/antepartum-haemorrhage-green-top-guideline-no-63/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003078
