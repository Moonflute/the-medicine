---
type: qbank
schema_version: 1
id: medqa-us-train-003571
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2742c51e4b62edf7daea28364806e0ab307610b975a6366bb430bdc0db32be10
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Kallmann syndrome"
  - "hypogonadotropic hypogonadism"
  - "cryptorchidism"
  - "delayed puberty"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yeoOuzteqzoO2ZmOymnSAoQ3J5cHRvcmNoaWRpc20pLm1k
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 남아가 성장 급증이 아직 나타나지 않아 내원했다. 부모는 자주 샤워를 잊고 자신의 체취를 알아차리지 못하는 점도 걱정한다. 키는 60백분위수에서 25백분위수로 떨어졌고, 액와 및 음모가 드물며 고환은 양쪽 2 mL, Tanner 1단계였다. 영아기에 양측 잠복고환 고정술과 구개열 수술을 받았다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 고프로락틴혈증
B. 갑상샘기능저하증
C. 원발성 성선기능저하증
D. 칼만 증후군

## 해설


성선기능 저하와 후각 결손, 고환 미발달, 과거 구개열·잠복고환 고정술 병력이 있는 경우 Kallmann 증후군이 의심된다. 이는 시상하부 GnRH 결핍과 후각신경 발달 이상이 동반된 질환이다. 따라서 정답은 Kallmann 증후군이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Kallmann 진단의 후각저하를 해설이 제시하지만 본문에서 빠짐. 체취를 인식 못한다는 원문 단서 복원.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003571
