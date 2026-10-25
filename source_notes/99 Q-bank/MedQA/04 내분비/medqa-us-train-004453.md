---
type: qbank
schema_version: 1
id: medqa-us-train-004453
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5c799f73aa9c256084fb802194467565c2c4a5ccbd1a74cbf7c96527abb27c07
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "하시모토 갑상샘염"
  - "자가면역 갑상샘염"
  - "소아 갑상샘종"
related_disease_slugs:
  - MDQg64K067aE67mEL-2VmOyLnOuqqO2GoCDqsJHsg4Hsg5jsl7wgKEhhc2hpbW90bydzIFRoeXJvaWRpdGlzKS5tZA
question_type: investigation
difficulty: standard
answer: A
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

이전에 건강했던 6세 여아가 성장 속도가 느려지고 피로해져 부모와 함께 진료를 받으러 왔다. 지난 1년 동안 또래 평균 키에서 반에서 가장 작은 아이가 되었다. 수업에 집중하는 데도 더 어려움을 겪고 놀이에 대한 관심도 줄었다. 식욕이나 식사 변화는 없다. 키는 10백분위수, 체중은 90백분위수이다. 활력징후는 정상 범위이다. 앞쪽 목을 진찰할 때 압통이 없는 종괴가 만져진다. 혈청 갑상샘자극호르몬 수치는 6.7 μU/mL이다. 추가 검사에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 세침흡인검사에서 림프구 침윤
B. 혈청 갑상샘자극호르몬 수용체 항체 양성
C. I-131 스캔에서 뚜렷한 1cm 결절의 섭취 증가
D. 소변 요오드 수치 감소

## 해설

성장둔화·상대적 체중증가·피로·목종창·TSH상승은 자가면역갑상샘염을 시사하며 조직학적 lymphocyte침윤 A가 부합한다.10백분위수는 아이의 키이지 결절 크기가 아니다. 실제진단은 기능/항체/영상으로 평가하고 모든소아에게 FNA가 필수라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 키10백분위수를 갑상샘결절 크기로 잘못 해석한 해설 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004453
