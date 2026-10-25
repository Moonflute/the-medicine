---
type: qbank
schema_version: 1
id: medqa-us-train-003066
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e330dcecc82ef0444f7fa8159c2af8f84034e5f310d74e7de11cd46b26e5b888
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Klinefelter syndrome"
  - "47,XXY"
  - "Barr body"
  - "hypergonadotropic hypogonadism"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YG065287J247Y6g7YSwIOymne2bhOq1sCAoS2xpbmVmZWx0ZXIgU3luZHJvbWUpLm1k
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

35세 남성이 아내와 함께 난임 전문의를 찾았다. 2년 넘게 임신을 시도했지만 성공하지 못했고 아내의 종합 산부인과 검사는 모두 정상이었다. 특별한 병력은 없지만 또래 남성보다 성욕이 낮다. 키 6피트 3인치의 마른 체격이고 약간의 여성형 유방과 작고 발달이 덜 된 고환이 있다. 검사에서 LH와 FSH가 상승하고 무정자증이 보인다. 다음 중 이 남성 불임의 가장 가능성 높은 원인은?

## 선택지

A. 염소 통로 결핍
B. 원발성 섬모운동이상증
C. 안드로겐 불감증
D. 바소체의 존재

## 해설

키 큰 남성의 작은 고환·여성형 유방·높은 LH/FSH·무정자증은 47,XXY Klinefelter 증후군을 시사한다. 추가 X의 비활성화로 Barr body가 관찰될 수 있어 D가 이를 가리킨다. 불임은 고환 기능저하·정세관 손상에 따른 것이며 Barr body 자체가 고환을 손상시키는 원인은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Klinefelter의 Barr body는 추가X 비활성화 표지이지 그 자체가 불임 기전은 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003066
