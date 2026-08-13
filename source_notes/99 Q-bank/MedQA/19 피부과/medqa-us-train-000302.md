---
type: qbank
schema_version: 1
id: medqa-us-train-000302
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a6869b7d710074e5e1812719dfa5085f2516fbf3d65f235e90d99b098b80064c
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "Malignant melanoma"
  - "Keratoacanthoma"
  - "Lentigo maligna"
  - "Basal cell carcinoma"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yVheyEsSDtnZHsg4nsooUgKE1hbGlnbmFudCBNZWxhbm9tYSkubWQ
  - MTkg7ZS867aA6rO8L-q4sOyggCDshLjtj6zslZQgKEJhc2FsIENlbGwgQ2FyY2lub21hKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL1RpbW9sb2wubWQ
---

# MedQA US 임상문제

## 문제

63세 남성이 가슴에 있는 피부 병변에 대한 평가를 위해 내원하였다. 그는 2개월 전 처음 병변을 발견하였으며 그 이후로 크기가 커진 것 같다고 생각한다. 병변은 통증이나 가려움증이 없다. 환자는 제2형 당뇨병, 고콜레스테롤혈증, 녹내장을 앓고 있다. 환자는 지난 40년간 매일 담배 1갑을 피웠으며 주말에는 맥주 2~3잔을 마신다. 현재 복용 중인 약물은 메트포르민(metformin), 아토르바스타틴(atorvastatin), 국소 티몰롤(timolol), 종합비타민이다. 활력징후는 정상 범위 내에 있다. 병변은 촉진 시 부분적으로 융기되어 있으며 꼬집었을 때 형태가 변하지 않는다. 병변의 사진이 제시되어 있다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 악성 흑색종(Malignant melanoma)
B. 각질극세포종(Keratoacanthoma)
C. 악성 흑자(Lentigo maligna)
D. 기저세포암(Basal cell carcinoma)

## 해설


흑색 종양이 비대칭이며 경계가 불규칙하고 색소가 불균일하게 분포한 것이 사진에서 보이며, 이는 악성 흑색종의 전형적인 임상 소견이다. 흑색종은 비멍들어오지 않는 고형 결절로 나타나며, 조기 전이 위험이 높아 가장 가능성이 높은 진단이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000302
