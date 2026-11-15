---
type: qbank
schema_version: 1
id: medqa-us-test-000810
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:27794b5f9dd0776a1b16576607b96e1054656cf3712a1e4c8f98db4034456e82
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "세균성 관절염"
  - "패혈성 관절염"
  - "활액 분석"
question_type: investigation
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 환자가 고열과 갑자기 붓고 아픈 무릎으로 내원했다. 수동 운동에도 통증이 심하다. 혈역학은 안정적이고 바로 검사할 수 있다. 화농성 관절염을 의심할 때 원인 확인을 위한 검사는?

## 선택지

A. 관절천자 후 활액 그람염색·배양
B. 혈청 요산 농도만 측정
C. 무릎 단순촬영만 시행
D. 혈청 류마티스인자만 측정

## 해설

열을 동반한 급성 단관절염은 활액을 신속히 채취해 배양한다. 혈액배양도 얻고 항생제와 관절 배액을 계획한다. 상태가 불안정하면 검체 채취 때문에 치료를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 발열성 급성 단관절염의 B는 맞으나 점도 저하를 고형물질 농도 증가로 설명하고 5만 기준을 필수처럼 제시한 오류를 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000810
- https://www.idsociety.org/practice-guideline/acute-bacterial-arthritis-in-pediatrics2/
