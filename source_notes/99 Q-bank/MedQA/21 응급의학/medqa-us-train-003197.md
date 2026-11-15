---
type: qbank
schema_version: 1
id: medqa-us-train-003197
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:262f0529fff552da40cba69383e2cfb0bc3335acfcd26222db0cdda51ba934ad
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "acetaminophen overdose"
  - "early decontamination"
  - "activated charcoal"
  - "suicide attempt"
  - "Acetaminophen overdose"
question_type: investigation
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yVhOyEuO2KuOyVhOuvuOuFuO2OnCDspJHrj4UgKEFjZXRhbWlub3BoZW4gUG9pc29uaW5nKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWN0aXZhdGVkQ2hhcmNvYWwubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

아세트아미노펜을 단회 과량 복용한 지 한 시간에 내원한 환자다. 의식과 기도 보호는 정상이고 초기 간효소도 정상이다. 해독제 필요 여부를 판단하기 위한 검사는 언제 시행하는가?

## 선택지

A. 첫 간효소가 정상이므로 추가 검사는 하지 않는다
B. 복용 4시간 이후 혈중 아세트아미노펜 농도를 측정한다
C. 복용 1시간째 농도만으로 치료 여부를 확정한다
D. 신기능이 악화한 뒤 처음 측정한다

## 해설

복용 시각을 아는 단회 과량 복용에서는 복용 4시간 이후의 농도를 시간-농도 노모그램에 적용한다. 4시간 전 농도나 정상 초기 간효소만으로 중독 위험을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 1시간에 혈중 농도가 아직 상승하지 않았다는 오류 교정. 활성탄 A와 4시간 농도/NAC 평가를 구별.
- 공식/학회 근거: https://pubmed.ncbi.nlm.nih.gov/37552484/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003197
- https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2808062
