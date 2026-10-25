---
type: qbank
schema_version: 1
id: medqa-us-train-006288
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5be056957d98131d5cd39b9f6d462cbbb788730d9ad1e4e99e82e1d780aface4
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "뇌사"
  - "무호흡 검사 양성"
  - "생명유지치료 중단"
  - "Brain death"
question_type: ethics
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsgqwgKEJyYWluIGRlYXRoKS5tZA
difficulty: complex
answer: C
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

입원하여 기관삽관과 기계환기를 시행한 지 4일이 된 30세 남성이 기관 흡인 시 기침 반응을 보이지 않는다. 교통사고를 당해 응급실 도착 당시 의식이 저하되어 있었다. 인공호흡기는 FiO2 100%, 일회호흡량 920mL, 호기말 양압 5cm H2O로 설정되어 있다. 현재 혈압상승제를 투여받고 있다. 활력징후는 정상이다. 동공은 산동되어 있고 빛에 반응하지 않는다. 각막반사, 구역반사 및 안뜰눈반사가 소실되어 있다. 통증 자극에 얼굴이나 상지의 반응은 없고, 하지에서는 삼중 굴곡 반응이 나타난다. 혈청 전해질, 요소, 크레아티닌 및 포도당 농도는 모두 정상 범위이다. 동맥혈가스는 pH 7.45, pCO2 41 mm Hg, pO2 99 mm Hg, O2 포화도 99%이다. 이틀 전 두부 CT에서 종괴 효과를 동반한 좌측 뇌내출혈이 보였다. 무호흡 검사는 양성이다. 알려진 가족, 사전의료지시서 또는 의료대리인이 없다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 윤리위원회 자문
B. 추가 치료를 위한 법원 명령
C. 인공호흡기 제거
D. 두부 CT 재검

## 해설

출제 문맥은 뇌간반사 소실과 양성 무호흡 검사로 뇌사를 정식 판정한 상태를 전제로 하며, 이 전제가 충족되면 보기 C와 같이 인공호흡을 종료할 수 있다. 뇌사 판정에는 원인 확정, 체온과 순환 조건 충족, 진정제·중독 및 대사성 교란 배제와 정해진 무호흡 검사 기준 충족이 필요하다. 다리의 삼중 굴곡과 같은 척수 반사는 뇌사와 양립할 수 있다. 가족이나 사전의료지시가 없다는 사실 자체가 뇌사 또는 치료 종료의 근거가 되는 것은 아니며, 실제 절차는 해당 법규와 기관 정책에 따라 수행해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 뇌사 확정과 무연고 상태를 혼동하지 않도록 교정한다. 양성 무호흡 검사 및 뇌간반사 소실이라는 출제 조건에서 C를 유지하되 정식 판정의 선행 조건과 척수 반사를 명시한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC10791061/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006288
