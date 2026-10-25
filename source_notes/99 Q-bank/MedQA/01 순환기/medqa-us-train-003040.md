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

고혈압, 고지혈증, 30갑년 흡연력이 있는 68세 남성이 정기검진을 받으러 왔다. 나이와 흡연력 때문에 복부 초음파 선별검사를 시행해 4 cm 신장 아래 복부대동맥류가 발견되었다. 다음 중 어떤 소견이 있으면 동맥류의 수술적 복구가 필요한가?

## 선택지

A. 복부, 허리 또는 서혜부 통증
B. 흡연력
C. 1년 동안 0.5 cm 미만의 성장
D. 마르팡증후군

## 해설

동맥류에 기인한 복부·등·서혜부 통증 A는 증상성 AAA를 시사하여 4cm라도 긴급 혈관외과 평가와 복구를 고려한다. 단순 흡연력이나 느린 성장은 즉시 수술 근거가 아니다. 다만 모든 복통이 동맥류 파열을 뜻하는 것은 아니므로 통증의 원인·영상·혈역학 상태를 함께 판단한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상성 AAA A는 크기와 무관한 평가 대상이나 모든 복통=파열이라는 설명을 한정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003040
