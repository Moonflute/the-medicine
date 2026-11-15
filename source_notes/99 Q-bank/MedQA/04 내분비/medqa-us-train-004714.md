---
type: qbank
schema_version: 1
id: medqa-us-train-004714
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2a0f340009a978dce90e5076dcc85159a7bb36a7a251f5b9dc008428c805eb6e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "원발성 부갑상샘기능항진증"
  - "부갑상샘호르몬 상승"
  - "골막하 골흡수"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

68세 여성이 반복되는 신장결석으로 검사받았다. 보정 칼슘은 11.5 mg/dL로 높고 PTH는 높으며 소변 칼슘도 증가해 원발성 부갑상선기능항진증이 확인됐다. 수술을 견딜 수 있는 환자에서 근본 치료는?

## 선택지

A. 부갑상선절제술을 위해 의뢰
B. 증상과 관계없이 1년에 한 번 검사만 시행
C. 장기 비스포스포네이트 단독으로 원인 치료
D. 고칼슘혈증인데 칼슘 보충제를 먼저 늘림

## 해설


신장결석은 원발성 부갑상선기능항진증의 장기 합병증으로 수술을 고려할 근거다. 위치를 찾는 영상은 수술 계획용이며 생화학적 진단을 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 고칼슘·저인·PTH상승의 원발성 부갑상선항진에서 골막하 흡수 A의 병리 연결이 맞음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004714
- https://doi.org/10.1002/jbmr.4677
