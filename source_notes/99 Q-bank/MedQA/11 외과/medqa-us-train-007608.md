---
type: qbank
schema_version: 1
id: medqa-us-train-007608
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4ff2f57663cbcb4ef00c43a67dcefffe3fc9a8ae8b56e009e134eff059bcab7d
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "수술 후 장유착"
  - "장폐색"
  - "복부팽만"
  - "구토"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snqXtj5Dsg4kubWQ
  - MTEg7Jm46rO8L-yepSDtj5Dsg4kgKEJvd2VsIE9ic3RydWN0aW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

55세 남성이 개복술을 받은 지 수년 뒤 배가 팽창하고 담즙성 구토가 생겼다. 조영 CT에서 근위부 소장은 늘어났지만 한 지점부터 갑자기 가늘어지고 원위부는 허탈돼 있다. 종괴나 탈장은 보이지 않는다. 가장 가능성 높은 진단은?

## 선택지

A. 마비성 장폐색
B. 급성 대장 가성폐색
C. 감염성 위장염
D. 수술 후 유착에 의한 기계적 소장폐색

## 해설


장 직경이 갑자기 바뀌는 이행점과 원위부 허탈은 기계적 폐색을 지지한다. 개복술 병력이 있고 다른 폐색 원인이 없으면 유착 가능성이 높다. 마비성 장폐색에서는 보통 뚜렷한 이행점이 없다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-007608`와 직접 대조했다.
- 판정: 복부팽만·고창과 RLQ 수술흉터는 유착성 폐색 A 지지. 원문 선지와 해설이 맞으며 아내의 유람선 증상에 자동 전환하지 않음.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007608
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6006983/
