---
type: qbank
schema_version: 1
id: medqa-us-train-001790
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4d28117a334e8b015a02289ffffd34d596f89ec7d841baacf97712a3151a2c88
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "aortic regurgitation"
  - "bicuspid aortic valve"
  - "early diastolic murmur"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDsl63rpZggKEFvcnRpYyBSZWd1cmdpdGF0aW9uKS5tZA
question_type: prevention
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

32세 남성의 심초음파에서 이첨 대동맥판과 상행 대동맥 확장이 확인됐다. 증상 없는 친형이 검사 필요성을 묻는다. 가족 평가로 적절한 것은?

## 선택지

A. 증상 없는 가족에게 흉부 단순 X선만 권한다
B. 심잡음이 생길 때까지 검사하지 않는다
C. 모든 가족에게 침습적 관상동맥조영술을 한다
D. 일차 친족에게 판막과 상행 대동맥을 보는 경흉부 심초음파를 권한다

## 해설


이첨 대동맥판과 대동맥 확장은 가족 내에서 나타날 수 있다. 일차 친족의 경흉부 심초음파로 판막 형태와 대동맥근·상행 대동맥 직경을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 32세의 초기 이완기 감쇠성잡음/진행 운동호흡곤란은 AR. 제시된 원인 중 선천 이첨판 D가 연령에 합당.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001790
- ACC/AHA 대동맥질환 진료지침: https://professional.heart.org/en/science-news/2022-guideline-for-the-diagnosis-and-management-of-aortic-disease
