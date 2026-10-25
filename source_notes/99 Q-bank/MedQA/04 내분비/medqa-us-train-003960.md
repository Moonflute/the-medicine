---
type: qbank
schema_version: 1
id: medqa-us-train-003960
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5d2a6d30d97c3317626a088b31dd37480ed8d193674e515e7712300350e8f781
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "하시모토 갑상샘염"
  - "일차성 갑상샘기능저하증"
  - "자가면역질환"
related_disease_slugs:
  - MDQg64K067aE67mEL-2VmOyLnOuqqO2GoCDqsJHsg4Hsg5jsl7wgKEhhc2hpbW90bydzIFRoeXJvaWRpdGlzKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: 임상증례 객관식
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

53세 여자가 수개월간 지속된 피로를 호소하여 일차의료기관을 방문했다. 수면의 질이나 시간과 관계없이 하루 종일 피곤하다고 한다. 추가로 변비와 4.5kg의 체중 증가도 있었다. 호흡곤란, 흉통, 어지럼증 또는 혈변은 없다. 활력징후는 맥박 58회/분, 혈압 104/68 mmHg, 실내 공기 산소포화도 98%이다. 신체검사에서는 약간 건조한 피부만 보인다. 전혈구검사는 정상이다. 이 환자 상태의 발병기전을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 내분비 조직에 대한 자가면역 공격
B. 만성 출혈
C. 의인성 원인
D. 영양 결핍

## 해설

피로·변비·체중증가·서맥·건조피부는 갑상샘기능저하를 시사하고 선택지 중 자가면역 갑상샘염 A가 가장 부합한다. 다만 TSH/유리T4가 없어 현성인지 무증상성인지 분류할 수 없으며 실제로는 생화학검사로 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: TSH/freeT4 없이 subclinical로 분류한 오류. 임상적 저하의 자가면역 기전 A 유지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003960
