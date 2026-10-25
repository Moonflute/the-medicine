---
type: qbank
schema_version: 1
id: medqa-us-train-002239
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c0f639ed29b844768a58a74a66dd26f67e76b1843a17ffea2064477e908e457f
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "secondary syphilis"
  - "Jarisch-Herxheimer reaction"
  - "benzathine penicillin"
  - "ibuprofen"
  - "Syphilis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-unpOuPhSAoU3lwaGlsaXMpLm1k
question_type: adverse_effect
difficulty: complex
answer: B
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUGhlbnlsZXBocmluZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
---

# MedQA US 임상문제

## 문제

34세 남성이 1주간의 발열과 전신 피로로 내원했다. 어제 전신에 발진이 생겼다. 2개월 전 통증 없는 음경 병변이 있었으나 몇 주 후 치료 없이 사라졌다. 천식이 있으며 알부테롤 흡입기를 사용한다. 현재 세 명의 파트너와 성생활을 하고 콘돔은 일관되게 사용하지 않는다. 몸통, 사지, 손바닥, 발바닥을 침범하는 미만성 반구진성 발진이 있다. HIV 검사는 음성이고 RPR과 FTA-ABS는 양성이다. 근육주사 벤자틴 페니실린 G를 투여받은 2시간 후 두통, 근육통, 오한을 호소한다. 체온 38.8°C, 맥박 105회/분, 호흡 24회/분, 혈압 98/67 mmHg이다. 다음 중 가장 적절한 약물치료는?

## 선택지

A. 세프트리악손
B. 이부프로펜
C. 에피네프린
D. 페닐에프린

## 해설


매독 치료 후 2시간 내 발열·오한·두통·근육통은 Jarisch–Herxheimer 반응에 합당하고 해열진통제인 ibuprofen B로 증상을 완화할 수 있다. 이는 penicillin 알레르기와 구별한다. 새 두드러기·기도/호흡 증상·순환 허탈이 생기면 아나필락시스 등을 재평가해야 한다. Ceftriaxone은 cephalosporin 항생제이나 이 반응 완화를 위한 추가 항생제가 아니다. Epinephrine은 아나필락시스의 일차약이며 phenylephrine을 대체 일차약으로 보아서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002239 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Jarisch–Herxheimer 반응의 해열 진통 B 유지. Ceftriaxone이 항생제가 아니라는 오류와 phenylephrine을 아나필락시스 치료로 보는 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/syphilis.htm
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002239
