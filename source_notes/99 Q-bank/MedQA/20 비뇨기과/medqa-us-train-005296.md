---
type: qbank
schema_version: 1
id: medqa-us-train-005296
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5bbb508f9902bda2f2d70dca16ca20096b15e0509e140d130c9fc0dc8f0c2b2e
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "신세포암"
  - "신장 종괴"
  - "비만 위험인자"
question_type: prevention
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-y9qe2MpeyVlCAoUmVuYWwgQ2VsbCBDYXJjaW5vbWEpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남자가 한 달 동안 왼쪽 옆구리 충만감과 통증으로 내원했다. 소변에 3+ 혈액과 65개/고배율시야 적혈구가 있고 BMI는 32 kg/m²이다. CT에서 왼쪽 신장에서 발생해 신정맥을 압박하는 큰 고형 종괴가 보인다. 가장 가능성 높은 진단에 대한 위험인자는?

## 선택지

A. 아토르바스타틴
B. 백인 인종
C. 린치증후군
D. 비만

## 해설

신장 기원 고형 종괴와 혈뇨·정계정맥류는 신세포암을 시사하며 BMI 32인 이 환자에서 D, 비만은 알려진 위험요인이다. Lynch 증후군은 특히 상부요로 요로상피암과 연관되어 이 신장 실질 종괴의 대표 위험인자와 구별된다. 원문은 신정맥 압박(impingement)을 서술하며 이를 확정된 정맥 종양 침범으로 바꾸지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문의 BMI 32 누락을 복원하고 신정맥 압박을 침범으로 바꾼 번역을 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005296
