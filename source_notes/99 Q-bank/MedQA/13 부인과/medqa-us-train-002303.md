---
type: qbank
schema_version: 1
id: medqa-us-train-002303
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d91fcb96b9a782ce3cd5451d4c174cbc72b38dbcdb821e2f3e259ac21308833b
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "endometriosis"
  - "endometriosis-associated infertility"
  - "laparoscopic lesion ablation"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nspp0gKEVuZG9tZXRyaW9zaXMpLm1k
  - MTMg67aA7J246rO8L-yekOq2gSDshKDsspzquLDtmJUgKENvbmdlbml0YWwgVXRlcmluZSBBbm9tYWx5KS5tZA
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

30세 여성이 1년간 임신하지 못했다. 배우자 정액과 난관 개통성은 정상이다. 수술 전 충분히 상담한 뒤 복강경을 시행했으며, 최소·경도 자궁내막증이 보인다. 자연임신 가능성을 높이기 위해 고려할 처치는?

## 선택지

A. 수술을 중단하고 복합피임약을 1년 사용
B. 복강경에서 보이는 내막증 병변을 절제 또는 소작
C. 난소를 양쪽 모두 절제
D. 장기간 GnRH 작용제만 사용하며 동시에 자연임신 시도

## 해설

최소·경도 자궁내막증 난임에서 수술적 복강경 치료는 자연임신 가능성을 높이기 위해 고려할 수 있다. 임신을 시도하는 기간에 배란을 억제하는 호르몬제로 자연임신률을 높일 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문의ablation을절제로바꾼번역복원 및 불임수술효과의개별화.
- https://academic.oup.com/hropen/article/2022/2/hoac009/6537540

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002303
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11788693/
