---
type: qbank
schema_version: 1
id: medqa-us-train-005310
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd44bb4e4b951ce43fc5130d51989b1a699da90ca32d1bcc185b083a8cc720c2
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "중증 화상"
  - "파크랜드 공식"
  - "화상 수액소생"
  - "Burns"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2ZlOyDgSAoQnVybikubWQ
difficulty: complex
answer: A
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

성인 환자의 체표면적 약 30%에 깊은 부분층 화상이 있다. 기도 평가를 마쳤고 다른 출혈은 없다. 이 환자의 초기 수액 치료 원칙은?

## 선택지

A. 등장성 정질액으로 시작하고 소변량과 관류를 보며 속도를 조절한다
B. 정해진 공식의 양을 계산한 뒤 소변량과 무관하게 그대로 준다
C. 국소 드레싱만 시행한다
D. 모든 환자에게 예방적으로 혈장부터 투여한다

## 해설

광범위 성인 화상에는 정질액 소생이 필요하다. 체중과 화상 면적으로 초기 양을 추정하되 소변량과 관류에 맞춰 조절해 부족하거나 과한 수액을 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Rule of nines 계산을 30%가 아닌 27%로 교정. 명시된 Parkland 교육계산과 현행 초기 수액 권고를 구별.
- 공식/학회 근거: https://academic.oup.com/jbcr/article/45/3/565/7458089
- 공식/학회 근거: https://ameriburn.org/wp-content/uploads/2019/08/2018-abls-providermanual.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005310
- https://pubmed.ncbi.nlm.nih.gov/38051821/
