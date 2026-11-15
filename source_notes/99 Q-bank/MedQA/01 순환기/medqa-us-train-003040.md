---
type: qbank
schema_version: 1
id: medqa-us-train-003040
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1ed71e58f3b83c3bfdcdba52d380724b3f70d4913b12133ba69c97baff4b6a2d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "abdominal aortic aneurysm"
  - "symptomatic aneurysm"
  - "aneurysm repair threshold"
  - "smoking risk"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uzteu2gCDrjIDrj5nrp6XrpZggKEFiZG9taW5hbCBBb3J0aWMgQW5ldXJ5c20pLm1k
question_type: management
difficulty: simple
answer: A
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

68세 남성에게 추적관찰 중인 4 cm 복부대동맥류가 있다. 갑자기 지속적인 아랫배와 허리 통증이 생겼다. 활력징후는 아직 안정적이지만 영상과 진찰에서 통증의 원인이 동맥류로 의심된다. 적절한 대응은?

## 선택지

A. 혈관외과에 즉시 의뢰해 응급도를 판단하고 수복을 평가한다
B. 직경이 작으므로 1년 뒤 초음파를 예약한다
C. 통증이 있어도 금연 상담만 한다
D. 진통 후 통증이 줄면 영상과 혈관외과 평가를 생략한다

## 해설

증상이 동맥류 때문이라면 무증상 환자의 크기 기준까지 기다리지 않는다. 파열 위험을 신속히 평가하고 혈관외과에서 수복을 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상성 AAA A는 크기와 무관한 평가 대상이나 모든 복통=파열이라는 설명을 한정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003040
- ACC/AHA 대동맥질환 진료지침: https://professional.heart.org/en/science-news/2022-guideline-for-the-diagnosis-and-management-of-aortic-disease
