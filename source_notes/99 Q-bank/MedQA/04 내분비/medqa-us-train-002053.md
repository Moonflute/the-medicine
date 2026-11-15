---
type: qbank
schema_version: 1
id: medqa-us-train-002053
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e36fe0246e777b9bdc98002f7e182c52d315d5a0f7565a7e920a5993fbd7996c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "constitutional growth delay"
  - "short stature"
  - "delayed bone age"
  - "growth hormone deficiency"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7LK07KeI7ISxIOyEseyepSDrsI8g7IKs7LaY6riwIOyngOyXsCAoQ29uc3RpdHV0aW9uYWwgRGVsYXkgb2YgR3Jvd3RoIGFuZCBBZG9sZXNjZW5jZSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCA7Iug7J6lIChTaG9ydCBTdGF0dXJlKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv6rCA7KGx7ISxIOuLqOyLoOymnSAoRmFtaWxpYWwgU2hvcnQgU3RhdHVyZSkubWQ
question_type: diagnosis
difficulty: standard
answer: A
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

15세 남학생이 키 5백분위수지만 지난 몇 년 동안 비슷한 백분위수를 따라 자랐다. 사춘기가 최근 시작됐고 골연령은 12세다. 아버지도 고등학교 후반에 키가 많이 컸다. 가장 가능성 높은 설명은?

## 선택지

A. 체질성 성장·사춘기 지연
B. 가족성 저신장
C. 일차성 갑상선기능저하증
D. 성장호르몬 결핍

## 해설

안정된 성장 경과, 지연된 골연령과 사춘기, 비슷한 가족력은 체질성 지연을 지지한다. 성장 속도가 떨어지거나 사춘기가 진행하지 않으면 다른 원인을 재평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 사춘기·골연령 지연은 체질성 성장지연 A. 해설의 5세 키 정점 설명은 근거 없음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002053
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8016789/
