---
type: qbank
schema_version: 1
id: medqa-us-train-002464
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:31b3febaea02c7a7826426c32a521682034998ba5d458a4f6938e52e00970ab2
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "type 1 diabetes mellitus"
  - "exercise-related hypoglycemia"
  - "insulin dose adjustment"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-yggO2YiOuLuSAoSHlwb2dseWNlbWlhKS5tZA
question_type: management
difficulty: standard
answer: B
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

16세 남아가 추적검사를 위해 내원했다. 제1형 당뇨병을 6년째 앓고 인슐린만 사용하며 7개월 전 당뇨병성 케톤산증으로 치료받았다. 식사와 인슐린 요법을 잘 지켜왔고 고등학교 축구팀에 가입하고 싶어 한다. 활력징후는 정상이고 HbA1c는 6.3%이다. 다음 중 가장 적절한 권고는?

## 선택지

A. 신체활동을 피하도록 권고한다
B. 운동하는 날 인슐린 용량을 줄인다
C. 인슐린을 메트포르민으로 바꾼다
D. 운동하는 날 인슐린 용량을 늘린다

## 해설

운동을 금지하거나 T1D의 인슐린을 metformin으로 바꾸지 않는다. 선택지 중 B는 운동 관련 저혈당을 예방하기 위한 인슐린 조절을 뜻한다. 실제 감량 대상·시점·정도는 운동 종류와 시간, 식사 및 활동 중인 인슐린, 혈당/CGM 추세에 맞추고 필요하면 탄수화물을 보충한다. 축구 같은 혼합·고강도 운동은 혈당을 올릴 수도 있어 운동일 총량을 무조건 줄이는 규칙은 아니다. 기저 인슐린을 완전히 생략해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 운동일 모든 인슐린을 일률 감량한다는 해설을 운동종류·혈당에 따른 개별 조절로 한정.
- https://www.ispad.org/asset/D31ED1DE-6566-4F33-BB13588B0ED74597/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002464
