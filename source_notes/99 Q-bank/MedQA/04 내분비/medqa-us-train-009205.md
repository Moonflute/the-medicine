---
type: qbank
schema_version: 1
id: medqa-us-train-009205
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5d1e8e8e91f93cb8081938aff696ab00b5591f984bac20c9f5a19b051e467cc3
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "lithium toxicity"
  - "리튬 중독"
  - "hemodialysis"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-umrO2KrCDspJHrj4UgKExpdGhpdW0gUG9pc29uaW5nKS5tZA
question_type: management
difficulty: complex
answer: B
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PeHljb2RvbmUubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
---

# MedQA US 임상문제

## 문제

리튬을 장기간 복용하던 환자가 급성 신손상과 함께 심한 의식저하를 보인다. 리튬을 중단하고 기도 보호 및 수액 치료를 시작했다. 중증 리튬 중독에서 리튬 제거를 위해 추가할 치료는?

## 선택지

A. 활성탄 반복 투여
B. 간헐적 혈액투석
C. 날록손 지속 주입
D. 정맥 중탄산나트륨으로 소변 알칼리화

## 해설


중증 리튬 중독에 의식저하가 있으면 체외 제거를 신속히 검토한다. 간헐적 혈액투석이 우선 방식이며 활성탄은 리튬을 흡착하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009205 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 리튬6.8과 신경학적 독성/의식저하에서 수액 후 혈액투석 B는 EXTRIP 적응증에 부합.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.extrip-workgroup.org/lithium

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009205
