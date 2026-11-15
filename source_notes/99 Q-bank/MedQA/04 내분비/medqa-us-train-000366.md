---
type: qbank
schema_version: 1
id: medqa-us-train-000366
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c599ee0b365aaa36286964a24b7ba38d680d99a417883087e435afcbc52d22ad
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hypoglycemia"
  - "insulinoma"
related_disease_slugs:
  - MDQg64K067aE67mEL-yggO2YiOuLuSAoSHlwb2dseWNlbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 공복에 반복되는 발한과 흐린 시야를 호소하고, 당을 섭취하면 좋아진다. 의료진 감독하 공복 검사에서 증상이 있을 때 혈장 포도당 45 mg/dL, 인슐린 20 μIU/mL, C-펩타이드 0.8 nmol/L였다. 인슐린 분비촉진제 검사는 음성이다. 가장 가능성 높은 원인은?

## 선택지

A. 외인성 인슐린 투여
B. 설포닐우레아 복용
C. 인슐린종
D. 중증 부신기능저하증

## 해설


저혈당인데도 인슐린과 C-펩타이드가 억제되지 않아 내인성 고인슐린혈증에 해당한다. 분비촉진제 검사가 음성인 이 상황에서는 인슐린종이 가장 의심된다. 생화학적 근거를 확보한 후 위치를 찾는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저혈당 시 내인성 insulin/proinsulin/C-peptide가 부적절하게 높고 SU음성. insulinoma C로 외인성 insulin/IGF2 원인과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000366
- https://doi.org/10.1210/jc.2008-1410
