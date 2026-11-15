---
type: qbank
schema_version: 1
id: medqa-us-train-001930
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c3542dcd32f05ff6f0134940afe836822fb12bd5c5339d5c283352885ff447ad
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "Volkmann ischemic contracture"
  - "compartment syndrome"
  - "ischemic muscle contracture"
question_type: diagnosis
related_disease_slugs:
  - MTEg7Jm46rO8L-uzteqwlSDqtaztmo0g7Kad7ZuE6rWwIChBYmRvbWluYWwgQ29tcGFydG1lbnQgU3luZHJvbWUpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

상완골 골절로 석고 고정을 했던 35세 남성이 한 달 뒤 왔다. 손목과 손가락이 굽은 채 굳어 타인이 펴 주어도 잘 펴지지 않는다. 고정 직후에는 전완 통증이 심했다. 가장 가능성 높은 진단은?

## 선택지

A. 볼크만 허혈성 구축
B. 뒤피트랑 구축
C. 손목터널증후군
D. 뒤뼈사이신경 마비

## 해설

급성 허혈로 전완 굴곡근이 손상되면 수주 뒤 고정된 손목·손가락 굴곡 구축이 남을 수 있다. 뒤뼈사이신경 마비는 능동 신전을 어렵게 하지만 초기부터 고정된 수동 신전 제한을 설명하지 못한다. 새로 악화되는 통증이나 혈류 저하는 별도의 응급 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 한 달 후 확립된 Volkmann 허혈성 구축을 급성 구획증후군과 혼동하지 않도록 해설 정정. 원정답 A 유지.
- 공식/학회 근거: https://www.aaos.org/acscpg2025
- 공식/학회 근거: https://medlineplus.gov/ency/article/001221.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001930
