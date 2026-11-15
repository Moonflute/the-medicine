---
type: qbank
schema_version: 1
id: medqa-us-train-006921
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fdacd0bc5de66fdb0a9c648dff3f26fd74d91365862900dbfd5444044a4bc8c8
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "그람음성 화농성 관절염"
  - "세균성 관절염"
  - "세페핌"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ZmU64aN7ISxIOq0gOygiOyXvCAoU3VwcHVyYXRpdmUgQXJ0aHJpdGlzKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdGF6aWRpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTmFmY2lsbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

82세 남성의 무릎이 뜨겁고 붓는 화농성 관절염으로 배액을 시행했다. 관절액과 혈액 모두에서 세프트리악손 감수성 대장균이 배양됐다. 원인균에 맞는 항생제는?

## 선택지

A. 반코마이신
B. 세프트리악손
C. 나프실린
D. 클린다마이신

## 해설

배양으로 원인과 감수성이 확인되면 항생제를 좁힌다. 감수성 대장균 화농성 관절염은 세프트리악손을 사용할 수 있으며 관절 배액과 반응 평가를 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 요로감염을 신우신염·신기능저하로 바꾸고 Pseudomonas를 확정한 해설을 제거했다. 그람음성 막대균에 대한 선지 B를 유지하고 배양 및 신기능에 따른 개별화를 설명했다.
- 공식/학회 근거: https://jbji.copernicus.org/articles/8/29/2023/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006921
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9901514/
