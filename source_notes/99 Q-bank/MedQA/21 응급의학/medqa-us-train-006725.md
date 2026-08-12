---
type: qbank
schema_version: 1
id: medqa-us-train-006725
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5fb9ea5b2f13ec327958d60d50f07152c51ef6dfff8d3f4b1261c9f1920f7402
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "민감도"
  - "음성예측도"
  - "HIV 선별검사"
question_type: biostatistics
related_disease_slugs: []
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

17세 여아가 HIV 검사 음성 후 응급진료센터에 내원했다. 최근 처음으로 장기 남자친구와 성관계를 하며 콘돔을 사용했다. 중대한 질환이나 성매개감염 병력은 없지만 HIV 검사 음성에도 감염 가능성을 걱정한다. 검사 설명서에 따르면 PCR에서 HIV 양성인 100명 중 91명이 이 검사에서도 양성이었다. 같은 날 23세 여성이 비뇨생식기 클라미디아 감염 병력으로 HIV 검사 음성 후 내원했다. 최근 ‘HIV 감염일 수도 있는 사람’과 보호되지 않은 성관계를 했다고 한다. 23세 환자에게 검사를 두 번째 시행할 때 17세 환자에게 두 번째 시행하는 검사와 비교해 성능은 어떻게 달라지는가?

## 선택지

A. 민감도 증가
B. 타당도 증가
C. 특이도 증가
D. 음성예측도 감소

## 해설


두 번째 검사에서 양성 예측도가 감소하면 음성 예측도가 증가한다. 첫 검사의 민감도가 91%이므로 재검사 시 양성 결과가 적을수록 음성예측도가 낮아진다. 따라서 음성예측도가 감소한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006725
