---
type: qbank
schema_version: 1
id: medqa-us-train-006800
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a00cc95dc44000bbe74dbdf7f7d7ab5cbc3cc1ab4df6dd5eef49d8ba92ad28e0
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 신장병증 초기"
  - "사구체 과여과"
  - "미세알부민뇨"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvantjKXrs5Hspp0gKERpYWJldGljIE5lcGhyb3BhdGh5KS5tZA
question_type: mechanism
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 아프리카계 미국인 여성이 빈뇨로 내원했다. 1년 동안 한 시간마다 여러 번 소변을 보았고 갈증과 식욕도 증가했다. 배뇨통은 없다. 회계사로 일해 운동할 시간이 없고 식사는 주로 피자와 치즈버거이다. 활력징후와 신체진찰은 정상이다. 오늘 혈당은 200 mg/dL, HbA1c는 7.4%이며 소변검사에서 미세알부민뇨가 있다. 다음 중 이 단백뇨의 가장 가능성 높은 원인은?

## 선택지

A. 사구체 세동맥의 석회화 경화
B. 사구체 여과 증가
C. 미만성 결절성 사구체경화증
D. 사구체 전하 소실

## 해설

초기당뇨의 사구체내압·과여과 증가 B가 albuminuria에 기여할 수 있다. 그러나 여과장벽/족세포와 내피손상도 관련되어 구조변화가 전혀 없는 순수기능현상으로 단정하지 않는다. 결절성경화증은 진행단계 소견이며 지속 albuminuria는 반복정량으로 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 초기당뇨 과여과 B는 유지하되 albuminuria는 구조손상과 무관한 순수기능문제라는 과장 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006800
