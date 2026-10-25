---
type: qbank
schema_version: 1
id: medqa-us-test-000960
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f4a9521302f5aac545dae6ab5a052351f65634249ed997e688df1de927f30925
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "유착성 관절낭염"
  - "오십견"
  - "어깨 운동 제한"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yYpOyLreqyrCAoQWRoZXNpdmUgQ2Fwc3VsaXRpcykubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

65세 남성이 팔이 뻣뻣해져 머리를 빗거나 높은 선반의 물건을 꺼내기 어렵다고 진료를 받으러 왔다. 제2형 당뇨병, 비만, 고혈압이 있으며 메트포르민, 인슐린, 리시노프릴, 히드로클로로티아지드를 복용한다. 주로 집에서 TV를 보며 신체활동을 하지 않는다. 어깨의 능동·수동 운동범위가 감소하고 상지 근력은 4/5였다. 가장 가능성 높은 진단은?

## 선택지

A. 회전근개 충돌증후군
B. 유착성 관절낭염
C. 견관절 골관절염
D. 견봉하 점액낭염

## 해설

정답은 B, 유착성 관절낭염이다. 당뇨병은 위험인자이며, 어깨의 능동 운동뿐 아니라 검사자가 움직이는 수동 운동범위까지 함께 감소하는 것이 핵심 단서이다. 회전근개 충돌이나 견봉하 윤활낭염에서는 통증 때문에 능동 운동이 제한될 수 있지만, 이러한 전반적인 수동 운동제한은 덜 전형적이다. 견관절 골관절염도 운동제한을 일으킬 수 있으나, 이 케이스의 당뇨병과 뚜렷한 관절 강직은 유착성 관절낭염을 가장 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문의 본문·선지·정답 및 한국어 해설을 개별 대조하였다. 원정답과 케이스를 유지하고 잘못 연결된 해설을 교체하였다.
- 공식/학회 근거: https://www.orthopt.org/uploads/content_files/ICF/Updated_Guidelines/Shoulder_Guidelines_AdhesiveCapsulitis_JOSPT_May_2013.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000960
