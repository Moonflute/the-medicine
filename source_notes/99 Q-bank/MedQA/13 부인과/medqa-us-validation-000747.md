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
answer: C
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

31세 여성과 32세 배우자가 18개월 동안 피임 없이 임신을 시도했지만 임신되지 않았다. 여성의 월경은 규칙적이고 배우자는 외견상 건강하다. 두 사람을 함께 평가할 때 남성에게 우선 시행할 검사는?

## 선택지

A. 정상 진찰 소견이면 남성 검사는 생략
B. 일률적인 염색체 핵형검사
C. 정액검사
D. 사정 뒤 소변에서 정자를 찾는 검사부터 시행

## 해설

난임은 두 사람을 동시에 평가한다. 남성 요인은 진찰만으로 배제할 수 없으므로 정액검사부터 한다. 여성의 배란과 난관 상태도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 규칙 월경만으로 정상 자궁·난관을 가정하고 남성 요인이 가장 흔하다고 한 오류 삭제. 양측 동시 불임 평가의 초기 정액검사 D 근거로 교체.
- https://www.auanet.org/documents/Guidelines/PDF/2024%20Guidelines/Male%20Infertility%20Unabridged%20Final.pdf
- https://www.asrm.org/practice-guidance/practice-committee-documents/diagnosis-and-treatment-of-infertility-in-men-auaasrm-guideline-part-i-2020

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000747
- https://www.asrm.org/practice-guidance/practice-committee-documents/fertility-evaluation-of-infertile-women-a-committee-opinion-2026
