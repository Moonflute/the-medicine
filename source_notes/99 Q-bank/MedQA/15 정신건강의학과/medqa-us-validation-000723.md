---
type: qbank
schema_version: 1
id: medqa-us-validation-000723
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:08df4dc998cce050c1fe9f50add84f8d502449ca75e0e25f001afa18b08ac738
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "품행장애"
  - "공격적 행동"
  - "방화"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2SiO2WiSDsnqXslaAgKENvbmR1Y3QgRGlzb3JkZXIpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 남아가 통제되지 않는 행동, 수업 중 폭발, 싸움, 동물을 불태우려 한 행동, 반복적인 방화 위협으로 진료를 받으러 왔다. 알코올과 코카인을 시도한 적은 있으나 다른 불법 약물은 부인한다. 가장 가능성 높은 진단은?

## 선택지

A. 반사회적 인격장애
B. 주의력결핍 과잉행동장애
C. 품행장애
D. 약물남용

## 해설

폭력·동물 학대·방화 등 타인의 권리와 중대한 규범을 침해하는 반복 행동은 품행장애를 시사한다. 지난 12개월의 세 기준과 지난 6개월의 적어도 한 기준 등 전체 요건을 확인하며 모든 행동이 12개월 내내 지속해야 한다는 뜻은 아니다. 15세이므로 반사회성 인격장애로 진단하지 않는다. 물질 사용 경험도 평가하되 그것만으로 지속 행동 문제를 급성 중독 탓으로 돌리지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000723

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 품행장애에 반드시 12개월 지속이 필요하다는 오류 및 선지 문자 제거. 원문 알코올·코카인 시도 정보 복원.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://publications.aap.org/pediatrics/article/155/6/e2024069880/201805/Reconsidering-the-Diagnosis-of-Conduct-Disorder-to
