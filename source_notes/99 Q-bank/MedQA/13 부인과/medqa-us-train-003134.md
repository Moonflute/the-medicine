---
type: qbank
schema_version: 1
id: medqa-us-train-003134
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:45c1d4446c4738cc5fbee5506245a262c94986d843e563c1f97dc67a2c9b6ea9
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "early intrauterine pregnancy"
  - "pregnancy of unknown location"
  - "beta-hCG discriminatory zone"
  - "repeat transvaginal ultrasound"
question_type: investigation
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
  - ZHJ1ZzowMyDshoztmZTquLAvTWlzb3Byb3N0b2wubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 여성이 일주일 동안 오심과 구토로 내원했다. 발열, 복통, 설사, 질 출혈은 없고 마지막 월경일을 기억하지 못한다. 경구피임약을 복용하지만 가끔 빼먹었고 2년 전 골반염을 항생제로 치료했다. 체온 37°C, 맥박 110회/분, 호흡수 16회/분, 혈압 118/75 mmHg이며 신체 및 골반검사는 정상이다. 소변 임신검사는 양성이고 혈청 β-hCG는 805 mIU/mL이다. 다음 중 진단에서 가장 적절한 다음 단계는?

## 선택지

A. 즉시 미소프로스톨 투여
B. 4일 후 질식 초음파
C. 자궁경부확장 및 소파술 예약
D. 즉시 메토트렉세이트 투여

## 해설

현재는 hCG 805만 있고 초음파를 이미 시행했다는 정보가 없다. 안정적이며 경고 증상이 없다면 선택지 중 수일 후 질식 초음파(B)로 위치·생존을 평가하는 것이 적절하다. 필요시 48시간 hCG 추적을 병행하고 단일 차별역값만으로 치료하지 않는다. 통증·출혈·실신이 생기면 예약일까지 기다리지 말고 즉시 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 시행되지않은초음파결과창작삭제 및원선지4일과해설48시간불일치수정.
- https://www.nice.org.uk/guidance/NG126/chapter/diagnosis-of-viable-intrauterine-pregnancy-and-of-tubal-ectopic-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003134
