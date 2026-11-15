---
type: qbank
schema_version: 1
id: medqa-us-train-008314
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:529c66ba2004fa75141d9b9692571f37d0ed22914656c1b918a271c2d75ee199
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "pediatric migraine"
  - "migraine without aura"
  - "acetaminophen"
  - "migraine"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjrjrkZDthrUgKE1pZ3JhaW5lKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

10세 아이가 이전과 같은 편두통으로 내원했다. 활동하면 욱신거리고 빛이 불편하지만, 진찰과 안저는 정상이고 위험징후는 없다. 경구 복용이 가능하고 약물 금기는 없다. 발작 초기에 우선 고려할 약은?

## 선택지

A. 매일 복용할 프로프라놀롤
B. 옥시코돈
C. 아세타졸아미드
D. 체중에 맞춘 이부프로펜

## 해설

소아 편두통은 발작 초기에 체중에 맞춘 이부프로펜을 사용할 수 있다. 진통제를 너무 자주 쓰지 않도록 안내하고 두통 양상이 바뀌면 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 소아 편두통의 acetaminophen B 확인. 본문에 없는 구역질을 실제 증상으로 추가한 해설 교정 및 neuro-optometric 번역 수정.
- 공식/학회 근거: https://www.aan.com/Guidelines/home/GetGuidelineContent/977

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008314
- https://pubmed.ncbi.nlm.nih.gov/31529481/
