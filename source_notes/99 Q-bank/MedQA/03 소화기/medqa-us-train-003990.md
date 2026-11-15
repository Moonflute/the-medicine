---
type: qbank
schema_version: 1
id: medqa-us-train-003990
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e8b41e6c503eb471079fc6038bcb71437f44a9d1c7d1812e76f3029ea8e219ca
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "졸링거-엘리슨 증후군"
  - "가스트린종"
  - "다발성 소화성 궤양"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsiqTtirjrprDsooUgKEdhc3RyaW5vbWEpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsobHshLEg7ISg7KKF7ISxIOyaqeyiheymnSAoRkFQKSAoRmFtaWxpYWwgQWRlbm9tYXRvdXMgUG9seXBvc2lzKS5tZA
question_type: investigation
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
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 여성이 NSAID를 쓰지 않고 헬리코박터 검사도 음성인데 위와 원위부 십이지장에 여러 궤양이 재발한다. 굵은 위주름과 만성 수양성 설사가 있다. 가스트린종을 의심할 때 처음 시행하는 생화학적 평가는?

## 선택지

A. 세크레틴 자극검사만 시행
B. 식후 혈청 가스트린
C. 24시간 식도 pH 검사
D. 공복 혈청 가스트린과 위 내용물 pH

## 해설

다발·재발 궤양과 수양성 설사는 졸링거–엘리슨 증후군의 단서다. 공복 가스트린 상승을 위의 산도 및 약물 사용과 함께 해석한다. 애매하면 전문 평가에서 추가 검사를 고려하며, PPI를 환자가 임의로 끊게 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Fasting gastrin D는 초기평가이나 PPI복용 중 상승만으로 gastrinoma 확진 불가.
- https://www.cancer.gov/types/pancreatic/hp/pnet-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003990
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3701449/
