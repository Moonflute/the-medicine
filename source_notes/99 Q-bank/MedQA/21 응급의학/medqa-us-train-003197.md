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
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yVhOyEuO2KuOyVhOuvuOuFuO2OnCDspJHrj4UgKEFjZXRhbWlub3BoZW4gUG9pc29uaW5nKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWN0aXZhdGVkQ2hhcmNvYWwubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 여성이 자살을 시도한 후 응급실에 왔다. 어머니가 욕실에서 빈 아세트아미노펜 병 옆에 있는 환자를 발견했고 환자는 500 mg 정제 약 25개를 1시간 전에 복용했다고 한다. 주요우울장애 병력이 있고 플루옥세틴을 복용한다. 의식과 지남력은 정상이며 활력징후와 신체검사는 정상이다. 혈액검사도 정상이다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 활성탄 투여
B. 관찰 입원
C. 간이식 대기자 등록
D. 간 생검

## 해설

최근 1시간 내 잠재적 독성량을 섭취했고 의식과 기도보호가 유지되어 활성탄(A)을 고려한다. 1시간에 혈중 약물이 없거나 농도가 아직 오르지 않는다는 뜻은 아니다. 단회 급성 복용은 적절한 시간의 혈중 농도(통상 섭취 후 4시간 이후)와 시간정보로 NAC 필요성을 평가하며 초기 정상 간효소만으로 독성을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 1시간에 혈중 농도가 아직 상승하지 않았다는 오류 교정. 활성탄 A와 4시간 농도/NAC 평가를 구별.
- 공식/학회 근거: https://pubmed.ncbi.nlm.nih.gov/37552484/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003197
