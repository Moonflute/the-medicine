---
type: qbank
schema_version: 1
id: medqa-us-train-006416
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ec9f38b02d66d1a986706f074025dcac8172ecd4c99b8e91d8ce7208ec9cdcba
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "일차 매독"
  - "매독 하감"
  - "트레포네마 팔리둠 감염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-unpOuPhSAoU3lwaGlsaXMpLm1k
question_type: management
difficulty: complex
answer: D
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
---

# MedQA US 임상문제

## 문제

멕시코 출신의 26세 이민자가 신체검사를 위해 내원했다. 몇 주 전 음경에 병변이 생겼다가 수주 후 사라졌다고 한다. 통증이 없었고 불편하지도 않았다. 현재는 특별한 증상이 없다. 체온은 97.9°F(36.6°C), 혈압은 139/91 mmHg, 맥박은 분당 87회, 호흡수는 분당 14회, 실내 공기에서 산소포화도는 98%이다. 신체진찰은 정상이고 발진도 없다. VDRL과 FTA-ABS 검사가 모두 양성이다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 아시클로버
B. 아지트로마이신과 세프트리악손
C. 치료가 필요하지 않음
D. 페니실린

## 해설


무통성 생식기 궤양이 자발 소실된 뒤 두 종류 매독 혈청검사가 양성이며 치료 병력이 없어 초기 매독에 대한 penicillin D가 적절하다. 궤양 소실은 균 제거를 뜻하지 않는다. 병기·신경/안과 증상·치료력에 맞춰 제형/용량·기간을 정하고 혈청역가를 추적한다. 이 환자는 남성이므로 임신 가능 연령을 치료 근거로 드는 것은 사례와 무관하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006416 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 남성 환자에 임신 가능 연령을 근거로 penicillin을 설명한 오연결 교정; D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/syphilis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006416
