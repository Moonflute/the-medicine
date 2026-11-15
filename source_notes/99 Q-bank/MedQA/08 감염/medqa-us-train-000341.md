---
type: qbank
schema_version: 1
id: medqa-us-train-000341
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5a71e24664fca8677c247b47e8fbf0e0ab4b8d113457e06d39aed98c7fdd5975
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "cirrhosis"
  - "hepatitis B"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

직업상 혈액에 노출된 의료인의 기존 B형간염 검사 결과가 HBsAg 음성, 항-HBs 양성, 총 항-HBc 양성이다. IgM 항-HBc는 음성이다. 이 조합의 해석은?

## 선택지

A. 백신 접종으로 얻은 면역
B. B형간염 감염력이 없는 감수성 상태
C. 과거 자연 감염에서 회복한 상태
D. 급성 감염의 창기간

## 해설


HBsAg가 없고 항-HBs와 항-HBc가 함께 검출되면 과거 감염 후 회복에 부합한다. 백신으로만 면역을 얻으면 항-HBc는 생기지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000341 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HBsAg 음성·anti-HBs 양성·anti-HBc IgG 양성/IgM 음성은 자연감염 후 회복·면역 B이다. 예방접종만으로 core 항체가 생기지 않는다는 원문 취지와 해설 일치.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000341
- https://www.cdc.gov/hepatitis-b/hcp/diagnosis-testing/
