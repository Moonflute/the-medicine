---
type: qbank
schema_version: 1
id: medqa-us-train-003306
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:84332c8bbc13d06872d12b2259e9bdf3c94c27b7240a96d99424152919c0f102
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "pituitary macroadenoma"
  - "nonfunctioning pituitary adenoma"
  - "hypogonadism"
  - "erectile dysfunction"
related_disease_slugs:
  - MDQg64K067aE67mEL-uHjO2VmOyImOyytCDsg5jsooUgKFBpdHVpdGFyeSBBZGVub21hKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ZSE6528642ULeycjOumrCDspp3tm4TqtbAgKFByYWRlci1XaWxsaSBTeW5kcm9tZSkubWQ
  - MjAg67mE64eo6riw6rO8L-uwnOq4sOu2gOyghCAoRXJlY3RpbGUgRHlzZnVuY3Rpb24pLm1k
question_type: diagnosis
difficulty: complex
answer: C
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

40세 남성이 5개월 동안 간헐적인 두통으로 내원했다. 양측 관자놀이가 아프고 아세트아미노펜으로 호전되지 않으며 복시를 포함한 시각장애가 있다. 오심, 온도불내성, 체중변화는 없고 창백해 보인다. 안과검사에서 양측 주변시야 저하가 있으며 조영 뇌 MRI에서 16×11×9 mm의 안장 내 종괴가 보인다. 추가 평가에서 다음 중 가장 가능성 높은 소견은?

## 선택지

A. 유즙분비
B. 거친 얼굴 특징
C. 발기부전
D. 복부 선조

## 해설

Macroadenoma 크기의 뇌하수체 종괴가 시신경교차를 압박하여 양측 주변시야 저하를 설명한다. 정상 뇌하수체 압박에 따른 gonadotropin 결핍 또는 PRL 증가로 남성의 발기부전 C가 나타날 수 있다. 다만 MRI 크기·외형만으로 비기능성 adenoma를 확정할 수 없으므로 PRL과 전반적 뇌하수체 기능을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 뇌하수체종괴의 ED C는 기능저하/고PRL에서 가능하나 MRI만으로 비기능성 종양 확정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003306
