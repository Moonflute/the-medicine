---
type: qbank
schema_version: 1
id: medqa-us-train-005360
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e4b07418dd2ff67bb83a7e1667e5369b7440b4047caadae170fd5dd4e4dc2a7e
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심근경색 후 좌심실 재형성"
  - "심부전 예방"
  - "ACE 억제제"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwLyjquInsgqzspp3tm4TqtbApLm1k
  - MDEg7Iic7ZmY6riwL-unjOyEsSDsi6zrtoDsoIQgKOuwley2nOuloCDqsJDshowpIChDaHJvbmljIEhlYXJ0IEZhaWx1cmUgd2l0aCBSZWR1Y2VkIEVqZWN0aW9uIEZyYWN0aW9uIChIRnJFRikpLm1k
question_type: prevention
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlnb3hpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlsdGlhemVtLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

74세 여자가 심근경색 후 8개월째 추적 진료를 받는다. 퇴원 당시 심장 구조와 박출률은 정상이었으나 최근 좌심실 확장과 박출률 40%가 확인되었다. 다음 중 심실 기능 악화를 예방했을 가능성이 가장 높은 약물은?

## 선택지

A. 디곡신
B. 딜티아젬
C. 에날라프릴
D. 아토르바스타틴

## 해설

MI 후 확장·EF감소에서 enalapril C는 RAAS 억제로 불리한 재형성을 줄일 수 있다. 다른 이차예방·심부전 표준치료를 대체하는 유일한 약은 아니다. 원문 EDV300→370mL·EF51→40%를 계속 정상 구조로 해석하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MI 후 enalapril C의 항재형성 효과는 유지하되 유일 최강예방약으로 일반화하지 않음.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005360
