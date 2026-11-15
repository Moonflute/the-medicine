---
type: qbank
schema_version: 1
id: medqa-us-train-006677
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7af926e84a3b58b506229030f4ab06fa661c5d8f77c405ce10bafa4e248109a2
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "마르팡 증후군"
  - "대동맥근 확장"
  - "대동맥 박리"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-uniOultO2MoSDspp3tm4TqtbAgKE1hcmZhbiBTeW5kcm9tZSkubWQ
question_type: prognosis
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

마르판증후군을 새로 진단받은 23세 남성이 무증상이다. 첫 경흉부 심초음파에서 대동맥근이 약간 확장되었지만 수술 적응증은 아니다. 이후 가장 중요한 영상 추적의 목적은?

## 선택지

A. 관상동맥 석회화의 연간 점수 변화 확인
B. 폐동맥의 혈전 유무 확인
C. 대동맥근과 상행 대동맥 직경 및 확장 속도 확인
D. 좌심실 내 혈전의 크기 측정

## 해설


마르판증후군에서는 대동맥근과 상행 대동맥의 확장 및 성장 속도가 박리 위험과 예방적 수술 계획에 중요하다. 정기 영상으로 직경을 비교하고, 추적 간격은 직경과 변화 속도에 맞춰 조절한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: FBN1·대동맥근확장의 Marfan은 대동맥박리 C 위험과 직접 연결되고 정상homocysteine은 homocystinuria와 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006677
- ACC/AHA 대동맥질환 진료지침: https://professional.heart.org/en/science-news/2022-guideline-for-the-diagnosis-and-management-of-aortic-disease
