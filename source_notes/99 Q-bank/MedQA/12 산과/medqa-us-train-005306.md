---
type: qbank
schema_version: 1
id: medqa-us-train-005306
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55d3bc5d7dfd0ebe6daf1e5906dd186785c03c8f32851b28d7b9ae0e6e476e9e
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "발프로산"
  - "신경관 결손"
  - "임신 중 항경련제"
  - "Neural tube defect"
question_type: prognosis
related_disease_slugs: []
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

임신 36주인 32세 임신 2회·유산 1회의 여자가 첫 산전 진료를 받으러 왔다. 조절되는 간질로 발프로산과 리튬을 복용하고 있으며 과거 선택적 유산이 있다. 이 병력으로 태아에서 가장 발생하기 쉬운 질환은?

## 선택지

A. 21번 삼염색체증
B. 신경관 결손
C. 자궁내 성장제한
D. 사지 기형

## 해설

발프로산의 임신 초기 노출은 신경관 결손, 특히 척추갈림증 위험을 높이므로 선택지 중 B가 적절하다. 신경관은 임신 초기에 닫히며 36주 복용 때문에 그때 새로 결손이 생긴다는 뜻은 아니다. 모든 노출 태아가 결손을 갖는 것도 아니고 약물을 갑자기 중단해서도 안 되며 전문 진료가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 36주에 새로 신경관이 닫히는 것이 아닌 임신 초기 약물 노출 위험임을 교정.
- https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cef3e335-5891-412f-89c4-79fcd2f145b7

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005306
