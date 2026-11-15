---
type: qbank
schema_version: 1
id: medqa-us-train-002381
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:534516e6ab61276cf12b2a46e0ff62172121dbd63c331ca741b3f6f281ae92fc
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "vasovagal syncope"
  - "situational syncope"
  - "electrocardiogram"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2YiOq0gOuvuOyjvOyLoOqyveyEsSDsi6Tsi6AgKFZhc292YWdhbCBTeW5jb3BlKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 남성이 수술을 참관하며 오래 서 있다가 열감과 식은땀을 느낀 뒤 몇 초간 의식을 잃었다. 곧 회복했고 진찰과 기립혈압은 정상이다. 가족 중 25세에 원인 없이 급사한 사람이 있다. 초기 검사로 가장 적절한 것은?

## 선택지

A. 뇌파 검사
B. 12유도 심전도
C. 두부 CT
D. 틸트테이블 검사부터 시행

## 해설


상황과 전구증상은 반사성 실신에 가깝지만 젊은 급사 가족력이 있어 심장성 원인도 확인해야 한다. 초기 평가는 병력, 진찰, 기립혈압과 12유도 심전도로 시작한다. 심장성 위험 단서에 따라 심초음파와 추가 부정맥 평가를 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반사실신 양상이지만 원문 삼촌25세 돌연사 가족력 누락을 복원. 최초 실신 평가 ECG B를 유지.
- https://academic.oup.com/eurheartj/article/39/21/1883/4939241

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002381
- https://k-hrs.org/expert/guide/faint
