---
type: qbank
schema_version: 1
id: medqa-us-train-004267
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:296aeb1c2ad32df109f3f96e304714b69db9b6441adfe4a2814de4644679b9d3
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV 감염"
  - "거대세포바이러스 대장염"
  - "면역저하"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2hsb3J0aGFsaWRvbmUubWQ
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

CD4가 44/μL인 HIV 환자가 3주째 발열과 혈성 설사를 한다. 대장내시경에서 출혈하기 쉬운 점막과 궤양이 보인다. CMV 대장염을 확인하는 데 적절한 검사는?

## 선택지

A. 대변 배양만 시행한다
B. 혈액 CMV IgG로 대장염을 확진한다
C. 대장 궤양 조직의 조직병리검사와 CMV 면역조직화학염색을 시행한다
D. 혈액 CMV PCR 양성만으로 대장염을 확진한다

## 해설


면역저하 환자에서 혈중 CMV 검출만으로 침습성 대장염을 확진할 수 없다. 내시경 병변 조직의 병리 소견과 면역조직화학염색으로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004267 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CMV를 HSV라고 부르고 없는 조직 소견을 만들어낸 해설 교정; 진행 HIV 혈성 궤양성 대장염 A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/cytomegalovirus

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004267
