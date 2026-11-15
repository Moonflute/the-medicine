---
type: qbank
schema_version: 1
id: medqa-us-train-003239
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:089f0cffbb9b312b45e8775bd6e340174eafe5ae0a19748b4ff6a55823a6999a
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "celiac disease"
  - "IgA deficiency"
  - "IgG deamidated gliadin peptide"
  - "malabsorption"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9TZXJ0cmFsaW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

만성 지방변과 철결핍빈혈이 있는 30세 여성이 밀을 먹고 있는데, IgA 항조직 트랜스글루타미나제는 음성이고 총 IgA는 매우 낮다. 셀리악병을 평가하기 위해 추가할 혈청검사는?

## 선택지

A. IgA 항근내막 항체
B. IgG 탈아미드화 글리아딘 펩타이드 항체
C. 항미토콘드리아 항체
D. IgE 밀 특이 항체

## 해설


총 IgA가 낮으면 IgA 기반 검사가 위음성일 수 있어 IgG DGP 또는 IgG tTG를 검사한다. 의심이 높으면 혈청검사가 음성이어도 십이지장 생검을 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: IgA 결핍 시 DGP-IgG B는 유지. 원문 endomysial을 항내배엽으로 번역한 선지 오역 수정.
- https://www.nice.org.uk/guidance/ng20/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003239
- https://doi.org/10.1002/ueg2.70119
