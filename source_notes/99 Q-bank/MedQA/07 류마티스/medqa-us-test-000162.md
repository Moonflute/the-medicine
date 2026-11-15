---
type: qbank
schema_version: 1
id: medqa-us-test-000162
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:6f4b0fd5fc49d8599493881c5d1634e8d7c47ebabcda0dfb153ed1fbf8807d48
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "쇼그렌증후군"
  - "비호지킨 림프종"
  - "항-Ro 항체"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yHvOq3uOugjCDspp3tm4TqtbAgKFNqw7ZncmVuJ3MgU3luZHJvbWUpLm1k
  - MDkg7ZiI7JWhL-u5hO2YuOyngO2CqCDrprztlITsooUgKE5vbi1Ib2Rna2luIEx5bXBob21hKS5tZA
question_type: diagnosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
---

# MedQA US 임상문제

## 문제

쇼그렌증후군이 있는 51세 여성의 오른쪽 이하선이 2개월간 점점 커졌다. 단단하고 통증이 없으며 목 림프절이 만져지고 체중이 줄었다. 우선 배제해야 할 합병증은?

## 선택지

A. 위선암
B. 침샘을 침범한 B세포 림프종
C. 침윤성 유방암
D. 폐선암

## 해설


쇼그렌증후군에서 새로 생긴 지속적 비대칭 침샘 비대와 림프절 비대는 림프종의 경고 소견이다. 단순 건조증이나 이하선염으로 넘기지 말고 영상 및 조직검사를 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-000162` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 안구·구강 건조와 anti-Ro/La 양성의 쇼그렌, 림프종 위험 증가 B의 연결이 원문·해설과 일치. 치료 최신성 평가 아님.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000162
- https://doi.org/10.1093/rheumatology/keae152
