---
type: qbank
schema_version: 1
id: medqa-us-train-007354
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:73130c5ac2d9d3d0ea6a1fb69e68c3356c7c66ff50ffde42b8bc28309c56d90f
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "아나필락시스"
  - "벌독 알레르기"
  - "제1형 과민반응"
  - "기도 부종"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sC5tZA
question_type: diagnosis
difficulty: standard
answer: A
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

25세 여성이 벌에 쏘인 수분 뒤 전신 두드러기, 얼굴 부종, 숨참으로 내원했다. 혈압은 119/81 mmHg이고 목에서 들리는 흡기성 협착음이 있다. 이 반응의 기전은?

## 선택지

A. IgE에 의한 비만세포 활성화
B. IgG에 의한 세포 표면 항원 공격
C. 항원–항체 복합체 침착
D. 감작 T세포가 매개하는 지연형 반응

## 해설


벌에 쏘인 직후 피부 증상과 기도 증상이 함께 나타나 아나필락시스에 해당한다. 이 사례의 대표 기전은 벌독에 대한 특이 IgE가 비만세포를 활성화하는 제1형 과민반응이다. 저혈압이 없어도 진단할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-007354`와 직접 대조했다.
- 판정: 벌독 후 발진·부종과 흡기성 협착음은 아나필락시스성 I형 반응 A를 지지. 원문·선지·해설의 연결 유지.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007354
- 대한천식알레르기학회, 아나필락시스 진단과 치료 전문가 의견서: https://www.allergy.or.kr/board/treatment/view/6898?gubun=2
