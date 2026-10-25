---
type: qbank
schema_version: 1
id: medqa-us-train-003761
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f6d2a4128945ecd5c27034adb9ea0d1ea6341c821a689d9cac085746f12a9b7
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "preterm labor"
  - "fetal neuroprotection"
  - "antenatal corticosteroid"
  - "magnesium sulfate"
question_type: management
related_disease_slugs:
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
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 31주인 28세 G2P1 여성이 3시간간 지속된 규칙적인 수축과 골반 압박감으로 입원했다. 자궁경부는 2 cm 열렸고 양막은 온전하며 10분간 자궁수축 강도는 220 MVU였다. 이전에 34주 조산력이 있다. 다음 중 가장 적절한 약물치료는?

## 선택지

A. 황산마그네슘과 베타메타손
B. 옥시토신과 황산마그네슘
C. 프로게스테론과 테르부탈린
D. 테르부탈린과 옥시토신

## 해설

31주에 수축과 자궁경부 개대가 있어 조산이 우려된다. 베타메타손은 태아 폐 성숙을 돕고, 32주 미만에 임박한 출산이 예상되면 황산마그네슘은 태아 신경보호를 위해 사용한다(A). MgSO4를 진통제나 확립된 장기 진통억제제로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 31주 조산에서 MgSO4 신경보호·스테로이드 폐 성숙 A 유지. 항생코르티코스테로이드 오역 및 Mg의 진통제 표현을 교정.
- https://www.acog.org/womens-health/faqs/preterm-labor-and-birth

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003761
