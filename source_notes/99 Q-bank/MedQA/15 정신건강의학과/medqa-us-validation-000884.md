---
type: qbank
schema_version: 1
id: medqa-us-validation-000884
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2b9a71409709f324adda4fa16b9d2f92807aa83c60ed31b3876b9ba00735d104
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경성 폭식증"
  - "폭식 후 보상행동"
  - "치아 부식"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEse2PreyLneymnSAoQnVsaW1pYSBOZXJ2b3NhKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 여아가 체중 증가를 걱정해 진료를 받으러 왔다. 뷔페에서 많이 먹은 후 죄책감을 느끼고, 과거 담배로 사지를 지진 적이 있다. 양쪽 이하선이 커져 있고 구강검사에서 치아 부식이 보이며 키 25백분위수, 체중 12백분위수, BMI 17백분위수이며 마지막 월경은 3주 전이었다. 가장 가능성 높은 진단은?

## 선택지

A. 주요우울장애
B. 신경성 폭식증
C. 신체이형장애
D. 신경성 식욕부진증

## 해설

폭식 양상과 체중 증가에 대한 걱정, 이하선 비대·치아 부식은 구토를 동반한 신경성 폭식증을 시사한다. 원문 BMI는 17백분위수로, 이 숫자를 BMI 17 kg/m²나 저체중 판정으로 오해해서는 안 된다. 단일 백분위수만 제시됐으므로 체중·BMI가 감소했다고도 단정하지 않는다. 실제로는 폭식·보상 행동의 빈도와 기간, 의학적 안전성을 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000884

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문의 BMI17백분위수를 저체중/BMI감소로 잘못 축약해 신경성 식욕부진증과 혼동시킨 번역·해설 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
