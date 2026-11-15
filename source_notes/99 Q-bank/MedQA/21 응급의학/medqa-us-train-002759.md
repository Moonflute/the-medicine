---
type: qbank
schema_version: 1
id: medqa-us-train-002759
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8ace975d74ce9986d08350b51e659e0f94039eb709cc13de97ce0f89cd0c0fa3
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "third-degree burn"
  - "full-thickness burn"
  - "early excision and grafting"
  - "11% total body surface area"
  - "Burn"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2ZlOyDgSAoQnVybikubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

55세 여성의 허벅지 피부가 화상으로 하얗고 단단해졌으며 가벼운 접촉을 느끼지 못한다. 화상은 다리 전체 둘레를 감싸지 않고 아래쪽 혈류는 정상이다. 전층 화상의 치료 계획은?

## 선택지

A. 진통제만 주고 자연 피부 재생을 기다린다
B. 모든 환자에게 먼저 가피절개술을 한다
C. 화상 전문팀에 의뢰해 괴사 조직 절제와 피부이식을 계획한다
D. 드레싱을 하지 않고 공기 중에 둔다

## 해설

전층 화상은 진피까지 파괴돼 넓은 부위가 저절로 덮이기 어렵다. 화상 전문팀에서 절제와 피부이식을 평가한다. 관류 장애 없는 비환상성 화상의 치료는 가피절개와 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 성인11% TBSA면 반드시 대량수액이 필요하다는 오류를 제거했다. 전층 화상 조기 절제·이식 A와 약한 맥박의 별도 관류평가를 명시한다.
- 공식/학회 근거: https://academic.oup.com/jbcr/article/45/3/565/7458089
- 공식/학회 근거: https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral
- 공식/학회 근거: https://ameriburn.org/wp-content/uploads/2019/08/2018-abls-providermanual.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002759
- https://ameriburn.org/resources/burnreferral/
