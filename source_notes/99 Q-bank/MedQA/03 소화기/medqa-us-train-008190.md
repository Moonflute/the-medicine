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

허혈성 대장염으로 입원한 지 3일 된 65세 남자가 혈성 설사와 압통을 동반한 복통에서 회복되었다. 현재는 상태가 좋고 퇴원을 원한다. 제2형 당뇨병을 15년째 앓고 있으며 금식, 정맥수액, 항생제, 인슐린을 투여 중이다. 활력징후와 복부검사는 정상이고 혈당을 포함한 검사도 정상이다. 가장 적절한 다음 처치는?

## 선택지

A. 대장내시경
B. 한 달 후 추적 진료를 전제로 퇴원
C. 복강경검사
D. 개복술

## 해설


원문은 아직 임상적으로 허혈성 대장염을 진단한 상황이다. 복막자극·괴사 단서가 없는 안정 환자에서는 내시경(A)으로 진단과 범위를 확인할 수 있으며 가급적 초기48시간 이내 시행하는 원칙이 있다. 최소한의 송기와 필요한 범위만 검사한다. 이미 확진되어 호전된 모든 환자에게 퇴원 전 반복 내시경을 일률적으로 요구한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008190 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 임상진단만 한 허혈성 대장염에서 안정 후 내시경 확인 A 유지. 모든 회복환자에게 퇴원 직전 반복검사를 의무화한다는 설명을 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://sites.duke.edu/gifellowship/files/2021/07/ACG-Clinical-Guideline-Colon-Ischemia-CI.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008190
