---
type: qbank
schema_version: 1
id: medqa-us-train-004410
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4d5b2b4aae129f69dc2b4310b242adf871844ac6f74c7daf9b38a9ce77faeea9
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "지역사회획득 폐렴"
  - "HIV 감염"
  - "AIDS"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
  - MDIg7Zi47Z2h6riwL-ygle2YlSDtj5DroLQgKFR5cGljYWwgUG5ldW1vbmlhKS5tZA
question_type: diagnosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

정맥주사 약물 사용의 원격 병력과 AIDS 과거력이 있는 50세 남성이 몇 주 동안 지속된 가래 섞인 기침과 미열로 일차진료를 받으러 왔다. 평소에는 건강했지만 서서히 이런 증상이 생겼다. '정상'으로 돌아갈 수 있도록 항생제를 처방받고 싶어 한다. 가족력으로 심혈관질환과 당뇨병이 있다. 매일 항바이러스제와 종합비타민을 복용한다. 심박수는 분당 90회, 호흡수는 분당 19회, 혈압은 135/85 mm Hg, 체온은 38.3°C (100.9°F)이다. 신체검사에서 불편해 보인다. 흉부 진찰에서 오른쪽 하엽에 경화가 보이고, 흉부 방사선촬영으로 오른쪽 하엽 폐렴이 확인된다. 다음 중 이 환자 폐렴의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 흡인성 폐렴
B. 지역사회획득 폐렴
C. 파종성 피부 감염
D. 폐 격리증

## 해설


급성/아급성 가래 기침·발열과 국소 폐엽 경화에서 선택지 중 지역사회획득폐렴 B가 가장 부합한다. 지역사회획득은 발생 환경의 분류이지 HIV가 만드는 단일 병원체 이름이 아니다. 본문에는 CD4나 viral load가 없어 면역억제가 진행되었다고 확정하지 않는다. 실제 미생물 원인·기회감염 위험과 흡인 위험을 임상적으로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004410 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 지역사회 폐엽성 폐렴 B 유지; CD4 불명 상태를 진행 면역억제로 단정한 설명 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004410
