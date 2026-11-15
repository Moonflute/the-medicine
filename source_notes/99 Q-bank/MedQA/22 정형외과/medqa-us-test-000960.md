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
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

당뇨병이 있는 65세 남성이 수개월간 어깨가 굳어 머리를 빗기 어렵다. 직접 움직일 때뿐 아니라 검사자가 움직여도 특히 바깥돌림이 어렵다. 단순 X선상 관절염은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 유착성 관절낭염
B. 극상근 단독 파열
C. 위팔두갈래근 힘줄염
D. 경추 신경근병증

## 해설

능동·수동 운동이 모두 제한되고 특히 바깥돌림이 줄면 유착성 관절낭염에 합당하다. 회전근개 단독 파열에서는 수동 범위가 비교적 보존된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문의 본문·선지·정답 및 한국어 해설을 개별 대조하였다. 원정답과 케이스를 유지하고 잘못 연결된 해설을 교체하였다.
- 공식/학회 근거: https://www.orthopt.org/uploads/content_files/ICF/Updated_Guidelines/Shoulder_Guidelines_AdhesiveCapsulitis_JOSPT_May_2013.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000960
