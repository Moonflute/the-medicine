---
type: qbank
schema_version: 1
id: medqa-us-train-004265
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5526fcf92f736735b24d3bd8306cd3b3a8385b1ab619d800f53c4e358c21d112
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "하행 대동맥 박리"
  - "대동맥박리"
  - "에스몰롤"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
question_type: 임상증례 객관식
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXNtb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 남성이 갑자기 등 통증이 생겨 내원했다. CT에서 하행 대동맥에만 박리가 보인다. 혈압은 182/81 mmHg, 맥박 110회/분이며 파열·장기 관류장애가 없고 통증은 진통제로 조절됐다. 혈압과 대동맥 벽에 가해지는 충격을 줄이기 위해 먼저 시작할 치료는?

## 선택지

A. 경구 혈압약만 처방한 뒤 귀가
B. 혈관확장제 단독 정맥 투여
C. 합병증이 없어도 곧바로 개흉 수술
D. 정맥 에스몰롤을 감시하며 적정

## 해설

합병증이 없는 스탠퍼드 B형 박리는 감시하에 약물치료를 먼저 한다. 정맥 베타차단제로 심박수와 수축력을 낮추고, 혈압이 여전히 높으면 혈관확장제를 추가한다. 파열이나 장기 관류장애가 생기면 중재가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Esmolol은 직접혈관확장제가 아닌 β1차단제. 급성typeB anti-impulse D 기전 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004265
- ACC/AHA 대동맥질환 진료지침: https://professional.heart.org/en/science-news/2022-guideline-for-the-diagnosis-and-management-of-aortic-disease
