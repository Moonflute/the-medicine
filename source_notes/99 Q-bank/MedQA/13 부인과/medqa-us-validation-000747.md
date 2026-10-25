---
type: qbank
schema_version: 1
id: medqa-us-validation-000747
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:841cd2b96e74d4728ea36b380027e7972af7fb671a6b895d63a8e6dedba26867
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "불임"
  - "남성 요인 평가"
  - "정액검사"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 여성과 32세 남성이 결혼 후 1년 반 동안 임신하지 못해 진료를 받으러 왔다. 여성은 규칙적인 월경을 하고 과거 클라미디아 자궁경부염을 치료받았으나 현재 두 사람의 신체진찰은 정상이다. 가장 적절한 다음 단계는?

## 선택지

A. 염색체 핵형검사
B. 성교 후 검사
C. 사정 후 소변검사
D. 정액검사

## 해설

18개월 동안 피임 없이 성생활을 했는데 임신되지 않았다면 부부를 함께 평가한다. 제시된 선택지 중 남성의 초기 평가에 포함되는 정액검사(D)가 가장 적합하다. 규칙적인 월경은 배란을 시사할 수 있지만 정상 자궁·난관을 보장하지 않으며, 과거 클라미디아 병력에 따른 여성의 난관 요인도 별도로 평가해야 한다. 신체검사가 정상이라고 남성 요인을 배제할 수 없다. 성교 후 검사, 핵형검사, 사정 후 소변검사는 이 사례의 일률적인 초기 검사로 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 규칙 월경만으로 정상 자궁·난관을 가정하고 남성 요인이 가장 흔하다고 한 오류 삭제. 양측 동시 불임 평가의 초기 정액검사 D 근거로 교체.
- https://www.auanet.org/documents/Guidelines/PDF/2024%20Guidelines/Male%20Infertility%20Unabridged%20Final.pdf
- https://www.asrm.org/practice-guidance/practice-committee-documents/diagnosis-and-treatment-of-infertility-in-men-auaasrm-guideline-part-i-2020

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000747
