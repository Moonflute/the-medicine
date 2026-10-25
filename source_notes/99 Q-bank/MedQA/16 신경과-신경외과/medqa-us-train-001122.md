---
type: qbank
schema_version: 1
id: medqa-us-train-001122
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:23d04f4c02640353702f0083cc72cda6c18f7c810984aae1ae7b2984ee7757a0
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Neurofibromatosis type 2"
  - "Vestibular schwannoma"
  - "Meningioma"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug6rK9IOyErOycoOyiheymnSAoTmV1cm9maWJyb21hdG9zaXMpLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_si6Dqsr3stIjsooUgKFNjaHdhbm5vbWEpLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsiJjrp4nsooUgKE1lbmluZ2lvbWEpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

22세 여성이 지난 2개월간의 청력 소실과 서 있거나 걸을 때의 불안정함으로 내원하였다. 환자는 넘어지는 것을 방지하기 위해 벽에 의지해야 한다. 최근 부상은 없었으며 심각한 질병의 과거력도 없다. 활력 징후는 정상 범위 내에 있다. 진찰 결과 보행이 불안정하다. 양발을 모으고 똑바로 서 있게 했을 때 몸이 흔들린다. 양측 귀 옆에서 손가락을 비비는 소리를 듣지 못하거나 귓가에서 속삭이는 단어를 따라 하지 못한다. 뇌 MRI상 우측 소뇌교각(cerebellopontine angle)에 3cm 크기의 종양과 좌측 소뇌교각에 4.5cm 크기의 종양이 관찰된다. 이 환자에게 향후 발생할 가능성이 가장 높은 것은 무엇인가?

## 선택지

A. 신세포암(Renal cell carcinoma)
B. 모세혈관확장증(Telangiectasias)
C. 수막종(Meningioma)
D. 성상세포종(Astrocytoma)

## 해설

젊은 환자의 양측 소뇌교각 종양과 양측 청력저하는 양측 전정신경초종을 시사하며 NF2-related schwannomatosis를 강하게 뒷받침한다. 이 질환에서는 수막종 발생 위험도 증가하므로 이후 동반될 종양은 C이다. 현재의 양측 소뇌교각 종양을 수막종이라고 단정한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. NF2의 동반 수막종 C를 유지하되 기존 양측 소뇌교각 종양을 수막종과 혼동하지 않도록 구분한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001122
