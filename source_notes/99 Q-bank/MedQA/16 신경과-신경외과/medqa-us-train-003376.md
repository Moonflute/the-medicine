---
type: qbank
schema_version: 1
id: medqa-us-train-003376
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dcc1a8b64f9074655f86f6ea26003cc4dbfbb7a70b14bfdf9ffad5181e32e2ea
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Wilson disease"
  - "copper accumulation"
  - "Kayser-Fleischer ring"
  - "oral zinc therapy"
question_type: management
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snIzsiqjrs5EgKFdpbHNvbidzIERpc2Vhc2UpLm1k
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

17세 남성이 양손의 떨림으로 진료를 받으러 왔다. 최근 6개월간 우울한 에피소드와 기이한 행동이 반복되었고, 성적이 급격히 떨어졌으며 기억력과 집중력이 저하되었다. 과도한 음주와 절도 행동도 있었다. 필기는 매우 엉성해졌고 말이 약간 어눌했다. 진찰에서 상지 떨림, 경도의 근긴장이상, 손의 협응장애가 있었다. 눈에서 특징적인 소견이 관찰되었다. 다음 중 이 환자 상태의 초기 치료로 가장 적절한 것은?

## 선택지

A. 페니실라민
B. 경구 아연
C. 경구 데페라시록스
D. 경과 관찰

## 해설

청소년의 행동·인지 변화, 떨림·근긴장이상·구음장애는 Wilson병을 강하게 의심하게 한다. Kayser–Fleischer 고리는 진단 단서지만 현재 눈 사진을 확인할 수 없으므로 관찰 사실로 새로 단정하지 않으며, 간기능 이상도 본문에 없다. 경구 아연(B)은 장세포 메탈로티오네인을 유도하여 구리 흡수를 줄이고 장세포 탈락을 통한 배출을 늘린다. 구리 배설을 억제하는 약이 아니다. 신경증상 우세 환자에서 초기 치료로 고려할 수 있으나 킬레이트제도 치료 선택이며 간질환 중증도·신경학적 악화 위험·순응도를 전문의가 평가해야 한다. 모든 증상성 Wilson병에서 아연이 일률적 최선이라는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 아연이 구리 배설을 억제한다는 오류, 사진에서 확인되지 않은 고리와 본문에 없는 간기능 이상을 제거했다. 신경증상 우세 Wilson병의 초기 선택지로 B가 허용됨을 확인하되 킬레이트제와의 개별 선택을 설명했다.
- 공식/학회 근거: https://www.aasld.org/practice-guidelines/diagnosis-and-treatment-wilson-disease
- 공식/학회 근거: https://onlinelibrary.wiley.com/doi/full/10.1002/hep.32805
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC10187853/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003376
