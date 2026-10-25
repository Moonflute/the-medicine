---
type: qbank
schema_version: 1
id: medqa-us-train-005598
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:85340075fcef5720cccb7855cde1be711af5e09de5fbd040f33fa612fdd5b440
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "낭성섬유증"
  - "신생아 면역반응성 트립시노겐 선별검사"
  - "땀 염소 검사"
  - "Cystic fibrosis"
question_type: investigation
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
difficulty: simple
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

생후 5일 된 남아가 신생아 선별검사에서 낭성섬유증의 표지자인 면역반응성 트립시노겐 수치가 높게 나와 소아과를 방문했다. 정기적인 산전관리를 받으며 임신 39주에 태어났고, 형제자매 2명은 선별검사에서 음성이었다. 신체검사에서 활력징후는 정상이고 건강해 보인다. 다음 중 이 신생아의 낭성섬유증을 평가하기 위해 시행해야 할 검사는 무엇인가?

## 선택지

A. 땀 검사
B. 유전자 변이 분석
C. 대변 엘라스타제 수치 측정
D. 비강 전위차 검사

## 해설

IRT 선별검사 양성은 확진이 아니므로 CF 전문기관에서 땀 염소 검사(A)를 계획한다. 충분한 땀을 얻기 위해 통상 생후 10일 이후부터 4주 내, 적절한 체중·교정 재태연령 조건에서 시행한다. 생후 5일에 곧바로 충분한 검체가 확보된다고 단정하지 않는다. 필요시 CFTR 유전자검사를 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 신생아 선별 양성 후 땀검사의 시행 가능 시점을 명확화.
- https://www.cff.org/intro-cf/newborn-screening-cf
- https://www.cff.org/media/16646/download

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005598
