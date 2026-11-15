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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9HYWJhcGVudGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

10세 아이가 감염 2주 뒤 양쪽 다리에 힘이 빠지고 반사가 사라졌다. 뇌척수액 단백은 91 mg/dL, 백혈구는 2/μL다. 길랭–바레 증후군으로 이제 혼자 걷지 못한다. 호흡 감시와 함께 시작할 면역치료는?

## 선택지

A. 경구 프레드니솔론 단독
B. 정맥 면역글로불린
C. 경험적 정맥 항생제 단독
D. 아자티오프린 단독

## 해설

혼자 걷지 못하는 진행성 길랭–바레 증후군에는 정맥 면역글로불린 또는 혈장교환을 사용한다. 스테로이드는 효과적인 단독치료가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. IVIG가 유일하게 가장 효과적이라는 과장 수정. 보행불가 GBS에서 IVIG A 유지, 동등한 혈장교환 및 호흡·자율신경 감시 보완.
- 공식/학회 근거: https://www.ninds.nih.gov/health-information/disorders/guillain-barre-syndrome

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001072
- https://pubmed.ncbi.nlm.nih.gov/37814552/
