---
type: qbank
schema_version: 1
id: medqa-us-train-008168
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1cfa8f6e701fff5172bb5367823ab33990cd3ceaf23f614fc4ca3900a8f67365
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Kaposi sarcoma"
  - "HHV-8"
  - "AIDS"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: diagnosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

52세 여성이 얼굴과 몸통의 발진, 야간 발한, 미열, 설사, 의도하지 않은 체중 감소로 내원했다. 노숙 중이며 정맥주사 약물 사용과 여러 성 파트너와의 무방비 성관계가 있다. 얼굴과 등에 경계가 뚜렷한 자주색 판과 구진이 보인다. 흉부 X선에서 미세한 망상 및 간질성 변화, CD4+ 수 50/mm³, 원문에 'HIV에 대한 RPR 양성'으로 기재되어 있으나 RPR은 HIV 진단검사가 아니다. 피부 병변의 가장 가능성 높은 원인은?

## 선택지

A. 사람 알파헤르페스바이러스 3형(HHV-3)
B. HHV-8 감염
C. HHV-5 감염
D. HHV-6 감염

## 해설


자주색 경계 뚜렷한 판/구진과 면역저하 맥락은 Kaposi육종을 시사하여 HHV8 B가 가장 관련된다. 실제 피부 진단은 조직검사로 평가한다. 원문 ‘positive RPR for HIV’는 검사 오류 표현이다. RPR은 매독 관련 비트레포네마 검사이지 HIV 검사 또는 viral load가 아니므로 적절한 HIV Ag/Ab·확인 알고리즘을 적용해야 한다. 이 잘못된 표기를 사실인 HIV 확진 근거로 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008168 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문에도 있는 HIV용 RPR이라는 잘못된 검사명을 임의 HIV항체로 바꾸지 않고 오류를 명시; Kaposi-HHV8 B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/hiv.htm
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7301a1.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008168
