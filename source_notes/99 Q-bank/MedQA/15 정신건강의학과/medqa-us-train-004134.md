---
type: qbank
schema_version: 1
id: medqa-us-train-004134
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:209072ba897ca700d2c87d9cb68e948fd209225ac9bd675b770783675fb37280
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "기면증"
  - "탈력발작"
  - "수면마비"
  - "입면 환각"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOuptOymnSAoTmFyY29sZXBzeSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 여자가 4개월간 지속된 전신 피로와 학교에서 집중할 수 없는 증상으로 내원했다. 그동안 주간 졸림이 심했다. 잠들 때 방에서 만화 캐릭터가 노는 환각을 보고, 매일 밤 한두 번 깬다. 깨어날 때 몸이 뻣뻣하고 몇 분간 움직일 수 없다. 매일 밤 9시에 자고 오전 7시에 일어나며 낮에 15분 낮잠을 2~3회 자고 나면 개운하다. 지난주 친구의 농담을 듣다가 머리가 기울고 턱이 떨어지는 에피소드가 수초간 있었으나 저절로 회복되었다. 가장 적절한 초기 약물치료는 무엇인가?

## 선택지

A. 모다피닐
B. 시탈로프람
C. 리스페리돈
D. 벤라팍신

## 해설

과도한 주간졸림·입면 환각·수면마비와 웃을 때의 일시적 머리·턱 근력 저하는 탈력발작을 동반한 기면증을 시사한다. 제시된 약물 중 모다피닐이 주간졸림을 줄이는 원문 선택이다. AASM에서 소아청소년 기면증의 모다피닐은 조건부 권고이며, 실제로는 전문적 진단 확인과 연령별 허가·발진 등 안전성 검토가 필요하다. 모다피닐이 탈력발작 자체의 치료를 보장하는 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004134

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 16세 기면증에서 모다피닐을 성인과 동일한 일률 1차로 설명하지 않도록 소아청소년 조건부 근거·탈력발작 표적을 구별.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://aasm.org/wp-content/uploads/2022/03/Treatment_Central_Disorders_Hypersomnolence_Guideline_at_a_Glance.pdf
