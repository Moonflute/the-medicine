---
type: qbank
schema_version: 1
id: medqa-us-train-004544
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f757f783aae2c576343645a972f0de0e653e0666b236f9d420056332a25eea0a
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "스터지-웨버 증후군"
  - "연수막 혈관종"
  - "포도주색 모반"
  - "녹내장"
question_type: association
related_disease_slugs:
  - MTgg7JWI6rO8L-uFueuCtOyepSAoZ2xhdWNvbWEpLm1k
difficulty: standard
answer: D
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

10세 남아가 반복되는 두통으로 어머니와 함께 가정의학과에 왔다. 두통은 중등도에서 중증이며 한쪽, 주로 왼쪽에 생기고 박동성이다. 과거력으로 경한 지적장애와 때때로 이차성 전신발작으로 진행하는 복합부분발작이 있다. 생후 7일에 입양되어 출생력과 가족력은 알 수 없다. 발달 이정표는 약간 지연되었다. 발열이나 두부 외상은 없다. 활력징후는 정상 범위이며 키는 67백분위수, 체중은 54백분위수이다. 신체검사에서 왼쪽 눈꺼풀과 뺨에 푸른색 변색 부위가 보인다. 그 외에는 정상이다. 두부 CT가 제시되어 있다. 다음 중 추가로 나타날 가능성이 가장 높은 임상 소견은 무엇인가?

## 선택지

A. 재의 잎 반점
B. 카페오레 반점
C. 샤르코-부샤르 동맥류
D. 녹내장

## 해설

눈꺼풀·뺨의 혈관성 피부 변색, 발작과 발달·인지 문제가 함께 있어 스터지-웨버 증후군을 가장 시사하며 동반 녹내장(D)이 중요한 연관 소견이다. 대표 병변은 얼굴 모세혈관기형과 연수막 혈관기형으로, 뇌동맥류가 특징인 증후군은 아니다. CT의 구체 소견은 현재 확인되지 않아 연수막 혈관종이나 석회화를 보았다고 단정하지 않는다. 문자로 주어진 임상조합과 선지 관계를 근거로 한 최선답이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. SWS를 뇌동맥류 증후군으로 설명하고 보이지 않는 CT 혈관종을 확인한 듯한 해설을 교정했다. 얼굴 혈관성 변색·발작/발달력으로 녹내장 D는 유지한다.
- 공식/학회 근거: https://www.ncbi.nlm.nih.gov/gtr/conditions/C0038505/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004544
