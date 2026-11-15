---
type: qbank
schema_version: 1
id: medqa-us-train-002763
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:db5b02fd9f0e97c0eafb95a0d78effe093d30b9cada5ad12ac0c0f8d32a5b3f5
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "generalized tonic-clonic seizure"
  - "first seizure evaluation"
  - "postictal confusion"
  - "electroencephalography"
  - "Generalized tonic-clonic seizure"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MYW1vdHJpZ2luZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 환자가 첫 비유발 전신 경련을 겪었다. 지금은 의식과 신경학적 진찰이 정상이고, 혈당·전해질과 뇌 MRI에서 원인이 확인되지 않았다. 발작 유형과 재발 위험을 평가할 다음 검사는?

## 선택지

A. 경동맥 초음파
B. 기립경 검사
C. 뇌파검사
D. 뇌척수액 배양

## 해설

첫 비유발 발작 뒤 뇌파검사는 뇌전증파를 찾아 발작 유형과 재발 위험을 평가하는 데 도움이 된다. 정상 뇌파만으로 뇌전증을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. EEG가 간질 진단의 필수조건이고 치료가 전적으로 EEG에 달린다는 단정을 수정했다. 첫 비유발 발작 후 선택지 C는 유지한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng217/chapter/1-Diagnosis-and-assessment-of-epilepsy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002763
- https://www.nice.org.uk/guidance/ng217/chapter/diagnosis-and-assessment-of-epilepsy
- https://pubmed.ncbi.nlm.nih.gov/25901057/
