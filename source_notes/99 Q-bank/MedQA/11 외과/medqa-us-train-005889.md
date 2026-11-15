---
type: qbank
schema_version: 1
id: medqa-us-train-005889
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:202b94f7c9d168ad11ef24870b7050b873d1f1460974884a7a83d51c89df2fa4
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "당뇨병성 족부궤양"
  - "신경병성 궤양"
  - "변연절제"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: standard
answer: C
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

당뇨병 환자가 감각이 떨어진 발의 앞쪽 발바닥에 만성 궤양이 있다. 감염이나 허혈은 없고, 매일 상처를 관찰해야 할 이유나 보행 보조기 금기도 없다. 궤양 부위의 압력을 줄이는 데 우선 선택할 방법은?

## 선택지

A. 일반 운동화에 거즈만 댄다
B. 탈착식 발목 높이 보조기를 먼저 선택한다
C. 비탈착식 무릎 높이 압력분산 장치를 적용한다
D. 정맥 항생제를 먼저 투여해 걷게 한다

## 해설


감염·허혈이 없고 장치를 견딜 수 있는 발바닥 앞쪽의 신경병성 궤양에는 비탈착식 무릎 높이 장치가 우선이다. 전접촉 석고나 비탈착식으로 적용한 무릎 높이 보조기를 쓰며 상처 관리와 혈당 조절도 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005889 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 괴사/슬러프·굳은살 제거의 근거와 offloading·심부손상 평가를 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://iwgdfguidelines.org/wp-content/uploads/2023/07/IWGDF-Guidelines-2023.pdf
- https://www.idsociety.org/practice-guideline/diabetic-foot-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005889
- https://pubmed.ncbi.nlm.nih.gov/37226568/
