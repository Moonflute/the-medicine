---
type: qbank
schema_version: 1
id: medqa-us-test-000578
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ef940e94e9bcc63d8d0027c73d349bab92f3a37b6db3f5335786e24496dd9596
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "우심부전"
  - "삼첨판 역류"
  - "폐고혈압"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqzoO2YiOyVlSAoUHVsbW9uYXJ5IEh5cGVydGVuc2lvbikubWQ
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 하지부종과 오른쪽 윗배 불편감으로 내원했다. 경정맥이 팽창하고 간이 울혈되어 있으며 좌측 아래 흉골연의 범수축기 잡음이 들숨 때 더 커진다. 가장 가능성 높은 판막 이상은?

## 선택지

A. 승모판 역류
B. 삼첨판 역류
C. 대동맥판 협착
D. 폐동맥판 역류

## 해설

들숨 때 우심으로 돌아오는 혈액이 늘면서 삼첨판 역류 잡음이 커질 수 있다. 좌측 아래 흉골연에 들리는 범수축기 잡음과 전신 정맥 울혈이 단서다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 우심부전과 삼첨판역류의 연결은 유지하되 TR가 폐고혈압의 원인이라는 역방향 설명 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000578
