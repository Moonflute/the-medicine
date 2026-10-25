---
type: qbank
schema_version: 1
id: medqa-us-train-004449
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b18262ce4d5326b5b1335c38da842bc8e175a1bc403fd097e44008f53e0c35c3
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "원발성 중추신경계 림프종"
  - "AIDS"
  - "Epstein-Barr 바이러스"
question_type: diagnosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
  - MDkg7ZiI7JWhL-umvO2UhOyihSAoTHltcGhvbWEpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성이 몇 주 동안 지속된 두통, 현기증과 성격 변화 때문에 응급실에 왔다. 14년 전 HIV 진단을 받고 당시 항레트로바이러스 치료를 시작했다. 한 달 전 의무기록에 따르면 약을 불규칙하게 복용했다. 그 후 항레트로바이러스제와 트리메토프림-설파메톡사졸을 규칙적으로 복용하고 있다. 활력징후는 정상 범위이다. 신경학적 검사에서 운동실조와 무감동이 보인다. 간이정신상태검사 점수는 30점 만점에 15점이다. 검사 결과는 다음과 같다.
헤모글로빈 12.5 g/dL
백혈구 8,400/mm3
분절 호중구 80%
호산구 1%
림프구 17%
단핵구 2%
CD4+ T 림프구 90/μL
혈소판 328,000/mm3
조영증강 뇌 MRI에서 뇌량을 침범하는 직경 4.5cm의 단일 고리 조영증강 병변이 보인다. 요추천자 후 뇌척수액검사에서 경한 세포증가가 있고 Epstein-Barr 바이러스 DNA PCR이 양성이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. AIDS 치매
B. 중추신경계 림프종
C. 진행성 다발성 백질뇌병증
D. 교모세포종

## 해설

CD4 90/μL인 HIV 환자에서 뇌량을 침범하는 큰 단일 조영증강 병변과 CSF EBV DNA는 원발성 중추신경계 림프종(B)을 강하게 시사한다. AIDS 관련 림프종은 괴사로 고리조영을 보일 수 있다. PML은 대개 백질 탈수초 병변으로 뚜렷한 종괴성 고리조영과 다르고, 교모세포종도 뇌량을 침범할 수 있지만 면역저하와 EBV 단서가 B를 지지한다. PCR 양성 하나가 모든 상황에서 확진을 뜻하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. EBV 양성 CSF와 면역저하의 단일 뇌량 병변은 PCNSL B를 강하게 지지하나 모든 고리병변의 가장 흔한 원인 또는 PCR만으로 확진이라고 일반화하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004449
