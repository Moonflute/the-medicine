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

요리사로 일하는 55세 여성이 주방 사고로 입은 화상을 평가받기 위해 병원에 왔다. 신체검사에서 오른쪽 허벅지 앞면과 하지에 3도 화상이 있으며 전체 체표면적의 약 11%를 차지한다. 화상 부위의 피부는 두껍고 만져도 통증이 없으며 발등동맥 맥박은 만져지지만 약하다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 조기 절제 및 부분층 피부이식
B. 지연 절제 및 피부이식
C. 마페나이드 아세트산 국소 항생제 도포
D. 파클랜드 공식에 따른 링거 젖산액으로 수액 소생

## 해설

전층 화상은 재상피화 자원이 파괴되어 화상 전문팀의 조기 절제와 부분층 피부이식(A)이 적절하다. 성인11% TBSA라는 수치만으로 Parkland 공식에 따른 대량수액이 자동으로 필요한 것은 아니며 순환상태·섭취·동반 손상에 맞춰 수액을 정한다. 성인 화상쇼크 소생 지침은 주로20% TBSA 이상의 큰 화상을 다룬다. 약한 원위 맥박은 가피 조임·부종·다른 혈관 문제를 즉시 평가해야 하며 관류 위협이 있으면 감압 등이 우선될 수 있다. 모든 전층 화상은 전문 화상센터 협의 대상이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 성인11% TBSA면 반드시 대량수액이 필요하다는 오류를 제거했다. 전층 화상 조기 절제·이식 A와 약한 맥박의 별도 관류평가를 명시한다.
- 공식/학회 근거: https://academic.oup.com/jbcr/article/45/3/565/7458089
- 공식/학회 근거: https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral
- 공식/학회 근거: https://ameriburn.org/wp-content/uploads/2019/08/2018-abls-providermanual.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002759
