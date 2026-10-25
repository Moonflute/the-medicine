---
type: qbank
schema_version: 1
id: medqa-us-train-001681
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:25f969eb21b9659b26a43b1e1805e0a428f932b3837c1debbebccf596f84b9bd
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "narcolepsy"
  - "excessive daytime sleepiness"
  - "modafinil"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOuptOymnSAoTmFyY29sZXBzeSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 남성이 평생 지속된 과도한 졸림으로 일차진료에 내원했다. 낮에 갑자기 잠들어 웨이터 일에 어려움을 겪고 잠들 때 깨어 있다고 느끼면서 꿈꾸는 느낌이 든다. 하루 약 10시간 자도 계속 피곤하고 운전 중 잠들어 나무에 부딪힌 적도 있다. 밤늦게까지 컴퓨터를 한다. 피곤해 보이는 비만 남아이며 높은 구개와 양호한 치아위생이 있다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 야간 지속적 양압환기
B. 도파민 재흡수 억제제 시작
C. 규칙적인 낮잠과 야간 수면시간 증가 권고
D. 밤에 청색광 노출 활동을 피하도록 권고

## 해설

충분히 자도 지속되는 주간 수면발작과 입면 시 꿈 같은 경험은 기면증을 시사한다. 제시된 약물 기전 중 도파민 재흡수 억제를 통해 각성을 촉진하는 모다피닐에 해당하는 선택을 원문 정답으로 유지한다. 그러나 탈력발작은 본문에 없으므로 있다고 설명하지 않는다. 17세에서는 전문 수면평가와 객관적 검사로 수면 부족·수면무호흡 등을 감별하고, 소아청소년에서의 조건부 근거와 허가·안전성을 따로 검토해야 한다. 이미 졸음운전 사고가 있으므로 운전 등 위험 활동을 피하도록 해야 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001681

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문에 없는 탈력발작을 삭제. 기면증 의심·객관적 감별검사·운전 위험 및 소아청소년 약제 판단을 구별하며 도파민 재흡수 억제 원정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://aasm.org/wp-content/uploads/2022/03/Treatment_Central_Disorders_Hypersomnolence_Guideline_at_a_Glance.pdf
