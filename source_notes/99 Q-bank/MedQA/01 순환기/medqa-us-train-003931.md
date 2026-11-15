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
question_type: diagnosis
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

40세 여성이 출산 4주 뒤 기좌호흡과 다리 부종으로 내원했다. 경정맥이 팽창하고 양쪽 폐기저부에 수포음이 들린다. 심초음파는 전반적인 좌심실 수축기능 저하와 박출률 38%를 보인다. 과거 심장질환은 없고 폐색전증, 중증 판막질환, 심근허혈 등 다른 원인은 평가에서 확인되지 않았다. 가장 가능성 높은 진단은?

## 선택지

A. 임신 관련 생리적 호흡곤란
B. 폐색전증에 의한 우심실 부전
C. 대동맥판협착
D. 주산기 심근병증

## 해설

임신 말기 또는 출산 후 수개월 내 새 심부전이 발생하고 좌심실 박출률이 45% 미만이며 다른 원인이 없으면 주산기 심근병증을 의심한다. 좌심실 확장은 동반될 수 있지만 진단에 필수는 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: PPCM의 D는 가능한 특징이나 모든 산후EF저하를 확장으로 정의하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003931
- https://academic.oup.com/eurheartj/article/46/43/4462/8234487
