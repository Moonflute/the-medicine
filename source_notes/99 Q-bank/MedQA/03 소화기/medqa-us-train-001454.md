---
type: qbank
schema_version: 1
id: medqa-us-train-001454
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ed9e71ac5648b1ce1a79e7584c8d6259f6846b5c8e1d472aa9ec3dd5097f65b9
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Boerhaave syndrome"
  - "esophageal rupture"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rtYjrpbTtlZjruIwg7Kad7ZuE6rWwIChCb2VyaGFhdmUgU3luZHJvbWUpLm1k
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

51세 남성이 여러 차례 심하게 구토하다가 갑자기 심한 흉통과 숨참이 생겼다. 목에 피하기종이 만져지고 흉부 X선에서 종격동 기종이 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 말로리–바이스 열상
B. 자발성 기흉
C. 구토 후 식도 전층 파열(보어하브 증후군)
D. 급성 심낭염

## 해설


격렬한 구토 뒤 급성 흉통과 피하·종격동 기종은 식도 전층 파열의 단서다. 말로리–바이스 열상은 점막 파열로 주로 토혈이 나타나며 종격동 기종을 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 격렬한 구토 후 흉통·피하기종/종격동 공기는 전층 식도파열 C. 출혈 중심인 Mallory-Weiss 점막열상과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001454
