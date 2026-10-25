---
type: qbank
schema_version: 1
id: medqa-us-train-004556
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bef64cd5f94de75da0816de8ee6dc8432e6379a23fc400cc406feeef9d1d9e8c
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "치과 불안"
  - "최소 진정"
  - "치아 우식"
question_type: other
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 남성이 구강 통증으로 가정의학과에 내원했다. 왼쪽 위쪽 어금니의 통증이 점점 심해지고 있다고 한다. 통증은 1주 전 시작되어 계속 악화되었다. 과거력으로 생활습관 조절 중인 고혈압과 제2형 당뇨병이 있다. 혈압은 124/86 mm Hg, 심박수는 분당 86회, 호흡수는 분당 14회이다. 신체검사에서 왼쪽 위 두 번째 어금니가 황흑색으로 변색되어 있다. 충치의 추가 치료를 위해 치과로 의뢰하기로 했다. 치과 치료를 받은 적이 없어 어떤 진정법을 사용할지 걱정한다. 다음 중 경구 또는 정맥 항불안제만 사용하는 마취 형태는 무엇인가?

## 선택지

A. 최소 진정
B. 경막외 마취
C. 심부 진정
D. 부위 마취

## 해설

보기 중 항불안 목적의 약물만 사용한다는 의도는 최소진정(A)에 가깝다. 정확한 정의는 언어 명령에 정상적으로 반응하고 기도반사·환기·심혈관 기능이 보존되는 상태이다. 같은 경구/정맥 약물도 용량과 환자 반응에 따라 더 깊은 진정을 만들 수 있다. 진정은 치과 시술 부위의 국소 진통/마취와 별개의 개념이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Minimal sedation A 유지. 진정 수준을 약물 경로/단일 약제만으로 정의한 오류 교정.
- 공식/학회 근거: https://www.asahq.org/standards-and-practice-parameters/statement-on-continuum-of-depth-of-sedation-definition-of-general-anesthesia-and-levels-of-sedation-analgesia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004556
