---
type: qbank
schema_version: 1
id: medqa-us-test-001072
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:e7645e0237cc5f712112b6b8faf0e6700d760453835b655a168cf622e2f58d7f
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "길랭-바레 증후군"
  - "급성 염증성 탈수초 다발신경병증"
  - "IVIG"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6ri4656RLeuwlOugiCDspp3tm4TqtbAgKEd1aWxsYWluLUJhcnJlIFN5bmRyb21lKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_quLjrnpEt67CU66CIIOymne2bhOq1sCAoR3VpbGxhaW4tQmFycsOpIHN5bmRyb21lKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9HYWJhcGVudGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

10세 남아가 아침에 일어난 뒤 걷지 못해 응급실에 왔다. 3주 전 발열, 마른기침, 인후통이 있었고 발열과 인후통은 호전되었지만 기침은 지속되었다. 양쪽 하지에 심한 근력저하와 손발의 경한 감각저하, 무릎·발목 반사 소실이 있었다. 뇌척수액에서 백혈구 2/mm³, 포도당 60 mg/dL, 단백질 91 mg/dL였다. 가장 적절한 치료는?

## 선택지

A. 정맥 면역글로불린(IVIG)
B. 프레드니손
C. 보툴리눔 항독소
D. 가바펜틴

## 해설

감염 후 급성 양측 위약·무반사와 뇌척수액 단백질 상승/세포수 정상은 Guillain-Barré 증후군에 부합한다. 보행이 불가능한 이 환자에서는 IVIG(A)가 적절하며 혈장교환도 효과적인 대안이다. IVIG가 혈장교환보다 항상 우월한 것은 아니고 스테로이드는 효과적인 단독치료가 아니다. 호흡근 기능과 심박·혈압 등 자율신경 불안정을 면밀히 감시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. IVIG가 유일하게 가장 효과적이라는 과장 수정. 보행불가 GBS에서 IVIG A 유지, 동등한 혈장교환 및 호흡·자율신경 감시 보완.
- 공식/학회 근거: https://www.ninds.nih.gov/health-information/disorders/guillain-barre-syndrome

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001072
