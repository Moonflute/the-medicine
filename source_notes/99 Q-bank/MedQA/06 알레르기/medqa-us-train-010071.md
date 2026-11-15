---
type: qbank
schema_version: 1
id: medqa-us-train-010071
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:462c98899ce2534c6666bed4ae8659efa871893881fd014240f5b8a6c8779ebe
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "아스피린 과민성 호흡기질환"
  - "천식"
  - "비용종"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: prevention
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
---

# MedQA US 임상문제

## 문제

천식과 비용종이 있는 48세 남성이 이부프로펜과 나프록센을 복용할 때마다 1시간 안에 코막힘과 천명이 생긴다. NSAID 악화 호흡기질환이 의심된다. 재발을 막기 위한 안내는?

## 선택지

A. 이부프로펜 대신 나프록센을 복용한다
B. 식후에 복용하면 같은 약을 써도 된다
C. 집에서 저용량 아스피린을 한 번 먹어 반응을 확인한다
D. 아스피린과 강한 COX-1 억제 NSAID를 피하고 대체약을 상담한다

## 해설


천식·비용종과 여러 COX-1 억제제에 대한 재현성 있는 호흡기 반응이 단서다. 교차반응 가능성이 있어 해당 약군을 피한다. 아스피린이 꼭 필요하면 전문팀에 평가와 탈감작 여부를 의뢰한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-010071`와 직접 대조했다.
- 판정: 천식·비용종에서 과거 아스피린 반응을 묻는 D 유지. 반응 병력 부재가 일차예방 아스피린의 자동 적응증이라는 오해를 차단.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Drug-Allergy-PP-9-2022.pdf
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/aspirin-to-prevent-cardiovascular-disease-preventive-medication

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010071
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7980229/
