---
type: qbank
schema_version: 1
id: medqa-us-train-003931
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a024678e2ffd2c4e07acf34f3e98c896addb9c2b5ca253e4150d26b005f1eda3
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "peripartum cardiomyopathy"
  - "dilated cardiomyopathy"
  - "reduced ejection fraction"
  - "ventricular dilation"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOq3vOuzkeymnSAoQ2FyZGlvbXlvcGF0aHkpLm1k
  - MDEg7Iic7ZmY6riwL-2ZleyepeyEsSDsi6zqt7zrs5Hspp0gKERpbGF0ZWQgQ2FyZGlvbXlvcGF0aHkpLm1k
  - MDEg7Iic7ZmY6riwL-unjOyEsSDsi6zrtoDsoIQgKOuwley2nOuloCDqsJDshowpIChDaHJvbmljIEhlYXJ0IEZhaWx1cmUgd2l0aCBSZWR1Y2VkIEVqZWN0aW9uIEZyYWN0aW9uIChIRnJFRikpLm1k
question_type: association
difficulty: simple
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

출산 4주 후인 40세 여성이 호흡곤란으로 내원했다. 경정맥압 상승, S3, 폐수포음, 양측 발부종이 있고 심초음파에서 박출률은 38%였다. 가장 가능성 높은 진단의 특징은?

## 선택지

A. 심근비대
B. 심근경색
C. 심낭염
D. 심실 확장

## 해설

출산4주 후 심부전과 EF38%는 peripartum cardiomyopathy를 의심하게 한다. 선택지 중 심실 확장 D가 흔한 확장성/수축기부전 양상에 부합한다. 다른 원인을 배제해야 하며, PPCM은 좌심실이 확장되지 않아도 발생할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: PPCM의 D는 가능한 특징이나 모든 산후EF저하를 확장으로 정의하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003931
