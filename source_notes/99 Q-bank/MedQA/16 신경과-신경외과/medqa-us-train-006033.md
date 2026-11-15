---
type: qbank
schema_version: 1
id: medqa-us-train-006033
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e83a1aef425024f4b84a5d3fa74187e13a30d552b0d02344d8f8319cd72f1750
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "특발성 두개내 고혈압"
  - "유두부종"
  - "아세타졸아미드"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tirnrsJzshLEg65GQ6rCc64K0IOqzoO2YiOyVlSAoSWRpb3BhdGhpYyBJbnRyYWNyYW5pYWwgSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

34세 환자에게 박동성 귀울림과 양쪽 유두부종이 있다. 뇌 MRI·정맥영상에서 종괴와 정맥동혈전이 없고 뇌척수액 성분은 정상이나 개방압은 32 cmH₂O다. 시야 손상은 경미하고 진행하지 않는다. 체중 관리와 함께 시작할 약은?

## 선택지

A. 프레드니솔론
B. 고용량 푸로세미드 단독
C. 수마트립탄
D. 아세타졸아미드

## 해설

경미한 시야 저하가 있는 특발 두개내고혈압의 초기 약물로 아세타졸아미드를 고려한다. 체중을 관리하고 시야를 추적하며, 시력이 급격히 떨어지면 응급 수술 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. IIH acetazolamide B는 유지하되 체중 관리와 시야 추적, 급속 시력악화 시 수술 필요성을 명시.
- 공식/학회 근거: https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/idiopathic-intracranial-hypertension
- 공식/학회 근거: https://pubmed.ncbi.nlm.nih.gov/24756514/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006033
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6166610/
