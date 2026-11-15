---
type: qbank
schema_version: 1
id: medqa-us-train-002780
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b452efabd2bb5cec0e39d937f3528ead90a446ffa3a51fdb41567926bb8fcd6d
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "gastric adenocarcinoma"
  - "gastric remnant cancer"
  - "upper gastrointestinal bleeding"
  - "cancer staging CT"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshKDslZQgKEFkZW5vY2FyY2lub21hKS5tZA
  - MTEg7Jm46rO8L-ychOyepeq0gCDstpztmIggKEdhc3Ryb2ludGVzdGluYWwgQmxlZWRpbmcpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITslZQgKEdhc3RyaWMgQ2FuY2VyKS5tZA
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
---

# MedQA US 임상문제

## 문제

69세 남성이 잔위의 위선암으로 진단됐다. 조영 CT상 cT4aN+이지만 원격 전이는 보이지 않는다. 근치 목적 치료 전 CT로 놓친 작은 복막 전이를 확인할 검사는?

## 선택지

A. 헬리코박터 대변항원검사
B. 상부위장관 내시경 초음파
C. 병기결정 복강경 및 복막세척 세포검사
D. 전신 골주사검사

## 해설


국소 진행 위암에서 CT만으로 작은 복막 전이나 유리 암세포를 놓칠 수 있다. 그 결과가 치료 방침을 바꿀 수 있는 경우 병기결정 복강경과 복막세척 세포검사를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-002780`와 직접 대조했다.
- 판정: 위암 생검 후 병기 CT C 유지. CT를 조직진단 검사와 혼동하지 않도록 병기 목적·흉부 포함 평가 명시.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://doi.org/10.1016/j.esmoop.2023.102226

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002780
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10937212/
