---
type: qbank
schema_version: 1
id: medqa-us-train-003439
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:085b8f24c950449a3ea6850156d7171a2c61205310a54f6a2ec8c57721da1418
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "preterm premature rupture of membranes"
  - "late preterm birth"
  - "fetal lung maturity"
  - "betamethasone"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yhsOq4sCDslpHrp4kg7YyM7IiYIChQcmVtYXR1cmUgUnVwdHVyZSBvZiBNZW1icmFuZXMpLm1k
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

임신 35주인 여성이 저녁 식사 중 시작된 복통과 질에서 맑은 액체가 갑자기 흘러나온 증상으로 응급실에 왔다. 몇 분마다 통증성 복부 수축이 있었다. 검사에서 혈액검사는 정상이었고 레시틴/스핑고미엘린 비율은 1.5였다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 베타메타손
B. 테르부탈린
C. RhoGAM
D. 기대요법

## 해설

35주에 양막파열과 규칙적 수축이 있어 7일 이내 조산 위험이 높다. 이전 코르티코스테로이드 투여가 없는 등 적격 조건을 확인하고 후기 조산 스테로이드를 고려하므로 A가 최선이다. L/S 1.5만으로 처치를 결정하지 않는다. 스테로이드 완료를 위해 필요한 분만을 지연하거나 이 주수에 일률적으로 진통억제제를 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 35주 조기분만 위험의 베타메타손 A 유지. L/S 비율 해석 오류와 일률적 항생제 병용 설명을 교정.
- https://publications.smfm.org/publications/427-society-for-maternal-fetal-medicine-consult-series-58/
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/08/antenatal-corticosteroid-therapy-for-fetal-maturation

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003439
