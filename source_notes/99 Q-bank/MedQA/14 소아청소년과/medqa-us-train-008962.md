---
type: qbank
schema_version: 1
id: medqa-us-train-008962
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8eb48f155b15c40e4828e830aaedc363456d636636b09cf455a7c43d84a2f9e4
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Meckel diverticulum"
  - "painless lower gastrointestinal bleeding"
  - "technetium scan"
question_type: investigation
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6QgKERpdmVydGljdWx1bSkubWQ
  - MTEg7Jm46rO8L-ychOyepeq0gCDstpztmIggKEdhc3Ryb2ludGVzdGluYWwgQmxlZWRpbmcpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv66mU7LyIIOqyjOyLpCAoTWVja2VsJ3MgRGl2ZXJ0aWN1bHVtKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2세 아이가 복통 없이 다량의 짙은 붉은 변을 두 차례 봤다. 빈혈이 있고 복부는 부드럽다. 수액 치료 뒤 활력은 안정적이고 현재 활동성 출혈은 없다. 출혈성 메켈게실을 의심할 때 가장 적절한 검사는?

## 선택지

A. 테크네튬-99m 퍼테크네테이트 스캔
B. 복부 단순 X선
C. 소장 바륨 조영검사
D. 복부 초음파로 충수만 확인

## 해설

어린아이의 통증 없는 하부위장관 출혈은 메켈게실의 이소성 위점막 때문에 생길 수 있다. 퍼테크네테이트 스캔은 이소성 위점막을 찾는 검사이며, 음성이라고 모든 메켈게실을 배제하지는 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 메켈게실의 이소성 위점막 검출 기전으로 A 설명. 모든 출혈성메켈에 가장민감하다는 단정 제거.
- https://tech.snmjournals.org/content/42/3/163

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008962
- https://pubmed.ncbi.nlm.nih.gov/24948825/
