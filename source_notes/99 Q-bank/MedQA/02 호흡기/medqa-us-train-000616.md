---
type: qbank
schema_version: 1
id: medqa-us-train-000616
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b5fded9fb52a074d19abb0f18dd1418025fa232b9175cf44b31db08283058565
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "sarcoidosis"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ycoOycoeyiheymnSAoU2FyY29pZG9zaXMpLm1k
question_type: mechanism
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

29세 아프리카계 미국인 여성이 1개월 전 폐렴 평가를 위해 시행한 흉부 X선 검사에서 우연히 발견된 양측 폐문 림프절병증(bilateral hilar lymphadenopathy)으로 내원하였다. 문진 결과, 환자는 기침, 호흡곤란, 협심증을 보고하였다. 이전 안과 협진 보고서에서는 어떠한 안과적 이상도 나타나지 않았다. 임상 병리 검사 결과 안지오텐신 전환 효소(angiotensin-converting enzyme) 수치가 상승한 것으로 나타났다. 신체 검진상 뚜렷한 이상은 없었다. 활력 징후는 심박수 76회/분, 호흡수 16회/분, 혈압 123/73 mm Hg였다. 다음 중 이 환자에게서 폐문 림프절병증을 유발하는 반응의 기전은 무엇인가?

## 선택지

A. 제I형-아나필락시스 과민 반응
B. 제III형-면역 복합체 매개 과민 반응
C. 제IV형-세포 매개(지연성) 과민 반응
D. 제III형 및 제IV형-혼합 면역 복합체 및 세포 매개 과민 반응

## 해설


양측 폐문 림프절 비대와 ACE 상승은 육아종증(sarcoidosis)의 특징이며, 이는 제IV형(세포 매개, 지연형) 과민반응에 의해 비육아종성 육아종이 형성되는 과정이다. 따라서 원인은 제IV형 세포 매개 반응이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000616
