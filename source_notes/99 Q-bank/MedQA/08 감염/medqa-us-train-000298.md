---
type: qbank
schema_version: 1
id: medqa-us-train-000298
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:843d44b5a0078975541c947e158d95af03baa73730b77e050a7c2cafd033a759
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "AIDS"
  - "Kaposi's sarcoma"
  - "Cytomegalovirus retinitis"
  - "Toxoplasma retinitis"
  - "HIV retinopathy"
  - "Varicella zoster retinitis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
  - MDgg6rCQ7Je8L-qxsOuMgOyEuO2PrOuwlOydtOufrOyKpCDqsJDsl7wgKENNVikgKEN5dG9tZWdhbG92aXJ1cyBJbmZlY3Rpb24gKENNVikpLm1k
  - MDgg6rCQ7Je8L-2GoeyGjO2UjOudvOymiOuniOymnSAoVG94b3BsYXNtb3NpcykubWQ
  - MDgg6rCQ7Je8L-yImOuRkC3rjIDsg4Htj6zsp4Qg67CU7J2065-s7IqkIOqwkOyXvCAoVmFyaWNlbGxhLVpvc3RlciBWaXJ1cyBJbmZlY3Rpb24pLm1k
question_type: diagnosis
difficulty: complex
answer: D
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

CD4가 36/μL인 HIV 환자에게 통증 없이 한쪽 시력이 떨어지고 부유물이 보인다. 안저에서 망막 혈관을 따라 황백색 병변과 출혈이 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 당뇨망막병증
B. 톡소플라스마 망막맥락막염
C. HIV 미세혈관망막병증
D. 거대세포바이러스 망막염

## 해설


심한 면역저하에서 혈관을 따른 황백색 망막 병변과 출혈은 CMV 망막염을 시사한다. 시력을 위협하므로 신속한 안과 평가와 치료가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000298 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: AIDS/CD4 36에서 무통 시력저하·비문증과 출혈성 황백색 망막병변은 CMV 망막염 A에 합당하다. 원문·선지·해설을 직접 대조한 진단 검수.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000298
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/cytomegalovirus
