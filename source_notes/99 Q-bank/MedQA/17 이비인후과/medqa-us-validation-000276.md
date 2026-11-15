---
type: qbank
schema_version: 1
id: medqa-us-validation-000276
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1e59e9c14b47e831fec9a787c3efe07be04bab818978580c1df7bbee4db3ca13
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "노인성 난청"
  - "감각신경성 난청"
  - "Rinne 검사"
question_type: investigation
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-uFuOyduOyEsSDrgpzssq0gKFByZXNieWN1c2lzKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

78세 환자의 양쪽 청력이 수년에 걸쳐 서서히 떨어져, 소음 속 대화가 특히 어렵다. 귀지·고막 이상은 없고 양쪽에서 공기전도가 골전도보다 크다. 난청의 정도와 주파수별 양상을 확인할 검사는?

## 선택지

A. 뇌파검사
B. 순음청력검사
C. 경부 CT
D. 전정기능검사

## 해설

대칭적인 점진적 난청에서는 노인성 난청을 고려한다. 음차검사만으로 정도를 평가하기 어려워 순음청력검사로 주파수별 역치를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 해설의 음차를 뚜껑으로 부르는 오역, 음향반사와 광반사 혼동, Rinne 양성을 감각신경성 확진으로 오해시키는 표현 교정. 점진적 양측 난청에 원정답 D 유지.
- 공식/학회 근거: https://www.nidcd.nih.gov/health/age-related-hearing-loss

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000276
- https://pubmed.ncbi.nlm.nih.gov/38687845/
