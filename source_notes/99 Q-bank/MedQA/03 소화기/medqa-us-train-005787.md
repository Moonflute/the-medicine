---
type: qbank
schema_version: 1
id: medqa-us-train-005787
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b1793e439c62578c50c6f41d657a16aad76b94fdd196e7399a6bda5f09fd4cf9
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "길버트 증후군"
  - "비포합 고빌리루빈혈증"
  - "스트레스 유발 황달"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quLjrsoTtirgg7Kad7ZuE6rWwIChHaWxiZXJ0J3MgU3luZHJvbWUpLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_ri7Trj4Tqs4Qg7KeI7ZmYLm1k
question_type: management
difficulty: complex
answer: D
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

22세 남성이 며칠간 식사를 거른 뒤 눈이 노래졌다가 자연히 좋아지는 일이 반복돼 내원했다. 총 빌리루빈은 3.0 mg/dL, 직접 빌리루빈은 0.3 mg/dL이다. 간효소와 ALP는 정상이고 혈색소·망상적혈구·LDH·합토글로빈에서도 용혈 소견은 없다. 적절한 관리는?

## 선택지

A. 프레드니솔론을 시작한다
B. 농축적혈구를 수혈한다
C. 페노바르비탈을 장기 투여한다
D. 길버트증후군을 설명하고 별도 약물 없이 관찰한다

## 해설


공복이나 스트레스 뒤 변동하는 간접 빌리루빈 상승에 간효소 이상과 용혈이 없으면 길버트증후군을 의심한다. 특별한 약물치료는 필요 없고, 경과가 전형적이지 않거나 검사 이상이 추가되면 다른 원인을 알아본다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 스트레스후 반복 간접bilirubin상승·정상 간효소/Hb는 Gilbert에 부합하여 안심 D가 합리적.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005787
- https://gi.org/guideline/evaluation-of-abnormal-liver-chemistries/
