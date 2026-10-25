---
type: qbank
schema_version: 1
id: medqa-us-train-003404
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d2a2f01a8762f177901e9accb74f615e9f49ca12a5996c580e35c7fd9921f3a9
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "ACE inhibitor"
  - "ACE inhibitor cough"
  - "bilateral renal artery stenosis"
  - "hypertension"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDUg7Iug7J6lL-yLoO2YiOq0gOyEsSDqs6DtmIjslZUgKFJlbm92YXNjdWxhciBIeXBlcnRlbnNpb24pLm1k
question_type: contraindication
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

57세 건강한 남성이 정기 검진을 받으러 왔다. 이전 방문에서 혈압이 160/95 mmHg였지만 약물은 원하지 않아 식이와 운동으로 조절하려 했다. 오늘 혈압은 163/92 mmHg여서 약물을 처방받았고 6일 후 지속적인 기침을 호소했다. 지역 약국에서 측정한 혈압은 145/85 mmHg였다. 이 약물의 금기사항은?

## 선택지

A. 만성 폐쇄성 폐질환
B. 통풍
C. 양측 신동맥 협착
D. 울혈성 심부전

## 해설


ACE 억제제는 양측 신동맥 협착이 있을 경우 사구체 여과율이 급격히 감소해 급성 신부전을 초래하므로 금기이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACEI 기침으로 약물군 추정; 양측 RAS C에서 efferent 확장으로 GFR 급락/AKI 위험.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003404
