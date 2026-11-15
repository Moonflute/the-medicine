---
type: qbank
schema_version: 1
id: medqa-us-train-004766
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:834073b355930687453e6e83462c5dd1161678a71bdbd24031d1548b483d6958
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "전치혈관"
  - "막성 제대 부착"
  - "임신 중 질출혈"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoCDspJEg7KeI7Lac7ZiILm1k
difficulty: complex
answer: C
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

임신 21주 초음파에서 태반의 두 부분이 얇은 막으로 연결돼 있다. 혈관이 내자궁구 가까이를 지나고 전치혈관이 의심된다. 그 혈관이 태아 혈관인지 확인할 검사는?

## 선택지

A. 태아 비수축검사만 시행
B. 질식 내진으로 막 안의 혈관을 만져 확인
C. 질식 초음파의 색·펄스 도플러로 혈관을 확인한다
D. 태아 혈색소를 측정하기 위해 곧바로 제대천자를 한다

## 해설

전치혈관은 보호받지 못하는 태아 혈관이 내자궁구 근처를 지나는 상태다. 질식 초음파의 도플러로 혈관의 주행과 태아 맥박에 따른 파형을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 전치혈관과 막성 제대 부착의 관계는 유지하되 영어 원문의 nitrite를 양막파열의 니트라진 검사와 혼동하지 않도록 명시했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004766
- https://pubmed.ncbi.nlm.nih.gov/26292048/
