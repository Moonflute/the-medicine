---
type: qbank
schema_version: 1
id: medqa-us-train-006941
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:65576ef75c30f9d2db10eb72e4e7c0d5dd1b8a0209f63f99076d1cf521ad2d7c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "애디슨병"
  - "자가면역 부신기능부전"
  - "원형탈모증 연관"
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-ybkO2YlSDtg4jrqqjspp0gKEFsb3BlY2lhIEFyZWF0YSkubWQ
  - MDQg64K067aE67mEL-ybkOuwnOyEsSDrtoDsi6Ag6riw64ql7KCA7ZWY7KadKFByaW1hcnkgQWRyZW5hbCBJbnN1ZmZpY2llbmN5KS5tZA
question_type: mechanism
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 남성이 9개월 동안 점점 심해지는 피로감과 반복되는 오심으로 내원했다. 이 기간에 체중이 3.8kg(8.3lb) 감소했고 갑자기 일어설 때 어지럽다. 1년 전 원형탈모증으로 3개월 동안 매달 병변 내 트리암시놀론 주사를 받았다. 흡연과 음주는 하지 않는다. 체온은 37.4°C(99.3°F), 맥박은 분당 86회, 혈압은 102/68 mm Hg이다. 두피에 흉터 없는 경계가 뚜렷한 탈모반이 있고 손바닥 주름이 짙어져 있다. 혈청 Na+ 125, Cl− 98, K+ 5.6 mEq/L, 포도당 72 mg/dL, 크레아티닌 0.8 mg/dL, TSH 4.1 μU/mL, 아침 코르티솔 2.5 μg/dL, 코르티코트로핀 250μg 투여 30분 후 코르티솔 2.6 μg/dL이다. 다음 중 증상의 가장 가능성 높은 기전은?

## 선택지

A. 부신 내 아밀로이드 침착
B. 부신의 육아종성 염증
C. 부신의 자가면역 파괴
D. 뇌하수체 코르티코트로핀 활성 억제

## 해설

저Na·고K·수장선과색소와 낮은cortisol/불충분 cosyntropin반응은 원발성부신부전이다. 원형탈모 등 자가면역배경은 부신자가면역파괴 C를 지지한다. ACTH자체가 반응하지 않는다는 뜻이 아니라 부신이 외부ACTH자극에 cortisol을 올리지 못한다는 뜻이다. 과거국소steroid만으로 뇌하수체억제를 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 자가면역 원발성부신부전 C에서 ACTH분비와 cosyntropin반응을 혼동한 표현 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006941
