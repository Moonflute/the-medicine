---
type: qbank
schema_version: 1
id: medqa-us-test-000364
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:1c083ae40aae3afdcd0bcbfa21d4a386fe82753e0ba170b115fb5433c7627219
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상샘 유두암"
  - "갑상샘 결절"
  - "경부 림프절 전이"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsnKDrkZDslZQgKFRoeXJvaWQgUGFwaWxsYXJ5IENhcmNpbm9tYSkubWQ
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDqsrDsoIggKFRoeXJvaWQgTm9kdWxlKS5tZA
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 여성의 초음파에서 2.5 cm 갑상선 고형 저에코 결절에 불규칙한 경계와 점상 고에코가 보인다. 경부에 낭성 변화를 보이는 림프절도 있고 TSH는 정상이다. 다음 진단 단계는?

## 선택지

A. 갑상선 섭취 스캔만 시행
B. 6개월 뒤 초음파만 반복
C. 결절과 의심 경부 림프절을 초음파 유도 세침흡인으로 평가
D. 혈청 갑상선글로불린만 측정

## 해설


고위험 초음파 소견이 있는 결절은 병리 평가가 필요하다. 의심 림프절을 함께 평가하면 수술 범위 결정에도 도움이 된다. 초음파만으로 유두암이나 림프절 전이를 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/4선지/정답 C/해설 읽음. 젊은 성인에서 불규칙 갑상샘 결절, 경부 림프절 및 점상 고에코 부위는 보기 중 유두암에 합당. 영상만 확진한 것이 아닌 가장 가능성 높은 진단 비교이며 치료 검증 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000364
- https://doi.org/10.3348/kjr.2021.0713
