---
type: qbank
schema_version: 1
id: medqa-us-train-006565
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6a6d987ea0c23df0ef8fe7675fde455dc3078697f032313f10a207c5e883eec3
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "중증 대동맥판막협착증"
  - "울혈성 심부전"
  - "증상성 판막질환"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDtmJHssKkgKEFvcnRpYyBTdGVub3NpcykubWQ
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: prognosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

72세 여성이 여러 층의 계단을 내려가다 실신하여 응급실에 내원했다. 수년 동안 의사를 찾지 않았고 복용 약물도 없다. 검사에서 협심증과 울혈성 심부전 증상이 확인되었다. 체온은 36.8°C, 혈압은 160/80 mmHg, 심박수는 분당 81회, 호흡수는 분당 20회이다. 진찰에서 오른쪽 상흉골연에 3/6등급의 crescendo-decrescendo 수축기 잡음이 들리고 경동맥으로 방사된다. 무작위 혈당은 205 mg/dL이다. 다음 중 이 환자의 예후를 가장 나쁘게 하는 소견은?

## 선택지

A. 실신
B. 협심증
C. 울혈성 심부전
D. 당뇨병

## 해설


환자는 중증 대동맥판 협착증과 심부전이 동반된 상태이며, 당뇨병은 장기 예후에 영향을 주지만 급성 사망 위험을 가장 크게 높이는 것은 울혈성 심부전이다. 따라서 울혈성 심부전이 가장 나쁜 예후 인자이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상성 AS의 자연경과에서 CHF C는 제시증상 중 나쁜 예후와 연관. 현대 판막치료 후 예후를 고정한 뜻 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006565
