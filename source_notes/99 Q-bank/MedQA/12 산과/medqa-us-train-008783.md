---
type: qbank
schema_version: 1
id: medqa-us-train-008783
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9cb62034e02b60615bcefd800b3fed69f24111cd77126e42cc73bf81d5bb693b
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "preexisting type 1 diabetes in pregnancy"
  - "neural tube defect"
  - "hyperglycemia teratogenicity"
question_type: prognosis
related_disease_slugs: []
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

31세 G1P0 여성이 일주일 전 가정용 임신검사가 양성이어서 첫 산전 진료를 위해 산과에 내원했다. 마지막 월경은 8주 전이었다. 소아기부터 제1형 당뇨병이 있어 인슐린을 사용한다. 2주 전 HbA1c는 13.7%였다. 당시 정기 소변검사에서 미세알부민뇨가 발견되어 일차진료 의사가 리시노프릴을 처방했지만 아직 복용하지 않았다. 남동생이 자폐증이지만 그 외 가족력은 특이사항이 없다. 활력징후와 신체검사는 정상이다. 이 태아는 다음 중 어떤 위험이 증가하는가?

## 선택지

A. 이수성
B. 신경관 결손
C. 신생아 고혈당
D. 양수과소증

## 해설


모체의 HbA1c가 13.7%로 매우 높아 혈당 조절이 미흡함을 의미한다. 고혈당은 임신 초기에 신경관 형성에 영향을 주어 엽산 대사를 방해하고 신경관 결손 위험을 증가시킨다. 따라서 태아의 신경관 결손 위험이 증가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008783
