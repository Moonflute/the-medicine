---
type: qbank
schema_version: 1
id: medqa-us-train-003662
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5eeb23a67f32faae6d6f4acef82311932ec423ae594db1445707e0e362f2f4f8
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "carcinoid syndrome"
  - "neuroendocrine tumor"
  - "5-HIAA"
  - "tricuspid regurgitation"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yCvOyyqO2MkOuniSDsl63rpZggKFRyaWN1c3BpZCBSZWd1cmdpdGF0aW9uKS5tZA
  - MTAg7KKF7JaRL-y5tOultOyLnOuFuOydtOuTnCDspp3tm4TqtbAgKENhcmNpbm9pZCBTeW5kcm9tZSkubWQ
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 남성이 수개월째 물설사를 한다. 얼굴과 목이 갑자기 붉어지면서 천명이 반복된다. 신경내분비종양에 의한 카르시노이드 증후군이 의심된다. 이 증상을 뒷받침할 검사는?

## 선택지

A. 혈장 유리 메타네프린
B. 공복 혈청 가스트린
C. 혈청 트립타제
D. 24시간 소변 5-하이드록시인돌아세트산(5-HIAA)

## 해설

5-HIAA는 세로토닌의 대사산물이다. 24시간 소변 5-HIAA로 세로토닌 과다 분비를 평가한다. 식품·약물이 결과에 영향을 줄 수 있으며 이 검사만으로 종양 위치를 정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 개울물 노출을 carcinoid의 원인처럼 서술한 오류. 만성설사+홍조/천명/우측판막 소견을 근거로 D 유지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003662
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9539661/
