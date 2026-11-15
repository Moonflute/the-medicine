---
type: qbank
schema_version: 1
id: medqa-us-train-004451
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a308eacf433913ee8641ed27708829ee7bd0b2e33bb8d01a9a7350c12d30f700
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "폰 빌레브란트병"
  - "점막피부 출혈"
  - "혈소판 수 정상 출혈"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2PsCDruYzroIjruIzrnoDtirjrs5EgKHZvbiBXaWxsZWJyYW5kIERpc2Vhc2UsIHZXRCkubWQ
question_type: investigation
difficulty: standard
answer: D
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

평소 코피와 잇몸 출혈이 있고 초경 이후 월경량이 많은 환자다. 혈소판 수, PT와 aPTT는 정상이다. 폰빌레브란트병이 의심될 때 시행할 초기 특이검사 조합은?

## 선택지

A. PT와 aPTT만 다시 측정
B. 항혈소판항체와 D-이합체
C. 혈소판 응집검사만 시행
D. 폰빌레브란트인자 항원·혈소판 결합 활성과 제VIII인자 활성

## 해설


폰빌레브란트병의 초기 평가는 항원, 활성과 제VIII인자 검사다. 경증에서는 PT·aPTT가 정상일 수 있어 정상 선별검사만으로 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004451 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정상 혈소판 수의 점막출혈에서 기능 평가 D를 유지하되 이것이 vWD 포함 모든 경우의 단독 첫 확진검사라는 과장 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7805326/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004451
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7805340/
