---
type: qbank
schema_version: 1
id: medqa-us-train-008190
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c6b73bf881d5cc68e0b13b43d7159bb5dc28690e9be3658fa6deae14e57f495c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "ischemic colitis"
  - "colonoscopy"
  - "colonic ischemia evaluation"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tl4jtmIjshLEg64yA7J6l7Je8IChJc2NoZW1pYyBDb2xpdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: A
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
---

# MedQA US 임상문제

## 문제

65세 남성이 12시간 전 시작된 왼쪽 아랫배 통증과 혈성 설사로 입원했다. 조영 CT에서 좌측 결장 일부의 벽이 두껍지만 자유공기나 장벽 내 가스는 없다. 활력은 안정적이고 복막 자극 소견은 없다. 허혈성 대장염을 확인할 검사는?

## 선택지

A. 48시간 이내 최소 송기로 시행하는 제한적 하부 내시경
B. 바륨 관장
C. 캡슐내시경
D. 즉시 탐색 개복술

## 해설


괴사·천공이나 복막염이 없고 안정적이면 조기 하부 내시경으로 허혈 소견을 확인할 수 있다. 송기를 최소화하고 병변의 원위 경계에서 멈추며 필요시 조직을 채취한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008190 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 임상진단만 한 허혈성 대장염에서 안정 후 내시경 확인 A 유지. 모든 회복환자에게 퇴원 직전 반복검사를 의무화한다는 설명을 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://sites.duke.edu/gifellowship/files/2021/07/ACG-Clinical-Guideline-Colon-Ischemia-CI.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008190
- https://gi.org/guideline/epidemiology-risk-factors-patterns-of-presentation-diagnosis-and-management-of-colon-ischemia/
