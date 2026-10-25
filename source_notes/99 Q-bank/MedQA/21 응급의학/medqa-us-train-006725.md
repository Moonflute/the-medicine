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

17세 여아가 HIV 검사 음성 후 응급진료센터에 내원했다. 최근 처음으로 장기 남자친구와 성관계를 하며 콘돔을 사용했다. 중대한 질환이나 성매개감염 병력은 없지만 HIV 검사 음성에도 감염 가능성을 걱정한다. 검사 설명서에 따르면 PCR에서 HIV 양성인 100명 중 91명이 이 검사에서도 양성이었다. 같은 날 23세 여성이 비뇨생식기 클라미디아 감염 병력으로 HIV 검사 음성 후 내원했다. 최근 ‘HIV 감염일 수도 있는 사람’과 보호되지 않은 성관계를 했다고 한다. 23세 환자에게 검사를 두 번째 시행할 때 17세 환자에게 두 번째 시행하는 검사와 비교해 성능은 어떻게 달라지는가?

## 선택지

A. 민감도 증가
B. 타당도 증가
C. 특이도 증가
D. 음성예측도 감소

## 해설

검사 자체의 민감도와 특이도가 같다면 질병 사전확률이 높아질수록 양성예측도는 높아지고 음성예측도는 낮아진다. 두 번째 환자의 위험 병력이 더 높다는 출제 조건에서는 음성 결과가 비감염을 보장하는 정도가 낮으므로 D가 적절하다. 이는 민감도나 특이도가 자동으로 달라진다는 뜻이 아니다. 실제 HIV 평가에서는 노출 시점과 검사 창기간도 함께 고려해야 하며, 제시된 양성 검출 비율 하나만으로 개별 환자의 감염 여부를 확정할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 동일 검사에서 사전확률 증가 시 음성예측도가 낮아지는 D를 유지하고 해설의 PPV·NPV 증감 모순을 바로잡는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006725
