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

19세 여성이 진료를 시작하기 위해 일차진료를 받으러 왔다. 급성 증상이나 걱정되는 점은 없다. 자세히 묻자 코피가 자주 나고 이를 닦은 뒤 잇몸에서도 약간 피가 나는 경우가 많다고 한다. 보통 월경량도 많아 하루에 탐폰 8개를 적실 정도이다. 심각한 출혈이 있었던 적이나 수혈을 받은 적은 없다. 신체검사는 정상이다. 전혈구검사에서 혈소판 수는 정상이고 경한 빈혈이 있다. 다음 중 관리에서 가장 적절한 단계는 무엇인가?

## 선택지

A. 골수 생검
B. 코르티코스테로이드 시작
C. 정맥 면역글로불린 시작
D. 혈소판 응집검사 시행

## 해설


정상 혈소판 수에도 점막출혈·과다월경이 반복되어 혈소판/vWF 관련 일차지혈 장애를 의심한다. 선택지 중 혈소판 응집검사 D는 이런 기능 이상 평가에 가장 관련된다. 실제로는 vWF 항원·활성·VIII 및 출혈 병력 등과 단계적으로 평가하고 응집검사 하나만을 모든 환자의 가장 민감한 첫 검사나 vWD 배제법으로 보지 않는다. 원인 확정 없이 ITP 치료용 steroid/IVIG 또는 골수생검부터 하는 선택은 맞지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004451 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정상 혈소판 수의 점막출혈에서 기능 평가 D를 유지하되 이것이 vWD 포함 모든 경우의 단독 첫 확진검사라는 과장 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7805326/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004451
