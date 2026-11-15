---
type: qbank
schema_version: 1
id: medqa-us-train-005336
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e8f896a6b9b26f72db87f0cbd274a53fa5157f9873105ab991656a4a2c765f92
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "위식도역류질환"
  - "경험적 양성자펌프억제제"
  - "속쓰림"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvU3VjcmFsZmF0ZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzowMyDshoztmZTquLAvUmFuaXRpZGluZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

40세 남성이 식후 흉골 뒤가 쓰리고 신물이 올라온다고 한다. 생활습관을 바꿔도 계속되지만 연하곤란, 체중 감소, 출혈은 없다. 우선 시도할 약물 치료는?

## 선택지

A. 위장관 운동촉진제 단독
B. 표준 용량 양성자펌프억제제(PPI)
C. 수크랄페이트 단독
D. 헬리코박터 제균 항생제

## 해설


경고 증상 없이 전형적인 속쓰림과 산 역류가 있으면 경험적 산 억제 치료를 시도할 수 있다. 치료에도 호전되지 않거나 경고 증상이 생기면 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 경고증상 없는 전형 GERD의 경험 PPI omeprazole B가 합리적이며 제균요법과 구별.
- https://doi.org/10.14309/ajg.0000000000001538

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005336
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12780910/
