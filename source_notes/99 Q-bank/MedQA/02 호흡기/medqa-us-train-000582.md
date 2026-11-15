---
type: qbank
schema_version: 1
id: medqa-us-train-000582
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7cd017dd18ca7b89321b9e992c6010df237c464247017ac694d4a480e77363e6
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "Lambert-Eaton myasthenic syndrome"
  - "small cell lung cancer"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 여성이 계단을 오르기 힘들고 입이 마르다고 한다. 하지 근위부가 약하고 감각은 정상이지만, 무릎반사가 약하다가 짧게 다리에 힘을 준 직후 커진다. 50갑년 흡연력과 최근 체중 감소가 있다. 의심되는 신경근접합부 질환에서 예상되는 전기생리 소견은?

## 선택지

A. 고빈도 반복신경자극에서 복합근활동전위가 크게 증가한다
B. 저빈도 반복자극에서만 항상 정상 전위가 보인다
C. 감각신경 전도에서 탈수초만 확인된다
D. 근육에 힘을 준 직후에도 복합근활동전위가 항상 더 감소한다

## 해설


근위부 위약, 자율신경 증상과 운동 직후 반사의 일시적 개선은 램버트–이튼 근무력증후군을 시사한다. 고빈도 자극이나 짧은 운동 뒤 복합근활동전위가 증가한다. 흡연력과 체중 감소가 있으면 관련 소세포폐암을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 자율신경 증상·근위부 약화/무반사가 운동 후 호전되는 LEMS. 반복 고빈도 자극 후 진폭 증가 B를 MG/thymoma와 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000582
