---
type: qbank
schema_version: 1
id: medqa-us-train-004086
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fcb9c646e9a28231955f8ae8468a64b125daed84433c205c5ee206e70200d848
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "칸나비스 구토 증후군"
  - "대마 사용"
  - "온수 목욕으로 호전되는 구토"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-q4ieyEsSDspJHrj4Ug7LSd66GgIChHZW5lcmFsIE1hbmFnZW1lbnQgb2YgQWN1dGUgUG9pc29uaW5nKS5tZA
difficulty: complex
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

28세 남성이 수개월간 구토가 반복돼 응급실을 여러 번 찾았다. 오랫동안 대마를 자주 사용했고, 뜨거운 샤워를 하면 잠깐 덜하다. 다른 원인을 평가한 뒤 가장 중요한 재발 방지 조치는?

## 선택지

A. 뜨거운 샤워를 정기적으로 한다
B. 하루 물 섭취량을 크게 줄인다
C. 공복을 피하기 위해 제산제를 매일 먹는다
D. 대마 사용을 중단한다

## 해설

장기간 대마 사용과 반복 구토가 있고 중단했을 때 호전되면 칸나비노이드 구토증후군을 지지한다. 뜨거운 샤워의 효과는 일시적이며 재발 예방은 사용 중단이 핵심이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. CHS와 일반 cyclic vomiting syndrome을 동의어로 설명한 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004086
