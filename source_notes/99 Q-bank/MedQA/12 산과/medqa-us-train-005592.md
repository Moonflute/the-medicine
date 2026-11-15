---
type: qbank
schema_version: 1
id: medqa-us-train-005592
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b0fa1645dd1a35e15696a4978c7b0aba5e85b79e91d1ac6290645ea9a9045b48
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "HELLP 증후군"
  - "임신성 고혈압"
  - "간효소 및 혈소판 평가"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L0hFTExQIOymne2bhOq1sCAoSEVMTFAgU3luZHJvbWUpLm1k
  - MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
---

# MedQA US 임상문제

## 문제

임신 34주 산모가 오른쪽 윗배 통증을 호소한다. 혈압은 148/94 mmHg이며 혈소판은 7.4만/μL, AST는 182 U/L다. LDH와 간접 빌리루빈이 상승했고 말초혈액에 분열적혈구가 보인다. 가장 가능성이 높은 진단은?

## 선택지

A. 임신성 간내 담즙정체
B. HELLP 증후군
C. 임신성 고혈압만 있는 상태
D. 급성 담낭염

## 해설


용혈, 간효소 상승, 혈소판 감소가 함께 있어 HELLP 증후군에 해당한다. 혈압이 중증 범위가 아니어도 생길 수 있으므로 산모 안정화와 분만을 신속히 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005592
- https://pubmed.ncbi.nlm.nih.gov/32443079/
