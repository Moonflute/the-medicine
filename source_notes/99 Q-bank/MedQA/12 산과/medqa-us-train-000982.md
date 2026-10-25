---
type: qbank
schema_version: 1
id: medqa-us-train-000982
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d995c700be01e2bd837250fbef1b088309920df6445cb69f65c26511a6f4f74e
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "hyperemesis gravidarum"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoCDsnoXrjacgKEh5cGVyZW1lc2lzIEdyYXZpZGFydW0pLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvTWlzb3Byb3N0b2wubWQ
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 37주인 27세 초산부가 4시간 동안의 잦은 수축으로 응급실에 내원하였다. 임신 중 임신오조(hyperemesis gravidarum)가 있었으나 임신 2분기에 호전되었다. 수축은 10~15분 간격으로 발생하며 시작 이후 강도와 지속 시간이 증가하고 있다. 체온은 37.1°C, 맥박은 110회/분, 혈압은 140/85 mm Hg이다. 촉진 시 자궁 수축이 느껴진다. 골반 검사상 질 내에 맑은 액체가 보인다. 자궁경부는 50% 소실되었고 3 cm 개대되었다. 4시간 후 자궁경부는 80% 소실되었고 6 cm 개대되었다. 골반 검사로는 태아 머리의 위치를 확인할 수 없었다. 태아 심박수는 안심할 만한 수준이다. 다음 중 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 초음파 검사 시행
B. 외회전술(external cephalic version) 시행
C. 미소프로스톨(misoprostol) 투여
D. 옥시토신(oxytocin) 투여

## 해설

경부는 3 cm에서 6 cm로 개대되고 소실은 50%에서 80%로 진행했다. 진찰로 태아 머리 위치를 확인할 수 없으므로 초음파(A)로 태위·선진부를 확인하는 것이 우선이다. 이미 진행하는 진통에 태위 확인 없이 유도·촉진 약물이나 외회전술을 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 경부 소실 50%를 개대 50%로 잘못 설명한 해설 수정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000982
