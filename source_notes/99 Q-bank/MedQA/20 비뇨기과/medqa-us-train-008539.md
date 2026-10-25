---
type: qbank
schema_version: 1
id: medqa-us-train-008539
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:da98a476504c0fce8be872a4e7b112f2cb77c44fe1c5681185d6085a49d28515
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "nongonococcal urethritis"
  - "Chlamydia trachomatis"
  - "urethritis"
question_type: diagnosis
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-u5hOyehOq3oOyalOuPhOyXvCAoTm9uZ29ub2NvY2NhbCB1cmV0aHJpdGlzKS5tZA
  - MjAg67mE64eo6riw6rO8L-yalOuPhOyXvCAoVXJldGhyaXRpcykubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 남성이 배뇨 시 통증과 음경에서 물 같은 분비물이 나와 응급실에 내원했다. 며칠 전 시작되어 점점 악화되었다. 체온 98.0°F(36.7°C), 혈압 122/74mmHg, 맥박 83회/분, 호흡수 14회/분, 실내 공기 산소포화도 98%이다. 신체검사에서 압통이 있는 요도와 분비물이 보인다. 분비물 그람염색에서 세균은 음성이지만 호중구가 많이 보인다. 다음 중 이 환자 증상의 가장 가능성 높은 감염 원인은 무엇인가?

## 선택지

A. 클라미디아 트라코마티스
B. 대장균
C. Staphylococcus saprophyticus
D. 질편모충

## 해설

많은 호중구가 있으나 그람염색에서 세균이 보이지 않는 요도 분비물은 비임균성 요도염을 시사한다. 선지 중 A, C. trachomatis가 대표적인 원인이며 그람염색만으로 잘 관찰되지 않는 세포내 병원체이다. 이는 단순히 그람음성 막대균이 보였다는 뜻이 아니다. 다른 원인도 가능하므로 실제 원인 확인에는 적절한 NAAT를 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 그람염색에서 세균이 안 보인다는 것을 그람음성균이라는 의미로 혼동하지 않도록 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008539
